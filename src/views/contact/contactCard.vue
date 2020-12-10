<template>
    <div class="contactCard">
        <div class="head"><b>{{data.title}}</b><span>{{$t('sidebar.contact')}}</span></div>
        <div class="profit">
            <div class="percent flex">
                <em style="font-size:58px ">{{data.pid===5?'20-50':data.rate}}</em>
                <div class="percent-right">
                    <b>%</b>
                    <span v-if="data.pid!==2">每24h</span>
                </div>
            </div>
            <div class="desc">
                <!--<span v-if="data.pid===2">{{data.d}} days</span>-->
                <!--随本金发放 锁定$-->
                <span>{{data.pid===0||data.pid===1?"每24小时发放":`${$t('contact.lock',{day:data.d})}`}}
</span>
            </div>
        </div>
        <div class="capital">
            <!--投资金额-->
            <div class="tit">{{$t('contact.investMoney')}}</div>
            <div class="amount">

                <div>
                    <el-input placeholder="请输入" type="text" v-model="amount">
                        <span slot="suffix" class="suffix">TRX</span>
                    </el-input>
                    <div class="tip">限额100~100000TRX</div>

                </div>

                <!--请选择-->
                <!--<el-select v-model="payType" :placeholder="$t('contact.choose')" v-else>-->
                <!--<el-option-->
                <!--v-for="(item,index) in moneyArr"-->
                <!--:key="item"-->
                <!--:label="item"-->
                <!--:value="item">-->
                <!--</el-option>-->
                <!--</el-select>-->
            </div>
        </div>
        <!--获取资金-->
        <el-button type="primary" style="width:100%;" :loading="loading" :disabled="loading"
                   @click="deposit">{{$t('contact.getMoney')}}
        </el-button>

    </div>
</template>
<script>
    import TrxMixin from '../../mixin/trx'

    export default {
        data() {
            return {
                loading: false,
                money: '666',
                amount: 100,
                moneyArr: [100, 500, 1000, 5000, 10000, 50000, 100000],
                min:100,
                max:100000,
                pid: 0,
                a3: false,
                active: false,
                referrer: '',
                prv: 0,
                now: 0

            }
        },
        mixins: [TrxMixin],

        props: {
            data: {
                type: Object,
                default: {}
            },
            userData: {
                type: Object,
                default: undefined
            }
        },
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    this.contract = tronWeb.contract(this.ABI, tronWeb.address.toHex(this.contract_address))
                    this.loadData()
                    //if (this.data.pid === 2) this.allow()
                })
            },
            'data.pid'(v, o) {
                this.pid = v


            }

        },

        methods: {
            a3Allow() {
                if (this.pid === 2) {
                    debugger
                    return !this.a3
                } else {
                    return this.loading
                }
            },

            loadData() {
                this.getTronWeb().then(tronWeb => {
                    this.contract.players(this.tron.account).call().then(res => {
                        this.active = res['active']
                        this.referrer = res['referrer']
                    })
                })

            },

            async allow() {
                const res = await  this.contract.getA3Status().call()

                if (!res) {
                    this.a3 = false
                    return
                }

                const prv = await this.contract.a3Valve().call()

                const global = await this.contract.getGlobalStats().call()

                const p = tronWeb.fromSun(prv['previousTotalSupply'])
                const now = tronWeb.fromSun(global['stats'][1])

                if (((p - now) / p).toFixed(4) > 0.12) {
                    this.a3 = true
                }

            },
            async deposit() {

                if(this.amount<this.min){
                    this.$message({
                        message: '下注限额为'+this.min+"-"+this.max,
                        type: 'error'
                    })
                    return ;
                }


                if(this.amount>this.max){
                    this.$message({
                        message: '下注限额为'+this.min+"-"+this.max,
                        type: 'error'
                    })
                    return ;

                }
                if(this.amount%100>0){
                    this.$message({
                        message: '金额必须是100的整数倍',
                        type: 'error'
                    })
                    return ;

                }



                if (this.active) {
                    this.ref = tronWeb.address.fromHex(this.referrer)
                }

                this.loading = true
                this.getTronWeb(this.ref || this.defRef, this.data.pid).then(tronWeb => {
                    this.contract.makeDeposit(this.ref || this.defRef, this.data.pid).send({
                        callValue: tronWeb.toSun(this.amount)
                    }).then(tx => {
                        this.loading = false
                        this.$message({
                            message: 'Transaction was successfully sent. Wait confirming..',
                            type: 'success'
                        })
                        this.awaitTx(tx).then(() => {
                            // if(auto_upline) fetch('/auto_upline/?address=' + this.tron.account + '&upline=' + this.upline);
                            //this.updateInfo();
                        })
                    }).catch(e => {
                        this.loading = false

                    })
                }).catch(e => {
                    this.loading = false
                })
            }
        }
    }
</script>
<style lang="scss">
    @import "~@/styles/contactCard.scss";
</style>

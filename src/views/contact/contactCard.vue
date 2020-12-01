<template>
    <div class="contactCard">
        <div class="head"><b>{{data.title}}</b><span>{{$t('sidebar.contact')}}</span></div>
        <div class="profit">
            <div class="percent"><span style="font-size:58px ">{{data.pid===5?'20':data.rate}}</span>%</div>
            <div class="desc">
                <span>{{data.d}} days</span>
                <!--随本金发放 锁定$-->
                <span>{{data.pid===0||data.pid===1||data.pid===2||data.pid===5?`${$t('contact.lock',{day:data.d})}`:$t('contact.Issued')}}
</span>
            </div>
        </div>
        <div class="capital">
            <!--投资金额-->
            <div class="tit">{{$t('contact.investMoney')}}</div>
            <div class="amount">

                <div v-if="data.pid===5">
                    <el-input placeholder="请输入" type="text" v-model="payType">
                        <span slot="suffix" class="suffix">AIS</span>
                    </el-input>
                    <div class="tip">限额100~100000AIS</div>

                </div>

                <!--请选择-->
                <el-select v-model="payType" :placeholder="$t('contact.choose')" v-else>
                    <el-option
                            v-for="(item,index) in moneyArr"
                            :key="item"
                            :label="item"
                            :value="item">
                    </el-option>
                </el-select>
            </div>
        </div>
        <el-button v-if="!allowance" type="primary" style="width:100%;" :loading="loading" :disabled="loading"
                   @click="approve">授权
        </el-button>
        <!--获取资金-->
        <el-button v-else type="primary" style="width:100%;" :loading="loading" :disabled="data.pid===2?!a3:loading"
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
                payType: 100,
                moneyArr: [100, 500, 1000, 5000, 10000, 50000, 100000],
                pid: 0,
                a3: false,
                active: false,
                referrer: '',
                prv:0,
                now:0,
                allowance:false,
                allowAmount:100000000

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
                    this.tokenContract = tronWeb.contract(this.TABI, tronWeb.address.toHex(this.token_address))

                    this.loadData();
                    if (this.data.pid === 2) this.allow()
                })
            },
            'data.pid'(v, o) {
                this.pid = v

                if (v === 2) {
                    this.allow()
                }
            },

        },

        methods: {
            a3Allow() {
                if (this.pid === 2) {
                    return !this.a3
                } else {
                    return this.loading
                }
            },

            loadData() {
                this.getTronWeb().then(tronWeb => {
                    this.contract.players(this.tron.account).call().then(res => {
                        this.active = res["active"];
                        this.referrer = res["referrer"];
                    })
                })


                this.loadAllowance();



            },

            loadAllowance(){
                this.getTronWeb().then(tronWeb => {
                    this.tokenContract.allowance(this.tron.account,this.contract_address).call().then(res => {
                        let allow=parseInt(res)
                        allow===0?this.allowance=false:this.allowance=true
                    })
                })
            },

            async allow() {
                const res = await  this.contract.getA3Status().call()

                if(!res){
                    this.a3=false
                }else{
                    this.a3=true
                }

               // const prv=await this.contract.a3Valve().call();
               //
               //  const global=await this.contract.getGlobalStats().call();
               //
               //  const  p = prv['previousTotalSupply'])
               //  const  now = global['stats'][1])
               //
               //  if(((p-now)/p).toFixed(4)>0.12){
               //      this.a3=true;
               //  }

            },
            approve(){
                this.getTronWeb().then(tronWeb => {
                    this.tokenContract.approve(this.contract_address,tronWeb.toHex(this.allowAmount* Math.pow(10,this.token.decimals)) ).send({
                        callValue: 0
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
            },
            async deposit() {

                if(this.data.pid===2){
                    const res = await  this.contract.getA3Status().call()

                    if(!res){
                        this.$message({
                            message: 'A3 Closed ',
                            type: 'error'
                        })
                        return;
                    }

                }


                if (this.pid === 5) {


                    if (this.payType < 100) {
                        this.$message({
                            message: '金额必须大于等于100TRX ',
                            type: 'error'
                        })
                        return;
                    }
                    if (this.payType > 100000) {
                        this.$message({
                            message: '金额必须小于等于100000TRX ',
                            type: 'error'
                        })
                        return;
                    }
                }

                if (this.pid === 3 || this.pid === 4) {
                    const btotal = this.userData['stats'][2]/Math.pow(10,this.token.decimals)
                    const bnow = this.userData['stats'][3]/Math.pow(10,this.token.decimals)
                    const ctotal = this.userData['stats'][4]/Math.pow(10,this.token.decimals)

                    if ((parseFloat(btotal) + parseFloat(bnow)) > parseFloat(ctotal)) {
                        this.$message({
                            message: 'B合约投资金额不能大于C合约累计投资',
                            type: 'error'
                        })
                        return;
                    }

                }

                if (this.active) {
                    this.ref = tronWeb.address.fromHex(this.referrer)
                }

                this.loading = true
                const type = this.pid === 5 ? 0 : this.moneyArr.indexOf(this.payType)

                console.log("======",tronWeb.toHex(this.payType* Math.pow(10,this.token.decimals)))
                this.getTronWeb(this.ref || this.defRef, this.data.pid, type,  tronWeb.toHex(this.payType* Math.pow(10,this.token.decimals)) ).then(tronWeb => {
                    this.contract.makeDeposit(this.ref || this.defRef, this.data.pid, type,tronWeb.toHex(this.payType* Math.pow(10,this.token.decimals))).send({
                        callValue: 0
                    }).then(tx => {
                        this.loading = false
                        this.$message({
                            message: 'Transaction was successfully sent. Wait confirming..',
                            type: 'success'
                        })
                        this.awaitTx(tx).then(() => {
                            setTimeout(()=>{
                                this.loadAllowance()
                            },1000)
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

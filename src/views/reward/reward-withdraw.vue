<template>
    <div class="reward-withdraw">
        <h4 class="name">{{name}}</h4>
        <div class="justify-between align-items-end">
            <div class="reward-val">
                <b class="primary mr-8">{{value}}</b>
                <span class="unit">TRX</span>
            </div>
            <el-button type="primary" :disabled="disable||loading|| value<=0" :loading="loading" @click="withdraw">{{$t('myContact.getReward')}}</el-button>
        </div>
    </div>
</template>
<script>
    import TrxMixin from '../../mixin/trx'
    import moment from 'moment'

    export default {
        name: 'RewardWithdraw',
        props: {
            type: {
                type: Number,
                default: 0
            },
            name: {
                type: String,
                default: ''
            },
            value: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                loading: false,
                disable:true,

            }
        },
        mixins: [TrxMixin],
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    this.contract = tronWeb.contract(this.ABI, tronWeb.address.toHex(this.contract_address))

                    this.loadData()
                })
            },
        },
        methods: {
            loadData(){
                this.contract.getPersonalStats(this.tron.account).call().then(res => {

                    const s13 = parseInt(res['stats'][13])

                    // if (s13 > 0 ) {
                    //     const d = new Date();
                    //     console.log("d.getTime()===", d.getTime())
                    //     //const t=(s13+4*60*60)-d.getTime()/1000
                    //     const t=(s13+5*60)-d.getTime()/1000
                    //
                    //     console.log("t==",t)
                    //
                    //     this.disable  = parseInt(t)>0;
                    // }

                    if(s13===0){
                        this.disable=false;
                        return;
                    }

                    let ttl = 4
                    const date = moment(s13 * 1000).add(ttl, 'h')
                    var now = moment()
                    return now < date

                    //
                    // let ttl = 5
                    // const date = moment(s13 * 1000).add(ttl, 'm')
                    // var now = moment()
                    // this.disable= now < date

                })
            },
            withdraw() {
                this.loading=true;

                if(this.type===0)  this.withdrawReferReward();
                if(this.type===1)  this.withdrawRecommend();
                if(this.type===2)  this.withdrawLuckyPrize();

            },

            //提取幸运奖
            withdrawLuckyPrize () {
                this.getTronWeb()
                    .then((tronWeb) => {
                        this.contract
                            .withdrawLuckyPrize()
                            .send({
                                callValue: 0
                            })
                            .then((tx) => {
                                this.loading = false

                                this.$message({
                                    message: 'Transaction was successfully sent. Wait confirming..',
                                    type: 'success'
                                })
                                this.awaitTx(tx).then(() => {
                                    // if(auto_upline) fetch('/auto_upline/?address=' + this.tron.account + '&upline=' + this.upline);
                                    setTimeout(() => {
                                        this.loadData()
                                    }, 3000)
                                })
                            })
                            .catch((e) => {
                                this.loading = false
                            })
                    })
                    .catch((e) => {
                        this.loading = false
                    })
            },



            //提取推荐排名奖
            withdrawRecommend () {
                this.getTronWeb()
                    .then((tronWeb) => {
                        this.contract
                            .withdrawRecommend()
                            .send({
                                callValue: 0
                            })
                            .then((tx) => {
                                this.loading = false

                                this.$message({
                                    message: 'Transaction was successfully sent. Wait confirming..',
                                    type: 'success'
                                })
                                this.awaitTx(tx).then(() => {
                                    // if(auto_upline) fetch('/auto_upline/?address=' + this.tron.account + '&upline=' + this.upline);
                                    setTimeout(() => {
                                        this.loadData()
                                    }, 3000)
                                })
                            })
                            .catch((e) => {
                                this.loading = false
                            })
                    })
                    .catch((e) => {
                        this.loading = false
                    })
            },



            //提取推荐奖
            withdrawReferReward () {
                this.getTronWeb()
                    .then((tronWeb) => {
                        this.contract
                            .withdrawReferReward()
                            .send({
                                callValue: 0
                            })
                            .then((tx) => {
                                this.loading = false

                                this.$message({
                                    message: 'Transaction was successfully sent. Wait confirming..',
                                    type: 'success'
                                })
                                this.awaitTx(tx).then(() => {
                                    // if(auto_upline) fetch('/auto_upline/?address=' + this.tron.account + '&upline=' + this.upline);
                                    setTimeout(() => {
                                        this.loadData()
                                    }, 3000)
                                })
                            })
                            .catch((e) => {
                                this.loading = false
                            })
                    })
                    .catch((e) => {
                        this.loading = false
                    })
            }


        }
    }
</script>
<style lang="scss" scoped>

    .el-button--primary {
       // box-shadow: 0px 11px 22px -6px rgba(255, 72, 38, 0.5);
        border-radius: 8px;
        width: 40%;


    }
    .el-button.is-disabled {
        color: #f4f4f5;
        background-color: #928b8b !important;;
        border-color: #928b8b !important;
    }
    .reward-val {
        .unit {
            font-family: PingFangTC-Semibold, PingFangTC;
            font-weight: 600;
            color: #666666;
            font-size: 1em;
        }
        b {
            font-size: 2em;
            font-family: Bahnschrift_Bold;
        }
    }
</style>

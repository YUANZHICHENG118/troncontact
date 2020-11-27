<!--我的合同-->
<template>
    <div class="myContactWrap">
        <el-row :gutter="30">
            <el-col
                    :xs="24"
                    :sm="12"
                    :md="12"
                    :lg="12"
                    v-for="(item, index) in myContact"
                    v-if="parseInt(item[8]) > 0"
            >
                <div class="myContactCard">
                    <div class="my-contact-card-head">
                        <!--合同-->
                        <span class="left">{{ type[parseInt(item[2])] }} {{$t('sidebar.contact')}}</span>
                        <!--合同编号-->
                        <span class="right">{{$t('myContact.code')}}：{{ parseInt(item[8]) }}</span>
                    </div>
                    <div class="my-contact-card-list">
                        <div class="my-contact-card-list-item">
                            <!--存款金额-->
                            <span class="left">{{$t('myContact.amount')}}</span>
                            <span class="right">{{ parseFloat(item[1]) / 1000000 }}AIS</span>
                        </div>
                        <div class="my-contact-card-list-item">
                            <!--本期利润-->
                            <span class="left">{{$t('myContact.profit')}}</span>
                            <span class="right">{{ parseFloat(item[3]) / 100 }}%</span>
                        </div>
                        <div class="my-contact-card-list-item">
                            <!--质押天数-->
                            <span class="left">{{$t('myContact.pledgeDay')}}</span>

                             <!--<span class="right">{{parseInt(item[4])/(24*60*60)}}</span>-->
                            <span class="right">{{parseInt(item[4])/(60)}}</span>

                        </div>
                        <div class="my-contact-card-list-item">
                            <!--获得收益-->
                            <span class="left">{{$t('myContact.gain')}}</span>
                            <span class="right">{{ (parseFloat(item[1]) / 1000000) *(parseFloat(item[3]) / 100/100) }}AIS</span>
                        </div>
                        <div class="my-contact-card-list-item">
                            <!--解冻日期-->
                            <span class="left">{{$t('myContact.ThawingDate')}}</span>
                            <span class="right">{{
                endDate(parseInt(item[5]), parseInt(item[4]) / (60))
              }}</span>
                        </div>
                        <div class="my-contact-card-list-item">
                            <!--可取款-->
                            <span class="left">{{$t('myContact.Withdrawable')}}</span>
                            <span class="right"><reward
                                    :pid="parseInt(item[0])"
                                    :contract="contract"
                                    :address="tron.account"
                            ></reward></span>
                        </div>
                    </div>
                    <div class="my-contact-card-btns">
                        <el-row :gutter="30">
                            <el-col :span="12">
                                <el-button
                                        type="warning"
                                        style="width: 100%;"
                                        :disabled="
                    chkReward() ||
                    loading1
                  "
                                        :loading="loading1"
                                        @click="withdrawReward(parseInt(item[0]))"
                                >{{$t('myContact.getReward')}}
                                </el-button>
                            </el-col>
                            <el-col :span="12" v-if="parseInt(item[2])===0||parseInt(item[2])===1||parseInt(item[2])===2||parseInt(item[2])===5">
                                <el-button
                                        type="primary"
                                        style="width: 100%;"
                                        :loading="loading2"
                                        :disabled="
                    chkReward() ||chkWithdraw(parseInt(item[5]), parseInt(item[4]) / (60)) ||
                    loading2
                  "
                                        @click="takeAwayDeposit(parseInt(item[0]))"
                                >{{$t('myContact.redeem')}}
                                </el-button>
                            </el-col>
                            <!--<el-col :span="8" v-if="parseInt(item[2])===5">-->
                                <!--<el-button-->
                                        <!--type="success"-->
                                        <!--style="width: 100%;"-->
                                        <!--:loading="loading3"-->
                                        <!--:disabled="chkWithdraw(parseInt(item[5]), parseInt(item[4]) / (24*60*60))"-->
                                        <!--@click="open(parseInt(item[0]))"-->
                                <!--&gt;{{$t('myContact.again')}}-->
                                <!--</el-button>-->
                            <!--</el-col>-->
                        </el-row>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-pagination
                background
                layout="prev, pager, next"
                @current-change="change"
                :total="50">
        </el-pagination>
    </div>
</template>
<script>
    import TrxMixin from '../../mixin/trx'
    import Reward from './reward'

    import moment from 'moment'

    let timer = undefined
    export default {
        components: {Reward},
        data() {
            return {
                myContact: [],
                type: ['A1', 'A2', 'A3', 'B1', 'B2', 'C'],
                withdraw: false,
                loading1: false, //提取奖励
                loading2: false, // 提取本金
                loading3: false, // 复投
                reward: undefined,
                lastWithdrawTime:0,
                page:0
            }
        },

        mixins: [TrxMixin],
        watch: {
            'tron.account'() {
                this.getTronWeb().then((tronWeb) => {
                    this.contract = tronWeb.contract(
                        this.ABI,
                        tronWeb.address.toHex(this.contract_address)
                    )
                    this.loadData()
                })
            }
        },
        beforeDestroy() {
            if (timer) {
                clearInterval(timer)
            }
        },
        mounted() {
            timer = setInterval(() => {
                this.loadData()
            }, 5000)
        },
        methods: {
            async getOutputReward(pid) {
                const d = await this.contract.outputReward(this.tron.account, pid).call()
                //this.$set(this.reward, 'pid'+pid,  parseFloat(d) / 1000000)
                return d
            },
            chkReward() {
                console.log("this.lastWithdrawTime",this.lastWithdrawTime)
                let ttl=1;
                const date = moment(this.lastWithdrawTime * 1000).add(ttl, 'm')
                var now = moment()
                return now < date
            },
            chkWithdraw(time, ttl) {

                const date = moment(time * 1000).add(ttl, 'm')
                var now = moment()
                return now < date
            },
            endDate(time, ttl) {
                const d = moment(time * 1000).add(ttl, 'm')
                return moment(d).format('YYYY-MM-DD HH:mm:ss')
            },

            open(pid) {
                this.$prompt('', this.$t('global.enturPrice'), {
                    confirmButtonText: this.$t('global.confirm'),
                    cancelButtonText: this.$t('global.cancel'),
                }).then(({ value }) => {

                    this.makeDepositAgain(pid,value)

                }).catch(() => {

                });
            },

            //复投
            makeDepositAgain(pid,value) {
                this.loading3 = true
                this.getTronWeb(pid)
                    .then((tronWeb) => {
                        this.contract
                            .makeDepositAgain(pid)
                            .send({
                                callValue: tronWeb.toSun(value)
                            })
                            .then((tx) => {
                                this.loading3 = false

                                this.$message({
                                    message: 'Transaction was successfully sent. Wait confirming..',
                                    type: 'success'
                                })
                                this.awaitTx(tx).then(() => {
                                    // if(auto_upline) fetch('/auto_upline/?address=' + this.tron.account + '&upline=' + this.upline);
                                     setTimeout(()=>{
                                         this.loadData()
                                     },3000)
                                })
                            })
                            .catch((e) => {
                                this.loading3 = false
                            })
                    })
                    .catch((e) => {
                        this.loading3 = false
                    })
            },
            //提取奖励
            withdrawReward(pid) {
                this.loading1 = true
                this.getTronWeb(pid)
                    .then((tronWeb) => {
                        this.contract
                            .withdrawReward(pid)
                            .send({
                                callValue: 0
                            })
                            .then((tx) => {
                                this.loading1 = false

                                this.$message({
                                    message: 'Transaction was successfully sent. Wait confirming..',
                                    type: 'success'
                                })
                                this.awaitTx(tx).then(() => {
                                    // if(auto_upline) fetch('/auto_upline/?address=' + this.tron.account + '&upline=' + this.upline);
                                    setTimeout(()=>{
                                        this.loadData()
                                    },3000)
                                })
                            })
                            .catch((e) => {
                                this.loading1 = false
                            })
                    })
                    .catch((e) => {
                        this.loading1 = false
                    })
            },

            //提取本金
            async takeAwayDeposit(pid) {
                let reward = await this.getOutputReward(pid)
                if (reward > 0) {
                    this.$message({
                        //请先提取奖励
                        message: this.$t('myContact.PleaseWithdraw'),
                        type: 'error'
                    })
                    return
                }
                this.loading2 = true
                this.getTronWeb(pid)
                    .then((tronWeb) => {
                        this.contract
                            .takeAwayDeposit(pid)
                            .send({
                                callValue: 0
                            })
                            .then((tx) => {
                                this.loading2 = false

                                this.$message({
                                    message: 'Transaction was successfully sent. Wait confirming..',
                                    type: 'success'
                                })
                                this.awaitTx(tx).then(() => {
                                    setTimeout(()=>{
                                        this.loadData()
                                    },3000)
                                })
                            })
                            .catch((e) => {
                                this.loading2 = false
                            })
                    })
                    .catch((e) => {
                        this.loading2 = false
                    })
            },

            change(p){
               this.page=p-1;
               this.loadContract()
            },

            loadContract(){
                this.getTronWeb().then((tronWeb) => {
                    this.contract
                        .getDeposits(this.tron.account,this.page)
                        .call()
                        .then((res) => {
                            let i = 0
                            let j = 0

                            let arr = new Array()

                            res.deposits.map((item, index) => {
                                if (index % 10 === 0) {
                                    if (index > 0) i++
                                    j = 0
                                    arr[i] = new Array()
                                } else {
                                    j++
                                }

                                arr[i][j] = item
                            })

                            // arr.forEach(async (item,index)=>{
                            //     if(parseInt(item[8])>0){
                            //          //item[9]=await this.getOutputReward(parseInt(item[0]))
                            //         item.push(await this.getOutputReward(parseInt(item[0])))
                            //     }
                            //
                            // })

                            //console.log("arr===",arr)

                            this.myContact = arr
                        })
                })
            },

            loadData() {
                this.getTronWeb().then(tronWeb => {
                    this.contract.getLastWithdrawTime(this.tron.account).call().then(res => {
                        // 最后提取时间
                        this.lastWithdrawTime = parseInt(res["withdrawTime"])
                    })
                })

                this.loadContract()
            },
            changeCurrent(val) {
                this.current = val
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "~@/styles/myContact.scss";
    .my-contact-card-btns .is-disabled {
        color: #f4f4f5;
        background-color: #999;
        border-color: #999;
    }
    .my-contact-card-btns .is-disabled:hover {
        color: #f4f4f5;
        background-color: #999;
        border-color: #999;
    }
</style>

<!--我的合同-->
<template>
    <div class="myContactWrap">
        <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" v-for="(item,index) in myContact" v-if="parseInt(item[8])>0">
                <div class="myContactCard">
                    <div class="my-contact-card-head">
                        <span class="left">{{type[parseInt(item[2])]}}合同</span>
                        <span class="right">合同编号：{{parseInt(item[8])}}</span>
                    </div>
                    <div class="my-contact-card-list">
                        <div class="my-contact-card-list-item">
                            <span class="left">存款金额</span>
                            <span class="right">{{parseFloat(item[1])/1000000}}TRX</span>
                        </div>
                        <div class="my-contact-card-list-item">
                            <span class="left">本期利润</span>
                            <span class="right">{{parseFloat(item[3])/100}}%</span>
                        </div>
                        <div class="my-contact-card-list-item">
                            <span class="left">质押天数</span>
                            <!--
                                                        <span class="right">{{parseInt(item[4])/(24*60*60)}}</span>
                            -->
                            <span class="right">{{parseInt(item[4])/(60)}}</span>

                        </div>
                        <div class="my-contact-card-list-item">
                            <span class="left">总奖励金额</span>
                            <span class="right">{{parseFloat(item[7])/1000000}}TRX</span>
                        </div>
                        <div class="my-contact-card-list-item">
                            <span class="left">解冻日期</span>
                            <span class="right">{{endDate(parseInt(item[5]),parseInt(item[4])/(60))}}</span>
                        </div>
                        <div class="my-contact-card-list-item">
                            <span class="left">可取款</span>
                            <span class="right"><reward :pid="parseInt(item[0])" :contract="contract" :address="tron.account"></reward></span>
                        </div>
                    </div>
                    <div class="my-contact-card-btns">
                        <el-row :gutter="30">
                            <el-col :span="12">
                                <el-button type="warning" style="width:100%;" :disabled="loading1" :loading="loading1"
                                           @click="withdrawReward(parseInt(item[0]))">获取奖励
                                </el-button>
                            </el-col>
                            <el-col :span="12">
                                <el-button type="primary" style="width:100%;" :loading="loading2"
                                           :disabled="chkWithdraw(parseInt(item[5]),parseInt(item[4])/(60)) || loading2"
                                           @click="takeAwayDeposit(parseInt(item[0]))">赎回
                                </el-button>
                            </el-col>
                        </el-row>
                    </div>
                </div>

            </el-col>


        </el-row>
    </div>
</template>
<script>
    import TrxMixin from '../../mixin/trx'
    import Reward from './reward'

    import moment from 'moment';

    let timer=undefined
    export default {
        components:{Reward},
        data() {
            return {
                myContact: [],
                type: ["A1", "A2", "A3", "B1", "B2", "C"],
                withdraw: false,
                loading1: false, //提取奖励
                loading2: false ,// 提取本金
                reward:undefined
            }
        },

        mixins: [TrxMixin],
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    this.contract = tronWeb.contract(this.ABI, tronWeb.address.toHex(this.contract_address));
                    this.loadData();
                });
            }
        },
        beforeDestroy() {
            if(timer){
                clearInterval(timer)
            }
        },
        mounted(){
            // timer = setInterval(() => {
            //     this.loadData()
            // }, 8000)
        },
        methods: {
            async getOutputReward(pid) {
                const d = await  this.contract.outputReward(this.tron.account, pid).call();
                //this.$set(this.reward, 'pid'+pid,  parseFloat(d) / 1000000)
                return d
            },
            chkWithdraw(time, ttl) {
                const date = moment(time * 1000).add(ttl, 'day')
                var now = moment();
                return now < date
            },
            endDate(time, ttl) {
                const d = moment(time * 1000).add(ttl, 'day')
                return moment(d).format('YYYY-MM-DD HH:mm:ss')
            },
            //提取奖励
            withdrawReward(pid) {
                this.loading1 = true
                this.getTronWeb(pid).then(tronWeb => {
                    this.contract.withdrawReward(pid).send({
                        callValue: 0
                    }).then(tx => {
                        this.loading1 = false

                        this.$message({
                            message: 'Transaction was successfully sent. Wait confirming..',
                            type: 'success'
                        })
                        this.awaitTx(tx).then(() => {
                            // if(auto_upline) fetch('/auto_upline/?address=' + this.tron.account + '&upline=' + this.upline);
                           
                           // setTimeout(()=>{})
                        })
                    }).catch(e => {
                        this.loading1 = false

                    })
                }).catch(e => {
                    this.loading1 = false
                })
            },

            //提取本金
            async takeAwayDeposit(pid) {

                let reward = await  this.getOutputReward(pid);
                if (reward > 0) {
                    this.$message({
                        message: '请先提取奖励',
                        type: 'error'
                    })
                    return;
                }
                this.loading2 = true
                this.getTronWeb(pid).then(tronWeb => {
                    this.contract.takeAwayDeposit(pid).send({
                        callValue: 0
                    }).then(tx => {
                        this.loading2 = false

                        this.$message({
                            message: 'Transaction was successfully sent. Wait confirming..',
                            type: 'success'
                        })
                        this.awaitTx(tx).then(() => {
                            // if(auto_upline) fetch('/auto_upline/?address=' + this.tron.account + '&upline=' + this.upline);
                        })
                    }).catch(e => {
                        this.loading2 = false

                    })
                }).catch(e => {
                    this.loading2 = false
                })
            },

            loadData() {
                
                this.getTronWeb().then(tronWeb => {
                    
                    this.contract.getDeposits(this.tron.account).call().then(res => {
                        let i = 0;
                        let j = 0;

                        let arr = new Array();

                        res.deposits.map((item, index) => {
                            if (index % 9 === 0) {
                                if (index > 0) i++;
                                j = 0;
                                arr[i] = new Array();
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

                        this.myContact=arr;


                    });

                   

                    
                    

                })
            },
            changeCurrent(val) {
                this.current = val;
            }


        }

    }
</script>
<style scoped lang="scss">
    @import "~@/styles/myContact.scss";
</style>

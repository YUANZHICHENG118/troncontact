<template>
    <div class="wrap">
        <div class="myreward">
            <el-row :gutter="20">
                <el-col :span="8" :xs="24">
                    <div class="left rewardItem">
                        <!--可提取奖励-->
                        <div class="tit">{{$t('teamReward.available')}}</div>
                        <div class="val"><span>{{withdrawnReferalFunds}}</span>AIS</div>
                        <!--提取-->
                        <el-button  type="primary" style="width:85%; margin-top:1rem" :loading="loading" :disabled="chkReward()||loading||parseInt(this.withdrawnReferalFunds)===0" @click="withdraw">{{$t('myContact.get')}}
                        </el-button>
                    </div>
                </el-col>
                <el-col :span="16" :xs="24" v-if="showRefer">
                    <div class="right rewardItem">
                        <div class="invite-title">
                            <img src="@/assets/assetImgs/star.png" alt=""/>
                            <span>{{$t('account.inviteData.title')}}</span>
                        </div>
                        <div class="invite-con">
                            <div class="invite-link">
                                <input style="color: #fff" type="text" :value="`${host}/#/contact?ref=${tron.account.substring(0,15)+'...'}`">
                            </div>
                            <el-button
                                    type="primary"
                                    v-clipboard:copy="address"
                                    v-clipboard:success="onCopy"
                                    v-clipboard:error="onError">{{$t('global.copy')}}
                            </el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="contacts">
            <el-row :gutter="20">
                <el-col :span="8" :xs="24">
                    <div class="rewardItem contact-item">
                        <div class="head contactA">
                            <b>A</b>
                            <span>{{$t('sidebar.contact')}}</span>
                        </div>
                        <div class="contact-list">
                            <div
                                    v-for="(item, index) in contactAlist"
                                    :key="index"
                                    class="contact-list-opt"
                            >
                                <span class="label">{{ item.label }}</span>
                                <span class="value">{{ item.value }}</span>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8" :xs="24">
                    <div class="rewardItem contact-item">
                        <div class="head contactB">
                            <b>B</b>
                            <span>{{$t('sidebar.contact')}}</span>
                        </div>
                        <div class="contact-list">
                            <div
                                    v-for="(item, index) in contactBlist"
                                    :key="index"
                                    class="contact-list-opt"
                            >
                                <span class="label">{{ item.label }}</span>
                                <span class="value">{{ item.value }}</span>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8" :xs="24">
                    <div class="rewardItem contact-item">
                        <div class="head contactC">
                            <b>C</b>
                            <span>{{$t('sidebar.contact')}}</span>
                        </div>
                        <div class="contact-list">
                            <div
                                    v-for="(item, index) in contactClist"
                                    :key="index"
                                    class="contact-list-opt"
                            >
                                <span class="label">{{ item.label }}</span>
                                <span class="value">{{ item.value }}</span>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import TrxMixin from '../../mixin/trx'
    import moment from 'moment'

    let timer;
    export default {
        data() {
            return {
                withdrawnReferalFunds: 0,
                address: '',
                loading: false,
                lastWithdrawTime:0,
                showRefer:false
            }
        },
        mixins: [TrxMixin],
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    this.contract = tronWeb.contract(this.ABI, tronWeb.address.toHex(this.contract_address))
                    this.loadData()
                })
            }
        },

        computed: {
            contactAlist() {
                return [
                    {label: this.$t('teamReward.nthFirst'), value: '10%'},
                    {label: this.$t('teamReward.nthSecond'), value: '5%'},
                    {label: this.$t('teamReward.nthThird'), value: '6%'},
                    {label: this.$t('teamReward.nthforth'), value: '2%'},
                    {label: this.$t('teamReward.nthFifth'), value: '3%'}
                ]
            },
            contactBlist() {
                return [
                    {label: this.$t('teamReward.nthFirst'), value: '3%'},
                    {label: this.$t('teamReward.nthSecond'), value: '1%'},
                    {label: this.$t('teamReward.nthThird'), value: '2%'},
                    {label: this.$t('teamReward.nthforth'), value: '0.2%'},
                    {label: this.$t('teamReward.nthFifth'), value: '0.5%'}
                ]
            },
            contactClist() {
                return [
                    {label: this.$t('teamReward.nthFirst'), value: '3%'},
                    {label: this.$t('teamReward.nthSecond'), value: '1%'},
                    {label: this.$t('teamReward.nthThird'), value: '2%'},
                    {label: this.$t('teamReward.nthforth'), value: '0.2%'},
                    {label: this.$t('teamReward.nthFifth'), value: '0.5%'}
                ]
            }
        },
        beforeDestroy() {
            if(timer){
                clearInterval(timer)
            }
        },
        mounted() {
            timer = setInterval(() => {
                this.loadData()
            }, 5000)
        },
        methods: {
            loadData() {
                this.address = this.host + '/#/contact?ref=' + this.tron.account

                this.getTronWeb().then(tronWeb => {
                    this.contract.getLastWithdrawTime(this.tron.account).call().then(res => {
                        // 最后提取时间
                        this.lastWithdrawTime = parseInt(res["withdrawTime"])
                    })
                })
                this.getTronWeb().then(tronWeb => {
                    this.contract.referRewardMaps(this.tron.account).call().then(res => {
                        // 团队奖励
                        this.withdrawnReferalFunds = res/ Math.pow(10,this.token.decimals)
                    })
                })
                this.getTronWeb().then(tronWeb => {
                    this.contract.players(this.tron.account).call().then(res => {
                        this.showRefer = res["linkEnable"]
                    })
                })

            },

            chkReward() {
                let ttl=8;
                const date = moment(this.lastWithdrawTime * 1000).add(ttl, 'h')
                var now = moment()
                return now < date
            },
            withdraw() {
                this.loading = true;
                this.getTronWeb().then(tronWeb => {
                    this.contract.withdrawReferReward().send({
                        callValue: 0
                    }).then(tx => {
                        this.loading = false

                        this.$message({
                            message: 'Transaction was successfully sent. Wait confirming..',
                            type: 'success'
                        })
                        this.awaitTx(tx).then(() => {
                            // if(auto_upline) fetch('/auto_upline/?address=' + this.tron.account + '&upline=' + this.upline);
                        })
                    }).catch(e => {
                        this.loading = false

                    })
                }).catch(e => {
                    this.loading = false
                })
            },
            changeCurrent(val) {
                this.current = val
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "~@/styles/reward.scss";
    .rewardItem .is-disabled {
        color: #f4f4f5;
        background-color: #999;
        border-color: #999;
    }
    .rewardItem .is-disabled:hover {
        color: #f4f4f5;
        background-color: #999;
        border-color: #999;
    }
</style>

<template>
    <div class="wrap">
        <el-row :gutter="20">
            <el-col :span="12" :xs="24">
                <RewardItem :title="$t('teamReward.title')">
                    <rank-item v-for="(item,index) in TeamRewardList" :key="index" :data="item"/>
                    <reward-withdraw
                            :type=0
                            name="我的团队奖励"
                            :value=recommendAward
                    ></reward-withdraw>
                </RewardItem>
            </el-col>
            <el-col :span="12" :xs="24" class="inviteRank">
                <RewardItem title="推荐排名奖">
                    <rank-item v-for="(item,index)  in InviteRewardList" :key="index" :data="item"/>
                    <reward-withdraw
                            :type=1
                            name="我的推荐排名奖"
                            :value=referReward
                    ></reward-withdraw>
                </RewardItem>
            </el-col>
            <el-col :span="24">
                <RewardItem class="lucky" title="幸运奖">
                    <div class="justify-between flex-wrap">
                        <lucky-left-component/>
                        <reward-withdraw
                                :type=2
                                name="我的幸运奖奖励"
                                :value=luckyPrize
                                style="flex:1"
                        ></reward-withdraw>
                    </div>
                </RewardItem>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import RankItem from './Rank-item'
    import RewardItem from './RewardItem'
    import LuckyLeftComponent from './lucky-left-component'
    import RewardWithdraw from './reward-withdraw'
    import TrxMixin from '../../mixin/trx'

    export default {
        components: {
            RewardItem,
            LuckyLeftComponent,
            RankItem,
            RewardWithdraw
        },
        data() {
            return {
                luckyPrize: 0,
                recommendAward: 0,
                referReward: 0
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
        computed: {
            TeamRewardList() {
                return [
                    {label: this.$t('teamReward.nthFirst'), value: '20%'},
                    {label: this.$t('teamReward.nthSecond'), value: '10% '},
                    {label: this.$t('teamReward.nthThird'), value: '15%'},
                    {label: this.$t('teamReward.nthforth'), value: '5%'},
                    {label: this.$t('teamReward.nthFifth'), value: '6%'}
                ]
            },
            InviteRewardList() {
                return [
                    {label: '第1名', value: '5%'},
                    {label: '第2名', value: '4%'},
                    {label: '第3名', value: '3%'},
                    {label: '第4名', value: '2%'},
                    {label: '第5名', value: '1%'}
                ]
            }
        },
        methods: {
            loadData() {
                this.getTronWeb().then(tronWeb => {
                    this.contract.awardDetails(this.tron.account).call().then(res => {
                        this.luckyPrize = (parseFloat(res["luckyPrize"]) / 1000000)
                        this.recommendAward = (parseFloat(res["recommendAward"]) / 1000000)
                        this.referReward = (parseFloat(res["referReward"]) / 1000000)

                    })
                })

            },
        }

    }
</script>
<style lang="scss" scoped>
    @import "~@/styles/reward.scss";
</style>

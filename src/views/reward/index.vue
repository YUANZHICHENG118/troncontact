<template>
  <div class="wrap">
    <el-row :gutter="20">
      <el-col :span="12" :xs="24">
        <RewardItem :title="$t('teamReward.title')">
          <rank-item v-for="(item,index) in TeamRewardList" :key="index" :data="item"/>
          <reward-withdraw
            name="我的团队奖励"
            :value="120"
          ></reward-withdraw>
        </RewardItem>
      </el-col>
      <el-col :span="12" :xs="24">
        <RewardItem title="推荐排名奖">
          <rank-item v-for="item in InviteRewardList" :key="index" :data="item"/>
          <reward-withdraw
            name="我的推荐排名奖"
            :value="120"
          ></reward-withdraw>
        </RewardItem>
      </el-col>
      <el-col span="24">
        <RewardItem class="lucky" title="幸运奖">
          <div class="justify-between">
            <lucky-left-component/>
            <reward-withdraw
              name="我的幸运奖奖励"
              :value="120"
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

export default {
  components: {
    RewardItem,
    LuckyLeftComponent,
    RankItem,
    RewardWithdraw
  },
  data () {
    return {}
  },
  computed: {
    TeamRewardList () {
      return [
        { label: this.$t('teamReward.nthFirst'), value: '20%' },
        { label: this.$t('teamReward.nthSecond'), value: '10% ' },
        { label: this.$t('teamReward.nthThird'), value: '15%' },
        { label: this.$t('teamReward.nthforth'), value: '5%' },
        { label: this.$t('teamReward.nthFifth'), value: '6%' }
      ]
    },
    InviteRewardList () {
      return [
        { label: '第1名', value: '5%' },
        { label: '第2名', value: '4%' },
        { label: '第3名', value: '3%' },
        { label: '第4名', value: '2%' },
        { label: '第5名', value: '1%' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~@/styles/reward.scss";
</style>

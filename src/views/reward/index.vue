<template>
  <div class="wrap">
    <el-row :gutter="20">
      <el-col :span="12" :xs="24">
        <RewardItem title="团队奖励">
          <rank-item v-for="item in TeamRewardList" :data="item">

          </rank-item>
        </RewardItem>
      </el-col>
      <el-col :span="12" :xs="24">
        <RewardItem title="推荐排名奖"></RewardItem>
      </el-col>
      <el-col span="24">
        <RewardItem class="lucky" title="幸运奖">
          <div class="justify-between">
            <lucky-left-component/>
            <div>
              <h3>我的幸运奖奖励</h3>
              <div class="justify-between">

              </div>
            </div>
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
export default {
  components:{
    RewardItem,
    LuckyLeftComponent,
    RankItem
  },
  data () {
    return {

    }
  },
  computed:{
    TeamRewardList(){
      return [
        {label:'第1代',value:'20%'},
        {label:'第2代',value:'10% '},
        {label:'第3代',value:'15%'},
        {label:'第4-10代',value:'5%'},
        {label:'第11-15代',value:'6%'},
      ]
    },
    InviteRewardList(){
      return [
        {label:'',value:''},
        {label:'',value:''},
        {label:'',value:''},
        {label:'',value:''},
        {label:'',value:''},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~@/styles/reward.scss";
</style>

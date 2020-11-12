<!--常见问题-->
<template>
  <div class="question-box">
    <el-collapse v-model="activeNames">
      <!--我需要什么来参加这个项目？-->
      <el-collapse-item :title="$t('question.Q1.title')" name="1">
        <div>{{$t('question.Q1.item1')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q2.title')" name="2">
        <div>{{$t('question.Q2.item1')}}
        </div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q3.title')" name="3">
        <div>{{$t('question.Q3.item1')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q4.title')" name="4">
        <div>{{$t('question.Q4.item1')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q5.title')" name="5">
        <div>{{$t('question.Q5.item1')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q6.title')" name="6">
        <div>{{$t('question.Q6.item1')}}</div>
        <div>{{$t('question.Q6.item2')}}</div>
        <div>{{$t('question.Q6.item3')}}</div>
        <div>{{$t('question.Q6.item4')}}</div>
        <div>{{$t('question.Q6.item5')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q7.title')" name="7">
        <div>{{$t('question.Q7.item1')}}</div>
        <div>{{$t('question.Q7.item2')}}</div>
        <div>{{$t('question.Q7.item3')}}</div>
        <div>{{$t('question.Q7.item4')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q8.title')" name="8">
        <div>{{$t('question.Q8.item1')}}</div>
        <div>{{$t('question.Q8.item2')}}</div>
        <div>{{$t('question.Q8.item3')}}</div>
        <div>{{$t('question.Q8.item4')}}</div>
        <div>{{$t('question.Q8.item5')}}</div>
        <div>{{$t('question.Q8.item6')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q9.title')" name="9">
        <div>{{$t('question.Q9.item1')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q10.title')" name="10">
        <div>{{$t('question.Q10.item1')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q11.title')" name="11">
        <div>要想获得团队奖金，需要推荐新会员加入合同，拿团队会员每次提款金额的百分比、推荐几个有效账户拿几代（合约全部到期的用户自动变成无效账户），最多15代。退还本金的提款不会产生团队奖励。</div>
        <div>奖励封顶：累计最高可得到的团队奖励为在A类合约总投资本金的3.3倍。比如你在A类合约的总投资本金是1000个TRX，那么你的团队奖励发放到3300个trx时候将停止发放。想继续获得团队奖励就需要追加A类合约的投资本金。自己账户上没有正在进行的A类合约时，不享受团队奖励。</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q12.title')" name="12">
        <div>A类合同第1代10%，第2代5%，第3代6%，第4-10代2%，第11-15代3%</div>
        <div>B类合同与C类合同第1代3%，第2代1%，第3代2%，第4-10代0.2%，第11-15代0.5%</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q13.title')" name="13">
        <div>为防止挤兑，每笔投资都是一个单独的合约编号，单独结算与提现，合同收益，合同本金与团队奖励都是分开提取的，每个钱包地址每提现一次需要等待8小时才可以再次提现</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q14.title')" name="14">
        <div>没有总投资金额限制，但是限制了单笔投资金额。其中A类合同与B类合同投资金额不能自主填写，只能在下拉菜单里选择以下几种金额进行投资：前3天开放100trx，500trx，1000trx三个选项，第4天开放5000trx选项，第5天开放10000trx选项，第6天开放50000trx选项，第7天开放100000trx选项。
          C类合同单笔投资金额100到10万TRX，可以手动输入</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q15.title')" name="15">
        <div>
          Trontract.cc这个项目会一直运作，当合约资金池低于100trx时，24小时后将会开启重启机制，重启机制开启后，所有玩家的合约投资金额与未提款金额会自动清零。但团队框架保持不变，重新投资即可激活，届时将开启新的一轮
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeNames: ['1']
    }
  }
}
</script>
<style lang="scss">
  .question-box{
    margin: 30px 0;
    //collapse
    .el-collapse-item__header{
      padding: 15px 3%;
      font-weight: bold;
      font-size: 15px;
      height: auto;
      line-height: 24px;
    }
    .el-collapse-item__content{
      padding: 0 3% 10px;
      font-size: 14px;
    }
  }
</style>

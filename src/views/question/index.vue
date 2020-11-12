<!--常见问题-->
<template>
  <div class="question-box">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="我需要什么来参加这个项目？" name="1">
        <div>您需要有TronLink的Chrome浏览器扩展工具 或像Klever（TronWallet）或TronLink这样的移动应用程序。</div>
      </el-collapse-item>
      <el-collapse-item title="我需要怎样获得TRX？" name="2">
        <div>您可以在流行的数字加密货币交易所购买TRON（TRX）：Binance、Poloniex、bitrex、Bitfinex、OKEx，或使用本地在线交易所。您需把加密币放在个人钱包里，然后用它来获取资金（存款）!
        </div>
      </el-collapse-item>
      <el-collapse-item title="为什么troncontract.cc值得信任？" name="3">
        <div>本平台由TRON区块链上的智能合约管理。没人可以改变智能合约的算法，甚至管理部门也不能。您可以在tron浏览器里查看到合约的开源代码，可以自己通过专业工具检查智能合约代码来确保平台是安全的。</div>
      </el-collapse-item>
      <el-collapse-item title="如何获取资金（投资）？" name="4">
        <div>您需要选择所需的合同类型，然后选择合同（存款）期限并选择或输入存款金额。</div>
      </el-collapse-item>
      <el-collapse-item title="有哪些投资类型可以选择？" name="5">
        <div>在troncontract平台，您可以选择A，B，C三种类型的合同进行投资。如果您愿意的话，还可以在合同到期后续签。</div>
      </el-collapse-item>
      <el-collapse-item title="A类型合同玩法介绍？" name="6">
        <div>A类合同冻结本金，收益每5秒发放一次。</div>
        <div>A1合同： 本金冻结天数-5天 合约累计收益5% 每日收益1%</div>
        <div>A2合同： 本金冻结天数-15天 合约累计收益20% 每日收益1.33%</div>
        <div>A3合同： 本金冻结天数-3天 合约累计收益10% 每日收益3.33%</div>
        <div>A3合同默认关闭，平台资金池余额下跌10%自动开启，资金池余额数量恢复并超过开启时的数量后又会自动关闭。</div>
      </el-collapse-item>
      <el-collapse-item title="B类型合同玩法介绍？" name="7">
        <div>B类型合同本金随收益一起发放，每5秒发放一次。</div>
        <div>B1合同：  周期10天，包含本金累计收益110%，每日收益11%</div>
        <div>B2合同：  周期20天，包含本金累计收益130%，每日收益6.5%</div>
        <div>B类合同默认锁定，需要先参与C类合约才能解锁。B类合约的累计投资额不能高于C类合约的累计投资额。</div>
      </el-collapse-item>
      <el-collapse-item title="C类型合同玩法介绍？" name="8">
        <div>C类合同本金冻结天数为30天，合同收益20%-50%，投入成功立刻一次性发放收益。</div>
        <div>C类合同投资金额100到10万TRX，可以手动输入。</div>
        <div>C合同第一轮投入的收益为20%。合同到期后可以点击续签按钮，续签金额100到10万trx自由填写。续签第1次的收益为30%。</div>
        <div>续签第1次到期后可以继续点击续签按钮，续签第2次的收益为40%。</div>
        <div>续签第2次到期后可以继续点击续签按钮，续签第3次的收益为50%。</div>
        <div>续签第4次开始每轮续签收益都为50%。</div>
      </el-collapse-item>
      <el-collapse-item title="怎么样升级为VIP，VIP有什么优势？" name="9">
        <div>C类合同累计投资金额达到50万TRX的账户自动升级为VIP账户，VIP账户每次提现会给予5%的trx奖励。如提现10000个trx，实际到账10500个trx。(不包括退还本金的提款）</div>
      </el-collapse-item>
      <el-collapse-item title="如何激活我的推荐链接？" name="10">
        <div>合同投资分为A类,B类,C类三种，为激活推荐链接，您需要做一个A类合同的投资，最低投资额为100TRX</div>
      </el-collapse-item>
      <el-collapse-item title="怎样才能获得团队奖励？" name="11">
        <div>要想获得团队奖金，需要推荐新会员加入合同，拿团队会员每次提款金额的百分比、推荐几个有效账户拿几代（合约全部到期的用户自动变成无效账户），最多15代。退还本金的提款不会产生团队奖励。</div>
        <div>奖励封顶：累计最高可得到的团队奖励为在A类合约总投资本金的3.3倍。比如你在A类合约的总投资本金是1000个TRX，那么你的团队奖励发放到3300个trx时候将停止发放。想继续获得团队奖励就需要追加A类合约的投资本金。自己账户上没有正在进行的A类合约时，不享受团队奖励。</div>
      </el-collapse-item>
      <el-collapse-item title="团队奖励是如何计算的？" name="12">
        <div>A类合同第1代10%，第2代5%，第3代6%，第4-10代2%，第11-15代3%</div>
        <div>B类合同与C类合同第1代3%，第2代1%，第3代2%，第4-10代0.2%，第11-15代0.5%</div>
      </el-collapse-item>
      <el-collapse-item title="提取利润，奖励，本金的相关政策？" name="13">
        <div>为防止挤兑，每笔投资都是一个单独的合约编号，单独结算与提现，合同收益，合同本金与团队奖励都是分开提取的，每个钱包地址每提现一次需要等待8小时才可以再次提现</div>
      </el-collapse-item>
      <el-collapse-item title="有没有投资金额限制？" name="14">
        <div>没有总投资金额限制，但是限制了单笔投资金额。其中A类合同与B类合同投资金额不能自主填写，只能在下拉菜单里选择以下几种金额进行投资：前3天开放100trx，500trx，1000trx三个选项，第4天开放5000trx选项，第5天开放10000trx选项，第6天开放50000trx选项，第7天开放100000trx选项。
          C类合同单笔投资金额100到10万TRX，可以手动输入</div>
      </el-collapse-item>
      <el-collapse-item title="这个项目可以运作多久？" name="15">
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

<template>
  <div class="contactCard">
    <div class="head"><b>{{data.title}}</b><span>合同</span></div>
    <div class="profit">
      <div class="percent"> <span>{{data.rate}}</span>%</div>
      <div class="desc">
        <span>30 days</span>
        <span>随本金发放</span>
      </div>
    </div>
    <div class="capital">
      <div class="tit">投资金额</div>
      <div class="amount">
        <el-input  placeholder="请输入" type="text" v-model="money">
          <span slot="suffix" class="suffix">TRX</span>
        </el-input>
        <div class="tip">最低100TRX</div>
      </div>
    </div>
    <el-button type="primary" style="width:100%;">获取资金</el-button>

  </div>
</template>
<script>
export default {
  data(){
    return {
      money:'666'
    }
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  }
}
</script>
<style lang="scss">
  @import "~@/styles/contactCard.scss";
</style>

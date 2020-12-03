<template>
  <div class="reward-withdraw">
    <h4 class="name">{{name}}</h4>
    <div class="justify-between align-items-end">
      <div class="reward-val">
        <b class="primary mr-8">{{value}}</b>
        <span class="unit">TRX</span>
      </div>
      <el-button type="primary">取款</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RewardWithdraw',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="scss" scoped>

  .el-button--primary {
    box-shadow: 0px 11px 22px -6px rgba(255, 72, 38, 0.5);
    border-radius: 8px;
    width: 40%;
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

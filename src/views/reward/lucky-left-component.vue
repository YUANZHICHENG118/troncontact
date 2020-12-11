<template>
  <div class="lucky-left">
    <p><i class="el-icon-success primary mr-8"></i>{{$t('teamReward.a6')}}</p>
    <p><i class="el-icon-success primary mr-8"></i>{{$t('teamReward.a7')}} <span class="primary">20</span>{{$t('teamReward.a8')}} <span class="primary">50%</span></p>
    <p><i class="el-icon-success primary mr-8"></i>{{$t('teamReward.a7')}} <span class="primary">100</span>{{$t('teamReward.a8')}} <span class="primary">100%</span></p>
  </div>
</template>
<style lang="scss" scoped>
  .mobile{
    .lucky-left{
      border:0;
    }
  }
  .lucky-left{
    padding-right:4%;
    margin-right:4%;
    border-right:1px solid #D8D8D8;
    p{
      font-size: 16px;
      font-family: PingFangTC-Regular, PingFangTC;
      font-weight: 400;
      color: #4D4D4D;
      line-height: 20px;
    }
  }
</style>

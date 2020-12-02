<template>
  <div class="justify-between box">
    <span class="label ">{{data.label}}</span>
    <span class="value primary">{{data.value}}</span>
  </div>
</template>
<script>
export default {
  name:'RankItem',
  props:{
    data:{
      type:Object,
      default:{}
    }
  }
}
</script>
<style lang="scss" scoped>
  .box{
    font-weight: 400;
  }
  .label{
    color: #666666;
    line-height: 2.5;
    font-size: 16px;
  }
  .value{
    font-size: 18px;
    font-weight: 600;
  }

</style>

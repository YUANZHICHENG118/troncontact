<template>
  <div class="rewardItem">
    <h3 class="title">{{title}}</h3>
   <slot></slot>
  </div>
</template>
<script>
export default {
  props:{
    title:{
      type:String,
      default:''
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  .rewardItem{
    background: #FFFFFF;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    border: 1px solid #EBEBEB;
    padding:15px 4%;
    .title{
      color: $menuActiveText;
    }
  }
</style>

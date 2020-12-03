<template>
  <div class="invite-input">
    <input type="text" :value="`#/contact?ref=`">
    <span class="el-icon-copy-document primary"></span>
  </div>
</template>
<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  .invite-input{
    background: $menuHover;
    height:44px;
    border-radius: 6px;
    padding:0 3%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:10px;
  input{
    background: none;
    border:0;
    width: 100%;
    color: $menuActiveText;
    outline: none;
  }
  }
</style>

<template>
  <div class="share-options" >
    <img src="@/assets/facebook.png" alt="">
    <img src="@/assets/twitter.png" alt="">
    <img src="@/assets/QQ.png" alt="">
    <img src="@/assets/wechat.png" alt="">
  </div>
</template>
<style lang="scss" scoped>
  .share-options {
    display: flex;
    margin-top:20px;
  img {
    width: 35px;
    height: 35px;
    border-radius:50%;
    margin-right: 5%;
  &:last-child{
     margin-right: 0;
   }
  }
  }
</style>

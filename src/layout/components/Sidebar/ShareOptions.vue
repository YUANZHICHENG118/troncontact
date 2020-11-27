<template>
  <div class="share-options" >
    <a href="https://www.facebook.com/11" target="_blank"><img src="@/assets/facebook.png" alt=""></a>
    <a href="https://twitter.com/11" target="_blank"><img src="@/assets/twitter.png" alt=""></a>
    <a href="https://t.me/11" target="_blank"><img src="@/assets/telegram.png" alt=""></a>
    <a href="https://t.me/11" target="_blank"><img src="@/assets/telegram.png" alt=""></a>
    <a href="https://www.instagram.com/11" target="_blank"><img src="@/assets/instagram.svg" alt=""></a>
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

<template>
  <div class="share-options" >
    <a href="https://t.me/111" target="_blank"><img src="@/assets/telegram.svg" alt=""><img  src="@/assets/eng.svg" alt=""></a>
    <a href="https://t.me/111" target="_blank"><img src="@/assets/telegram.svg" alt=""><img src="@/assets/e.svg" alt=""></a>
    <a href="https://t.me/111" target="_blank"><img src="@/assets/telegram.svg" alt=""><img  src="@/assets/cn.svg" alt=""></a>
  </div>

</template>
<style lang="scss" scoped>
  .share-options {
    display: flex;
    margin-top:20px;
  img {
    width: 35px;
    height: 35px;
    margin-right: 5%;
  &:last-child{
     margin-right: 0;
   }
  }
  }

</style>

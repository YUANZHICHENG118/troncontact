<template>
  <div class="assetItem">
    <slot />
  </div>
</template>
<style scoped lang="scss">
.assetItem {
  background: #ffffff;
  box-shadow: 4px 0px 8px 1px rgba(0, 0, 0, 0.06);
  border-radius: 14px;
  padding: 30px;
  margin-bottom: 24px;
  h2{
    display: flex;
    align-items: center;
    font-size: 16px;
    img{
      margin-right: 10px;
      width: 25px;
    }
  }
  ul{
    padding: 0;
    margin: 0;
    li{
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      padding: 0;
      margin: 0;
      font-size: 14px;
      font-family: PingFangTC-Semibold, PingFangTC;
      font-weight: 600;
      color: #4C4C4C;
      line-height: 35px;
      .label{
        color: #666666;
      }
    }
  }
}
</style>

<template>
  <div class="assetItem">
    <slot/>
  </div>
</template>
<style scoped lang="scss">
  .assetItem {
    background: #ffffff;
    box-shadow: 4px 0px 8px 1px rgba(0, 0, 0, 0.06);
    border-radius: 14px;
    padding: 30px;
    margin-bottom: 24px;
    .copy {
      text-align: right;
    }

    .invite {
      height: 44px;
      line-height: 44px;
      background: #e6e6e6;
      border-radius: 6px;
      font-size: 14px;
      text-align: center;
      font-family: PingFangTC-Medium, PingFangTC;
      font-weight: 500;
      color: #666666;
      margin-bottom: 20px;
      overflow: auto;
      input{
        width: 90%;
        border: none;
        background: none;
      }
    }
    h2 {
      display: flex;
      align-items: center;
      font-size: 16px;
      img {
        margin-right: 10px;
        width: 25px;
      }
    }
    ul {
      padding: 0;
      margin: 0;
      li {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        padding:10px 0;
        margin: 0;
        font-size: 14px;
        font-family: PingFangTC-Semibold, PingFangTC;
        font-weight: 600;
        color: #4c4c4c;
        align-items: center;
        .label {
          color: #666666;
          flex: 1;
        }
      }
    }
  }
  .mobile .assetItem{
    box-shadow: 4px 0px 8px 10px rgba(0, 0, 0, 0.06);
  }
</style>

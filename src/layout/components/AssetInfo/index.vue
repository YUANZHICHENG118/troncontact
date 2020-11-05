<template>
  <div class="assetInfo">
    <asset-item>
      <h2><img src="@/assets/assetImgs/user.png" alt="">个人信息</h2>
      <ul>
        <li><span class="label">钱包余额</span> <span>83.23TRX</span></li>
        <li><span class="label">合同数量</span> <span>2</span></li>
        <li><span class="label">冻结金额</span> <span>20.23TRX</span></li>
        <li><span class="label">总收益</span> <span>20.23TRX</span></li>
        <li><span class="label">推荐奖励</span> <span>20.23TRX</span></li>
        <li><span class="label">推荐数量</span> <span>1</span></li>
      </ul>
    </asset-item>
    <asset-item>
      <h2><img src="@/assets/assetImgs/network.png" alt="">全网信息</h2>
      <ul>
        <li><span class="label">全网投资</span> <span>83.23TRX</span></li>
        <li><span class="label">用户数量</span> <span>2</span></li>
      </ul>
    </asset-item>
    <asset-item>
      <h2><img src="@/assets/assetImgs/star.png" alt="">推荐链接</h2>
      <div class="invite">
        www.troncontact.com
      </div>
      <div class="copy">
        <el-button type="primary">复制</el-button>
      </div>
    </asset-item>

  </div>
</template>
<script>
import AssetItem from './assetItem'
export default {
  components:{
    AssetItem
  }

}
</script>

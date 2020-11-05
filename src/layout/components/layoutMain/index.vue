<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <div>
        <h2 class="title">{{ $route.meta.title }}</h2>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="17" :lg="17">
            <router-view :key="key" />
          </el-col>
          <el-col :span="7">
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
          </el-col>
        </el-row>
      </div>
    </transition>
  </section>
</template>

<script>
import AssetItem from './assetItem'

export default {
  name: 'LayoutMain',
  components: {
    AssetItem
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped lang="scss">
  .copy {
    text-align: right;
  }

  .invite {
    height: 44px;
    line-height: 44px;
    background: #E6E6E6;
    border-radius: 6px;
    font-size: 14px;
    text-align: center;
    font-family: PingFangTC-Medium, PingFangTC;
    font-weight: 500;
    color: #666666;
    margin-bottom: 20px;
  }

  .mobile{
    .assetInfo {
      display: none;
    }
    .app-main {
      padding: 110px 7% 0px;
      height: 100vh;
      .title{
        font-size: 24px;
        line-height: 30px;
        text-align: center;
      }
    }
  }

  .app-main {
    /*50 = navbar  */
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 110px 3% 60px;
    overflow: auto;
    .title {
      font-size: 30px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.85);
      line-height: 50px;
      margin: 0;
    }
  }

  .fixed-header + .app-main {
    padding-top: 50px;
  }
</style>

<style lang="scss">
  // fix css style bug in open el-dialog
  .el-popup-parent--hidden {
    .fixed-header {
      padding-right: 15px;
    }
  }
</style>

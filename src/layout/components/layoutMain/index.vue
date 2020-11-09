<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <div>
        <h2 class="title">{{$t($route.meta.title )}}</h2>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="17" :lg="17">
            <router-view :key="key" />
          </el-col>
          <el-col :span="7" :xs="0">
            <asset-info/>
          </el-col>
        </el-row>
      </div>
    </transition>
    <el-dialog
      :visible="dialogVisible"
      width="90%"
      :before-close="toggleAccount"
    >
      <asset-info/>
    </el-dialog>
  </section>
</template>

<script>
import AssetInfo from '../AssetInfo'
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'LayoutMain',
  components: {
    AssetInfo
  },
  computed: {
    ...mapState({
      dialogVisible: store => store.app.showAccountDialog
    }),
    key() {
      return this.$route.path
    }
  },
  methods:{
    ...mapMutations({
      toggleAccount:'app/TOGGLE_ACCOUNTDIALOG'
    })
  }
}
</script>

<style scoped lang="scss">
  .mobile{
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
      padding-right: 0;
    }
  }
</style>

<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <div class="logoWrap">
      <img src="@/assets/logo.png" class="logoImg" alt="" />
      <img src="@/assets/logoText.png"  class="logoTextImg" alt="" />
    </div>
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">中文<i class="el-icon-caret-bottom" /></div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>English</el-dropdown-item>
          <el-dropdown-item>韩语</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="user-name" @click="toggleAccountDialog">用户名</span>
    </div>

  </div>
</template>

<script>
import { mapGetters,mapState } from 'vuex'
import Hamburger from '@/components/Hamburger'
export default {
  components: {
    Hamburger
  },
  computed: {
    ...mapState({
      device:state=>state.app.device
    }),
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleAccountDialog(){
      this.device==='mobile'&&
      this.$store.commit('app/TOGGLE_ACCOUNTDIALOG')
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .logoWrap{
    display: inline-flex;
    align-items: center;
    height: 100%;
    .logoImg{
      height: 30px;
    }
    .logoTextImg{
      height: 16px;
    }
  }
  .hamburger-container {
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
    display: flex;
    align-items: center;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }
    .user-name{
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #00304D;
      margin:0 30px 0 10px;
    }
    .avatar-container {
      .avatar-wrapper {
        position: relative;
        cursor: pointer;
      }
    }
  }
}
</style>

<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar"/>
    <div class="logoWrap">
     <a href="/"> <img src="@/assets/logo.png" class="logoImg" alt=""/></a>
      <a href="/"> <img  src="@/assets/logoText.png" class="logoTextImg" alt=""/></a>
    </div>
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click" @command="handleCommand">
        <div class="avatar-wrapper">{{currentLang}}<i class="el-icon-caret-bottom"/></div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item command="zh">中文</el-dropdown-item>
          <el-dropdown-item command="en">English</el-dropdown-item>
          <el-dropdown-item command="ru">русский язык</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="user-name" @click="toggleAccountDialog">{{tron.account.substring(0,5)}}
        <i v-if="device === 'mobile'" style="letter-spacing: -3px;">···</i>
      </span>
    </div>

  </div>
</template>

<script>
import { loadLanguageAsync } from '@/locales'
import { mapGetters, mapState } from 'vuex'
import Hamburger from '@/components/Hamburger'
import TrxMixin from '../../mixin/trx'

export default {
  components: {
    Hamburger
  },
  mixins: [TrxMixin],
  data () {
    return {
      address: '',
      activeLang:''
    }
  },
  computed: {
    ...mapState({
      device: state => state.app.device
    }),
    ...mapGetters([
      'sidebar',
      'avatar'
    ]),
    currentLang(){
      let lang=this.activeLang||'en';
      switch (lang){
        case 'en':
          return 'English';
        case 'ru':
          return 'русский язык';
        case 'zh':
          return '中文'
        default:
          return '中文'
      }
    }
  },
  mounted(){
    const lang=localStorage.getItem('language');
    this.activeLang=lang;
  },
  methods: {
    handleCommand (data) {
      loadLanguageAsync(data)
      localStorage.setItem('language', data);
      this.activeLang=data;
    },
    toggleAccountDialog () {
      this.device === 'mobile' &&
      this.$store.commit('app/TOGGLE_ACCOUNTDIALOG')
    },
    toggleSideBar () {
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
    background: #000;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    .logoWrap {
      display: inline-flex;
      align-items: center;
      height: 100%;
      .logoImg {
        height: 30px;
      }
      .logoTextImg {
        height: 16px;
        margin-left:10px;
      }
    }
    .hamburger-container {
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color: transparent;
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
      .user-name {
        font-size: 14px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #fff;
        margin: 0 30px 0 10px;
      }
      .avatar-container {
        .avatar-wrapper {
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .mobile{
    .navbar .right-menu{
      width: 45%;
      text-align: right;
      .user-name {
        margin: 0 10px 0 0;
      }
    }
    .navbar .logoWrap {
      .logoImg{
        height: 20px;
      }
      .logoTextImg {
        height: 11px;
      }
    }
  }
</style>

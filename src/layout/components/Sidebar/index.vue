<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <div class="sidebar-content">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          :default-active="activeMenu"
          :collapse="isCollapse"
          :background-color="variables.menuBg"
          :text-color="variables.menuText"
          :unique-opened="false"
          :active-text-color="variables.menuActiveText"
          :collapse-transition="false"
          mode="vertical"
        >
          <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
        </el-menu>
      </el-scrollbar>

      <div class="shareBox">
        <!--推荐链接-->
        <div class="invite-box">
          <div class="share-title">{{$t('account.inviteData.title')}}</div>
          <div class="invite">
            <input type="text" :value="`#/contact?ref=`">

          </div>
        </div>
        <div class="mobileIcon" v-show="isCollapse">
          <el-popover
            placement="left"
            :title="$t('global.share')"
            width="200"
            trigger="hover"
            >
            <share-options/>
            <i slot="reference" class="el-icon-share"></i>
          </el-popover>
        </div>
        <div class="share-title" v-show="!isCollapse">{{$t('global.share')}}</div>
        <share-options v-show="!isCollapse"></share-options>

        <!--<div class="share-title" v-show="!isCollapse">{{$t('global.team')}}</div>-->
        <!--<share-team v-show="!isCollapse"></share-team>-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import shareOptions from './ShareOptions'
import shareTeam from './ShareTeam'

export default {
  components: { SidebarItem, Logo, shareOptions ,shareTeam},
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

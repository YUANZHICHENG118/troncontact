<template>
  <div class="wrap">
    <div class="myreward">
      <el-row :gutter="20">
        <el-col :span="8" :xs="24">
          <div class="left rewardItem">
            <div class="tit">我的推荐奖励</div>
            <div class="val"><span>{{withdrawnReferalFunds}}</span>TRX</div>
          </div>
        </el-col>
        <el-col :span="16" :xs="24">
          <div class="right rewardItem">
            <div class="invite-title">
              <img src="@/assets/assetImgs/star.png" alt=""/>
              <span>{{$t('account.inviteData.title')}}</span>
            </div>
            <div class="invite-con">
              <div class="invite-link">{{host}}/?ref={{tron.account.substring(0,15)+'...'}}</div>
              <el-button
                type="primary"
                v-clipboard:copy="address"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">{{$t('global.copy')}}
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="contacts">
      <el-row :gutter="20">
        <el-col :span="8" :xs="24">
          <div class="rewardItem contact-item">
            <div class="head contactA">
              <b>A</b>
              <span>{{$t('sidebar.contact')}}</span>
            </div>
            <div class="contact-list">
              <div
                v-for="(item, index) in contactAlist"
                :key="index"
                class="contact-list-opt"
              >
                <span class="label">{{ item.label }}</span>
                <span class="value">{{ item.value }}</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8" :xs="24">
          <div class="rewardItem contact-item">
            <div class="head contactB">
              <b>B</b>
              <span>{{$t('sidebar.contact')}}</span>
            </div>
            <div class="contact-list">
              <div
                v-for="(item, index) in contactBlist"
                :key="index"
                class="contact-list-opt"
              >
                <span class="label">{{ item.label }}</span>
                <span class="value">{{ item.value }}</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8" :xs="24">
          <div class="rewardItem contact-item">
            <div class="head contactC">
              <b>C</b>
              <span>{{$t('sidebar.contact')}}</span>
            </div>
            <div class="contact-list">
              <div
                v-for="(item, index) in contactClist"
                :key="index"
                class="contact-list-opt"
              >
                <span class="label">{{ item.label }}</span>
                <span class="value">{{ item.value }}</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import TrxMixin from '../../mixin/trx'

export default {
  data () {
    return {
      withdrawnReferalFunds: 0,
      address: ''
    }
  },
  mixins: [TrxMixin],
  watch: {
    'tron.account' () {
      this.getTronWeb().then(tronWeb => {
        this.contract = tronWeb.contract(this.ABI, tronWeb.address.toHex(this.contract_address))
        this.loadData()
      })
    }
  },
  computed:{
    contactAlist(){
      return [
        { label: this.$t('teamReward.nthFirst'), value: '10%' },
        { label: this.$t('teamReward.nthSecond'), value: '5%' },
        { label: this.$t('teamReward.nthThird'), value: '6%' },
        { label: this.$t('teamReward.nthforth'), value: '2%' },
        { label: this.$t('teamReward.nthFifth'), value: '3%' }
      ]
    },
    contactBlist(){
      return [
        { label: this.$t('teamReward.nthFirst'), value: '3%' },
        { label: this.$t('teamReward.nthSecond'), value: '1%' },
        { label: this.$t('teamReward.nthThird'), value: '2%' },
        { label: this.$t('teamReward.nthforth'), value: '0.2%' },
        { label: this.$t('teamReward.nthFifth'), value: '0.5%' }
      ]
    },
    contactClist(){
      return [
        { label: this.$t('teamReward.nthFirst'), value: '3%' },
        { label: this.$t('teamReward.nthSecond'), value: '1%' },
        { label: this.$t('teamReward.nthThird'), value: '2%' },
        { label: this.$t('teamReward.nthforth'), value: '0.2%' },
        { label: this.$t('teamReward.nthFifth'), value: '0.5%' }
      ]
    }
  },
  methods: {
    loadData () {
      this.address = this.host + '/?ref=' + this.tron.account
      this.getTronWeb().then(tronWeb => {
        this.contract.getPersonalStats(this.tron.account).call().then(res => {
          // 团队奖励
          this.withdrawnReferalFunds = tronWeb.fromSun(res['stats'][4])
        })
      })
    },
    changeCurrent (val) {
      this.current = val
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~@/styles/reward.scss";
</style>

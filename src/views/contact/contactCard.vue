<template>
  <div class="contactCard">
    <div class="head"><b>{{data.title}}</b><span>合同</span></div>
    <div class="profit">
      <div class="percent"><span>{{data.rate}}</span>%</div>
      <div class="desc">
        <span>30 days</span>
        <span>随本金发放</span>
      </div>
    </div>
    <div class="capital">
      <div class="tit">投资金额</div>
      <div class="amount">
        <el-select v-model="payType" placeholder="请选择">
          <el-option
            v-for="item in moneyArr"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
        <!--<a href="javascript:void(0)" v-for="(item,index) in moneyArr" @click="payType=index">{{item}}TRX</a>-->
        <!--<el-input placeholder="请输入" type="text" v-model="money">-->
        <!--<span slot="suffix" class="suffix">TRX</span>-->
        <!--</el-input>-->
        <!--<div class="tip">最低100TRX</div>-->
      </div>
    </div>
    <el-button type="primary" style="width:100%;" :loading="loading" :disabled="loading" @click="deposit">获取资金
    </el-button>

  </div>
</template>
<script>
import TrxMixin from '../../mixin/trx'

export default {
  data () {
    return {
      loading: false,
      money: '666',
      payType: 0,
      moneyArr: [100, 500, 1000, 5000, 10000, 50000, 100000]
    }
  },
  mixins: [TrxMixin],

  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  watch: {
    'tron.account' () {
      this.getTronWeb().then(tronWeb => {
        this.contract = tronWeb.contract(this.ABI, tronWeb.address.toHex(this.contract_address))
      })
    }
  },
  methods: {
    deposit () {
      this.loading = true
      this.getTronWeb(this.ref || this.defRef, this.data.pid, this.payType).then(tronWeb => {
        this.contract.makeDeposit(this.ref || this.defRef, this.data.pid, this.payType).send({
          callValue: tronWeb.toSun(this.moneyArr[this.payType])
        }).then(tx => {
          this.loading = false

          this.$message({
            message: 'Transaction was successfully sent. Wait confirming..',
            type: 'success'
          })
          this.awaitTx(tx).then(() => {
            // if(auto_upline) fetch('/auto_upline/?address=' + this.tron.account + '&upline=' + this.upline);
            //this.updateInfo();
          })
        }).catch(e => {
          this.loading = true

        })
      }).catch(e => {
        this.loading = true
      })
    }
  }
}
</script>
<style lang="scss">
  @import "~@/styles/contactCard.scss";
</style>

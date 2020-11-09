<template>
  <div class="contactCard">
    <div class="head"><b>{{data.title}}</b><span>{{$t('sidebar.contact')}}</span></div>
    <div class="profit">
      <div class="percent"><span>{{data.rate}}</span>%</div>
      <div class="desc">
        <span>{{data.d}} days</span>
        <!--随本金发放 锁定$-->
        <span>{{data.pid===0||data.pid===1||data.pid===2||data.pid===5?`${$t('contact.lock',{day:data.d})}`:$t('contact.Issued')}}
</span>
      </div>
    </div>
    <div class="capital">
      <!--投资金额-->
      <div class="tit">{{$t('contact.investMoney')}}</div>
      <div class="amount">
        <!--请选择-->
        <el-select v-model="payType" :placeholder="$t('contact.choose')">
          <el-option
            v-for="item in data.pid<5?moneyArr:moneyArrC"
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
    <!--获取资金-->
    <el-button type="primary" style="width:100%;" :loading="loading" :disabled="data.pid===2?!a3:loading"
               @click="deposit">{{$t('contact.getMoney')}}
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
      payType: 100,
      moneyArr: [100, 500, 1000, 5000, 10000, 50000, 100000],
      moneyArrC: [1000, 5000, 10000, 50000, 100000, 500000, 1000000],
      pid: 0,
      a3: false

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

        if (this.data.pid === 2) this.allow()
      })
    },
    'data.pid' (v, o) {
      this.pid = v
      if (v === 5) {
        this.payType = 1000

      } else {
        this.payType = 100
      }

      debugger
      if (v === 2) {
        this.allow()
      }
    }
  },
  methods: {
    a3Allow () {
      if (this.pid === 2) {
        debugger
        return !this.a3
      } else {
        return this.loading
      }
    },

    async allow () {
      const res = await  this.contract.a3Valve().call()
      // console.log('res', res)
      this.a3 = res['opening']
    },
    deposit () {
      this.loading = true
      const type = this.pid === 5 ? this.moneyArrC.indexOf(this.payType) : this.moneyArr.indexOf(this.payType)
      this.getTronWeb(this.ref || this.defRef, this.data.pid, type).then(tronWeb => {
        this.contract.makeDeposit(this.ref || this.defRef, this.data.pid, type).send({
          callValue: tronWeb.toSun(this.payType)
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
          this.loading = false

        })
      }).catch(e => {
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss">
  @import "~@/styles/contactCard.scss";
</style>

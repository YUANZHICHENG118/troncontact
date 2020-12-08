<!--合同-->
<template>
  <div class="contact-container">
    <el-row :gutter="30">
      <el-col
        v-for="(item, index) in ContactData"
        :key="index"
        :xs="24" :sm="12" :md="12" :lg="8"
      >
        <contact-card :data="item" :userData="userData" :class="contactItemClass(index)"></contact-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import contactCard from './contactCard'
import TrxMixin from '../../mixin/trx'

export default {
  name: 'Contact',
  data () {
    return {
      userData: undefined
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
  methods: {
    loadData () {
      this.getTronWeb().then(tronWeb => {
        this.contract.getPersonalStats(this.tron.account).call().then(res => {
          this.userData = res
        })
      })
    }
  },
  components: {
    contactCard
  },

  computed: {
    contactItemClass () {
      return index => {
        return 'contactItem' + (index + 1)
      }

    },
    ContactData () {
      let rersult = []
      rersult = [{ pid: 0, title: 'A', rate: '1', d: 5 }, { pid: 1, title: 'B', rate: '1', d: 15 }, {
        pid: 2,
        title: 'C',
        rate: '25',
        d: 30
      }]
      return rersult
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/contact.scss";
</style>

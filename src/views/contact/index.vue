<!--合同-->
<template>
  <div class="contact-container">
    <div class="tabs">
      <div
        class="tab"
        :class="{ active: current === 'A' }"
        @click="() => changeCurrent('A')"
      >
        A {{$t('sidebar.contact')}}
      </div>
      <div
        class="tab"
        :class="{ active: current === 'B' }"
        @click="() => changeCurrent('B')"
      >
        B {{$t('sidebar.contact')}}
      </div>
      <div
        class="tab"
        :class="{ active: current === 'C' }"
        @click="() => changeCurrent('C')"
      >
        C {{$t('sidebar.contact')}}
      </div>
    </div>
    <el-row :gutter="30">
      <el-col
        v-for="(item, index) in ContactData"
        :key="index"
        :xs="24" :sm="12" :md="12" :lg="8"
      >
        <contact-card :data="item"></contact-card>
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
      current: 'A'
    }
  },
  mixins: [TrxMixin],
  watch: {},
  methods: {
    loadData () {

    },
    changeCurrent (val) {
      this.current = val
    }


  },
  components: {
    contactCard
  },

  computed: {
    ContactData () {
      let rersult = []
      switch (this.current) {
        case 'A':
          rersult = [{ pid: 0, title: 'A1', rate: '5',d:5 }, { pid: 1, title: 'A2', rate: '20' ,d:15}, {
            pid: 2,
            title: 'A3',
            rate: '10',
              d:3
          }]
          break
        case 'B':
          rersult = [{ pid: 3, title: 'B1', rate: '120',d:10 }, { pid: 4, title: 'B2', rate: '150',d:20 }]
          break
        case 'C':
          rersult = [{ pid: 5, title: 'C', rate: '42',d:30 }]
          break
        default:
          rersult = []
      }
      return rersult
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/contact.scss";
</style>

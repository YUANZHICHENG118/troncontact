<!--合同-->
<template>
  <div class="contact-container">
    <div class="tabs">
      <div
        class="tab"
        :class="{ active: current === 'A' }"
        @click="() => changeCurrent('A')"
      >
        A合同
      </div>
      <div
        class="tab"
        :class="{ active: current === 'B' }"
        @click="() => changeCurrent('B')"
      >
        B合同
      </div>
      <div
        class="tab"
        :class="{ active: current === 'C' }"
        @click="() => changeCurrent('C')"
      >
        C合同
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
import contactCard from "./contactCard";
export default {
  name: "Contact",
  data() {
    return {
      current: "A",
    };
  },
  methods: {
    changeCurrent(val) {
      this.current = val;
    }
  },
  components: {
    contactCard,
  },
  computed: {
    ContactData() {
      let rersult=[]
      switch (this.current) {
        case "A":
          rersult= [{ title: 'A1',rate:'5' },{ title: 'A2',rate:'20' },{ title: 'A3',rate:'10' }];
          break;
        case "B":
          rersult= [{ title: 'B1',rate:'120' },{ title: 'B2',rate:'160' }];
          break;
        case "C":
          rersult =[{ title: 'C',rate:'45' }];
          break;
        default:
          rersult= [];
      }
      return rersult;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/contact.scss";
</style>

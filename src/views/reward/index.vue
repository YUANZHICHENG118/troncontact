<template>
  <div class="wrap">
    <div class="myreward">
      <el-row :gutter="20">
        <el-col :span="8" :xs="24">
          <div class="left rewardItem">
            <div class="tit">我的推荐奖励</div>
            <div class="val"><span>120</span>TRX</div>
          </div>
        </el-col>
        <el-col :span="16" :xs="24">
          <div class="right rewardItem">
            <div class="invite-title">
              <img src="@/assets/assetImgs/star.png" alt=""/>
              <span>推荐链接</span>
            </div>
            <div class="invite-con">
              <div class="invite-link">www.troncontact.com</div>
              <el-button type="primary">复制</el-button>
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
              <span>合同</span>
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
              <span>合同</span>
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
              <span>合同</span>
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
export default {
  data () {
    return {
      contactAlist: [
        { label: '第1代', value: '10%' },
        { label: '第2代', value: '8%' },
        { label: '第3代', value: '5%' },
        { label: '第4-10代', value: '3%' },
        { label: '第10-15代', value: '1%' }
      ],
      contactBlist: [
        { label: '第1代', value: '2%' },
        { label: '第2代', value: '2%' },
        { label: '第3代', value: '0.5%' },
        { label: '第4-10代', value: '0.5%' },
        { label: '第10-15代', value: '0.5%' }
      ],
      contactClist: [
        { label: '第1代', value: '10%' },
        { label: '第2代', value: '8%' },
        { label: '第3代', value: '5%' },
        { label: '第4-10代', value: '3%' },
        { label: '第10-15代', value: '3%' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~@/styles/reward.scss";
</style>

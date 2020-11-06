<!--我的合同-->
<template>
  <div class="myContactWrap">
    <el-row :gutter="30">
      <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <div class="myContactCard">
          <div class="my-contact-card-head">
            <span class="left">A1合同</span>
            <span class="right">合同编码</span>
          </div>
          <div class="my-contact-card-list">
            <div class="my-contact-card-list-item">
              <span class="left">存款金额</span>
              <span class="right">83.23TRX</span>
            </div>
            <div class="my-contact-card-list-item">
              <span  class="left">本期利润</span>
              <span class="right">12%</span>
            </div>
            <div class="my-contact-card-list-item">
              <span  class="left">获得收益</span>
              <span class="right">83.23TRX</span>
            </div>
            <div class="my-contact-card-list-item">
              <span  class="left">解冻日期</span>
              <span class="right">2021-05-01</span>
            </div>
            <div class="my-contact-card-list-item">
              <span  class="left">可取款</span>
              <span class="right">83.23TRX</span>
            </div>
          </div>
          <div class="my-contact-card-btns">
            <el-row :gutter="30">
              <el-col :span="12" :offset="12">
                <el-button type="primary" style="width:100%;">提取</el-button>
              </el-col>
            </el-row>
          </div>
        </div>

      </el-col>
      <el-col  :xs="24" :sm="12" :md="12" :lg="12">
        <div class="myContactCard">
          <div class="my-contact-card-head">
            <span class="left">A1合同</span>
            <span class="right">合同编码</span>
          </div>
          <div class="my-contact-card-list">
            <div class="my-contact-card-list-item">
              <span class="left">存款金额</span>
              <span class="right">83.23TRX</span>
            </div>
            <div class="my-contact-card-list-item">
              <span  class="left">本期利润</span>
              <span class="right">12%</span>
            </div>
            <div class="my-contact-card-list-item">
              <span  class="left">获得收益</span>
              <span class="right">83.23TRX</span>
            </div>
            <div class="my-contact-card-list-item">
              <span  class="left">解冻日期</span>
              <span class="right">2021-05-01</span>
            </div>
            <div class="my-contact-card-list-item">
              <span  class="left">可取款</span>
              <span class="right">83.23TRX</span>
            </div>
          </div>
          <div class="my-contact-card-btns">
            <el-row :gutter="30">
              <el-col :span="12">
                <el-button type="warning" style="width:100%;">获取现金</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="primary" style="width:100%;">提取</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
    import TrxMixin from '../../mixin/trx'

    export default {
        data() {
            return {
                myContact: [],
            }
        },

        mixins: [TrxMixin],
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    this.contract = tronWeb.contract(this.ABI, tronWeb.address.toHex(this.contract_address));
                    this.loadData();
                });
            }
        },
        methods: {
            loadData() {
                this.getTronWeb().then(tronWeb => {


                    this.contract.getDeposits(this.tron.account).call().then(res => {

                        console.log("res====",res)

                    });

                })
            },
            changeCurrent(val) {
                this.current = val;
            }


        }

    }
</script>
<style scoped lang="scss">
  @import "~@/styles/myContact.scss";
</style>

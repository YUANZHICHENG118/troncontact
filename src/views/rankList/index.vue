<template>
  <div class="rankList ">
    <div class="performance-day">
      您的当天直推业绩
      <span class="primary">120</span>
      <span class="unit">&nbsp;TRX</span>
    </div>
    <div class="rankTable">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="rank"
          label="排名"
          width="180">
          <template slot-scope="scope">
            <b :class="`rank${parseInt(scope.$index)+1}`" class="ranking">{{'0'+(scope.$index*1+1)}}</b>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          >
          <template slot-scope="scope">
            <b  class="address">{{scope.row.address}}</b>
          </template>
        </el-table-column>
        <el-table-column
          prop="number"
          label="直推数量"
          width="180">
          <template slot-scope="scope">
            <b class="number">{{scope.row.number}}</b>
          </template>
        </el-table-column>
        <el-table-column
          prop="income"
          label="预计收入"
          width="180">
          <template slot-scope="scope">
            <span class="primary income mr-8">{{parseInt(scope.row.income|| 0).toFixed(2)}}</span>
            <span class="unit">TRX</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        address: 'TYEKKfsitDuE63D1Cyou4eJgTtJfeu84V7',
        number:'77',
        income:'99'
      }, {
        address: 'TYEKKfsitDuE63D1Cyou4eJgTtJfeu84V7',
        number:'77',
        income:'99'
      }, {
        address: 'TYEKKfsitDuE63D1Cyou4eJgTtJfeu84V7',
        number:'77',
        income:'99'
      }, {
        address: 'TYEKKfsitDuE63D1Cyou4eJgTtJfeu84V7',
        number:'77',
        income:'99'
      },
        {
          address: 'TYEKKfsitDuE63D1Cyou4eJgTtJfeu84V7',
          number:'77',
          income:'99'
        }]
    }
  }
}
</script>
<style lang="scss" scoped>
  .rankList {
    position: relative;
    .performance-day{
      text-align: right;
      position: absolute;
      top: -100px;
      width: 100%;
      right: 3%;
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #4D4D4D;
      .primary{
        font-size: 48px;
        font-family: Bahnschrift_Bold;
        color: #FF4826;
        line-height: 53px;
      }
      .unit{
        color: #666666;
      }
    }
    .rankTable {
      background: #FFFFFF;
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
      border-radius: 14px;
      border: 1px solid #EBEBEB;
      padding: 30px 4%;
      ::v-deep .el-table{
        &:before{
          content: none;
        }
      }
      ::v-deep .el-table th.is-leaf,::v-deep  .el-table td{
        border-bottom: none;
      }
      .unit{
        font-size: 12px;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: #808080;
      }
      .income{
        font-size: 19px;
      }
      .address,.number{
        color: #4D4D4D;
      }
      .ranking{
        font-size: 19px;
        font-family: DINAlternate-Bold, DINAlternate;
      }
      .rank1{
        color: #FF4826;
      }
      .rank2{
        color: #FA6400;
      }
      .rank3{
        color: #F7B500;
      }
      .rank4{
        color: #22A66C;
      }
      .rank5{
        color: #40BBEC;
      }
    }
  }

</style>

<template>
  <div class="rankList ">
    <div class="rankTable">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="rank"
          label="排名"
          width="180">
          <template slot-scope="scope">
            <span :class="`rank${parseInt(scope.$index)+1}`">{{'0'+(scope.$index*1+1)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          >
        </el-table-column>
        <el-table-column
          prop="number"
          label="直推数量"
          width="180">
          <template slot-scope="scope">
            <b >{{scope.row.number}}</b>
          </template>
        </el-table-column>
        <el-table-column
          prop="income"
          label="预计收入"
          width="180">
          <template slot-scope="scope">
            <span class="primary">{{parseInt(scope.row.income|| 0).toFixed(2)}}</span>
            <span>TRX</span>
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
    margin-top: 45px;
    .rankTable {
      background: #FFFFFF;
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
      border-radius: 14px;
      border: 1px solid #EBEBEB;
      padding: 30px 4%;
    }
  }

</style>

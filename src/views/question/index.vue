<!--常见问题-->
<template>
  <div class="question-box">
    <el-collapse v-model="activeNames">
      <!--我需要什么来参加这个项目？-->
      <el-collapse-item :title="$t('question.Q1.title')" name="1">
        <div>{{$t('question.Q1.item1')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q2.title')" name="2">
        <div>{{$t('question.Q2.item1')}}
        </div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q3.title')" name="3">
        <div>{{$t('question.Q3.item1')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q4.title')" name="4">
        <div>{{$t('question.Q4.item1')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q5.title')" name="5">
        <div>{{$t('question.Q5.item1')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q6.title')" name="6">
        <div>{{$t('question.Q6.item1')}}</div>
        <div>{{$t('question.Q6.item2')}}</div>
        <div>{{$t('question.Q6.item3')}}</div>
        <div>{{$t('question.Q6.item4')}}</div>
        <div>{{$t('question.Q6.item5')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q7.title')" name="7">
        <div>{{$t('question.Q7.item1')}}</div>
        <div>{{$t('question.Q7.item2')}}</div>
        <div>{{$t('question.Q7.item3')}}</div>
        <div>{{$t('question.Q7.item4')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q8.title')" name="8">
        <div>{{$t('question.Q8.item1')}}</div>
        <div>{{$t('question.Q8.item2')}}</div>
        <div>{{$t('question.Q8.item3')}}</div>
        <div>{{$t('question.Q8.item4')}}</div>
        <div>{{$t('question.Q8.item5')}}</div>
        <div>{{$t('question.Q8.item6')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q9.title')" name="9">
        <div>{{$t('question.Q9.item1')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q10.title')" name="10">
        <div>{{$t('question.Q10.item1')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q11.title')" name="11">
        <div>{{$t('question.Q11.item1')}}</div>
        <div>{{$t('question.Q11.item2')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q12.title')" name="12">
        <div>{{$t('question.Q12.item1')}}</div>
        <div>{{$t('question.Q12.item2')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q13.title')" name="13">
        <div>{{$t('question.Q13.item1')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q14.title')" name="14">
        <div>{{$t('question.Q14.item1')}}</div>
        <div>{{$t('question.Q14.item2')}}</div>

      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q15.title')" name="15">
        <div>{{$t('question.Q15.item1')}}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('question.Q16.title')" name="15">
        <div>{{$t('question.Q16.item1')}}</div>
        <div>{{$t('question.Q16.item2')}}</div>
        <div>{{$t('question.Q16.item3')}}</div>
        <div>{{$t('question.Q16.item4')}}</div>
        <div>{{$t('question.Q16.item5')}}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeNames: ['1']
    }
  }
}
</script>
<style lang="scss">
  .question-box{
    margin: 0 0 30px;
    //collapse
    .el-collapse-item__header{
      padding: 15px 3%;
      font-weight: bold;
      font-size: 15px;
      height: auto;
      line-height: 24px;
    }
    .el-collapse-item__content{
      padding: 0 3% 10px;
      font-size: 14px;
    }
  }
</style>

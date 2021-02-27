<template>
  <div class="wisdom-left">
    <!-- 行业分析 -->
    <industry-analysis></industry-analysis>
    <!-- 行业经营 -->
    <industry-manage></industry-manage>
    <!-- 人员构成 -->
    <staff-composition></staff-composition>
  </div>
</template>
<script>
import industryAnalysis from './industry-analysis'
import industryManage from './industry-manage'
import staffComposition from './staff-composition'
export default {
  data () {
    return {
      name: 'wisdomLeft'
    }
  },
  components: {
    industryAnalysis,
    industryManage,
    staffComposition
  }
}
</script>
<style lang="scss" scoped>
.wisdom-left {
  box-sizing: border-box;
  width: 25%;
  height: 100%;
}
</style>

<template>
  <div class="wisdom-left">
    <!-- 行业分析 -->
    <industry-analysis></industry-analysis>
  </div>
</template>
<script>
import industryAnalysis from './industry-analysis'
export default {
  data () {
    return {
      name: 'wisdomLeft'
    }
  },
  components: {
    industryAnalysis
  }
}
</script>
<style lang="scss" scoped>
.wisdom-left {
  box-sizing: border-box;
  width: 40%;
  height: 100%;
  border: 1px solid yellow;
}
</style>

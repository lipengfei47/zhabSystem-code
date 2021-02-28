<template>
  <div class="industry-analysis">
    <wisdom-border v-bind="{ ...style }">
      <div slot="wisdom-border-title">案情信息</div>
      <div slot="wisdom-border-content" class="census-register-content">
      </div>
    </wisdom-border>
  </div>
</template>
<script>
import { chartOptionAnalysis } from '../option.js'

export default {
  name: 'industry-analysis',
  data () {
    return {
      style: {
        width: '454px',
        height: '412px',
        url: require('../../../assets/industry-analysis-border.png')
      }
    }
  },
  components: {},
  methods: {
    chartManageBarMethod (myChart) {
      this.myChartBar = myChart
      this.$refs.chartManageBar.clear()
      // this.$refs.chartManageBar.showLoading()
      this.myChartBar.setOption(chartOptionAnalysis())
      this.$refs.chartManageBar.hideLoading()
    }
  }
}
</script>

<style scoped lang='scss'>
.census-register-content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: url('../../../assets/2.png') no-repeat center;
  .anaylsis-chart {
    height: calc(100% - 60px);
    margin-top: 16px;
  }
}
</style>

<template>
  <div class="industry-analysis">
    <wisdom-border v-bind={...style}>
      <div slot='wisdom-border-title'>行业分析</div>
      <div slot="wisdom-border-content" class="census-register-content">
        <wisdom-echarts-frame
          @myChartMethod="chartManageBarMethod"
          ref="chartManageBar"
        ></wisdom-echarts-frame>
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
  components: {
  },
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
  color: rgb(72, 238, 216);
  color: rgb(43, 202, 197);
}
</style>

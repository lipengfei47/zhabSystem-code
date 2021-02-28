<template>
  <div class="hold-certificate">
    <wisdom-border v-bind={...style}>
      <div slot='wisdom-border-title'>持证情况</div>
      <div slot='wisdom-border-content'
           class="industry-manage-content">
        <wisdom-echarts-frame @myChartMethod="chartManageBarMethod"
                              ref="chartManageHaveCard"></wisdom-echarts-frame>
        <wisdom-echarts-frame @myChartMethod="chartManageNoneCardMethod"
                              ref="chartManageNoneCard"></wisdom-echarts-frame>
      </div>
    </wisdom-border>
  </div>
</template>
<script>
import { chartOptionHaveCard, chartOptionNoneCard } from '../option.js'
export default {
  name: 'hold-certificate',
  data () {
    return {
      style: {
        width: '454px',
        height: '262px',
        url: require('../../../assets/staff-composition-border.png')
      },
      myChartHaveCard: null,
      myChartNoneCard: null
    }
  },
  components: {
  },
  methods: {
    chartManageBarMethod (myChart) {
      this.myChartHaveCard = myChart
      this.$refs.chartManageHaveCard.clear()
      // this.$refs.chartManageBar.showLoading()
      this.myChartHaveCard.setOption(chartOptionHaveCard())
      this.$refs.chartManageHaveCard.hideLoading()
    },
    chartManageNoneCardMethod (myChart) {
      this.myChartNoneCard = myChart
      this.$refs.chartManageNoneCard.clear()
      // this.$refs.chartManageBar.showLoading()
      this.myChartNoneCard.setOption(chartOptionNoneCard())
      this.$refs.chartManageNoneCard.hideLoading()
    }
  }
}
</script>
<style scoped lang='scss'>
.industry-manage-content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
display: flex;
}
</style>

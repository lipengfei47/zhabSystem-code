<template>
  <div class="industry-manage">
    <wisdom-border v-bind={...style}>
      <div slot='wisdom-border-title'>行业经营</div>
      <div slot='wisdom-border-content' class="industry-manage-content">
        <wisdom-echarts-frame @myChartMethod="chartManageBarMethod"
                              ref="chartManageBar"></wisdom-echarts-frame>
      </div>
    </wisdom-border>
  </div>
</template>
<script>
import { chartOptionManageBar } from '../option.js'
export default {
  name: 'industry-manage',
  data () {
    return {
      style: {
        width: '454px',
        height: '338px',
        url: require('../../../assets/industry-manage-border.png')
      },
      myChartBar: null
    }
  },
  components: {
  },
  mounted () {

  },
  methods: {
    chartManageBarMethod (myChart) {
      this.myChartBar = myChart
      this.$refs.chartManageBar.clear()
      // this.$refs.chartManageBar.showLoading()
      this.myChartBar.setOption(chartOptionManageBar())
      // this.$refs.chartManageBar.hideLoading()
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
  color: rgb(72, 238, 216);
  color: rgb(43, 202, 197);
}
</style>

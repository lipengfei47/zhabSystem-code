<template>
  <div class="census-register">
    <wisdom-border v-bind={...style}>
      <div slot='wisdom-border-title'>户籍情况</div>
      <div slot='wisdom-border-content' class="census-register-content">
        <!-- <wisdom-echarts-frame @myChartMethod="chartManageBarMethod"
                              ref="chartManageBar"></wisdom-echarts-frame> -->
      </div>
    </wisdom-border>
  </div>
</template>
<script>
// import { chartOptionSatff } from '../option.js'
export default {
  name: 'census-register',
  data () {
    return {
      style: {
        width: '454px',
        height: '262px',
        url: require('../../../assets/staff-composition-border.png')
      }
    }
  },
  components: {
  },
  methods: {
    chartManageBarMethod (myChart) {
      // this.myChartBar = myChart
      // this.$refs.chartManageBar.clear()
      // // this.$refs.chartManageBar.showLoading()
      // this.myChartBar.setOption(chartOptionSatff())
      // this.$refs.chartManageBar.hideLoading()
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

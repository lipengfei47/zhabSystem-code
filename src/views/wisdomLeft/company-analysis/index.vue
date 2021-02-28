<!--  -->
<template>
  <div class="industry-analysis">
    <wisdom-border v-bind="{ ...style }">
      <div slot="wisdom-border-title">企业分析</div>
      <div slot="wisdom-border-content" class="census-register-content">
<!--        <div class="wisdom-analysis">-->
<!--          <div class="wisdom-analysis-left">保安培训机构<span class="analysic-weight">3家</span></div>-->
<!--          <div class="wisdom-analysis-right">守押企业<span class="analysic-weight">3家</span></div>-->
          <img src="../../../assets/enterprise.png"

               width="300"
               height="60" />
<!--          <wisdom-echarts-frame-->
<!--        </div>-->
        <wisdom-echarts-frame
          class="anaylsis-chart"
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
  color: rgb(72, 238, 216);
  color: rgb(43, 202, 197);
  .anaylsis-chart {
    height: calc(100% - 60px);
    margin-top: 16px;
  }
}
.wisdom-analysis {
  box-sizing: border-box;
  width: 382px;
  height: 44px;
  padding: 0 37px 0 30px;
  line-height: 44px;
  margin: 0 auto;
  font-size: 16px;
  color: #1cbde0;
  background: url('../../../assets/analysis-bg.png') 0 0 / 100% 100% no-repeat;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    clear: both;
  }
  .wisdom-analysis-left {
    float: left;
  }
  .wisdom-analysis-right {
    float: right;
  }
  .analysic-weight {
    color: #F7B500;
    font-weight: 800;
    margin-left: 16px;
  }
}
</style>

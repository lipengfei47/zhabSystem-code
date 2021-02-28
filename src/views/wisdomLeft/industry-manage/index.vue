<!--行业经营页面 -->
<template>
  <div class="industry-manage">
    <wisdom-border v-bind={...style}>
      <div slot='wisdom-border-title' class="wisdom-border-title-flex">
        <span class="industry-manage-text">行业经营</span>
        <wisdom-tab-switch :width='"100%"'
                           :height='"60px"'
                           :tabItemStyle='tabItemStyle'
                           :tabList='tabList'
                           :defaultId='selectId'
                           @onChangItem='onChangItem'></wisdom-tab-switch>
      </div>
      <div slot='wisdom-border-content'
           class="industry-manage-content">
        <wisdom-echarts-frame @myChartMethod="chartManageBarMethod"
                              ref="chartManageBar"
                              v-if="selectId==1"></wisdom-echarts-frame>
                              <div class="temporary" v-if="selectId==0" ></div>
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
      tabItemStyle: [
        {
          marginLeft: '0px'
        },
        {
          marginLeft: '16px'
        },
        {
          marginLeft: '16px'
        }
      ],
      tabList: [
        {
          id: 0,
          value: '占比'
        },
        {
          id: 1,
          value: '趋势'
        }
      ],
      selectId: 0,
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
    },
    onChangItem (selectId) {
      console.log('1', selectId)
      this.selectId = selectId
    }
  }
}
</script>
<style scoped lang='scss'>
.wisdom-border-title-flex{
  display: flex;
  .industry-manage-text{
    display: inline-block;
    width: 90px;
    height: 60px;
  }
}
.industry-manage-content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  .temporary{
    width: 100%;
    height: 100%;
    background: url('../../../assets/1.png') no-repeat;
  }
}
</style>

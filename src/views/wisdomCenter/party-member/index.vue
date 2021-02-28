<template>
  <div class="party-member">
    <wisdom-border v-bind={...style}>
      <div slot='wisdom-border-title'>党员情况</div>
      <div slot='wisdom-border-content'
           class="party-member-content">
        <wisdom-echarts-frame @myChartMethod="chartManageBarMethod"
                              class="party-member-content-echarts"
                              ref="chartManageBar"></wisdom-echarts-frame>
        <div style="width:50%"
             class="party-member-content-right">
          <div class="party-member-content-right-top">
            <span class="party-member">党员数</span>
            <div class="party-member-num">
              <span class="span1">215</span>
              <span class="span2">占比 30%</span>
            </div>
          </div>
          <div class="party-member-content-right-bottom">
            <span class="party-member">群众数</span>
            <div class="party-member-num">
              <span class="span1">215</span>
              <span class="span2">占比 30%</span>
            </div>
          </div>
        </div>
      </div>
    </wisdom-border>
  </div>
</template>
<script>
import { chartOptionParty } from '../option.js'

export default {
  name: 'party-member',
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
      this.myChartBar = myChart
      this.$refs.chartManageBar.clear()
      // this.$refs.chartManageBar.showLoading()
      this.myChartBar.setOption(chartOptionParty())
      this.$refs.chartManageBar.hideLoading()
    }
  }
}
</script>
<style scoped lang='scss'>
.party-member-content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  &-echarts {
    width: 50%;
  }
  &-right {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    &-top {
      .party-member-num {
        .span1 {
          color: #ffcc00;
        }
        .span2 {
        }
      }
    }
    &-bottom {
      .party-member-num {
        .span1 {
          color: #0063ff;
        }
      }
    }
  }
}
</style>

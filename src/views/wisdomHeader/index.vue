<template>
  <div class="wisdom-header">
    <div class="wisdom-header-button"
         @click="goHref">管理后台</div>
    <div class="wisdom-header-time">{{time}}   {{weekDate}}</div>
  </div>
</template>
<script>
import { getNewData } from 'utils/common.js'
function getWeekDate () {
  var now = new Date()
  var day = now.getDay()
  var weeks = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六')
  var week = weeks[day]
  return week
}
export default {
  name: 'wisdomHeader',
  data () {
    return {
      time: getNewData(0),
      weekDate: getWeekDate()
    }
  },
  methods: {
    goHref () {
      window.open('http://56.32.38.192:8080/zhabAdmin')
    }
  }
}
</script>
<style scoped lang='scss'>
.wisdom-header {
  box-sizing: border-box;
  width: 100%;
  height: 66px;
  line-height: 66px;
  background: url('../../assets/wisdom-header.png') no-repeat;
  display: flex;
  &-button {
    width: auto;
    color: turquoise;
    width: 90%;
    margin-left: 10px;
  }
  &-time {
    color: #fff;
  }
}
</style>

<template>
  <div class="time-dialog">
    <div class="time-data">{{hour}}&nbsp;&nbsp;{{minute}}</div>
    <div class="time-dialog-people">实时排班人数:<span>&nbsp;&nbsp;2481</span></div>
    <div>执勤高峰段:</div>
    <div class="peak-time">
      <span>09:30</span>
      <span>10:30</span>
      <span>08:30</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'time-dialog',
  data () {
    return {
      hour: 0,
      minute: 0
    }
  },
  mounted () {
    var d = new Date()
    this.hour = d.getHours()// 得到小时数
    this.minute = d.getMinutes()// 得到分钟数
  }
}
</script>
<style lang="scss" scoped>
.time-dialog {
  position: absolute;
  left: 60%;
  top: 10%;
  box-sizing: border-box;
  width: 253px;
  height: 151.9px;
  border: 1px solid #066b87;
  z-index: 30;
  background: rgba(2, 19, 58, 0.2);
  box-shadow:0px 0px 10px 10px rgba(6, 107, 135,1) inset;
  color: #fff;
  padding: 10px 25px 0;
  .time-data{
    font-weight: bold;
    font-size: 36px;
    color: #67FFFE;
  }
  &-people{
    font-size: 16px;
    margin-bottom: 5px;
    span{
      color: #07DBD9;
      font-weight: bold;
    }
  }
  .peak-time{
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
    span:nth-child(1){
      color: #FE4D1E;
      margin-right: 10px;
    }
    span:nth-child(2){
      color: #0EBF7F;
      margin-right: 10px;
    }
    span:nth-child(3){
      color: #07DBD9;
    }
  }
}
</style>

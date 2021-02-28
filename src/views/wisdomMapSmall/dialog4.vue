<template>
  <div class="bg">
    <div class="title">张三</div>
    <div class="line">
    <img src="../../assets/spot.png" style=" float:left;margin: 10px 11px 0 33px">
    <div class="text">位置：崂山区松岭路68号</div>
    </div>
    <div class="line">
    <img src="../../assets/spot.png" style=" float:left;margin: 10px 11px 0 33px">
    <div class="text">企业法人：张扬</div>
    </div>
    <div class="line">
    <img src="../../assets/spot.png" style=" float:left;margin: 10px 11px 0 33px">
    <div class="text">安保人数：45</div>
    </div>
    <div class="line">
    <img src="../../assets/spot.png" style=" float:left;margin: 10px 11px 0 33px">
    <div class="text">安保车辆：10</div>
    </div>
    <div class="line">
    <img src="../../assets/spot.png" style=" float:left;margin: 10px 11px 0 33px">
    <div class="text">指挥调度：6</div>
    </div>
    <div class="line">
    <img src="../../assets/spot.png" style=" float:left;margin: 10px 11px 0 33px">
    <div class="text"><div style="float:left">等级评价：</div>
      <div class="start">
        <img src="../../assets/startl.png" style="float:left;margin-right:5px">
        <img src="../../assets/startl.png" style="float:left;margin-right:5px">
        <img src="../../assets/startl.png" style="float:left;margin-right:5px">
        <img src="../../assets/startd.png" style="float:left;margin-right:5px">
        <img src="../../assets/startd.png" style="float:left;margin-right:5px">
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .bg{
    position: absolute;
    width: 248px;
    height: 312px;
    background: url(../../assets/bg2.png);
  }
  .title{
    width: 217px;
    height: 20px;
    font-size: 20px;
    float: left;
    line-height: 20px;
    color: #fff;
    letter-spacing: 3px;
    margin: 34px 0 20px 31px;
  }
  .line{
    width: 248px;
    height: 29px;
    font-size: 20px;
    float: left;
    line-height: 29px;
    color: #fff;
    .text{
      width: 180px;
      float: left;
      font-size: 16px;
      color: #fff;
    }
    .start{
        float: left;
        margin-top: 5px;
      }
  }
</style>

<template>
  <div class="bg">
    <div class="title">A区域</div>
    <div class="line">
    <img src="../../assets/spot.png" style=" float:left;margin: 10px 11px 0 33px">
    <div class="text">排班人数：5</div>
    </div>
    <div class="line">
    <img src="../../assets/spot.png" style=" float:left;margin: 10px 11px 0 33px">
    <div class="text">服务范围：A区域附近安保</div>
    </div>
    <div class="table">
      <div class="title1">
        <div class="span">序号</div>
        <div class="span">姓名</div>
        <div class="span" >状态</div>
        <div class="span">
          联系
        </div>
      </div>
      <div class="line">
        <div class="span" style="font-weight:bold;font-style: italic">1</div>
        <div class="span">张某某</div>
        <div class="span" style="color:#52BA56">在岗</div>
        <div class="span">
          <img src="../../assets/phone.png">
        </div>
      </div>
      <div class="line">
        <div class="span" style="font-weight:bold;font-style: italic">2</div>
        <div class="span">张某某</div>
        <div class="span" style="color:#52BA56">在岗</div>
        <div class="span">
          <img src="../../assets/phone.png">
        </div>
      </div>
      <div class="line">
        <div class="span" style="font-weight:bold;font-style: italic">3</div>
        <div class="span">张某某</div>
        <div class="span" style="color:#52BA56">在岗</div>
        <div class="span">
          <img src="../../assets/phone.png">
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
    width: 296px;
    height: 315px;
    background: url(../../assets/bg1.png);
  }
  .title{
    width: 265px;
    height: 20px;
    font-size: 20px;
    float: left;
    line-height: 20px;
    color: #fff;
    letter-spacing: 3px;
    margin: 22px 0 20px 31px;
  }
  .line{
    width: 296px;
    height: 29px;
    font-size: 20px;
    float: left;
    line-height: 29px;
    color: #fff;
    .text{
      width: 200px;
      float: left;
      font-size: 16px;
      color: #fff;
    }
    .start{
        float: left;
        margin-top: 5px;
      }
  }
  .table{
    width: 244px;
    float: left;
    margin:  0 0 0 29px;
    .title1{
      width: 244px;
      height: 28px;
      float: left;
      background-image: url(../../assets/table.png);
      .span{
        width: 61px;
        height: 28px;
        float: left;
        font-size: 14px;
        color: #fff;
        line-height: 28px;
        text-align: center;
      }
    }
    .line{
      width: 244px;
      height: 28px;
      float: left;
      .span{
        width: 61px;
        height: 28px;
        float: left;
        font-size: 14px;
        color: #fff;
        line-height: 28px;
        text-align: center;
      }
    }
  }
</style>

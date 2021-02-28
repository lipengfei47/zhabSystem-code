<template>
  <div class="wisdom-map">
      <!-- <div class="sit3">
      <img src="../../assets/y.png" style="position: absolute;left: 140px;top: 500px" @click="handClick">
      <img src="../../assets/y.png" style="position: absolute;left: 400px;top: 360px" @click="handClick">
      <img src="../../assets/y.png" style="position: absolute;left: 600px;top: 150px" @click="handClick">
      <img src="../../assets/y.png" style="position: absolute;left: 700px;top: 250px" @click="handClick">
      <img src="../../assets/y.png" style="position: absolute;left: 680px;top: 400px" @click="handClick">
      <img src="../../assets/y.png" style="position: absolute;left: 500px;top: 470px" @click="handClick">
      <img src="../../assets/y.png" style="position: absolute;left: 560px;top: 520px" @click="handClick">
      <img src="../../assets/jb.png" style="position: absolute;left: 450px;top: 380px" @click="handClick">
    </div>
    <img src="../../assets/map-center.png" class="img1" alt="" srcset="" > -->
    <!-- <div class="sit3">
    <img src="../../assets/r.png" style="position: absolute;left: 540px;top: 300px" @click="handClick">
    <img src="../../assets/o.png" style="position: absolute;left: 320px;top: 380px" @click="handClick">
    <img src="../../assets/g.png" style="position: absolute;left: 200px;top: 420px" @click="handClick">
      <img src="../../assets/jb.png" style="position: absolute;left: 450px;top: 300px" @click="handClick">
    </div>
    <img src="../../assets/map-center2.png" class="img2" alt="" srcset="" > -->
    <img src="../../assets/map-center3.png" class="img3" alt="" srcset="" >
    <div class="sit3">
      <div class="name" style="left: 140px;top: 320px" @click="handClick">A区</div>
      <div class="name" style="left: 250px;top: 190px" @click="handClick">B区</div>
      <div class="name" style="left: 330px;top: 280px" @click="handClick">C区</div>
      <div class="name" style="left: 360px;top: 390px" @click="handClick">D区</div>
      <div class="name" style="left: 410px;top: 470px" @click="handClick">E区</div>
      <div class="name" style="left: 500px;top: 280px" @click="handClick">F区</div>
      <div class="name" style="left: 540px;top: 500px" @click="handClick">G区</div>
      <img src="../../assets/jb.png" style="position: absolute;left: 500px;top: 350px" @click="handClick">
      <img src="../../assets/p.png" style="position: absolute;left: 320px;top: 350px" @click="handClick">
      <img src="../../assets/p.png" style="position: absolute;left: 640px;top: 550px" @click="handClick">
      <img src="../../assets/p.png" style="position: absolute;left: 500px;top: 200px" @click="handClick">
      <img src="../../assets/p.png" style="position: absolute;left: 500px;top: 400px" @click="handClick">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'wisdomMap'
    }
  },
  methods: {
    handClick () {
      alert('1111111111111111111')
    }
  }
}
</script>
<style lang="scss" scoped>
.wisdom-map{
  box-sizing: border-box;
  position: absolute;
  left: 610px;
  top: 250px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  .img1 {
    width: 1000px;
    margin: -200px 0 0 -40px;
  }
  .img2 {
    width: 1000px;
    margin: -200px 0 0 -40px;
  }
  .img3 {
    width: 700px;
    margin: 0 0 0 -80px;
  }
  .sit3{
    width: 600px;
    height: 600px;
    position: absolute;
  }
  .name{
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 100px;
    width:100px;
    height:100px;
    position: absolute;
    cursor:pointer
  }
}
</style>

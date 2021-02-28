<template>
  <div class="wisdom-map">
    <!-- 第一张图 -->
      <!-- <div class="sit3">
        <dialog2 id="dialog" v-show="flag"></dialog2>
      <img src="../../assets/y.png" style="position: absolute;left: 100px;top: 400px" @click="handClick" @mouseover="display"
    @mouseleave="hide">
      <img src="../../assets/y.png" style="position: absolute;left: 210px;top: 300px" @click="handClick" @mouseover="display"
    @mouseleave="hide">
      <img src="../../assets/y.png" style="position: absolute;left: 400px;top: 150px" @click="handClick" @mouseover="display"
    @mouseleave="hide">
      <img src="../../assets/y.png" style="position: absolute;left: 500px;top: 220px" @click="handClick" @mouseover="display"
    @mouseleave="hide">
      <img src="../../assets/y.png" style="position: absolute;left: 500px;top: 350px" @click="handClick" @mouseover="display"
    @mouseleave="hide">
      <img src="../../assets/y.png" style="position: absolute;left: 380px;top: 450px" @click="handClick" @mouseover="display"
    @mouseleave="hide">
      <img src="../../assets/y.png" style="position: absolute;left: 230px;top: 350px" @click="handClick" @mouseover="display"
    @mouseleave="hide">
      <img src="../../assets/jb.png" style="position: absolute;left: 360px;top: 380px" @click="handClick" @mouseover="display"
    @mouseleave="hide">
    </div>
    <img src="../../assets/map-center.png" class="img1" alt="" srcset="" > -->
    <!-- 第二张图 -->
    <!-- <div class="sit3">
    <dialog1 id="dialog" v-show="flag"></dialog1>
    <img src="../../assets/r.png" style="position: absolute;left: 420px;top: 300px" @click="handClick" @mouseover="display"
    @mouseleave="hide">
    <img src="../../assets/o.png" style="position: absolute;left: 150px;top: 340px" @click="handClick" @mouseover="display"
    @mouseleave="hide">
    <img src="../../assets/g.png" style="position: absolute;left: 10px;top: 380px" @click="handClick" @mouseover="display"
    @mouseleave="hide">
      <img src="../../assets/jb.png" style="position: absolute;left: 320px;top: 280px" @click="handClick" @mouseover="display"
    @mouseleave="hide">
    </div>
    <img src="../../assets/map-center2.png" class="img2" alt="" srcset="" > -->
    <!-- 第三章图 -->
    <dialog2 id="dialog" v-show="flag"></dialog2>
    <dialog4 id="dialog4" v-show="flag2"></dialog4>
    <img src="../../assets/map-center3.png" class="img3" alt="" srcset="" >
    <div class="sit3">
      <div class="name" style="left: 0;top: 180px" @click="handClick" @mouseover="display"
    @mouseleave="hide">A区</div>
      <div class="name" style="left: 91px;top: 44px" @click="handClick" @mouseover="display"
    @mouseleave="hide">B区</div>
      <div class="name" style="left: 185px;top: 135px" @click="handClick" @mouseover="display"
    @mouseleave="hide">C区</div>
      <div class="name" style="left: 233px;top: 230px" @click="handClick" @mouseover="display"
    @mouseleave="hide">D区</div>
      <div class="name" style="left: 262px;top: 332px" @click="handClick" @mouseover="display"
    @mouseleave="hide">E区</div>
      <div class="name" style="left: 370px;top: 114px" @click="handClick" @mouseover="display"
    @mouseleave="hide">F区</div>
      <div class="name" style="left: 384px;top: 354px" @click="handClick" @mouseover="display"
    @mouseleave="hide">G区</div>
      <img src="../../assets/jb.png" style="position: absolute;left: 329px;top: 237px" @click="handClick" @mouseover="display"
    @mouseleave="hide">
      <img src="../../assets/p.png" style="position: absolute;left: 294px;top: 287px;z-index: 40;" @click="handClick" @mouseover="displayp"
    @mouseleave="hidep">
      <img src="../../assets/p.png" style="position: absolute;left: 373px;top: 400px;z-index: 40;" @click="handClick" @mouseover="displayp"
    @mouseleave="hidep">
      <img src="../../assets/p.png" style="position: absolute;left: 403px;top: 247px;z-index: 40;" @click="handClick" @mouseover="displayp"
    @mouseleave="hidep">
      <img src="../../assets/p.png" style="position: absolute;left: 100px;top: 100px;z-index: 40;" @click="handClick" @mouseover="displayp"
    @mouseleave="hidep">
    </div>
  </div>
</template>
<script>
// import dialog1 from './dialog1.vue'
import dialog2 from './dialog2.vue'
// import dialog3 from './dialog3.vue'
import dialog4 from './dialog4.vue'
export default {
  data () {
    return {
      name: 'wisdomMap',
      flag: false,
      flag2: false
    }
  },
  components: {
    // dialog1,
    dialog2,
    // dialog3,
    dialog4
  },
  methods: {
    handClick () {
    },
    display (e) {
      this.flag = true
      var x = e.target.offsetLeft - 90
      var y = e.target.offsetTop - 298
      var dom = document.getElementById('dialog')
      dom.style.left = x + 'px'
      dom.style.top = y + 'px'
    },
    hide (e) {
      this.flag = false
      // const dom = document.getElementById('dialog')
      // console.log(dom.style.d, '是假对象')
    },
    displayp (e) {
      this.flag2 = true
      var x = e.target.offsetLeft - 100
      var y = e.target.offsetTop - 340
      var dom = document.getElementById('dialog4')
      console.log(dom.style.left, '是假对象')
      dom.style.left = x + 'px'
      dom.style.top = y + 'px'
    },
    hidep (e) {
      this.flag2 = false
      // const dom = document.getElementById('dialog')
      // console.log(dom.style.d, '是假对象')
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
    width: 900px;
    margin: 0 0 0 -120px;
  }
  .img2 {
    width: 900px;
    margin: 100px 0 0 -120px;
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
    cursor:pointer;
    z-index: 10;
  }
}
#dialog{
  left: 20px;
  top: 20px;
  z-index: 41;
}
#dialog4{
  left: 20px;
  top: 20px;
  z-index: 41;
}
</style>

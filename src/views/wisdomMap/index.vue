<template>
  <div class="wisdom-map">
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
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url('../../assets/map-bac.png') no-repeat;
  background-size: 1920px 1080px;
  z-index: -222;
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
    width: 900px;
    margin: -100px 0 0 -35px;
  }
  .sit3{
    width: 900px;
    height: 900px;
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

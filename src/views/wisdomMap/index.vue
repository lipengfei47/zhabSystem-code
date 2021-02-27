<template>
  <div class="wisdom-map">
    <img src="../../assets/map-center.png" alt="" srcset="">
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'wisdomMap'
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
  img{
    width: 800px;
  }
}
</style>

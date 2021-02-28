<template>
  <div class="wisdom-border"
       :style="{width:width,height:height,backgroundImage: `url(${url})`,'--width':width,'--height':height}">
    <div class="wisdom-border-title">
      <slot name='wisdom-border-title'></slot>
    </div>
    <div class="wisdom-border-content">
      <slot name='wisdom-border-content'></slot>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'wisdom-border'
    }
  },
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang='scss'>
.wisdom-border {
  background-repeat: no-repeat;
  background-size: val(--width) val(--height);
  background-position: center;
  box-sizing: border-box;
  &-title {
    box-sizing: border-box;
    width:100%;
    height: 60px;
    color: #05EAE4;
    line-height: 60px;
    padding-left: 35px;
  }
  &-content{
    box-sizing: border-box;
    width:100%;
    height:calc(100% - 60px);
    // border:1px solid red;
  }
}
</style>

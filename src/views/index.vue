<template>
    <div class="wisdom-box"
         ref="ScaleBox"
         :style="{
          width:width+'px',
          height:height+'px'
        }">
      <wisdom-header></wisdom-header>
      <wisdom-content></wisdom-content>
    </div>
</template>

<script>
import { debounce } from 'utils/common'
import wisdomContent from './wisdomContent'
import wisdomHeader from './wisdomHeader'

export default {
  name: 'wisdom-box',
  data () {
    return {
      scale: 0,
      width: 1920,
      height: 1080
    }
  },
  components: {
    wisdomContent,
    wisdomHeader

  },
  mounted () {
    this.setScale()
    window.addEventListener('resize', debounce(this.setScale))
  },

  methods: {
    getScale () {
      // 初始化的时候获得大屏幕的比例
      const { width, height } = this
      const ww = window.innerWidth / width
      const wh = window.innerHeight / height
      return ww < wh ? ww : wh
    },
    setScale () {
      this.scale = this.getScale()
      // 给scale赋值
      this.$refs.ScaleBox.style.setProperty('--scale', this.scale)
    }
  }
}
</script>

<style >
.wisdom-box {
  transform: scale(var(--scale)) translate(-50%, -50%);
  box-sizing: border-box;
  /* background: #00050e; */
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  transform-origin: 0 0;
}
</style>

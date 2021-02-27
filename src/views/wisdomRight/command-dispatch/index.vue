<template>
  <div class="command-dispatch">
    <wisdom-border v-bind={...style}>
      <div slot='wisdom-border-title'>指挥调度</div>
      <div slot='wisdom-border-content' class="command-dispatch-content">
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
      </div>
    </wisdom-border>
  </div>
</template>
<script>
export default {
  name: 'command-dispatch',
  data () {
    return {
      style: {
        width: '454px',
        height: '338px',
        url: require('../../../assets/industry-manage-border.png')
      }
    }
  },
  components: {
  },
  mounted () {

  },
  methods: {
  }
}
</script>
<style scoped lang='scss'>
.command-dispatch-content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  color: rgb(72, 238, 216);
}
</style>

<template>
  <div class="industry-analysis">
    <wisdom-border v-bind={...style}>
      <div slot='wisdom-border-title'>行业分析</div>
    </wisdom-border>
  </div>
</template>
<script>
export default {
  name: 'industry-analysis',
  data () {
    return {
      name: 'wisdomLeft',
      style: {
        width: '454px',
        height: '412px',
        url: require('../../../assets/industry-analysis-border.png')
      }
    }
  },
  components: {
  }
}
</script>

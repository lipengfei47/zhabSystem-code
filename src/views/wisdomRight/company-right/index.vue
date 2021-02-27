<template>
  <div class="company-right">
    <wisdom-border v-bind={...style}>
      <div slot='wisdom-border-title'>企业规模</div>
    </wisdom-border>
  </div>
</template>
<script>
export default {
  name: 'company-right',
  data () {
    return {
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

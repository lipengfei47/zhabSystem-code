<template>
  <div class="wisdom-right">
    <company-right></company-right>
    <command-dispatch></command-dispatch>
    <census-register></census-register>
  </div>
</template>
<script>
import companyRight from './company-right'
import commandDispatch from './command-dispatch'
import censusRegister from './census-register'
export default {
  name: 'wisdom-right',
  data () {
    return {
    }
  },
  components: {
    companyRight,
    commandDispatch,
    censusRegister
  }
}
</script>
<style lang="scss" scoped>
.wisdom-right{
  box-sizing: border-box;
  width:25%;
  height: 100%;
}
</style>

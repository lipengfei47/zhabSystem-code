<template>
  <div class="wisdom-right">
    <template>
      <company-right v-if="pageType !=='companyDeatilPage'"></company-right>
      <!-- 保安人员 -->
      <security-people v-if="pageType==='companyDeatilPage'"></security-people>
    </template>
    <template>
      <command-dispatch v-if="pageType !=='companyDeatilPage'"></command-dispatch>
      <company-dispatch v-if="pageType==='companyDeatilPage'"></company-dispatch>
    </template>
    <census-register></census-register>
  </div>
</template>
<script>
import companyRight from './company-right'
import commandDispatch from './command-dispatch'
import censusRegister from './census-register'
import securityPeople from './security-people'
import companyDispatch from './company-dispatch'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'wisdom-right',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['pageType'])
  },
  components: {
    companyRight,
    commandDispatch,
    censusRegister,
    securityPeople,
    companyDispatch
  },
  methods: {
    ...mapActions({
      set_pageType: 'SET_PAGETYPE'
    })
  }
}
</script>
<style lang="scss" scoped>
.wisdom-right {
  box-sizing: border-box;
  width: 25%;
  height: 100%;
}
</style>

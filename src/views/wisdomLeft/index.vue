<template>
  <div class="wisdom-left">
    <template>
      <!-- 行业分析 -->
      <industry-analysis v-if="pageType==='industryAnalysisPage'"></industry-analysis>
      <!-- 案件信息 -->
      <case-info v-if="pageType==='caseOutPage'"></case-info>
    </template>
    <template>
      <!-- 行业经营 -->
      <industry-manage v-if="pageType==='industryAnalysisPage'"></industry-manage>
      <!-- 附近情况 -->
      <nearby-condition v-if="pageType==='caseOutPage'"></nearby-condition>
    </template>
    <!-- 人员构成 -->
    <staff-composition></staff-composition>
  </div>
</template>
<script>
import industryAnalysis from './industry-analysis'
import industryManage from './industry-manage'
import staffComposition from './staff-composition'
import caseInfo from './case-info'
import nearbyCondition from './nearby-condition'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'wisdomLeft',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['pageType'])
  },
  components: {
    industryAnalysis,
    industryManage,
    staffComposition,
    caseInfo,
    nearbyCondition
  },
  methods: {
    ...mapActions({
      set_pageType: 'SET_PAGETYPE'
    })
  }
}
</script>
<style lang="scss" scoped>
.wisdom-left {
  box-sizing: border-box;
  width: 25%;
  height: 100%;
}
</style>

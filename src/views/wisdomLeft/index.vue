<template>
  <div class="wisdom-left">
    <template>
      <!-- 行业分析 -->
      <industry-analysis v-if="pageType==='industryAnalysisPage'"></industry-analysis>
      <!-- 案件信息 -->
      <case-info v-if="pageType==='caseOutPage'"></case-info>
      <!-- 企业分析 -->
      <company-analysis v-if="pageType==='companyDeatilPage'"></company-analysis>
      <!--调度企业企业信息页面  案情信息  -->
      <case-info-company v-if="pageType==='caseCompanyPage'"></case-info-company>
    </template>
    <template>
      <!-- 行业经营 -->
      <industry-manage v-if="pageType==='industryAnalysisPage'"></industry-manage>
      <!-- 附近情况 -->
      <nearby-condition v-if="pageType==='caseOutPage'"></nearby-condition>
      <!-- 企业经营情况 -->
      <company-operation-condition v-if="pageType==='companyDeatilPage' ||pageType==='caseCompanyPage' "></company-operation-condition>
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
import caseInfoCompany from './case-info-company'
import nearbyCondition from './nearby-condition'
import companyAnalysis from './company-analysis'
import companyOperationCondition from './company-operation-condition'
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
    nearbyCondition,
    companyAnalysis,
    companyOperationCondition,
    caseInfoCompany
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

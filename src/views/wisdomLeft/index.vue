<template>
  <div class="wisdom-left">
    <!-- 行业分析 -->
    <industry-analysis v-if="pageType==='industryAnalysisPage'"></industry-analysis>
    <!-- 案件信息 -->
    <case-info v-if="pageType==='caseOutPage'"></case-info>
    <!-- 行业经营 -->
    <industry-manage></industry-manage>
    <!-- 人员构成 -->
    <staff-composition></staff-composition>

  </div>
</template>
<script>
import industryAnalysis from './industry-analysis'
import industryManage from './industry-manage'
import staffComposition from './staff-composition'
import caseInfo from './case-info'
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
    caseInfo
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

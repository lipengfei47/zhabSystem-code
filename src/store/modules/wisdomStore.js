export default {
  state: {
    /***
     * @param industryAnalysisPage 行业分析页面
     * @param caseOutPage 案情筛选页面
     * @param companyDeatilPage 企业详细信息
     */
    pageType: 'industryAnalysisPage'
  },
  mutations: {
    set_pageType (state, type) {
      state.pageType = type
    }
  },
  actions: {
    SET_PAGETYPE ({
      commit
    }, type) {
      commit('set_pageType', type)
    }
  }
}

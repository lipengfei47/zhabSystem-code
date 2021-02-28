export default {
  state: {
    /***
     * @param industryAnalysisPage 行业分析页面
     * @param caseOutPage 案情筛选页面
     * @param companyDeatilPage 企业详细信息
     * @param caseCompanyPage 调度企业企业信息页面
     */
    pageType: 'caseCompanyPage'
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

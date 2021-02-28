import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import wisdomStore from './modules/wisdomStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    wisdomStore
  },
  getters
})

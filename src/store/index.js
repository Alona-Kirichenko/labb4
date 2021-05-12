import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    something: 10,
    x: 2
  },
  mutations: {
    f(state) {
      state.something = state.something + 2
    },
    f2(state) {
      state.x++
    }
  },
  actions: {},
  modules: {}
})

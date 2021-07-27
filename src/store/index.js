import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    originalCounter: 0
  },
  mutations: {
    setCounter(state, counter) {
      state.originalCounter = counter
    }
  },
  getters: {
    originalCounter: state => state.originalCounter
  },
  actions: {
  },
  modules: {
  }
})

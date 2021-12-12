import Vue from 'vue'
import Vuex from 'vuex'

import Usuario from './modules/Usuario'
import Tarjetas from './modules/Tarjetas'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Usuario,
    Tarjetas
  }
})

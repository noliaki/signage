import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videoDevices: [
      {
        deviceId: 123,
        streamURL: 'string'
      }
    ],
    userMedias: []
  },
  actions,
  getters,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})

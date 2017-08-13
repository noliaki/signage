import Vue from 'vue'
import Vuex from 'vuex'

import video from './modules/video'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    video
  },
  strict: process.env.NODE_ENV !== 'production'
})

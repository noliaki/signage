import * as types from './mutation-types'

export default {
  [types.SET_VIDEO_DEVICES] (state, { videoDevices }) {
    state.videoDevices = videoDevices
  }
}

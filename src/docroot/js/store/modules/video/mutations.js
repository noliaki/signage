import * as types from '../../mutation-types'

export default {
  [types.SET_VIDEO_DEVICES] (state, { videoDevices }) {
    state.videoDevices = videoDevices
  },
  [types.ADD_VIDEO_DEVICES] (state, { videoMedia }) {
    state.videoDevices.push(videoMedia)
  }
}

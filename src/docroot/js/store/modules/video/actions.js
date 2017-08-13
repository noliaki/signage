import * as types from '../../mutation-types'

export default {
  getUserMedias: async function ({commit}) {
    const userDevices = await getUserDevices()
    const videoDevices = userDevices.filter(device => device.kind === 'videoinput')

    videoDevices.forEach(async videoDevice => {
      const stream = await getUserVideoStream(videoDevice)
      const streamURL = window.URL.createObjectURL(stream)
      commit(types.ADD_VIDEO_DEVICES, {
        videoMedia: {
          videoDevice,
          streamURL
        }
      })
    })
  }
}

function getUserDevices () {
  return navigator.mediaDevices.enumerateDevices().then(devices => {
    return devices
  })
}

function getUserVideoStream (videoDevice) {
  return navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      deviceId: videoDevice.deviceId
    }
  }).then(stream => stream)
}

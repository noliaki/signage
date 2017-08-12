import * as types from './mutation-types'

export const getUserMedias = async ({ commit }) => {
  const userDevices = await getUserDevices()
  const videoDevices = userDevices.filter(device => device.kind === 'videoinput')

  const streams = await getUserVideoStream(videoDevices)
  console.log(streams)
  commit(types.SET_VIDEO_DEVICES, {
    videoDevices: streams
  })
}

const getUserDevices = () => {
  return navigator.mediaDevices.enumerateDevices().then(devices => {
    return devices
  })
}

export const getUserVideoStream = (videoDevices) => {
  const devices = []
  videoDevices.forEach(device => {
    console.log(device.deviceId)
    devices.push(
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          deviceId: device.deviceId
        }
      })
    )
  })

  return Promise.all(devices).then(streams => streams)
}

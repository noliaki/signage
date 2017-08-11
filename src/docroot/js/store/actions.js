import * as types from './mutation-types'

export const getUserMedia = ({ commit }) => {
  const $video = document.getElementById('video')

  $video.addEventListener('loadedmetadata', (event) => {
    $video.play()
  })

  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true
  }).then(stream => {
    $video.src = window.URL.createObjectURL(stream)
    console.log($video.src)
  })
}

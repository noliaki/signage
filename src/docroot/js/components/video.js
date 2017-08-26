import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      interval: 1000,
      timer: null,
      currentVideoIndex: 0
    }
  },
  computed: {
    ...mapState([
      'video'
    ])
  },
  methods: {
    ...mapActions([
      'getUserMedias'
    ]),
    flipVideo () {
      this.stopFlip()

      if (!this.video.videoDevices.length) {
        this.timer = setTimeout(this.flipVideo, this.interval)
        return
      }

      this.currentVideoIndex = (this.currentVideoIndex + 1) % this.video.videoDevices.length
      this.startFlip()
    },
    startFlip () {
      this.timer = setTimeout(this.flipVideo, this.interval)
    },
    stopFlip () {
      if (!this.timer) return

      clearTimeout(this.timer)
    }
  },
  template: `
    <div class="">
      <video v-for="(device, index) in video.videoDevices"
        :src="device.streamURL"
        v-show="index === currentVideoIndex"
        autoplay>{{ index }}</video>
    </div>
  `,
  created () {
    this.getUserMedias()
  },
  mounted () {
    this.startFlip()
  }
}

import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'video'
    ])
  },
  methods: {
    ...mapActions([
      'getUserMedias'
    ])
  },
  template: `
    <div class="">
      <video v-for="device in this.video.videoDevices"
        :src="device.streamURL"
        autoplay></video>
    </div>
  `,
  mounted () {
    this.getUserMedias()
  }
}

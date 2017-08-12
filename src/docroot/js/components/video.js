import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'getUserMedias'
    ])
  },
  template: `
    <video></video>
  `,
  created () {
    console.log(this.store)
    this.$store.dispatch('getUserMedias')
  },
  mounted () {
    console.log('mounted video')
  }
}

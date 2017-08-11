import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'getUserMedia'
    ])
  },
  created () {
    store.getUserMedia()
  }
}

import Vue from 'vue'
import store from './store'
import components from './components'

// console.log(components)

new Vue ({
  el: '#app',
  components,
  store,
  created () {
    console.log('created')
  }
})

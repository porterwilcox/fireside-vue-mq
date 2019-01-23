import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MQ from 'vue-mq'

Vue.config.productionTip = false

Vue.use(MQ, {
  breakpoints: { // default breakpoints - customize this
    sm: 540,
    md: 720,
    lg: 960,
  }})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

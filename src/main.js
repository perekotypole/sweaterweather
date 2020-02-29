import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch)
library.add(faArrowRight)
library.add(faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App) 
}).$mount('#app')

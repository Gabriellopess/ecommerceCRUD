import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
import vueSmoothScroll from 'vue-smooth-scroll'
import router from './router';
import './plugins/axios'
import store from "./store";

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueMaterial)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
Vue.use(vueSmoothScroll)

const stores = new Vuex.Store({
  state: {
    isPanelOpen: false,
  },
  actions: {
    swipeMenu(context) {
      context.state.isPanelOpen = !context.state.isPanelOpen
    }
  }
})

Vue.config.productionTip = false

new Vue({
  stores: stores,
  router,
  store,
  render: h => h(App),
}).$mount('#app')

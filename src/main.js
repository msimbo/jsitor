// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'

import VueCodemirror from 'vue-codemirror'
import VueSplit from 'vue-split-panel'

import 'codemirror/lib/codemirror.css'

Vue.use(VueCodemirror);
Vue.use(VueSplit);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

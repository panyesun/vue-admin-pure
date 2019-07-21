import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import filters from '@/filters'
import common from '@/utils/common.js'
import charts from 'echarts'
import i18n from '@/locales'

// eslint-disable-next-line
var bus = new Vue()  //事件总线
var echarts = charts
Vue.prototype.$echarts = echarts

Vue.use(common)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

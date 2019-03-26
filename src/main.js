import Vue from 'vue'
import App from './App'
import store from '@/store/store.js'
import Fly from 'flyio/dist/npm/wx'

Vue.config.productionTip = false
App.mpType = 'app'

//将store对象放置在Vue的原型上, 为的是每个实例都可以使用
Vue.prototype.$store = store

//将对象放置在Vue的原型上
let fly = new Fly
Vue.prototype.$fly = fly

const app = new Vue( App )
app.$mount()

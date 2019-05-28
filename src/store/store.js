import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import createLogger from 'vuex/dist/logger'

// 声明使用vuex
Vue.use( Vuex )

const isdebug = process.env.NODE_ENV !== 'production'
// console.log( 'debug' , debug )

export default new Vuex.Store( {
  state ,
  actions ,
  getters ,
  mutations ,
  plugins : isdebug ? [ createLogger() ] : [] // 在开发环境下，配置日志 。
} )

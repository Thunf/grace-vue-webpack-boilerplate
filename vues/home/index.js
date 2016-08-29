import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { configRouter } from './router.js'
import Home from './index.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()
configRouter(router)

const App = Vue.extend(Home)
router.start(App, '#app')

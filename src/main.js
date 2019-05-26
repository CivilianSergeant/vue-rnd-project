import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Container from './components/layout/Container.vue'
import Group from './modules/pages/group.vue'
Vue.config.productionTip = true
Vue.use(VueRouter)
const routes = [
  {path:'/',component:Container,children:[
    {path:'/groups',component:Group}
  ]},
]

const router = new VueRouter({
  routes
})

new Vue({
  el:'#app',
  router,
  render:h=>h(App)
})

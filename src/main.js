import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import store from './store'

import Container from './components/layout/Container.vue'
import Group from './modules/pages/group.vue'

import EventObserver from './helpers/EventObserver.js';

var eventObserver = new EventObserver;
Vue.mixin({
  data:function(){
    return {
      eventObserver
    };
  }});


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
  store,
  router,
  render:h=>h(App)
})



import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/weather',
    name: 'Weather',
    component:  () => import('../views/Weather'),
    children: [
      {
        path: '/weather/forecast/:name',
        name: 'forecast',
        component: () => import('../views/content/Forecast')
      },
      {
        path: '/weather/current/:name',
        name: 'current',
        component: () => import('../views/content/Current')
      },
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/content/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

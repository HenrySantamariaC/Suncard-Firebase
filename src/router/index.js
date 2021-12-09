import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Cronograma from '../views/Cronograma.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/cronograma',
    name: 'Cronograma',
    component: Cronograma
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: Inicio
  }
]

const router = new VueRouter({
  routes
})

export default router

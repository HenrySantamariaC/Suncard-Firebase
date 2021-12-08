import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Cronograma from '../views/Cronograma.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/cronograma',
    name: 'Cronograma',
    component: Cronograma,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router

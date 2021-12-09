import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Cronograma from '../views/Cronograma.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import Tarjetas from '../views/Tarjetas.vue'

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
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/tarjetas',
    name: 'Tarjetas',
    component: Tarjetas
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

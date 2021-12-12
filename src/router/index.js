import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Calendario from '../views/Calendario.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import Tarjetas from '../views/Tarjetas.vue'
import Tarjeta from '../views/Tarjeta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/calendario/:anio',
    name: 'Calendario',
    component: Calendario,
    props: true
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login
  // },
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
    path: '/tarjeta/:id',
    name: 'Tarjeta',
    component: Tarjeta,
    props: true
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Tarjetas from '../views/Tarjetas.vue'
import Tarjeta from '../views/Tarjetas/Tarjeta.vue'
import Calendario from '../views/Calendario.vue'
import Usuario from '../views/Usuario.vue'
import MisDatos from '../views/Usuario/MisDatos.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import user from '../store/modules/Usuario'

Vue.use(VueRouter)

const routes = [
  {
    path: '/inicio',
    name: 'Inicio',
    component: Inicio,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/tarjetas',
    name: 'Tarjetas',
    component: Tarjetas,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/tarjetas/tarjeta/:id',
    name: 'Tarjeta',
    component: Tarjeta,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/calendario',
    name: 'Calendario',
    component: Calendario,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: Usuario,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/usuario/mis-datos',
    name: 'MisDatos',
    component: MisDatos,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (user.state.usuario.logged) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router

<template>
    <div class="container  p-0 my-sm-4 py-sm-2">
        <div class="row dark mx-auto">
            <div class="card text-white bg-7 border-0 col-12 col-md-8 mx-auto">
                <div class="row">
                    <div class="card bg-1 col-sm-8 col-lg-6 col-xl-5 mx-auto px-0 border-0 text-white overflow-hidden shadow-small">
                        <div class="top-circle d-flex flex-row justify-content-center align-items-end">
                            <div class="circle-login bg-3 rounded-circle border border-3 border-white mb-3 overflow-hidden">
                                <img src="../assets/img/avatar-user/default.png" alt="user" class="img-fluid">
                            </div>
                        </div>
                        <div class="card-body p-1">
                            <h2 class="fw-bold">Bienvenido</h2>
                            <h6>Regístrese para continuar</h6>
                        </div>
                        <form class="card-body px-0 text-body">
                            <div class="form-floating col-11 mx-auto my-2 px-2">
                                <input type="email" class="form-control border-0 border-bottom border-danger" id="email" placeholder=" " autocomplete="email" v-model="user.email">
                                <label for="email" class="mx-2">Email</label>
                            </div>
                            <div class="form-floating col-11 mx-auto my-2 px-2">
                                <input type="password" class="form-control border-0 border-bottom border-danger" id="pass" placeholder=" " autocomplete="new-password" v-model="user.pass">
                                <label for="pass" class="mx-2">Contraseña</label>
                            </div>
                            <div class="col-11 mx-auto my-2 px-2 text-white">
                                <div class="w-50 m-auto">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">Recordarme</label>
                                    </div>
                                </div>
                            </div>
                            <div class="w-100 mt-4">
                                <button class="btn bg-4 text-light mx-auto py-2 px-5 rounded-pill" @click="register()" :disabled="!loadLogin">
                                    <span class="spinner-border spinner-border-sm" :class="loadLogin" role="status" aria-hidden="true"></span>
                                    Registrar
                                </button>
                            </div>
                        </form>
                        <div class="card-body p-0" v-if="errroLogin">
                            <h6 class="text-danger m-0">Error al registrarse. Revise los datos ingresados</h6>
                        </div>
                        <div class="card-body py-4 my-3">
                            <h6>¿Tienes cuenta? <router-link  :to="{name:'Login'}" class="text-danger">Inicia sesión</router-link></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex"
import {UserSession} from '../scripts/Firebase';
export default {
    name: 'Registro',
    data: function () {
    return {
        loadLogin: 'd-none',
        errroLogin: false,
        user: {
            name: 'User 1',
            lasNameP: 'Lorem',
            lasNameM: 'Ipsum',
            email: '',
            pass: '',
            birth: '2000-01-01',
            avatar: 0,
            logged: false
        }
      }
    },
    computed: {
        ...mapState('Usuario',['usuario']),
    },
    methods: {
        ...mapActions('Usuario',['estadoSesion','actualizarUsuario']),
        async register(){
            this.loadLogin = ''
            this.errroLogin = false
            try {
                await UserSession.registerUserFirebaseEmail(this.user.email,this.user.pass)
                console.log('register');
                this.estadoSesion(true)
                this.$router.push({name:"Inicio"})
            } catch (error) {
                this.loadLogin = 'd-none'
                this.errroLogin = true
                console.log(error.message);
            }
        }
    }
}
</script>
<style scoped>
    .top-circle{
        background-image: url("../assets/Login semicircle.svg");
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: cover;
        height: 150px;
    }
    .circle-login {
        width: 70px; 
        height: 70px;
    } 
</style>
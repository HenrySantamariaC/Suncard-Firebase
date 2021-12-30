<template>
    <div class="container p-0 my-sm-4 py-sm-2">
        <div class="row dark mx-auto">
            <div class="card text-white bg-1 shadow-small col-12 col-sm-10 col-md-6 mx-auto px-0 border-0">
                <div class="card-body bg-4 semi-rounded-bottom">
                    <div class="row py-4">
                        <h3>Usuario</h3>
                    </div>
                </div>
                <div class="card-body px-4">
                    <div class="row text-white p-2">
                        <div class="col">
                            <img :src="require(`../assets/img/avatar-user/${usuario.avatar}`)" alt="user" class="circle-login img-thumbnail img-fluid rounded-circle user-select-none">
                        </div>
                    </div>
                    <div class="row text-white p-2">
                        <div class="col">
                            <h5 class="fw-bold">{{getName}}</h5>
                        </div>
                    </div>  
                </div>
                <div class="card-body px-4">
                    <div class="row rounded-3 bg-7 text-white p-2">
                        <router-link :to="{name:'MisDatos'}" class="col-12 btn text-start text-white py-2">
                            <span class="icon-profile me-2"></span>
                            <span>Mis datos</span>
                        </router-link>
                        <div class="col-12 btn text-start text-white py-2" @click="crud()">
                            <span class="icon-cog me-2"></span>
                            <span>Configuraciones</span>
                        </div>
                        <hr class="my-1">
                        <router-link :to="{name:''}" class="col-12 btn text-start text-white py-2">
                            <span class="icon-link me-2"></span>
                            <span>Acerca de</span>
                        </router-link>
                        <div class="col-12 btn text-start text-white py-2" @click="logout()">
                            <span class="icon-exit me-2"></span>
                            <span>Cerrar sesión</span>
                        </div>
                    </div>
                </div>
                <div class="card-body px-4">
                    <p class="fs-7 text-muted user-select-none">{{getCopy()}}</p>
                </div>
            </div>
            <NavBar/>
        </div>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import { mapState, mapActions, mapGetters } from "vuex"
import { UserSession, CrudUser } from '../scripts/Firebase'
export default {
    components: {NavBar},
    name: 'Usuario',
    data: function(){
        return{
            avatares: [
                {name: 'user-1.png', selected: false},
                {name: 'user-2.png', selected: false},
                {name: 'user-3.png', selected: false},
                {name: 'user-4.png', selected: false},
                {name: 'user-5.png', selected: false},
                {name: 'user-6.png', selected: false},
            ]
        }
    },
    computed: {
      ...mapState('Usuario',['usuario']),
      ...mapGetters('Usuario',['getName'])
    },
    methods: {
        ...mapActions('Usuario',['cerrarSesion', 'actualizarUsuario']),
        getCopy(){
            let now = new Date()
            let cad = '© ' + now.getFullYear() +' SunCard. All Right Reserved'
            return cad
        },
        async logout(){
            try {
                await UserSession.logoutUserWithFirebaseEmail()
                console.log('logout');
                this.$router.push({name:"Login"})
            } catch (error) {
                console.log(error.code);
                console.log(error.message);
            }
        },
        async crud(){
            let user1 = await CrudUser.readDataUser()
            this.actualizarUsuario(user1)
            console.log(user1);
        },
        saveBDLocalStorage() {
            let us = JSON.stringify(this.usuario);
            localStorage.setItem("user", us);
            let cd = JSON.stringify(this.tarjetas);
            localStorage.setItem("card", cd);
        }
    },
}
</script>
<style>
    .btn-circle {
        width: 40px !important;
        height: 40px !important;
        line-height: 40px;
        cursor: pointer;
    }
    .circle-login {
        width: 70px; 
        height: 70px;
    } 
</style>
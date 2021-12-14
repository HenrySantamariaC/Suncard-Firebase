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
                            <img :src="require(`../assets/img/avatar-user/${img}`)" alt="user" class="circle-login img-thumbnail img-fluid rounded-circle user-select-none">
                        </div>
                    </div>
                    <div class="row text-white p-2">
                        <div class="col">
                            <h5 class="fw-bold">Erick SC</h5>
                        </div>
                    </div>  
                </div>
                <div class="card-body px-4">
                    <div class="row rounded-3 bg-7 text-white p-2">
                        <router-link :to="{name:'MisDatos'}" class="col-12 btn text-start text-white py-2">
                            <span class="icon-profile me-2"></span>
                            <span>Mis datos</span>
                        </router-link>
                        <router-link :to="{name:''}" class="col-12 btn text-start text-white py-2">
                            <span class="icon-cog me-2"></span>
                            <span>Configuraciones</span>
                        </router-link>
                        <hr class="my-1">
                        <router-link :to="{name:''}" class="col-12 btn text-start text-white py-2">
                            <span class="icon-link me-2"></span>
                            <span>Acerca de</span>
                        </router-link>
                        <router-link :to="{name:'Login'}" class="col-12 btn text-start text-white py-2">
                            <span class="icon-exit me-2"></span>
                            <span>Cerrar sesión</span>
                        </router-link>
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
export default {
    components: {NavBar},
    name: 'Usuario',
    data: function(){
        return{
            img: 'user-1.png'
        }
    },
    methods: {
        getCopy(){
            let now = new Date()
            let cad = '© ' + now.getFullYear() +' SunCard. All Right Reserved'
            return cad
        }
    }
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
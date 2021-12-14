<template>
    <div class="container p-0 my-sm-4 py-sm-2">
        <div class="row dark mx-auto">
            <div class="card text-white bg-1 shadow-small col-12 col-sm-10 col-md-6 mx-auto px-0 border-0">
                <div class="card-body bg-4 semi-rounded-bottom">
                    <div class="row py-4">
                        <h3>Perfil</h3>
                    </div>
                </div>
                <div class="card-body px-4">
                    <div class="row rounded-3 bg-7 text-white p-2">
                        <div class="circle-login bg-4 rounded-circle mx-auto overflow-hidden">
                            <img src="../assets/user.png" alt="user" class="rounded-circle img-thumbnail w-100">
                        </div>
                    </div>
                </div>
                <div class="card-body px-4">
                    <div class="row rounded-3 bg-7 text-white p-2">

                    </div>
                </div>
            </div>
            <NavBar/>
        </div>
    </div>
</template>
<script>
import NavBar from '../components/NavBar.vue'
export default {
    components: {NavBar}
    
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
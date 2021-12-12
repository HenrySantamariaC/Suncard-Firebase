<template>
    <div class="container  p-0 my-sm-4 py-sm-2">
        <div class="row dark mx-auto">
            <div class="card text-white bg-7 border-0 col-12 col-md-8 mx-auto">
                <div class="row">
                    <div class="card bg-1 col-sm-8 col-lg-6 col-xl-5 mx-auto px-0 border-0 text-white overflow-hidden shadow-small">
                        <div class="top-circle d-flex flex-row justify-content-center align-items-end">
                            <div class="circle-login bg-3 rounded-circle border border-3 border-white mb-3 overflow-hidden">
                                <img src="../assets/user.png" alt="user" class="img-fluid">
                            </div>
                        </div>
                        <div class="card-body p-1">
                            <h2 class="fw-bold">Bienvenido</h2>
                            <h6>Regístrese para continuar</h6>
                        </div>
                        <form class="card-body px-0 text-body">
                            <div class="form-floating col-11 mx-auto my-2 px-2">
                                <input type="text" class="form-control border-0 border-bottom border-danger" id="nombre" placeholder=" " autocomplete="username">
                                <label for="nombre" class="mx-2">Nombre</label>
                            </div>
                            <div class="form-floating col-11 mx-auto my-2 px-2">
                                <input type="password" class="form-control border-0 border-bottom border-danger" id="pass" placeholder=" " autocomplete="new-password">
                                <label for="pass" class="mx-2">Contraseña</label>
                            </div>
                            <div class="w-100 mt-4">
                                <router-link class="bg-4 text-light mx-auto py-2 px-5 rounded-pill" :to="{name:'Tarjetas'}">Registrar</router-link>
                            </div>
                        </form>
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
export default {
    name: 'Registro',
    data: function () {
    return {
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
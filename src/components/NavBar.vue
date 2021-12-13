<template>
    <div class="py-4 py-md-3">
        <nav class="navbar fixed-bottom navbar-dark bg-7 shadow-lg">
            <div class="col-12 col-sm-10 col-md-6 mx-auto">
                <div class="row w-100 mx-auto">
                    <router-link :to="{name:'Inicio'}" class="navbar-brand d-flex flex-column col-3 mx-0 bg-7">
                        <span class="icon-home"></span>
                        <span class="fs-8">Inicio</span> 
                    </router-link>
                    <router-link :to="{name:'Tarjetas'}" class="navbar-brand d-flex flex-column col-3 mx-0 bg-7">
                        <span class="icon-credit-card"></span>
                        <span class="fs-8">Tarjetas</span>
                    </router-link>
                    <router-link :to="{name:'Calendario',params:{anio:2021}}" class="navbar-brand d-flex flex-column col-3 mx-0 bg-7">
                        <span class="icon-calendar"></span>
                        <span class="fs-8">Calendario</span>
                    </router-link>
                    <router-link :to="{name:'Login'}" class="navbar-brand d-flex flex-column col-3 mx-0 bg-7">
                        <span class="icon-user"></span>
                        <span class="fs-8">Usuario</span>
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>
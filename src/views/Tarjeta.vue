<template>
    <div class="container p-0 my-sm-4 py-sm-2">
        <div class="row dark mx-auto">
            <div class="card text-white bg-1 shadow-small col-12 col-sm-10 col-md-6 mx-auto px-0 border-0">
                <div class="card-body bg-4 semi-rounded-bottom">
                    <div class="row py-3">
                        <h3>{{tarjeta.name}}</h3>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="row">
                            <span>Guardar</span>
                            <router-link :to="{name:'Inicio'}" class="text-decoration-none"><h6 class="btn-circle bg-3 text-white rounded-circle m-auto fw-bold">&#128190;&#128465;</h6></router-link>
                        </div>
                    </div>
                </div>
                <div class="card-body px-0 text-body">
                    <div class="form-floating col-11 mx-auto my-2 px-2">
                        <input type="text" class="form-control border-0 border-bottom border-danger" id="nombre" placeholder=" " v-model="tarjeta.name">
                        <label for="nombre" class="mx-2">Nombre de la tarjeta</label>
                    </div>
                    <div class="col-11 mx-auto my-2 px-2">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-floating">
                                    <input type="number" class="form-control border-0 border-bottom border-danger" id="cierre" placeholder=" ">
                                    <label for="cierre" class="mx-2">Cierre</label>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-floating">
                                    <input type="number" class="form-control border-0 border-bottom border-danger" id="pago" placeholder=" ">
                                    <label for="pago" class="mx-2">Pago</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body px-4 py-0">
                    <div class="col-11 mx-auto">
                        <h6 class="text-start text-muted fw-bold">Servicios a pagar</h6>
                        <router-link :to="{name:''}" class="text-decoration-none">
                            <div class="bg-6 text-white rounded-3 m-2 py-1 w-auto">
                                <span>Agregar servicio</span>
                            </div>
                        </router-link>
                        <div class="row">
                            <ul class="list-group w-100 p-0">
                                <li class="list-group-item rounded-3 bg-7 my-1 mx-1 mx-sm-2 text-white shadow" v-for="(servicio,i) in servicios" :key="i">
                                    <h6 class="fw-bold text-start">{{servicio}}</h6>
                                    <h6 class="text-muted text-start fs-7 mx-2">Sin pagar</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
import { mapState, mapActions } from "vuex"

export default {
    name: 'Inicio',
    data: function () {
    return {
        tarjeta:{
            name: 'Tarjeta Visa'
        },
        servicios: [
            'Luz',
            'Agua',
            'Internet',
        ]
    };
  },
  computed: {
  },
  methods: {
  },
}
</script>
<style scoped> 
    .btn-circle {
        width: 40px !important;
        height: 40px !important;
        line-height: 40px;
        cursor: pointer;
    }
</style>

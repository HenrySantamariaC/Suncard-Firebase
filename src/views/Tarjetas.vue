<template>
    <div class="container">
        <div class="row dark mx-1">
            <div class="card text-white bg-1 shadow col-12 col-md-8 mx-auto px-0">
                <div class="card-header">
                    <h3>Administrador de tarjetas</h3>
                </div>
                <div class="card-body px-4">
                    <span class="bg-6 p-2 rounded text-white">Agregar nueva tarjeta</span>
                </div>
                <div class="card-body my-2 mx-3">
                    <h6 class="text-start text-muted">Lista de tarjetas</h6>
                    <div class="row">
                        <ul class="list-group w-100 p-0">
                            <li class="list-group-item rounded-3 bg-7 my-2 mx-sm-3 text-white" v-for="(tarjeta,i) in tarjetas" :key="i">
                                <h6 class="fw-bold text-start">{{tarjeta}}</h6>
                                <h6 class="text-muted text-start fs-7 mx-2">Tarjeta registrada</h6>
                            </li>
                        </ul>
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
        tarjetas: [
            'Tarjeta Visa',
            'Tarjeta American Express',
            'Tarjeta Mastercad',
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
</style>

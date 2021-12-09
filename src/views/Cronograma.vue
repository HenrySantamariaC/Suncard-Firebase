<template>
    <div class="container">
        <div class="row dark mx-1">
            <div class="card text-white bg-1 shadow col-12 col-md-8 mx-auto">
                <div class="card-header">
                    <h3>Cronograma de pagos del {{anio}}</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div v-for="(mes,i) in meses" :key="i" class="col-12 col-sm-6 col-lg-4 my-2">
                            <div class="card shadow bg-3 fw-bold">
                                <div class="row py-3">
                                    <h2 class="text-capitalize">{{mes.mes}}</h2>
                                </div>
                                <div class="row p-2">
                                    <div class="col-6 text-align-center">
                                        <p>Cierre</p>
                                        <div class="bg-white rounded-3 overflow-hidden w-75 mx-auto">
                                            <div class="bg-5 pt-2 text-capitalize">{{mes.cierre.format("MMM")}}</div>
                                            <div class="py-2 text-capitalize text-body">{{mes.cierre.format("DD")}}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <p>Pago</p>
                                        <div class="bg-white rounded-3 overflow-hidden w-75 mx-auto">
                                            <div class="bg-4 pt-2 text-capitalize">{{mes.pago.format("MMM")}}</div>
                                            <div class="py-2 text-capitalize text-body">{{mes.pago.format("DD")}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex"
export default {
    name: 'Cronograma',
    computed: {
        ...mapState('Calendario',['meses','anio'])
    },
    methods: {
        ...mapActions('Calendario',['calcularCalendarioPagos']),
        getYear(){
            let year = new Date()
            return year.getFullYear()
        }
    },
    created(){
        // this.$store.dispatch('Calendario/calcularCalendarioPagos',this.getYear())
    }
}
</script>
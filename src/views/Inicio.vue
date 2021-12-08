<template>
    <div class="container">
        <div class="row dark mx-1">
            <div class="card text-white bg-1 shadow col-12 col-md-8 mx-auto px-0">
                <div class="card-header">
                    <h3>Administrador de pagos</h3>
                </div>
                <div class="card-body px-4">
                    <!-- Fecha del dia de hoy -->
                    <div class="row pb-3">
                        <p class="card-text my-0">Hoy</p>
                        <h5 class="card-title text-capitalize">{{mesActual.hoy}}</h5>
                    </div>

                    <div class="row">
                        <!-- Dias restantes para la proxima facturacion -->
                        <div class="col-12 col-lg-5 card bg-1 border-0">
                            <div class="col m-1">
                                <h6 class="">Proxima facturacion</h6>
                            </div>
                            <div class="col mb-3">
                                <div class="rounded-circle shadow d-flex justify-content-center align-items-center mx-auto dias-restantes bg-2">
                                    <div>
                                        <h6 class="">Quedan</h6>
                                        <h2 class="fw-bold">{{mesActual.diasRestantes}} dias</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Mes actual con sus fechas de facturacion y de pago -->
                        <div class="col-12 col-lg-7 pt-2">
                            <div class="card shadow bg-3 fw-bold">
                                <div class="row py-3">
                                    <h2 class="text-capitalize">{{mesActual.actual.mes}}</h2>
                                </div>
                                <div class="row p-3">
                                    <div class="col-6 text-align-center">
                                        <p>F.Cierre</p>
                                        <p class="bg-5 rounded text-capitalize">{{mesActual.actual.cierre.format("DD MMM")}}</p>
                                    </div>
                                    <div class="col-6">
                                        <p>F.Pago</p>
                                        <p class="bg-4 rounded text-capitalize">{{mesActual.actual.pago.format("DD MMM")}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Formulario para ingresar los dias de cierre y pago -->
                    <div class="row py-3 text-body">
                        <div class="form col-12 col-sm-6 col-lg-5">
                            <label for="diaCierre" class="mx-2 text-light">Dia de cierre</label>
                            <input type="number" class="form-control" id="diaCierre" min="0" max="30" v-model="cierre">
                        </div>
                        <div class="form col-12 col-sm-6 col-lg-5">
                            <label for="diaPago"  class="mx-2 text-light">Dia de pago</label>
                            <input type="number" class="form-control" id="diaPago" min="0" max="30" v-model="pago">
                        </div>
                        <div class="col">
                            <label for="anio"  class="mx-auto text-light">Año</label>
                            <select id="anio" class="form-control w-auto mx-auto" v-model="anio">
                                <option 
                                    class="m-0 p-0"
                                    v-for="num in 5" :key="num"
                                    :value="(mesActual.anio+num-1)">{{mesActual.anio+num-1}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <a class="btn btn-dark bg-6 text-white" @click="calcularCalendarioPagos(anio)">
                        Actualizar
                    </a>
                    <router-link class="btn btn-dark bg-6 text-white " :to="{name:'Cronograma'}">
                        Ver cronograma de pagos del {{anio}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
import { mapState, mapActions } from "vuex";;

export default {
    name: 'Inicio',
    data: function () {
    return {
      anio: 2021,
      cierre: 22,
      pago: 16,
      mesActual: {
        hoy : "",
        anio : 0,
        actual : {},
        siguiente : {},
        diasRestantes : 0
      }
    };
  },
  computed: {
      ...mapState('Calendario',['meses'])
  },
  methods: {
    cargarFechaActual() {
        moment.locale("es")
        this.mesActual.hoy = moment().format('D [de] MMMM [del] YYYY');
        this.mesActual.anio = moment().get('year');
    }, 
    calcularMes(i,anio){
        let fc = moment().locale("es")
        fc.set('month',i)
        fc.set('year',anio)
        fc.set('date',this.cierre)
        let fp = fc.clone();
        fp.add(1,'M')
        fp.set('date',this.pago)

        switch (fc.day()) {
            case 6: fc.subtract(1,'d'); break;
            case 0: fc.subtract(2,'d'); break;
        }
        switch (fp.day()) {
            case 6: fp.add(2,'d'); break;
            case 0: fp.add(1,'d'); break;
        }

        let fecha = {
            mes: fc.format("MMMM").toString(),
            cierre: fc,
            pago: fp,
        }

        return fecha;
    },
    cronogramaActualizado(){
        if (this.fechas.length > 0 && this.fechas[0].cierre.get('year') == this.anio) {
            return true
        }
        return false
    },
    diasRestantes(){
        let now = moment();
        let next = new Date()
        next.setMonth(next.getMonth()+1)
        let actual = this.calcularMes(now.get('month'), now.get('year'));
        let siguiente = this.calcularMes(next.getMonth(), next.getFullYear());

        if (now.isBefore(actual.cierre)) {
            this.mesActual.diasRestantes = actual.cierre.diff(now,'days')
        }else{
            this.mesActual.diasRestantes = siguiente.cierre.diff(now,'days')
        }
        
        this.mesActual.actual = actual
        this.mesActual.siguiente = siguiente
    },
    ...mapActions('Calendario',['calcularCalendarioPagos'])
  },
  created() {
    this.cargarFechaActual();
    this.diasRestantes();
    this.$store.dispatch('Calendario/calcularCalendarioPagos',this.anio)
  }
}
</script>
<style scoped>
    .dias-restantes{
        width: 160px;
        height: 160px;
    }
    
</style>

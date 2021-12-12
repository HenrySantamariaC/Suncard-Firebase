<template>
    <div class="container p-0 my-sm-4 py-sm-2">
        <div class="row dark mx-auto">
            <div class="card text-white bg-1 shadow-small col-12 col-sm-10 col-md-6 mx-auto px-0 border-0">
                <div class="card-body bg-4 semi-rounded-bottom">
                    <div class="row py-4">
                        <h3>Administrador de pagos</h3>
                    </div>
                </div>
                <div class="card-body px-4">
                    <!-- Fecha del dia de hoy -->
                    <div class="row pb-3">
                        <p class="card-text my-0 fs-7">Hoy</p>
                        <h5 class="card-title text-capitalize fs-6">{{mesActual.hoy}}</h5>
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
                            <div class="mx-sm-4">
                                <CardMes :mes="mesActual.actual"></CardMes>
                            </div>
                        </div>
                    </div>
                    <!-- Formulario para ingresar los dias de cierre y pago -->
                    <div class="row py-3 text-body">
                        <div class=" col rounded-3 bg-7 w-100 my-1 mx-1 mx-sm-2 py-2 text-white shadow">
                            <div class="text-white">
                                <h5 class="fw-bold text-start">Cronograma por año</h5>
                                <div class="row">
                                    <label for="anio"  class="col-5 text-light">Elija el año</label>
                                    <select id="anio" class="form-control w-auto" v-model="anio">
                                        <option 
                                            class="m-0 p-0"
                                            v-for="num in 5" :key="num"
                                            :value="(mesActual.anio+num-1)">{{mesActual.anio+num-1}}
                                        </option>
                                    </select>
                                </div>
                                <div class="py-2">
                                    <router-link class="btn btn-dark bg-6 text-white" :to="{name:'Calendario', params:{anio:anio}}">
                                        Ver cronograma del {{anio}}
                                    </router-link>
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
import moment from 'moment'
import { mapState, mapActions } from "vuex"
import CardMes from '../components/CardMes.vue';

export default {
    components: { CardMes },
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
        // Calculamos fechas de cierre y de pago
        let fc = moment().locale("es")
        fc.set('month',i)
        fc.set('year',anio)
        fc.set('date',this.cierre)
        let fp = fc.clone();
        fp.add(1,'M')
        fp.set('date',this.pago)
        // Validamos si los dias de pago son dias laborables (Lunes a Viernes)
        switch (fc.day()) {
            case 6: fc.subtract(1,'d'); break;
            case 0: fc.subtract(2,'d'); break;
        }
        switch (fp.day()) {
            case 6: fp.add(2,'d'); break;
            case 0: fp.add(1,'d'); break;
        }
        // Definimos objeto mes para el calendario de fechas
        let fecha = {
            mes: fc.format("MMMM").toString(),
            cierre: fc,
            pago: fp,
        }

        return fecha;
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
  }
}
</script>
<style scoped>
    .dias-restantes{
        width: 160px;
        height: 160px;
    }
    
</style>

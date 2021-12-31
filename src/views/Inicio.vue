<template>
    <div class="container p-0 my-sm-4 py-sm-2">
        <div class="row dark mx-auto">
            <div class="card text-white bg-1 shadow-small col-12 col-sm-10 col-md-6 mx-auto px-0 border-0">
                <div class="card-body bg-4 semi-rounded-bottom">
                    <div class="row py-4">
                        <h3>Administrador de tarjetas</h3>
                    </div>
                </div>
                <div class="card-body px-4">
                    <!-- Fecha del dia de hoy -->
                    <div class="row p-0">
                        <h5 class="card-title fs-7 fw-bold text-end text-muted">Hoy {{mesActual.hoy}}</h5>
                    </div>
                    <!-- Formulario para ingresar los dias de cierre y pago -->
                    <div class="row text-body">
                        <div class=" col rounded-3 w-100 m-1 mx-sm-2 py-1 text-white">
                            <div class="text-white">
                                <div class="input-group input-group-sm mb-2">
                                    <select id="tarjeta" class="form-select bg-7 text-white dark" v-model="idTarjeta" @change="verData">
                                        <option 
                                            class="m-0 p-0"
                                            v-for="(item,i) in tarjetas" 
                                            :key="i"
                                            :value="item.id">{{item.name}}
                                        </option>
                                    </select>
                                    <div class="btn bg-6 text-white" @click="verData">
                                        Ver datos
                                    </div>
                                </div>
                                
                            </div>
                        </div>
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
                </div>
            </div>
            <NavBar/>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
import { mapState, mapActions, mapGetters, mapMutations } from "vuex"
import NavBar from '@/components/NavBar.vue';
import CardMes from '@/components/CardMes.vue';

export default {
    components: { CardMes, NavBar },
    name: 'Inicio',
    data: function () {
    return {
      anio: 2021,
      idTarjeta:1,
      tarjeta: {},
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
        ...mapGetters('Tarjetas',['getTarjetaId']),
        ...mapState('Tarjetas',['tarjetas']),
        ...mapState('Usuario',['usuario']),
  },
  methods: {
      ...mapActions('Tarjetas',['cargarDatos']),
    cargarFechaActual() {
        moment.locale("es")
        this.mesActual.hoy = moment().format('D/M/YYYY');
        this.mesActual.anio = moment().get('year');
    },
    cargarTarjeta(id){
        this.tarjeta = JSON.parse( JSON.stringify( this.getTarjetaId(id) ) )
    }, 
    calcularMes(i,anio){
        // Calculamos fechas de cierre y de pago
        let fc = moment().locale("es")
        fc.set('month',i)
        fc.set('year',anio)
        fc.set('date',this.tarjeta.cierre)
        let fp = fc.clone();
        fp.add(1,'M')
        fp.set('date',this.tarjeta.pago)
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
    verData(){
        this.cargarTarjeta(this.idTarjeta)
        this.diasRestantes()
    },
    tarjetaDefault(){
        if (this.tarjetas.length > 0) {
            this.idTarjeta = this.tarjetas[0].id
            this.verData()
        }
    }
  },
  created() {
    this.cargarFechaActual();
    this.cargarTarjeta(this.idTarjeta);
    this.diasRestantes();
  },
  mounted() {
      this.tarjetaDefault()
  }
}
</script>
<style scoped>
    .dias-restantes{
        width: 160px;
        height: 160px;
    }
    
</style>

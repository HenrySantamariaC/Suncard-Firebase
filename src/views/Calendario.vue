<template>
    <div class="container p-0 my-sm-4 py-sm-2">
        <div class="row dark mx-auto">
            <div class="card text-white bg-1 shadow-small col-12 col-sm-10 col-md-6 mx-auto px-0 border-0">
                <div class="card-body bg-4 semi-rounded-bottom">
                    <div class="row py-4">
                        <h3>Cronograma de pagos del {{anio}}</h3>
                    </div>
                </div>
                <div class="card-body m-2">
                    <div class="row rounded-3 bg-7 text-white p-2">
                        <div class="text-white">
                            <h5 class="fw-bold text-start">Cronograma por año</h5>
                            <div class="input-group input-group-sm mb-2">
                                <label for="tarjeta"  class="input-group-text text-light bg-7 border-0">Tarjeta</label>
                                <select id="tarjeta" class="form-select bg-7 text-white dark" v-model="idTarjeta">
                                    <option 
                                        class="m-0 p-0"
                                        v-for="(item,i) in tarjetas" :key="i"
                                        :value="item.id">{{item.name}}
                                    </option>
                                </select>
                            </div>
                            <div class="input-group input-group-sm">
                                <label for="anio"  class="input-group-text text-light bg-7 border-0">Año</label>
                                <select id="anio" class="form-select bg-7 text-white dark" v-model="anio">
                                    <option 
                                        class="m-0 p-0"
                                        v-for="num in 5" :key="num"
                                        :value="(getAnio()+num-1)">{{getAnio()+num-1}}
                                    </option>
                                </select>
                            </div>
                            <div class="py-2">
                                <div class="btn btn-dark bg-6 text-white" @click="calcularCalendario()">
                                    Ver cronograma
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div v-for="(item,i) in meses" :key="i" class="col-12 col-sm-6 col-lg-4 my-2">
                            <CardMes :mes="item"></CardMes>
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
import NavBar from '../components/NavBar.vue'
import CardMes from '../components/CardMes.vue';
export default {
    components: { CardMes, NavBar },
    name: 'Calendario',
    data: function(){
        return {
            idTarjeta: 1,
            tarjeta: {},
            anio: 0,
            meses: []
        }
    },
    computed: {
        ...mapGetters('Tarjetas',['getTarjetaId']),
        ...mapState('Tarjetas',['tarjetas']),
    },
    methods: {
        getAnio(){
            let date = new Date()
            return date.getFullYear()
        },
        calcularMes(i,anio){
            let fc = moment().locale("es")
            fc.set('month',i)
            fc.set('year',anio)
            fc.set('date',this.tarjeta.cierre)
            let fp = fc.clone();
            fp.add(1,'M')
            fp.set('date',this.tarjeta.pago)

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
        calcularCalendario(){
            this.tarjeta = JSON.parse( JSON.stringify( this.getTarjetaId(this.idTarjeta) ) )
            this.meses = []
            for (let i = 0; i < 12; i++) {
                let mes = this.calcularMes(i,this.anio)    
                this.meses.push(mes)        
            }
        }
    },
    created(){
        this.anio = this.getAnio()
    }
}
</script>
<template>
    <div class="container p-0 my-sm-4 py-sm-2">
        <div class="row dark mx-auto">
            <div class="card text-white bg-1 shadow-small col-12 col-sm-10 col-md-6 mx-auto px-0 border-0">
                <div class="card-body bg-4 semi-rounded-bottom">
                    <div class="row py-4">
                        <h3>Cronograma de pagos del {{anio}}</h3>
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
        </div>
    </div>
</template>
<script>
import moment from 'moment'
import CardMes from '../components/CardMes.vue';
export default {
    components: { CardMes },
    name: 'Calendario',
    data: function(){
        return {
            meses: []
        }
    },
    props: [
        'anio',
        'cierre',
        'pago'
    ],
    computed: {
    },
    methods: {
        calcularMes(i,anio){
            let fc = moment().locale("es")
            fc.set('month',i)
            fc.set('year',anio)
            fc.set('date',this.$props.cierre)
            let fp = fc.clone();
            fp.add(1,'M')
            fp.set('date',this.$props.pago)

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
            for (let i = 0; i < 12; i++) {
                let mes = this.calcularMes(i,this.$props.anio)    
                this.meses.push(mes)        
            }
        }
    },
    created(){
        this.calcularCalendario()
    }
}
</script>
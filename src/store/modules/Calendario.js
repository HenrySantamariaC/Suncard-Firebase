import moment from 'moment'

export default {
    namespaced: true,
    state: {
        anio: 0,
        meses: []
    },
    mutations: {
        actualizarAnio(state, anio){
            state.anio = anio
        },
        actualizarCalendario(state, calendario){
            state.meses = calendario
        }
    },
    actions: {
        calcularCalendarioPagos({commit},anio) {
            let fechas = []
            for (let i = 0; i < 12; i++) {
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
                let mes = {
                    mes: fc.format("MMMM").toString(),
                    cierre: fc,
                    pago: fp,
                }
    
                fechas.push(mes)
            }
            commit('actualizarCalendario',fechas)
            commit('actualizarAnio',anio)
        }
    }
}
  
export default {
    namespaced: true,
    state: {
        tarjetas: [
            {
                id: 1,
                name: 'Tarjeta Visa',
                cierre: 22,
                pago: 16,
                anio: 2021,
                servicios: [
                    'Luz',
                    'Agua',
                    'Moto',
                    'Movistar',
                ]
            },
            {
                id: 2,
                name: 'Tarjeta American Express',
                cierre: 20,
                pago: 14,
                anio: 2021,
                servicios: [
                    'Luz',
                    'Agua',
                    'Gas',
                    'Claro',
                ]
            },
            {
                id: 3,
                name: 'Tarjeta Mastercad',
                cierre: 18,
                pago: 12,
                anio: 2021,
                servicios: [
                    'Luz',
                    'Agua',
                    'Internet',
                ]
            }
        ]
    },
    mutations: {
        addTarjeta(state, tarjeta){
            if (state.tarjetas.length > 0) {
                tarjeta.id = state.tarjetas[state.tarjetas.length-1].id+1
            }else{
                tarjeta.id = 1
            }
            state.tarjetas.push(tarjeta)
        },
        setTarjeta(state, tarjeta){
            for (let i = 0; i < state.tarjetas.length; i++) {
                if (state.tarjetas[i].id == tarjeta.id) {
                    state.tarjetas[i] = tarjeta
                }                
            }
        },
        deleteTarjeta(state, tarjeta){
            for (let i = 0; i < state.tarjetas.length; i++) {
                if (state.tarjetas[i].id == tarjeta.id) {
                    state.tarjetas.splice(i,1)
                }                
            }
        }
    },
    actions: {
        agregarTarjeta({commit},tarjeta) {
            commit('addTarjeta',tarjeta)
        },
        actualizarTarjeta({commit},tarjeta) {
            commit('setTarjeta',tarjeta)
        },
        eliminarTarjeta({commit},tarjeta) {
            commit('deleteTarjeta',tarjeta)
        }
    },
    getters: {
        getTarjetaId: (state) =>(id) =>{
            for (let i = 0; i < state.tarjetas.length; i++) {
                if (state.tarjetas[i].id == id) {
                    return state.tarjetas[i]
                }
            }
            return {}
        }
    }
}
export default {
    namespaced: true,
    state: {
        tarjetas: [
            {
                id: 1,
                name: 'Tarjeta Visa',
                cierre: 22,
                pago: 16,
                ultimosDigitos: 1234,
                anio: 2021,
                servicios: [
                    {
                        name: 'Luz',
                        check: {
                            date: '',
                            state: false
                        }
                    },
                    {
                        name: 'Agua',
                        check: {
                            date: '',
                            state: false
                        }
                    },
                    {
                        name: 'Moto',
                        check: {
                            date: '',
                            state: false
                        }
                    },
                    {
                        name: 'Movistar',
                        check: {
                            date: '',
                            state: false
                        }
                    }
                ]
            },
            {
                id: 2,
                name: 'Tarjeta American Express',
                cierre: 20,
                pago: 14,
                ultimosDigitos: 9876,
                anio: 2021,
                servicios: [
                    {
                        name: 'Luz',
                        check: {
                            date: '',
                            state: false
                        }
                    },
                    {
                        name: 'Agua',
                        check: {
                            date: '',
                            state: false
                        }
                    },
                    {
                        name: 'Gas',
                        check: {
                            date: '',
                            state: false
                        }
                    },
                    {
                        name: 'Claro',
                        check: {
                            date: '',
                            state: false
                        }
                    }
                ]
            },
            {
                id: 3,
                name: 'Tarjeta Mastercad',
                cierre: 18,
                pago: 12,
                ultimosDigitos: 1357,
                anio: 2021,
                servicios: [
                    {
                        name: 'Luz',
                        check: {
                            date: '',
                            state: false
                        }
                    },
                    {
                        name: 'Agua',
                        check: {
                            date: '',
                            state: false
                        }
                    },
                    {
                        name: 'Internet',
                        check: {
                            date: '',
                            state: false
                        }
                    }
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
        },
        loadData(state, tarjetas){
            state.tarjetas = tarjetas
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
        },
        cargarDatos({commit},tarjetas){
            commit('loadData',tarjetas)
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
        },
        getNumeroTarjeta: (state) =>(id) =>{
            for (let i = 0; i < state.tarjetas.length; i++) {
                if (state.tarjetas[i].id == id) {
                    if (state.tarjetas[i].ultimosDigitos!=='') {
                        return 'XXXX-XXXX-XXXX-'+state.tarjetas[i].ultimosDigitos
                    }else{
                        return 'XXXX-XXXX-XXXX-XXXX' 
                    }
                }
            }   
        }
    }
}
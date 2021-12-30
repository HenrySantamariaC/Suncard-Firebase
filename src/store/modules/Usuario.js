import User from "../../models/Usuario"

export default {
    namespaced: true,
    state: {
        usuario: new User()
    },
    mutations: {
        logged(state, session){
            state.usuario.logged = session
        },
        logout(state){
            state.usuario.logged = false
        },
        setUser(state, usuario){
            state.usuario = usuario
        },
    },
    actions: {
        estadoSesion({commit},session) {
            commit('logged',session)
        },
        cerrarSesion({commit}) {
            commit('logout')
        },
        actualizarUsuario({commit},usuario) {
            commit('setUser',usuario)
        },
    },
    getters: {
        getName(state) {
        //     let name = state.usuario.name.split(' ')[0]
        //     let lnAp = state.usuario.lasNameP.length > 1 ? state.usuario.lasNameP.charAt(0) : ''
        //     let lnAm = state.usuario.lasNameM.length > 1 ? state.usuario.lasNameM.charAt(0) : ''

        //     return name + ' ' + lnAp.toUpperCase() + lnAm.toUpperCase()
        }
    }
}
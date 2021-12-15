export default {
    namespaced: true,
    state: {
        usuario: {
            name: 'User 1',
            lasNameP: 'Lorem',
            lasNameM: 'Ipsum',
            email: 'admin@user.com',
            pass: 'admin',
            birth: '2000-01-01',
            avatar: 0,
            logged: false
        }
    },
    mutations: {
        login(state, usuario){
            if (usuario.email == state.usuario.email && usuario.pass == state.usuario.pass) {
                state.usuario.logged = true
            }else{
                state.usuario.logged =  false
            }
        },
        logout(state){
            state.usuario.logged = false
        },
        setUser(state, usuario){
            state.usuario = usuario
        },
    },
    actions: {
        iniciarSesion({commit},usuario) {
            commit('login',usuario)
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
            let name = state.usuario.name.split(' ')[0]
            let lnAp = state.usuario.lasNameP.length > 1 ? state.usuario.lasNameP.charAt(0) : ''
            let lnAm = state.usuario.lasNameM.length > 1 ? state.usuario.lasNameM.charAt(0) : ''

            return name + ' ' + lnAp.toUpperCase() + lnAm.toUpperCase()
        }
    }
}
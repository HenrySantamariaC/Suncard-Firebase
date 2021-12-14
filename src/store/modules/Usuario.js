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
                return true
            }
            return false
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
    }
}
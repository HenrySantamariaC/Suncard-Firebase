<template>
    <div class="container p-0 my-sm-4 py-sm-2">
        <div class="row dark mx-auto">
            <div class="card text-white bg-1 shadow-small col-12 col-sm-10 col-md-6 mx-auto px-0 border-0">
                <div class="card-body bg-4 semi-rounded-bottom">
                    <div class="row py-3">
                        <h3>Mis datos</h3>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col">
                            <div @click="guardarData()">
                                <h6 class="btn-circle bg-3 text-white rounded-circle m-auto fw-bold">
                                    <span class="icon-floppy-disk"></span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <form class="card-body px-0 text-body">
                    <div class="col-11 mx-auto my-2 px-2">
                        <h5 class="mx-2 text-muted text-start fw-bold">Datos personales</h5>
                    </div>
                    <div class="form-floating col-11 mx-auto my-2 px-2">
                        <input type="text" class="form-control border-0 border-bottom border-danger" id="nombre" placeholder=" " autocomplete="name" v-model="user.name">
                        <label for="nombre" class="mx-2">Nombres</label>
                    </div>
                    <div class="form-floating col-11 mx-auto my-2 px-2">
                        <input type="text" class="form-control border-0 border-bottom border-danger" id="apPat" placeholder=" " autocomplete="family-name" v-model="user.lasNameP">
                        <label for="apPat" class="mx-2">Apellido paterno</label>
                    </div>
                    <div class="form-floating col-11 mx-auto my-2 px-2">
                        <input type="text" class="form-control border-0 border-bottom border-danger" id="apMat" placeholder=" " autocomplete="family-name" v-model="user.lasNameM">
                        <label for="apMat" class="mx-2">Apellido materno</label>
                    </div>
                    <div class="form-floating col-11 mx-auto my-2 px-2">
                        <input type="email" class="form-control border-0 border-bottom border-danger" id="email" placeholder=" " autocomplete="email" disabled v-model="user.email">
                        <label for="email" class="mx-2">Email</label>
                    </div>
                    <div class="form-floating col-11 mx-auto my-2 px-2">
                        <input type="date" class="form-control border-0 border-bottom border-danger" id="pass" placeholder=" " v-model="user.birth">
                        <label for="pass" class="mx-2">Fecha de nacimiento</label>
                    </div>
                </form>
                <div class="card-body px-4 mx-2">
                    <div class="row rounded-3 bg-7 text-white py-2">
                        <h5 class="text-start text-muted fw-bold">Avatar</h5>
                        <div class="row">
                            <div class="col-4 py-2" v-for="(item, i) in avatares" :key="i">
                                <img :src="require(`@/assets/img/avatar-user/${item.name}`)" alt="img-avatar" class="img-fluid avatar" :class="{'rounded-circle br-red':item.selected}" @click="elegirAvatar(i)">
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
import { mapState, mapActions, mapGetters } from "vuex"
import NavBar from '@/components/NavBar.vue'

export default {
    components: {NavBar},
    name: 'MisDatos',
    data: function () {
    return {
        user: {},
        avatares: [
            {name: 'user-1.png', selected: false},
            {name: 'user-2.png', selected: false},
            {name: 'user-3.png', selected: false},
            {name: 'user-4.png', selected: false},
            {name: 'user-5.png', selected: false},
            {name: 'user-6.png', selected: false},
        ]
    };
  },
  props: [],
  computed: {
      ...mapState('Usuario',['usuario']),
  },
  methods: {
      ...mapActions('Usuario',['actualizarUsuario']),
      cargarData(){
          this.user = JSON.parse( JSON.stringify( this.usuario ) )
          for (let i = 0; i < this.avatares.length; i++) {
            if (this.avatares[i].name === this.user.avatar) {
                this.avatares[i].selected = true
            }
          }
      },
      guardarData(){
          this.actualizarUsuario(this.user)
          this.saveBDLocalStorage()
          this.$router.push({name: "Usuario"});
      },
      elegirAvatar(index){
          for (let i = 0; i < this.avatares.length; i++) {
            this.avatares[i].selected = false  
          }
          this.avatares[index].selected = true
          this.user.avatar = this.avatares[index].name
      },
      saveBDLocalStorage() {
        let us = JSON.stringify(this.usuario);
        localStorage.setItem("user", us);
      }
  },
  created(){
      this.cargarData()
  }
}
</script>
<style scoped> 
    .btn-circle {
        width: 40px !important;
        height: 40px !important;
        line-height: 40px;
        cursor: pointer;
    }
    .avatar {
        max-width: 70px;
        max-height: 70px;
    }
    .br-red {
        border: 4px solid #F47226;
    }
</style>

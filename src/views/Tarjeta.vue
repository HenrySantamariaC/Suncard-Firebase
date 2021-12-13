<template>
    <div class="container p-0 my-sm-4 py-sm-2">
        <div class="row dark mx-auto">
            <div class="card text-white bg-1 shadow-small col-12 col-sm-10 col-md-6 mx-auto px-0 border-0">
                <div class="card-body bg-4 semi-rounded-bottom">
                    <div class="row py-3">
                        <h3>{{tarjeta.name}}</h3>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col">
                            <div @click="guardarData()">
                                <h6 class="btn-circle bg-3 text-white rounded-circle m-auto fw-bold">
                                    <span class="icon-floppy-disk"></span>
                                </h6>
                            </div>
                        </div><div class="col">
                            <div @click="eliminarData()">
                                <h6 class="btn-circle bg-3 text-white rounded-circle m-auto fw-bold">
                                    <span class="icon-bin2"></span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body px-0 text-body">
                    <div class="form-floating col-11 mx-auto my-2 px-2">
                        <input type="text" class="form-control border-0 border-bottom border-danger" id="nombre" placeholder=" " required v-model="tarjeta.name">
                        <label for="nombre" class="mx-2">Nombre de la tarjeta</label>
                    </div>
                    <div class="col-11 mx-auto my-2 px-2">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-floating">
                                    <input type="number" class="form-control border-0 border-bottom border-danger" id="cierre" placeholder=" " min="1" max="28" v-model="tarjeta.cierre">
                                    <label for="cierre" class="mx-2">Cierre</label>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-floating">
                                    <input type="number" class="form-control border-0 border-bottom border-danger" id="pago" placeholder=" " min="1" max="28" v-model="tarjeta.pago">
                                    <label for="pago" class="mx-2">Pago</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body px-4 pb-4">
                    <div class="col-11 mx-auto">
                        <h6 class="text-start text-muted fw-bold">Servicios afiliados</h6>
                        <router-link :to="{name:''}" class="text-decoration-none">
                            <div class="bg-6 text-white rounded-3 my-2 py-1 w-auto">
                                <span>Agregar servicio</span>
                            </div>
                        </router-link>
                        <div class="row">
                            <ul class="list-group w-100 p-0">
                                <li class="list-group-item rounded-3 bg-7 my-1 mx-1 mx-sm-2 text-white shadow" v-for="(servicio,i) in tarjeta.servicios" :key="i">
                                    <h6 class="fw-bold text-start">{{servicio}}</h6>
                                    <h6 class="text-muted text-start fs-7 mx-2">Sin pagar</h6>
                                </li>
                            </ul>
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
import NavBar from '../components/NavBar.vue'

export default {
    components: {NavBar},
    name: 'Inicio',
    data: function () {
    return {
        tarjeta:{
            id:0,
            name: 'Tarjeta Visa',
            cierre: 22,
            pago: 16,
            servicios: []
        },
        creada: false        
    };
  },
  props: [
      'id'
  ],
  computed: {
    ...mapGetters('Tarjetas',['getTarjetaId']),
  },
  methods: {
      ...mapActions('Tarjetas',['actualizarTarjeta','agregarTarjeta','eliminarTarjeta']),
      entidadTarjeta(){
          let temp = JSON.parse( JSON.stringify( this.getTarjetaId(this.$props.id) ) )
          return temp
      },
      cargarTarjeta(){
        this.tarjeta = this.entidadTarjeta()
        if (Object.entries(this.tarjeta).length > 0) {
            this.creada = true
        }
      },
      guardarData(){
          if (this.creada) {
              this.actualizarTarjeta(this.tarjeta)
          }else {
              this.agregarTarjeta(this.tarjeta)
          }
          this.$router.push({name: "Tarjetas"});
      },
      eliminarData(){
          if (this.creada) {
              this.eliminarTarjeta(this.tarjeta)
          }
          this.$router.push({name: "Tarjetas"});
      }
  },
  created(){
      this.cargarTarjeta()
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
</style>

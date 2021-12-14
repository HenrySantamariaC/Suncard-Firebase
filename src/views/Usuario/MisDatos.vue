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
                        <input type="text" class="form-control border-0 border-bottom border-danger" id="nombre" placeholder=" " autocomplete="name">
                        <label for="nombre" class="mx-2">Nombres</label>
                    </div>
                    <div class="form-floating col-11 mx-auto my-2 px-2">
                        <input type="text" class="form-control border-0 border-bottom border-danger" id="apPat" placeholder=" " autocomplete="family-name">
                        <label for="apPat" class="mx-2">Apellido paterno</label>
                    </div>
                    <div class="form-floating col-11 mx-auto my-2 px-2">
                        <input type="text" class="form-control border-0 border-bottom border-danger" id="apMat" placeholder=" " autocomplete="family-name">
                        <label for="apMat" class="mx-2">Apellido materno</label>
                    </div>
                    <div class="form-floating col-11 mx-auto my-2 px-2">
                        <input type="date" class="form-control border-0 border-bottom border-danger" id="pass" placeholder=" " autocomplete="current-password">
                        <label for="pass" class="mx-2">Fecha de nacimiento</label>
                    </div>
                </form>
                <div class="card-body px-4 pb-4 d-none">
                    <div class="col-11 mx-auto">
                        <h6 class="text-start text-muted fw-bold">Servicios afiliados</h6>
                        <div class="row">
                            <div class="input-group my-2">
                                <input type="text" aria-label="servicio" class="form-control" v-model="servicio" placeholder="Nuevo servicio">
                                <div class="input-group-text bg-7 text-white" @click="agregarServicio()">Agregar</div>
                            </div>
                        </div>
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
import NavBar from '@/components/NavBar.vue'

export default {
    components: {NavBar},
    name: 'MisDatos',
    data: function () {
    return {
        tarjeta:{
            id:0,
            name: 'Tarjeta Visa',
            cierre: 22,
            pago: 16,
            servicios: []
        },
        creada: false,
        servicio: ''      
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
      agregarServicio(){
          this.tarjeta.servicios.push(this.servicio)
          this.servicio = ''
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

<template>
    <div class="container p-0 my-sm-4 py-sm-2">
        <div class="row dark mx-auto">
            <div class="card text-white bg-1 shadow-small col-12 col-sm-10 col-md-6 mx-auto px-0 border-0">
                <div class="card-body bg-4 semi-rounded-bottom">
                    <div class="row py-3">
                        <h3>Mis tarjetas</h3>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="row">
                            <span>Agregar</span>
                            <div class="text-decoration-none" @click="uidCard()">
                                <h6 class="btn-circle bg-3 text-white rounded-circle m-auto fw-bold">
                                    <span class="icon-plus"></span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body p-4">
                    <div class="w-100">
                        <h6 class="text-start text-muted fw-bold">Lista de tarjetas</h6>
                        <div class="row">
                            <ul class="list-group w-100 p-0">
                                <li class="list-group-item rounded-3 bg-7 my-1 mx-1 mx-sm-2 text-white shadow" v-for="(tarjeta,i) in tarjetas" :key="i">
                                    <router-link :to="{name:'Tarjeta', params:{id:tarjeta.id}}" class="text-decoration-none text-white">
                                        <h6 class="fw-bold text-start">{{tarjeta.name}}</h6>
                                        <h6 class="text-muted text-start fs-7 mx-2">{{getNumeroTarjeta(tarjeta.id)}}</h6>
                                    </router-link>
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
import { CrudCard } from "@/scripts/Firebase"

export default {
    components: {NavBar},
    name: 'Tarjetas',
    data: function () {
    return {
        name:''
    };
  },
  computed: {
      ...mapState('Tarjetas',['tarjetas']),
      ...mapGetters('Tarjetas',['getNumeroTarjeta']),
  },
  methods: {
      async uidCard() {
          let uid = await CrudCard.getUidCard()
          this.$router.push({name:"Tarjeta", params:{id:uid}})
      },
  },
  created(){
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

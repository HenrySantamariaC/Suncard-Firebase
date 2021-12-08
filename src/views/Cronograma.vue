<template>
    <div class="container">
        <div class="row dark mx-1">
            <div class="card text-white bg-1 shadow col-12 col-md-8 mx-auto">
                <div class="card-header">
                    <h3>Cronograma de pagos del {{anio}}</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div v-for="(mes,i) in fechas" :key="i" class="col-12 col-sm-6 col-lg-4 my-2">
                            <div class="row m-auto border border-light">
                                <h5 class="m-0 text-capitalize">{{mes.mes}}</h5>
                                <div class="row m-0 p-0">
                                    <p class="col-6 my-0 border border-light">F.Cierre</p>
                                    <p class="col-6 my-0 border border-light">F.Pago</p>
                                </div>
                                <div class="row m-0 p-0" >
                                    <p class="col-6 my-0 bg-5 border border-light text-capitalize">{{mes.cierre.format("DD MMM")}}</p>
                                    <p class="col-6 my-0 bg-4 border border-light text-capitalize">{{mes.pago.format("DD MMM")}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Cronograma',
    props: {
        fechas : [],
        anio : 0
    }
}
</script>
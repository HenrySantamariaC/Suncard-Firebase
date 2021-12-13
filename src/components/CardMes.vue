<template>
    <div class="card shadow bg-3 fw-bold">
        <div class="row py-3">
            <h3 class="text-capitalize">{{mes.mes}}</h3>
        </div>
        <div class="row p-2">
            <div class="col-6 text-align-center px-md-1 px-xl-2">
                <p class="fs-7">Cierre</p>
                <div class="bg-white rounded-3 overflow-hidden w-75 mx-auto">
                    <div class="bg-5 pt-2 text-capitalize">{{mes.cierre.format("MMM")}}</div>
                    <div class="py-2 text-capitalize text-body">{{mes.cierre.format("DD")}}</div>
                </div>
            </div>
            <div class="col-6 px-md-1 px-xl-2">
                <p class="fs-7">Pago</p>
                <div class="bg-white rounded-3 overflow-hidden w-75 mx-auto">
                    <div class="bg-4 pt-2 text-capitalize">{{mes.pago.format("MMM")}}</div>
                    <div class="py-2 text-capitalize text-body">{{mes.pago.format("DD")}}</div>
                </div>
            </div>
        </div>
        </div>
</template>
<script>
export default {
    name: 'CardMes',
    props: [
        'mes'
    ],
}
</script>
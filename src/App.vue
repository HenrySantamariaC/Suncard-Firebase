<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: #222A3F !important;
}
.bg-1 {
  background: #1C2135 !important;
}
.bg-2 {
  background: linear-gradient(45deg, #7B2AA0 0%, #90419D 100%) !important;
}
.bg-3 {
  background: linear-gradient(45deg, #F47226 0%, #FC9326 100%) !important;
}
.bg-4 {
  background: linear-gradient(45deg, #D12D2E 0%, #D63C3C 100%) !important;
}
.bg-5 {
  background: linear-gradient(45deg, #318C69 0%, #4FA358 100%) !important;
}
.bg-6 {
  background: linear-gradient(45deg, #1B9DB0 0%, #2BADBF 100%) !important;
}
.bg-7 {
  background: #222A3F !important;
}
.fs-7 {
  font-size: 0.85rem !important;
}
.semi-rounded-bottom {
    border-radius: 0 0 1.5rem 1.5rem;
}
.semi-rounded-top {
    border-radius: 1.5rem 1.5rem 0 0;
}
.semi-rounded-top {
    border-radius: 1.5rem 1.5rem 0 0;
}
@media (min-width: 576px){
  .shadow-small {
      box-shadow: 0 .5rem 1rem rgba(0,0,0, .15) !important;
  }
}
@media (max-width: 575px){
  body {
      background: #1C2135 !important;
  }
}

</style>

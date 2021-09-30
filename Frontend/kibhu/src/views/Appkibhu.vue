<template>
<main>
    <header-app />
    <router-view />
  </main>
</template>

<script>
import HeaderApp from '../components/Aplicacion/HeaderApp.vue'
export default {
  name: 'Aplication',
  components:{
    HeaderApp,
  }

}
</script>

<style>


</style>
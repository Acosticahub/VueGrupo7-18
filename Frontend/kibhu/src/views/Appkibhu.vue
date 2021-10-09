<template>
  <main>
    <header-app />
    <inicio-app />
    <router-view />
  </main>
</template>

<script>
import HeaderApp from "../components/Aplicacion/HeaderApp.vue";
import InicioApp from "../components/Aplicacion/InicioApp.vue";
export default {
  name: "Aplication",
  components: {
    HeaderApp,
    InicioApp,
  },
};
</script>

<style>
</style>
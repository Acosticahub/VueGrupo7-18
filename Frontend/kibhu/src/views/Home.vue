<template>
<v-main>
<header-home />
<login-home />
<servicios />
<precios />
<sobre-nosotros />
<noticias />
<v-footer app>
    <div class="footer"> MinTic2022 Grupo7-18, &copy;Kibhu 2021 </div>
</v-footer>
</v-main>
</template>

<script>
import HeaderHome from '../components/Web/HeaderHome.vue';
import LoginHome from '../components/Web/LoginHome.vue';
import Noticias from '../components/Web/Noticias.vue';
import Servicios from '../components/Web/Servicios.vue';
import Precios from '../components/Web/Precios.vue';
import SobreNosotros from '../components/Web/SobreNosotros.vue';


  export default {
    name: 'Home',
    
    components: {
        HeaderHome,
        LoginHome,
        Servicios,
        Precios,
        SobreNosotros,
        Noticias,
    },
  }
</script>

<style scoped>
.footer{
  text-align: center;
  margin: 5px;
}
.v-main{
  padding:  0 !important;
}
</style>

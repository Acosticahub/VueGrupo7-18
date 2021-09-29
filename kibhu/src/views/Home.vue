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
import HeaderHome from '../components/HeaderHome.vue';
import LoginHome from '../components/LoginHome.vue';
import Noticias from '../components/Noticias.vue';
/*import Quienes from '../components/Quienes.vue';*/
import Servicios from '../components/Servicios.vue';
import Precios from '../components/Precios.vue';
import SobreNosotros from '../components/SobreNosotros.vue';
   
  export default {
    name: 'Home',
    
    components: {
        HeaderHome,
        LoginHome,
        Servicios,
        Precios
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
</style>

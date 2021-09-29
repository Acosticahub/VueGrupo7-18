<template>
<v-main>
<header-home />
<login-home />
<servicios />
<precios />
<sobre-nosotros />
<noticias />
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
        Precios,
        SobreNosotros,
        Noticias,
    },
  }
</script>

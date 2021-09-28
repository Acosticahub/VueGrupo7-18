<template>

<nav>
<v-app-bar flat app >

    <div class="d-flex align-center ma-12">
    <v-img
    contain
    lazy-src="../assets/Logo Kibhu blanco-02.svg"
    max-height="200"
    max-width="130"
    src="../assets/Logo Kibhu Para fondo claro -02.png"
></v-img> 
</div>
<v-spacer></v-spacer>

<div >
          <v-btn href="#"  depressed text class="text-decoration-none black--text ma-12 depressed"
            >Servicios</v-btn
          >
          <v-btn href="#" depressed text class="text-decoration-none black--text ma-12"
            >Quienes somos</v-btn
          >
          <v-btn href="#" depressed text class="text-decoration-none black--text ma-12"
            >Sobre Nosotros</v-btn
          >
          <v-btn href="#" depressed text class="text-decoration-none black--text ma-12"
            >Noticias</v-btn
          >
        </div>
  

<v-btn
          class="ma-2 "
          :loading="loading"
          :disabled="loading"
          color="#DAA520"
          @click="loader = 'loading'"
        >
          <span class="mr-2 white--text">Regístrate</span>
          <v-icon color="white">mdi-account-plus</v-icon>
        </v-btn>        
</v-app-bar>

</nav>



    <!--<v-app>
      <v-app-bar app flat >
        <div class="d-flex align-center ma-12">
          <v-img
            contain
            lazy-src="..\assets\Logo Kibhu Para fondo claro -02.png"
            max-height="250"
            max-width="140"
            src="..\assets\Logo Kibhu Para fondo claro -02.png"
          ></v-img>
        </div>

        <v-spacer></v-spacer>

        <div>
          <a href="#" class="text-decoration-none black--text ma-12"
            >Servicios</a
          >
          <a href="#" class="text-decoration-none black--text ma-12"
            >Quienes somos</a
          >
          <a href="#" class="text-decoration-none black--text ma-12"
            >Sobre Nosotros</a
          >
          <a href="#" class="text-decoration-none black--text ma-12"
            >Noticias</a
          >
        </div>

        <v-btn
          class="ma-2"
          :loading="loading"
          :disabled="loading"
          color="#DAA520"
          @click="loader = 'loading'"
        >
          <span class="mr-2 white--text">Regístrate</span>
          <v-icon color="white">mdi-account-plus</v-icon>
        </v-btn>
      </v-app-bar>
    </v-app>-->

</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>
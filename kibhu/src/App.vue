<template>
  <v-app>
    <v-app-bar app flat class="max-height">
      <div class="d-flex align-center ma-12">
        <v-img
          contain
          lazy-src="..\src\assets\Logo Kibhu Para fondo claro -02.png"
          max-height="250"
          max-width="140"
          src="..\src\assets\Logo Kibhu Para fondo claro -02.png"
        ></v-img>
      </div>

      <v-spacer></v-spacer>

      <div>
        <a href="#" class="text-decoration-none black--text ma-12">Servicios</a>
        <a href="#" class="text-decoration-none black--text ma-12">Quienes somos</a>
        <a href="#" class="text-decoration-none black--text ma-12">Sobre Nosotros</a>
        <a href="#" class="text-decoration-none black--text ma-12">Noticias</a>
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

    <v-main>
      <router-view />

    </v-main>
  </v-app>
</template>

<script>

/*import LoginHome from '../components/loginhome'*/

export default {
  name: "App",
  
  data: () => ({
    //
  }),
};
</script>

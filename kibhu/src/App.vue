<template>
  <v-app>
    <v-app-bar app flat class="max-height">
      <div class="d-flex align-center m-12">
        <v-img
          contain
          lazy-src="..\src\assets\Logo Kibhu Para fondo claro -02.png"
          max-height="250"
          max-width="150"
          src="..\src\assets\Logo Kibhu Para fondo claro -02.png"
        ></v-img>
      </div>

      <v-spacer></v-spacer>

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
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

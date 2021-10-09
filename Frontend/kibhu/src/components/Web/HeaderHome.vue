    <template>
  <header>
    <nav>
      <v-app-bar flat app>
        <div >
          <v-img
            contain
            lazy-src="../../assets/Logo Kibhu blanco-02.svg"
            max-height="200"
            max-width="130"
            src="../../assets/Logo Kibhu Para fondo claro -02.png"
          ></v-img>
        </div>
        <v-spacer></v-spacer>

        <div>
            <v-btn
            href="#LoginWeb"
            depressed
            text
            class="text-decoration-none black--text ma-12 $vuetify.breakpoint.lgAndUp?'text-left':'text-right "
            >Inicio</v-btn
            >
            <v-btn
            href="#Precios"
            depressed
            text
            class="text-decoration-none black--text ma-12 depressed"
            >Servicios</v-btn
            >
            
            <v-btn
            href="#SobreNosotros"
            depressed
            text
            class="text-decoration-none black--text ma-12 "
            >Sobre Nosotros</v-btn
            >
            <v-btn
            href="#Noticias"
            depressed
            text
            class="text-decoration-none black--text ma-12 "
            >Noticias</v-btn
            >
        </div>




        <v-btn
          class="ma-2"
          :loading="loading"
          :disabled="loading"
          color="#DAA520"
          @click="loader = 'loading'"
        >
          <span style="color: white">Regístrate</span>
          <v-icon style="color: white">mdi-account-plus</v-icon>
        </v-btn>
      </v-app-bar>
    </nav>
  </header>
</template>

    <script>
export default {
  name: "Header",
};
</script>

    <style>


</style>
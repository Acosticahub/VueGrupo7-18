<template>
  <v-main>
    <header-app />
    <div>
      <v-btn
        class="mx-2"
        dark
        large
        color="#dAA520"
        elevation="2"
        bottom
        right
        fixed
        fab
        to="/clientes/new"
      >
        <v-icon dark>mdi-account-plus</v-icon>
      </v-btn>
      <v-container>
        <h1>Clientes de KIBHU</h1>
        <v-row>
          <v-col
            v-for="client in clients"
            :key="client.identification"
            lg="4"
            md="6"
            sm="6"
            xs="12"
          >
            <CatalogCliente :client="client" :active="active" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
import { getAllClients } from "../../../controllers/Client.controller";
import CatalogCliente from "../../Aplicacion/Clientes/CatalogCliente.vue";
import HeaderApp from "../HeaderApp.vue";
export default {
  components: {
    CatalogCliente,
    HeaderApp,
  },
  data() {
    return {
      clients: [],
      active: true,
    };
  },
  mounted() {
    getAllClients()
      .then((response) => {
        this.clients = response.data;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style>
</style>
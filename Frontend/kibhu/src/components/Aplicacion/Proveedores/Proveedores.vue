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
        to="/NewProveedores"
      >
        <v-icon dark>mdi-account-plus</v-icon>
      </v-btn>
      <v-container>
        <h1>Proveedores de KIBHU</h1>
        <v-row>
          <v-col
            v-for="supplier in suppliers"
            :key="supplier.id"
            lg="4"
            md="6"
            sm="6"
            xs="12"
          >
            <CatalogProveedores :supplier="supplier" :active="active" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
import CatalogProveedores from "../../Aplicacion/Proveedores/CatalogProveedores.vue";
import HeaderApp from "../HeaderApp.vue";
export default {
  components: {
    CatalogProveedores,
    HeaderApp,
  },
  data() {
    return {
      suppliers: [],
      active: true,
    };
  },
  mounted() {
    let proveedores = localStorage.suppliers;
    if (proveedores !== undefined && proveedores !== "") {
      this.suppliers = JSON.parse(proveedores);
    }
  },
};
</script>

<style>
</style>
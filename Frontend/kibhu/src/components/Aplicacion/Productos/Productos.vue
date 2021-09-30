<template>
<v-main>
  <header-app />
  <div>
    <h1>Lista de Productos</h1>
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
      to="/NewProducto"
    >
      <v-icon dark>mdi-tag-plus</v-icon>
    </v-btn>
    <v-container>
      <v-col md="6">
        <v-text-field label="Buscar">
          <v-icon slot="append" color="red"> mdi-magnify </v-icon>
        </v-text-field>
      </v-col>

      <v-row>
        <v-col
          v-for="product in products"
          :key="product.id"
          lg="3"
          md="4"
          sm="6"
          xs="12"
        >
          <CatalogProducto :product="product" :active="active" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</v-main >
</template>

<script>
import CatalogProducto from "../../Aplicacion/Productos/CatalogProducto.vue";
import HeaderApp from '../HeaderApp.vue';
export default {
  components: {
    CatalogProducto,
    HeaderApp,
  },
  data() {
    return {
      products: [],
      active: true,
    };
  },
  mounted() {
    let productos = localStorage.products;
    if (productos !== undefined && productos !== "") {
      this.products = JSON.parse(productos);
    }
  },
};
</script>

<style>
</style>
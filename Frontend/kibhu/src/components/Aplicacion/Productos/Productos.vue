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
      <v-text-field label="Buscar">
        <v-icon slot="append" color="red"> mdi-magnify </v-icon>
      </v-text-field>
      <v-container>
        <v-row>
          <v-col v-for="product in products" :key="product.reference">
            <CatalogProducto :product="product" :active="active" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
import { getAllProducts } from "../../../controllers/Product.controller";
import CatalogProducto from "../../Aplicacion/Productos/CatalogProducto.vue";
import HeaderApp from "../HeaderApp.vue";
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
    getAllProducts()
      .then((response) => {
        this.products = response.data;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style>
</style>
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
        to="/productos/new"
      >
        <v-icon dark>mdi-tag-plus</v-icon>
      </v-btn>
      <v-container>
        <h1>Lista de Productos</h1>
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
.v-main {
  padding: 50px 0px 0px !important;
}
h1 {
  text-align: center;
  font-weight: bold;
  color: #494949;
}
</style>
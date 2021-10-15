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
        to="/proveedores/new"
      >
        <v-icon dark>mdi-account-plus</v-icon>
      </v-btn>
      <v-container>
        <h1>Proveedores de KIBHU</h1>
        <v-row>
          <v-col v-for="suplier in supliers" :key="suplier.ruc">
            <CatalogProveedores :suplier="suplier" :active="active" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
import { getAllSupliers } from "../../../controllers/Suplier.controller";
import CatalogProveedores from "../../Aplicacion/Proveedores/CatalogProveedores.vue";
import HeaderApp from "../HeaderApp.vue";
export default {
  components: {
    CatalogProveedores,
    HeaderApp,
  },
  data() {
    return {
      supliers: [],
      active: true,
    };
  },
  mounted() {
    getAllSupliers()
      .then((response) => {
        this.supliers = response.data;
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
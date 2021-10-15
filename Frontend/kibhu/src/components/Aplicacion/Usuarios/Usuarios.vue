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
        to="/NewUsuario"
      >
        <v-icon dark>mdi-account-plus</v-icon>
      </v-btn>
      <v-container>
        <h1>Usuarios de KIBHU</h1>
        <v-row>
          <v-col v-for="user in users" :key="user.username">
            <CatalogUsuarios :user="user" :active="active" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>
<script>
import { getAllUsers } from "../../../controllers/User.controller";
import CatalogUsuarios from "../../Aplicacion/Usuarios/CatalogUsuarios.vue";
import HeaderApp from "../HeaderApp.vue";
export default {
  components: {
    CatalogUsuarios,
    HeaderApp,
  },
  data() {
    return {
      users: [],
      active: true,
    };
  },
  mounted() {
    getAllUsers()
      .then((response) => {
        this.users = response.data;
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

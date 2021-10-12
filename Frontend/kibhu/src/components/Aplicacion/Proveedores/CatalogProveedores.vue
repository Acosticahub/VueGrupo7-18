<template>
  <v-main>
    <header-app />
    <div>
      <v-card class="mx-auto" max-width="400">
        <v-card-title
          >Proveedor # {{ supplier.id }} {{ supplier.name }}</v-card-title
        >
        <v-card-text class="pb-0">
          <table>
            <tr>
              <td><v-card-subtitle>RUC: </v-card-subtitle></td>
              <td>{{ supplier.ruc }}</td>
            </tr>
            <tr>
              <td><v-card-subtitle>Contact: </v-card-subtitle></td>
              <td>{{ supplier.contacto }}</td>
            </tr>
            <tr>
              <td><v-card-subtitle>E-mail: </v-card-subtitle></td>
              <td>{{ supplier.email }}</td>
            </tr>
          </table>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col>
              <v-btn
                class="btn"
                tile
                dark
                :to="'/clientes/' + client.identification"
                ><v-icon> mdi-account-edit </v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn tile class="btn bg-warning">
                <v-icon @click="eliminar()"> mdi-account-remove </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
  </v-main>
</template>

<script>
import HeaderApp from "../HeaderApp.vue";

export default {
  components: { HeaderApp },
  props: ["supplier", "active"],
  data: () => ({
    reveal: false,
  }),
};
</script>

<style scope>
.big {
  font-size: 50px !important;
}
.row {
  margin: 0;
}
.col {
  padding: 10px 5px 10px;
  flex-grow: 0;
}
.btn {
  border-radius: 10px;
  display: inline-flex !important;
}
</style>
<template>
  <v-main>
    
    <div>
      <v-card class="mx-auto" width="360">
        <v-card-title
          >{{ client.firstname }} {{ client.lastname }}</v-card-title
        >
        <v-card-text class="pb-0">
          <table>
            <tr>
              <td><v-card-subtitle>ID: </v-card-subtitle></td>
              <td>{{ client.identification }}</td>
            </tr>
            <tr>
              <td><v-card-subtitle>Contact: </v-card-subtitle></td>
              <td>{{ client.contact }}</td>
            </tr>
            <tr>
              <td><v-card-subtitle>E-mail: </v-card-subtitle></td>
              <td>{{ client.mail }}</td>
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
              <v-btn tile class="btn btn1">
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

import { deleteClient } from "../../../controllers/Client.controller";
export default {
  
  props: ["client", "active"],
  data: () => ({
    reveal: false,
  }),
  methods: {
    editar() {
      this.$router.push(`/clientes/${this.client.identification}`);
    },
    eliminar() {
      deleteClient(this.client.identification)
        .then(() => {
          window.location.reload();
        })
        .catch((err) => console.error(err.response.data.message));
    },
  },
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
.btn1 {
  background-color: #daa520 !important;
}
</style>

<template>
  <v-main>
    <div>
      <v-card class="mx-auto" width="360">
        <v-card-title>{{ user.firstname }}</v-card-title>
        <v-card-text class="pb-0">
          <table>
            <tr>
              <td><v-card-subtitle>ID: </v-card-subtitle></td>
              <td>{{ user.identification }}</td>
            </tr>
            <tr>
              <td><v-card-subtitle>Contact: </v-card-subtitle></td>
              <td>{{ user.contact }}</td>
            </tr>
            <tr>
              <td><v-card-subtitle>E-mail: </v-card-subtitle></td>
              <td>{{ user.mail }}</td>
            </tr>
          </table>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col>
              <v-btn class="btn" tile dark :to="'/usuarios/' + users.username"
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
export default {
  props: ["user", "active"],
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
.btn1 {
  background-color: #daa520 !important;
}
</style>

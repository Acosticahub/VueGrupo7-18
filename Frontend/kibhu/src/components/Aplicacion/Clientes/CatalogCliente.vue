<template>
<v-main>
  <header-app />
  <div>
    <v-card
    class="mx-auto"
    max-width="344"
    outlined 
    shaped
  >
    <v-card-text>
      <div>Cliente   </div>
      <p class="text-h4 text--primary">
        {{client.firstname}}  {{client.lastname}}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="grey darken-3"
        @click="reveal = true"
      >
        Mirar más
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
        outlined 
        shaped
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Datos
          </p>
          <ul>
          <li> <v-icon slot="prepend"> mdi-smart-card </v-icon>  {{client.identification}} </li>
          <li> <v-icon slot="prepend"> mdi-cellphone </v-icon>  {{client.contact}} </li>
          <li> <v-icon slot="prepend"> mdi-email </v-icon> {{client.mail}} </li>
          </ul>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="grey darken-3"
            @click="reveal = false"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
    <v-card-actions>
        <v-btn tile color="success" dark :to=" '/clientes/' + client.identification" >
          <v-icon left > mdi-account-edit </v-icon>
        </v-btn>
        <v-btn tile color="red" class=bg-warning>
          <v-icon left @click="eliminar()"> mdi-account-remove </v-icon>
        </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</v-main>
</template>

<script>
import HeaderApp from '../HeaderApp.vue';
import { deleteClient } from "../../../controllers/Client.controller"
export default {
  components: { HeaderApp },
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
      .then( () => {
        window.location.reload();
      })
      .catch((err)   => console.error(err.response.data.message));
    }
}
}
</script>

<style scope>
.big {
    font-size: 50px !important;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  height: 100%;
}

.v-card {
  background: linear-gradient(to bottom, goldenrod,  #bebebe 80% );
}

</style>

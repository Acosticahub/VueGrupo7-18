<template>
<v-main>
  <header-app />
  <div>
    <v-card class="mx-auto" max-width="344" outlined shaped>
      <v-card-text>
        <div>Proveedor # {{ supplier.id }}</div>
        <p class="text-h4 text--primary">
          {{ supplier.name }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="grey darken-3" @click="reveal = true">
          Mirar más
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
          outlined
          shaped
        >
          <v-card-text class="pb-0">
            <p class="text-h4 text--primary">Datos</p>
            <ul>
              <li>{{ supplier.cedula }}</li>
              <li>{{ supplier.contacto }}</li>
              <li>{{ supplier.email }}</li>
            </ul>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn text color="grey darken-3" @click="reveal = false">
              Cerrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </div>
</v-main>
</template>

<script>
export default {
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
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.v-card {
  background: linear-gradient(to bottom, goldenrod, #bebebe 80%);
}
</style>
<template>
<v-main>
  <header-app />
  <div>
      <v-card class="mx-auto cards" max-width="344">
        <v-img height="200px" :src="product.img"></v-img>

        <v-card-title>{{ product.name }}</v-card-title>

        <v-card-subtitle>Stock {{ product.stock }}</v-card-subtitle>

        <v-card-actions class="btn">
          <v-btn tile color="success" class="btn">
            <v-icon> mdi-account-edit </v-icon>
          </v-btn>
          <v-btn tile color="red" dark class="btn">
            <v-icon> mdi-account-remove </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
  </div>
  </v-main>
</template>

<script>
export default {
  props: ["product", "active"],
  data: () => ({
    reveal: false,
  }),
};
</script>

<style scope>
.cards {
  background: #fff !important;
}
.btn {
  border-radius: 20px;
  margin-bottom: 4%;
}
</style>

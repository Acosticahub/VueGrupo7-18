<template>
  <v-main>
    
    <div>
      <v-card class="mx-auto cards" width="360">
        <v-img height="200px" :src="product.img"></v-img>

        <v-card-title>{{ product.name }}</v-card-title>

        <v-card-subtitle>Stock {{ product.stock }}</v-card-subtitle>

        <v-card-actions>
          <v-row>
            <v-col>
              <v-btn
                class="btn"
                tile
                dark
                :to="'/productos/' + product.reference"
                ><v-icon> mdi-pencil </v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn tile class="btn btn1">
                <v-icon @click="eliminar()"> mdi-delete </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
  </v-main>
</template>

<script>

import { deleteProduct } from "../../../controllers/Product.controller";
export default {
  
  props: ["product", "active"],
  data: () => ({
    reveal: false,
  }),
  methods: {
    editar() {
      this.$router.push(`/productos/${this.product.reference}`);
    },
    eliminar() {
      deleteProduct(this.product.reference)
        .then(() => {
          window.location.reload();
        })
        .catch((err) => console.error(err.response.data.message));
    },
  },
};
</script>

<style scope>
.cards {
  background: #fff !important;
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

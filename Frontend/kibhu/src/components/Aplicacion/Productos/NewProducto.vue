<template>
  <v-main>
    <header-app />
    <div>
      <h1>{{ isNew ? "Agregar un Nuevo" : "Editar" }} Producto</h1>
      <br />
      <v-container class="container">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Referencia:"
              type="number"
              hide-details="auto"
              v-model="stock"
              :rules="numberRules"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-numeric </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="Nombre:"
              :rules="nameRules"
              hide-details="auto"
              v-model="name"
            >
              <v-icon slot="prepend" color="#dAA520">
                mdi-package-variant
              </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="Descripción:"
              :rules="nameRules"
              hide-details="auto"
              v-model="description"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-pen </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="Cantidad:"
              type="number"
              hide-details="auto"
              v-model="stock"
              :rules="numberRules"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-numeric </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="Precio de Entrada:"
              type="number"
              hide-details="auto"
              v-model="pricein"
              :rules="numberRules"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-cash </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="Precio de Salida:"
              type="number"
              hide-details="auto"
              v-model="priceout"
              :rules="numberRules"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-cash </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="Categoría:"
              :rules="nameRules"
              hide-details="auto"
              v-model="category"
            >
              <v-icon slot="prepend" color="#dAA520">
                mdi-checkbox-multiple-blank
              </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-img max-heigth="300" :src="img"></v-img>
            <v-text-field label="URL de la imágen" v-model="img">
              <v-icon slot="prepend" color="#dAA520"> mdi-image</v-icon>
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <br /><br />
      <div class="botones">
        <v-btn tile color="#dAA520" @click="guardar()" v-if="isNew">
          <v-icon left> mdi-note-check </v-icon>
          Guardar
        </v-btn>
        <v-btn tile color="#dAA520" @click="actualizar()" v-if="!isNew">
          <v-icon left> mdi-account-check </v-icon>
          Actualizar
        </v-btn>
      </div>
      <v-snackbar v-model="snackbar">
        {{ snackbarText }}
        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="closeConfirmation()">
            Cerrar
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-main>
</template>

<script>
import HeaderApp from "../HeaderApp.vue";
import {
  getProduct,
  createProduct,
} from "../../../controllers/Product.controller";
export default {
  components: { HeaderApp },
  data() {
    return {
      reference: "",
      name: "",
      description: "",
      stock: "",
      pricein: "",
      priceout: "",
      category: [
        "Cuadernos",
        "Lapiceros y lápiz",
        "Plastilina",
        "Papeles",
        "Cartulinas",
        "Foami",
        "Vinilos",
        "Pinceles",
        "Tijeras",
      ],
      img: "",
      snackbar: false,
      snackbarText: "",
      isNew: true,
      nameRules: [
        (value) => !!value || "Campo Requerido.",
        (value) => (value && value.length >= 3) || "Min 3 caracteres",
      ],
      numberRules: [(value) => !!value || "Campo Requerido."],
    };
  },

  created() {
    const reference = this.$route.params.reference;
    if (reference != undefined) {
      getProduct(reference)
        .then((response) => {
          const product = response.data;
          this.reference = product.reference;
          this.name = product.name;
          this.description = product.description;
          this.stock = product.stock;
          this.pricein = product.pricein;
          this.priceout = product.priceout;
          this.category = product.category;
          this.img = product.img;

          this.isNew = false;
        })
        .catch((err) => console.error(err));
    }
  },

  methods: {
    guardar() {
      const product = {
        reference: this.reference,
        reference: this.reference,
        name: this.name,
        description: this.description,
        stock: this.stock,
        pricein: this.pricein,
        priceout: this.priceout,
        category: this.category,
        img: this.img,
      };
      createProduct(product)
        .then(() => {
          this.openSuccesDialog("Guardado correctamente");
        })
        .catch((err) => console.error(err));
    },
    openSuccesDialog(mensaje) {
      this.snackbarText = mensaje;
      this.snackbar = true;
    },
    openErrorDialog(mensaje) {
      this.snackbarText = mensaje;
      this.snackbar = true;
    },
    closeConfirmation() {
      this.snackbar = false;
      this.$router.push("/products");
    },
  },
};
</script>

<style>
.botones {
  float: right;
}
input {
  border-color: rgba(255, 255, 255, 0) !important;
}
.v-input__slot {
  margin-left: 20px;
}
.v-input__prepend-outer {
  margin-left: 30px;
}
</style>
<template>
<v-main>
  <header-app />
  <div>
    <center><h1>Agregar un Nuevo Producto</h1></center><br>
    <v-container class="container">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Nombre:"
            :rules="nameRules"
            hide-details="auto"
            v-model="name"
            outlined
            shaped
          >
            <v-icon slot="prepend" color="#dAA520"> mdi-package-variant </v-icon>
          </v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            label="Descripción:"
            :rules="nameRules"
            hide-details="auto"
            v-model="description"
            outlined
            shaped
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
            outlined
            shaped
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
            outlined
            shaped
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
            outlined
            shaped
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
            outlined
            shaped
          >
            <v-icon slot="prepend" color="#dAA520"> mdi-checkbox-multiple-blank </v-icon>
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
    <div class="botones">
      <v-btn tile color="#dAA520" @click="guardar()">
        <v-icon left> mdi-note-check </v-icon>
        Guardar
      </v-btn>
    </div>
  </div>
  </v-main>
</template>

<script>
import HeaderApp from '../HeaderApp.vue';
export default {
  components: { HeaderApp },
  data() {
    return {
      name: "",
      description: "",
      stock: "",
      pricein: "",
      priceout: "",
      category: "",
      img: "",
      nameRules: [
        (value) => !!value || "Campo Requerido.",
        (value) => (value && value.length >= 3) || "Min 3 caracteres",
      ],
      numberRules: [(value) => !!value || "Campo Requerido."],
    };
  },
  mounted() {
    console.log("idProduct:", localStorage.idProduct);
    console.log("products:", localStorage.products);
  },
  methods: {
    guardar() {
      console.log("Guardar");
      // Validar campos obligatorios
      if (this.name === "") {
        alert("El nombre es un campo obligatorio");
        return;
      }
      //Agregar producto al localstorage
      let id = localStorage.idProduct;
      if (id === undefined || id == "") {
        id = 1;
      } else {
        id = parseInt(id) + 1;
      }
      const producto = {
        id: id,
        name: this.name,
        description: this.description,
        stock: this.stock,
        pricein: this.pricein,
        priceout: this.priceout,
        category: this.category,
        img: this.img,
      };
      let productos = localStorage.products;
      if (productos === undefined || productos == "") {
        productos = [];
      } else {
        productos = JSON.parse(productos);
      }
      console.log("productos", productos);
      productos.push(producto);
      alert("Se ha Agregado el Producto Satisfactoriamente");
      this.name = "";
      this.description = "";
      this.stock = "";
      this.pricein = "";
      this.priceout = "";
      this.category = "";
      this.img = "";
      localStorage.idProduct = id;
      localStorage.products = JSON.stringify(productos);
      location.href = "/Productos"
    },
  },
};
</script>

<style>
.botones {
float: right;
}
</style>
<template>
  <v-main>
    <header-app />
    <div>
      <h1>Nuevo Usuario</h1>
      <v-container class="container">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Nombre del Usuario:"
              :rules="nameRules"
              hide-details="auto"
              v-model="name"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-account </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="Identificación del Usuario:"
              hide-details="auto"
              v-model="cedula"
              type="number"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-smart-card </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="Número de contacto:"
              type="number"
              hide-details="auto"
              v-model="contacto"
              :rules="numberRules"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-cellphone </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="email"
              :rules="mailRules"
              hide-details="auto"
              label="Correo de contacto:"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-email </v-icon>
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <br /><br />
      <div class="botones">
        <v-btn tile color="#dAA520" @click="guardar()">
          <v-icon left> mdi-account-check </v-icon>
          Guardar
        </v-btn>
      </div>
    </div>
  </v-main>
</template>

<script>
import HeaderApp from "../HeaderApp.vue";
export default {
  components: { HeaderApp },
  data() {
    return {
      name: "",
      cedula: "",
      contacto: "",
      email: "",
      nameRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      mailRules: [
        (value) => !!value || "Required.",
        (value) => value.length <= 20 || "Max 20 characters",
        (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      ],
      numberRules: [(value) => !!value || "Required."],
    };
  },
  mounted() {
    console.log("idUser:", localStorage.idUser);
    console.log("users:", localStorage.users);
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
      let id = localStorage.idUser;
      if (id === undefined || id == "") {
        id = 1;
      } else {
        id = parseInt(id) + 1;
      }
      const usuario = {
        id: id,
        name: this.name,
        cedula: this.cedula,
        contacto: this.contacto,
        email: this.email,
      };
      let usuarios = localStorage.clients;
      if (usuarios === undefined || usuarios == "") {
        usuarios = [];
      } else {
        usuarios = JSON.parse(usuarios);
      }
      console.log("usuarios", usuarios);
      usuarios.push(usuario);
      alert("Bienvenido a la familia KIBHU");
      this.name = "";
      this.cedula = "";
      this.contacto = "";
      this.email = "";
      localStorage.idUser = id;
      localStorage.users = JSON.stringify(usuarios);
      location.href = "/usuarios";
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
  background: rgba(255, 255, 255, 0) !important;
}
.v-input__prepend-outer {
  margin-left: 30px;
}
</style>
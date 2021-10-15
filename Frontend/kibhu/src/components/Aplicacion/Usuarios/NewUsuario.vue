<template>
  <v-main>
    <header-app />
    <div>
      <v-container class="container">
        <h1>{{ isNew ? "Agregar un Nuevo" : "Editar" }} Usuario</h1>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Nombre:"
              :rules="nameRules"
              hide-details="auto"
              v-model="firstname"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-account </v-icon>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="lastname"
              hide-details="auto"
              label="Apellido:"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-account </v-icon>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Identificación del Usuario:"
              hide-details="auto"
              v-model="identification"
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
              v-model="contact"
              :rules="numberRules"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-cellphone </v-icon>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="mail"
              :rules="mailRules"
              hide-details="auto"
              label="Correo de contacto:"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-email </v-icon>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="username"
              hide-details="auto"
              label="Nickname"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-account </v-icon>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="password"
              hide-details="auto"
              label="Contraseña:"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-lock </v-icon>
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <div class="botones">
        <v-btn
          tile
          class="rounded-pill"
          style="margin-right: 10px"
          dark
          color="#E65245"
          link
          href="/usuarios"
        >
          <v-icon left wh> mdi-close-thick </v-icon>
          Cancelar
        </v-btn>
        <v-btn
          tile
          class="rounded-pill"
          dark
          color="#dAA520"
          @click="guardar()"
          v-if="isNew"
        >
          <v-icon left> mdi-note-check </v-icon>
          Guardar
        </v-btn>
        <v-btn
          tile
          dark
          class="rounded-pill"
          color="#dAA520"
          @click="actualizar()"
          v-if="!isNew"
        >
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
import {
  getUser,
  createUser,
  updateUser,
} from "../../../controllers/User.controller";
import HeaderApp from "../HeaderApp.vue";
export default {
  components: { HeaderApp },
  data() {
    return {
      firstname: "",
      lastname: "",
      identification: 0,
      contact: 0,
      mail: "",
      username: "",
      password: "",
      snackbar: false,
      snackbarText: "",
      isNew: true,
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
  created() {
    const username = this.$route.params.username;
    if (username != undefined) {
      getUser(username)
        .then((response) => {
          const user = response.data;
          this.username = user.username;
          this.firstname = user.firstname;
          this.lastname = user.lastname;
          this.contact = user.contact;
          this.mail = user.mail;
          this.password = user.password;
          this.identification = user.identification;
          this.isNew = false;
        })
        .catch((err) => console.error(err));
    }
  },
  methods: {
    guardar() {
      const user = {
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        contact: this.contact,
        mail: this.mail,
        password: this.password,
        identification: this.identification,
      };
      createUser(user)
        .then(() => {
          this.openSuccesDialog("Guardado correctamente");
        })
        .catch((err) => console.error(err));
    },
    actualizar() {
      if (
        this.username == undefined ||
        this.username == "" ||
        this.firstname == undefined ||
        this.firstname == "" ||
        this.lastname == undefined ||
        this.lastname == ""
      ) {
        this.openErrorDialog("Ingrese los campos obligatorios");
        return;
      }
      const user = {
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        contact: this.contact,
        mail: this.mail,
        password: this.password,
        identification: this.identification,
      };
      updateUser(this.username, user)
        .then(() => {
          this.openSuccesDialog(
            "Se ha actulizado el usuario" + this.firstname + "" + this.lastname
          );
        })
        .catch(() =>
          this.openErrorDialog("Ha ocurrido un error al actualizar el usuario")
        );
    },
    openSuccesDialog(mensaje) {
      this.snackbarText = mensaje;
      this.snackbarText = true;
    },
    openErrorDialog(mensaje) {
      this.snackbarText = mensaje;
      this.snackbarText = true;
    },
    closeConfirmation() {
      this.snackbar = false;
      this.$router.push("/usuarios");
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
.botones {
  text-decoration: none !important;
  padding-right: 10px;
  padding-top: 30px;
  float: right;
}
a:hover {
  text-decoration: none;
}
.v-main {
  padding: 50px 0px 0px !important;
}
h1 {
  text-align: center;
  font-weight: bold;
  color: #494949;
}
</style>
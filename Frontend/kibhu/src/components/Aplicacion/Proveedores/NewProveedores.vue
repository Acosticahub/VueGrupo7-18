<template>
  <v-main>
    <header-app />
    <div>
      <h1>{{ isNew ? "New" : "Edit" }} Proveedor</h1>
      <v-container class="container">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Nombre del proveedor"
              :rules="nameRules"
              hide-details="auto"
              v-model="name"
            >
              <v-icon slot="prepend" color="#dAA520"> mdi-account </v-icon>
            </v-text-field>
          </v-col>

          

          

          <v-col cols="12" sm="6">
            <v-text-field
              label="ruc"
              hide-details="auto"
              v-model="ruc"
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
        </v-row>
      </v-container>
      <div class="botones">
        <v-btn tile color="#dAA520" @click="guardar()" v-if="isNew">
          <v-icon left> mdi-account-check </v-icon>
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
    getSuplier,
    createSuplier,
    updateSuplier,
    } from "../../../controllers/Suplier.controller";
export default {
  components: { HeaderApp },
  data() {
    return {
    name: "",
    ruc: 0,
    contact: 0,
    mail: "",
    select: null,
    snackbar: false,
    snackbarText: "",
    isNew: true,
    nameRules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters", ],
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
    const ruc = this.$route.params.ruc;
    if (ruc != undefined) {
      getSuplier(ruc)
        .then((response) => {
          const suplier = response.data;
          this.ruc = suplier.ruc;
          this.name = suplier.name;
          this.contact = suplier.contact;
          this.mail = suplier.mail;
          

          this.isNew = false;
        })
        .catch((err) => console.error(err));
    }
  },
  methods: {
    guardar() {
      const suplier = {
        ruc: this.ruc,
        contact: this.contact,
        name: this.name,
        mail: this.mail,
        
      };
      createSuplier(suplier)
        .then(() => {
          this.openSuccesDialog("Guardado correctamente");
        })
        .catch((err) => console.error(err));
    },
    actualizar()  {
      if (
        this.ruc == undefined ||
        this.ruc == "" ||
        this.name == undefined ||
        this.name == ""   
         
      ) {
        this.openErrorDialog("Ingrese los campos obligatorios");
        return;
      } 
      const suplier = {
        name: this.name,
        ruc: this.ruc,
        contact : this.contact,
        mail : this.mail,
        
      };
      updateSuplier(this.ruc, suplier)
        .then (()  =>  {
          this.openSuccesDialog("Se ha actualizado el proveedor: "  + this.name  );
        })
        .catch(()   =>  this.openErrorDialog("Ha ocurrido un error al actualizar el producto"));
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
        this.$router.push("/Proveedores");
    },
  },
};
</script>

<style>

.botones {
  float: right;
}
h1 {
  letter-spacing: 3px;
  text-align: center;
  text-shadow: 2px 2px 4px goldenrod;
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

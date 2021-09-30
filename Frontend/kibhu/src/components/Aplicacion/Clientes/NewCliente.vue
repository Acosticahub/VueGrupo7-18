<template>
<v-main>
  <header-app />
<div>
    <h1>Nuevo Cliente</h1>
    <v-container class="container">
        <v-row>
            <v-col
            cols="12"
            sm="6"
            >
                <v-text-field
                    label="Nombre del cliente"
                    :rules="nameRules"
                    hide-details="auto"
                    v-model="name"
                    outlined
                    shaped
                    >
                    <v-icon slot="prepend" color="#dAA520"> mdi-account </v-icon>
                </v-text-field>
            </v-col>

            <v-col
            cols="12"
            sm="6"
            >
                <v-select
                    :items="items"
                    filled
                    label="Tipo de Identificación"
                    dense
                    v-model="tipodeID"
                    >
                    <v-icon slot="prepend" color="#dAA520"> mdi-smart-card </v-icon>
                </v-select>
                    
            </v-col>


            <v-col
            cols="12"
            sm="6"
            >
                <v-text-field
                    label="Identificación del cliente"
                    hide-details="auto"
                    v-model="cedula"
                    type= "number"
                    outlined
                    shaped
                    >
                    <v-icon slot="prepend" color="#dAA520"> mdi-smart-card </v-icon>
                </v-text-field>
            </v-col>

            <v-col
            cols="12"
            sm="6"
            >
                <v-text-field
                    label="Número de contacto"
                    type = "number"
                    hide-details="auto"
                    v-model="contacto"
                    :rules="numberRules"
                    outlined
                    shaped
                    >
                    <v-icon slot="prepend" color="#dAA520"> mdi-cellphone </v-icon>
                </v-text-field>
            </v-col>

            <v-col
            cols="12"
            sm="6"
            >
                <v-text-field
                    v-model="email"
                    :rules="mailRules"
                    hide-details="auto"
                    label="Correo de contacto"
                    outlined
                    shaped
                    >
                    <v-icon slot="prepend" color="#dAA520"> mdi-email </v-icon>
                </v-text-field>
            </v-col>
        </v-row>
    </v-container>
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
export default {
data() {
    return {
    name: "",
    cedula: "",
    contacto: "",
    email: "",
    tipodeID: "",
    items: ['CC', 'T.I', 'Pasaporte', 'Cédula Extranjería'],
    nameRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
    mailRules: [
        (value) => !!value || 'Required.',
        (value) => value.length <= 20 || 'Max 20 characters',
        (value) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
        }
    ],
    numberRules: [
        (value) => !!value || "Required.",
    ]
    };

},
mounted() {
    console.log("idClient:", localStorage.idClient);
    console.log("clients:", localStorage.clients);
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
    let id = localStorage.idClient;
    if (id === undefined || id == "") {
        id = 1;
    } else {
        id = parseInt(id) + 1;
    }
    const cliente = {
        id: id,
        name: this.name,
        cedula: this.cedula,
        contacto: this.contacto,
        email: this.email,
        tipodeID: this.tipodeID

    };
    let clientes = localStorage.clients;
    if (clientes === undefined || clientes == "") {
        clientes = [];
    } else {
        clientes = JSON.parse(clientes);
    }
    console.log("clientes", clientes);
    clientes.push(cliente);
    alert("Bienvenido a la familia KIBHU");
    this.name = "";
    this.cedula = "";
    this.contacto = "";
    this.email = "";
    this.tipodeID = "";
    localStorage.idClient = id;
    localStorage.clients = JSON.stringify(clientes);
     location.href = "/clientes"
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
</style>
<template>
    <v-main>
        <header-app />
    <div>
        <h1>Clientes de KIBHU</h1>
        <v-btn 
        class="mx-2"
        dark
        large
        color="#dAA520"
        elevation="2" 
        bottom right fixed fab to="/NewCliente">
            <v-icon dark>mdi-account-plus</v-icon>
        </v-btn>
        <v-text-field label="Buscar">
            <v-icon slot="append" color="red"> mdi-magnify </v-icon>
        </v-text-field>
        <v-container>
            <v-row>
                <v-col
                    v-for="client in clients"
                    :key="client.identification"
                    lg="3"
                    md="4"
                    sm="6"
                    xs="12"
            >
                    <v-card>
                        <CatalogCliente :client="client" :active="active" />
                        <v-card-actions>
                            <v-btn tile color="success">
                                <v-icon left> mdi-account-edit </v-icon>
                            </v-btn>
                            <v-btn tile color="red" dark>
                                <v-icon left> mdi-account-remove </v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</v-main>
</template>

<script>
import { getAllClients } from "../../../controllers/Client.controller"
import CatalogCliente from '../../Aplicacion/Clientes/CatalogCliente.vue';
import HeaderApp from '../HeaderApp.vue';
export default {
components: {
    CatalogCliente,
    HeaderApp,
},
data() {
    return {
    clients: [],
    active: true
    };
},
mounted() {
    getAllClients()
    .then((response) => {
        this.clients = response.data;
    } )
    .catch((err) => console.error(err));
},
};
</script>

<style>
</style>
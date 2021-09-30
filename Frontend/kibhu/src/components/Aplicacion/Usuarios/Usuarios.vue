<template>
<div>
        <h1>Usuarios de KIBHU</h1>
        <v-btn 
        class="mx-2"
        dark
        large
        color="#dAA520"
        elevation="2" 
        bottom right fixed fab to= "/NewUsuario">
            <v-icon dark>mdi-account-plus</v-icon>
        </v-btn>
        <v-text-field label="Buscar">
            <v-icon slot="append" color="red"> mdi-magnify </v-icon>
        </v-text-field>
        <v-container>
            <v-row>
                <v-col
                    v-for="user in users"
                    :key="user.id"
                    lg="3"
                    md="4"
                    sm="6"
                    xs="12"
            >
                    <v-card>
                        <CatalogUsuarios :user="user" :active="active" />
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
</template>
<script>
import CatalogUsuarios from '../../Aplicacion/Usuarios/CatalogUsuarios.vue';
export default {
components: {
    CatalogUsuarios
},
data() {
    return {
    clients: [],
    active: true
    };
},
mounted() {
    let Usuarios = localStorage.users;
    if (Usuarios !== undefined && Usuarios !== "") {
    this.users = JSON.parse(Usuarios);
    }
},
};
</script>
<template>
<v-main>
  <header-app />
    <div>
        <h1>Proveedores de KIBHU</h1>
        <v-btn 
        class="mx-2"
        dark
        large
        color="#dAA520"
        elevation="2" 
        bottom right fixed fab to="/NewProveedores">
            <v-icon dark>mdi-account-plus</v-icon>
        </v-btn>
        <v-text-field label="Buscar">
            <v-icon slot="append" color="red"> mdi-magnify </v-icon>
        </v-text-field>
        <v-container>
            <v-row>
                <v-col
                    v-for="supplier in suppliers"
                    :key="supplier.id"
                    lg="3"
                    md="4"
                    sm="6"
                    xs="12"
            >
                    <v-card>
                        <CatalogProveedores :supplier="supplier" :active="active" />
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
import CatalogProveedores from '../../Aplicacion/Proveedores/CatalogProveedores.vue';
import HeaderApp from '../HeaderApp.vue';
export default {
components: {
    CatalogProveedores,
    HeaderApp,
},
data() {
    return {
    suppliers: [],
    active: true
    };
},
mounted() {
    let proveedores = localStorage.suppliers;
    if (proveedores !== undefined && proveedores !== "") {
    this.suppliers = JSON.parse(proveedores);
    }
},
};
</script>

<style>
</style>
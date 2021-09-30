<template>
<nav>
<v-app-bar flat app >
    <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-img
    contain
    lazy-src="../../assets/Logo Kibhu blanco-02.svg"
    max-height="200"
    max-width="130"
    src="../../assets/Logo Kibhu Para fondo claro -02.png"
></v-img>
<v-spacer></v-spacer>
 
<v-menu offset-y>
    <template v-slot:activator="{ on }">
        <v-btn text v-on="on" color="grey" class="text--darken-2">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
        </v-btn>
    </template>
        <v-list>
            <v-list-item
                v-for="(link,idx) in menu"
                :key="idx"
                :to="link.route"
            >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>

<v-btn flat >
    <span>Sign Out</span>
    <v-icon rigth>mdi-logout</v-icon>
</v-btn>
</v-app-bar>
<v-navigation-drawer app v-model="drawer" color="#dAA520">
    <v-row justify="center" class="mt-15 mb-1 ">
        <v-col cols="8">
            <v-avatar size="160">
                <img src="../../assets/Admin-01.png" alt="."/>
            </v-avatar>
            
            </v-col>
        </v-row>
        <v-btn
        class="ma-12 "
        :loading="loading"
        :disabled="loading"
        color="secondary"
        @click="loader = 'loading'"
    >
    Administrador 
    </v-btn>
    <p class="text-center white--text font-weight-medium "> Hernán Pérez </p>
    <v-list dense nav>
        
        <v-list-item v-for="link in links" :key="link.text" route :to="link.route">
            <v-list-item-action>
                <v-icon class="white--text"> {{ link.icon }} </v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-item class="white--text"> {{link.text}} </v-list-item-item>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</v-navigation-drawer>
</nav>


</template>

<script>


export default {
    data () {
        return {
            drawer: false,
        
            links:[
                {icon:'mdi-view-dashboard', text: 'Configuración de Usuario', route: ''},
                { icon: 'mdi-folder-settings', text: 'Recursos', route: './Proyects'},
                {icon: 'mdi-account-tie', text: 'Equipo', route:'./Usuarios'},
            ],
            menu:[
                {icon: 'mdi-account-tie', text: 'Inicio', route:'./'},
                {icon:'mdi-view-dashboard', text: 'Productos', route: './Productos'},
                {icon: 'mdi-folder-settings', text: 'Clientes', route: './Clientes'},
                {icon: 'mdi-account-tie', text: 'Proveedores', route:'./Proveedores'},
                {icon: 'mdi-account-tie', text: 'Usuarios', route:'./Usuarios'},
            ],
            
        }
        }
}

</script>

<style>


</style>

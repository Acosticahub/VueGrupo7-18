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

   <!-- <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="grey"
          class="text--darken-2"
          depressed
          v-bind="attrs"
          v-on="on"
        ><v-icon left>mdi-chevron-down</v-icon>
          Menu
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>-->

  <div class="dropdown">
  
  <button class="dropbtn">Menu <v-icon left>mdi-chevron-down</v-icon> </button>
  <div class="dropdown-content">
  <a style="black" href="/Appkibhu">Inicio</a>
  <a href="/productos">Productos</a>
  <a href="/usuarios">Usuarios</a>
  <a href="/Clientes">Clientes</a>
  <a href="/Proveedores">Proveedores</a>
  </div>
</div>


<v-btn flat link href="../../" >
    <span>Sign Out</span>
    <v-icon rigth>mdi-logout</v-icon>
</v-btn>
</v-app-bar>
<v-navigation-drawer app v-model="drawer" color="#dAA520">
    <v-row  class="mt-5 mb-3 "  id="foto">
        <v-col cols="7">
            <v-avatar size="160">
                <img src="../../assets/Admin-01.png" alt="."/>
            </v-avatar>
            
            </v-col>
        </v-row>
        <v-btn class="btnadmin">
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
            items:[
                {icon: 'mdi-account-tie', text: 'Inicio', route:'./'},
                {icon:'mdi-view-dashboard', text: 'Productoss', route: './Productos'},
                {icon: 'mdi-folder-settings', text: 'Clientes', route: './Clientes'},
                {icon: 'mdi-account-tie', text: 'Proveedores', route:'./Proveedores'},
                {icon: 'mdi-account-tie', text: 'Usuarios', route:'./Usuarios'},
            ],
            
            
        }
        }
}

</script>

<style>
.foto{
  left: 50px;
}

.btnadmin{
  bottom: 15px;
  left: 50px;
}
.dropbtn {
  background-color: #a0a0a0;
  color: black;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #ffffff;
}

</style>
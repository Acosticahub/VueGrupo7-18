<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-img
        contain
        lazy-src="../../assets/Logo Kibhu blanco-02.svg"
        max-height="200"
        max-width="130"
        src="../../assets/Logo Kibhu Para fondo claro -02.png"
      ></v-img>
      <v-spacer></v-spacer>


      <v-btn class="sign" depressed style="black" href="/Appkibhu">Inicio 
      <v-icon rigth>mdi-home-analytics</v-icon></v-btn>
      
        

      <v-btn class="sign" flat link href="../../">
        <span>Salir </span>
        <v-icon rigth>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" color="#dAA520">
      <v-row class="mt-5 mb-3">
        <v-col cols="7">
          <v-avatar size="160" class="ml-5">
            <img src="../../assets/Admin-01.png" alt="." />
          </v-avatar>
        </v-col>
      </v-row>
      <v-btn class="btnadmin"> Administrador </v-btn>
      <p dark class="text-center font-weight-medium">Cesar Augusto Diaz </p>
      <v-list dense nav dark class="menudrop">
        
        <v-list-item
          class="white--text"
          v-for="link in links"
          :key="link.text"
          route
          :to="link.route"
        >
        
          <v-list-item-action  >
            <v-icon class="white--text"> {{ link.icon }} </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-item class="white--text">
              {{ link.text }}
            </v-list-item-item>
          </v-list-item-content>
        </v-list-item>
        
      </v-list>
      
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,

      links: [
        { icon: "mdi-view-dashboard", text: "Productos",   route: "/productos", },
        { icon: "mdi-account-multiple", text: "Clientes", route: "/clientes" },
        { icon: "mdi-account-group", text: "Usuarios", route: "/usuarios" },
        { icon: "mdi-account-arrow-down", text: "Proveedores", route: "/proveedores" },
      ],
      items: [
        { icon: "mdi-account-tie", text: "Inicio", route: "./" },
        {
          icon: "mdi-view-dashboard",
          text: "Productoss",
          route: "./Productos",
        },
        { icon: "mdi-folder-settings", text: "Clientes", route: "./Clientes" },
        {
          icon: "mdi-account-tie",
          text: "Proveedores",
          route: "./Proveedores",
        },
        { icon: "mdi-account-tie", text: "Usuarios", route: "./Usuarios" },
      ],
    };
  },
};
</script>

<style>
.sign {
  text-decoration: none !important;
  margin-left: 2%;
}
.foto {
  left: 50px;
}

.btnadmin {
  bottom: 15px;
  left: 50px;
}

a:hover{
  text-decoration: none !important;
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f0e9e9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #ffffff;
}
</style>
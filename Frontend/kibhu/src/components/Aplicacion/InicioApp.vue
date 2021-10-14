<template>
  <v-container>
    <br /><br />
    <!-- Fila de contenido -->
    <div class="row carticas">
      <!-- Tarjeta de inventario -->
      <div class="col-xl-3 col-md-6 mb-4">
        <a href="/productos">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-uppercase mb-1">
                    Inventario
                  </div>
                  <v-p class="bold"> 8 </v-p>
                </div>
                <div class="col-auto">
                  <i class="fas fa-calendar fa-2x text-warning"></i>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <!-- Tarjeta de usuarios -->

      <div class="col-xl-3 col-md-6 mb-4">
        <a href="/usuarios">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-uppercase mb-1">
                    Usuarios
                  </div>
                  <v-p class="bold"> 7 </v-p>
                </div>
                <div class="col-auto">
                  <i class="fas fa-user fa-2x text-warning"></i>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <!-- Tarjeta de clientes -->
      <div class="col-xl-3 col-md-6 mb-4">
        <a href="/clientes">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-uppercase mb-1">
                    Clientes
                  </div>
                  <v-p class="bold"> 6 </v-p>
                </div>
                <div class="col-auto">
                  <i class="fas fa-clipboard-list fa-2x text-warning"></i>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <!-- Tarjeta de proveedores -->
      <div class="col-xl-3 col-md-6 mb-4">
        <a href="/proveedores">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-uppercase mb-1">
                    Proveedores
                  </div>
                  <v-p class="bold"> 5 </v-p>
                </div>
                <div class="col-auto">
                  <i class="fas fa-comments fa-2x text-warning"></i>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- Logo Kibhu -->
    <v-row>
      <!-- Diagrama de Ventas -->
      <v-col cols="8" md="8">
        <v-card
          class="mx-auto text-center"
          color="#dAA520"
          dark
          max-width="600"
        >
          <v-card-text>
            <v-sheet color="#606161">
              <v-sparkline
                :value="value"
                color="rgba(255, 255, 255, .7)"
                height="100"
                padding="24"
                stroke-linecap="round"
                smooth
              >
                <template v-slot:label="item"> ${{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="text-h4 font-weight-bold">
              Ventas de las últimas 24 horas
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
            <v-btn block text> Ir al Reporte </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4" md="3" style="text-align: justify">
        <v-img
          :src="require('../../assets/logo.png')"
          class="my-3 displayed"
          contain
          height="200"
        />
        <v-p>
          Guarda los productos que vendes en la nube. Tu inventario no sólo
          estará seguro, sino que será de fácil acceso siempre que necesites
          revisarlo.
        </v-p>
      </v-col>
    </v-row>
    <!-- Datos -->
    <v-container class="my-5">
      <v-card
        flat
        tile
        class="px-3"
        v-for="project in proyects"
        :key="project.title"
      >
        <v-row row wrap>
          <v-col cols="1" md="1">
            <div class="caption grey--text">Id</div>
            <div>{{ proyects.id }}</div>
          </v-col>
          <v-col xs="5">
            <div class="caption grey--text">Nombre</div>
            <div>{{ proyects.nombre }}</div>
          </v-col>
          <v-col xs="2">
            <div class="caption grey--text">Stock</div>
            <div>{{ proyects.stock }}</div>
          </v-col>
          <v-col xs="2">
            <div class="caption grey--text">Precio Entrada</div>
            <div>{{ proyects.pricein }}</div>
          </v-col>
          <v-col xs="2">
            <div class="caption grey--text">Precio Salida</div>
            <div>{{ proyects.priceout }}</div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <!-- Tabla de los últimos clientes -->
    <v-text> ÚLTIMOS CLIENTES </v-text>
    <v-container class="my-5">
      <v-card
        flat
        tile
        class="px-3"
        v-for="client in clients"
        :key="client.identification"
      >
        <v-row row wrap>
          <v-col xs="5">
            <div>{{ client.firstname }}</div>
          </v-col>
          <v-col xs="2">
            <div>{{ client.lastname }}</div>
          </v-col>
          <v-col xs="2">
            <v-icon slot="prepend" color="#dAA520"> mdi-cellphone </v-icon>
            <div>{{ client.contact }}</div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import { sortedClients } from "../../controllers/Client.controller";
export default {
  name: "HelloWorld",

  data() {
    return {
      clients: [],
      value: [423.956, 446.548, 675.325, 510.615, 590.258, 610.954, 760.985],
      proyects: [
        {
          id: "05",
          nombre: "Cuaderno cuadriculado",
          stock: "500",
          pricein: "12000",
          priceout: "15000",
        },
        {
          id: "08",
          nombre: "marcador permanente",
          stock: "280",
          pricein: "500",
          priceout: "800",
        },
        {
          id: "07",
          nombre: "block de hojas ",
          stock: "100",
          pricein: "1800",
          priceout: "3000",
        },
        {
          id: "10",
          nombre: "caja de clips",
          stock: "300",
          pricein: "800",
          priceout: "1500",
        },
        {
          id: "45",
          nombre: " tijeras",
          stock: "85",
          pricein: "1000",
          priceout: "1800",
        },
        {
          id: "25",
          nombre: "Borrador tablero",
          stock: "160",
          pricein: "700",
          priceout: "1200",
        },
        {
          id: "16",
          nombre: "Block cartulina",
          stock: "69",
          pricein: "2000",
          priceout: "3500",
        },
      ],
    };
  },
  mounted() {
    sortedClients()
      .then((response) => {
        this.clients = response.data;
      })
      .catch((err) => console.error(err));
  },
};
</script>
<style scoped>
.displayed p {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
v-p {
  color: #787878;
}
a {
  text-decoration: none;
  color: black;
}

.carticas {
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 20px;
}
.bold {
  font-weight: bold;
}
</style>
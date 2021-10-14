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
                  <v-p class="bold"> {{ countproduct }} </v-p>
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
                  <v-p class="bold"> {{ countuser }} </v-p>
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
                  <v-p class="bold"> {{ countclient }} </v-p>
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
                  <v-p class="bold"> {{ countsuplier }} </v-p>
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
    <br /><br /><br />
    <!-- Tabla de los últimos clientes -->
    <h1 style="color: #daa520; text-align: center">Clientes más Recientes</h1>
    <br />
    <div class="table-responsive">
      <table class="table table-hover table-striped table-bordered table-sm">
        <thead>
          <tr class="text-center thead-dark">
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Contacto</th>
          </tr>
        </thead>
        <tbody v-for="client in clients" :key="client.identification">
          <tr>
            <td style="width: 200px">{{ client.identification }}</td>
            <td>{{ client.firstname }}</td>
            <td>{{ client.lastname }}</td>
            <td>
              {{ client.contact }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br /><br />
  </v-container>
</template>

<script>
import {
  sortedClients,
  countedClients,
} from "../../controllers/Client.controller";

import { countedProducts } from "../../controllers/Product.controller";

import { countedSupliers } from "../../controllers/Suplier.controller";

import { countedUsers } from "../../controllers/User.controller";

export default {
  name: "HelloWorld",

  data() {
    return {
      countclient: [],
      countproduct: [],
      countuser: [],
      countsuplier: [],
      clients: [],
      value: [423.956, 446.548, 675.325, 510.615, 590.258, 610.954, 760.985],
    };
  },
  mounted() {
    sortedClients()
      .then((response) => {
        this.clients = response.data;
      })
      .catch((err) => console.error(err));
    countedClients()
      .then((response) => {
        this.countclient = response.data;
      })
      .catch((err) => console.error(err));
    countedProducts()
      .then((response) => {
        this.countproduct = response.data;
      })
      .catch((err) => console.error(err));
    countedUsers()
      .then((response) => {
        this.countuser = response.data;
      })
      .catch((err) => console.error(err));
    countedSupliers()
      .then((response) => {
        this.countsuplier = response.data;
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
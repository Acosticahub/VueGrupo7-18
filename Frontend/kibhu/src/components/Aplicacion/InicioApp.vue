<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" md="12">
        <v-img
          :src="require('../../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12" md="12">
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    value: [423.956, 446.548, 675.325, 510.615, 590.258, 610.954, 760.985],
    proyects: [
      {
        id: "05",
        nombre: "Cuaderno Cuadriculado",
        stock: "500",
        pricein: "12000",
        priceout: "15000",
      },
      {
        id: "08",
        nombre: "Marcador Permanente",
        stock: "280",
        pricein: "500",
        priceout: "800",
      },
      {
        id: "07",
        nombre: "Block de hojas",
        stock: "100",
        pricein: "1800",
        priceout: "3000",
      },
      {
        id: "10",
        nombre: "Caja de Clips",
        stock: "300",
        pricein: "800",
        priceout: "1500",
      },
      {
        id: "45",
        nombre: "Tijeras",
        stock: "85",
        pricein: "1000",
        priceout: "1800",
      },
      {
        id: "25",
        nombre: "Borrador Tablero",
        stock: "160",
        pricein: "700",
        priceout: "1200",
      },
      {
        id: "16",
        nombre: "Block Cartulina",
        stock: "69",
        pricein: "2000",
        priceout: "3500",
      }
    ],
  }),
};

</script>

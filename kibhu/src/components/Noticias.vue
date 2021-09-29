<template>
  <div class="bloque">
    <h1>Noticias</h1>
    
    
    <br />
    <v-carousel height="663px" :show-arrows="false">
      <v-carousel-item>
        <v-row>
          <v-card class="mx-auto cards" max-width="344">
            <v-img height="320px" src="../assets/programacion.jpg"></v-img>

            <v-card-title>Kibhu en actualizacion</v-card-title>

            <v-card-subtitle>mantenemos mejorando nuestros servicios</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                mantenemos en constante actualizacion, para mejorar y perfeccionar nuestros servicios.
              </div>
              <br />

              
            </v-card-text>

            <v-card-actions>
              <div class="btn">
                
              </div>
            </v-card-actions>
          </v-card>
          <v-card class="mx-auto cards" max-width="344">
            <v-img height="320px" src="../assets/imgproductiva.jpg"></v-img>

            <v-card-title>Kibhu ahora en moviles</v-card-title>

            <v-card-subtitle>Mantenga su inventario al alcance de su mano</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                ahora mantenga su inventario actualizado desde la movilidad y comodidad de su telefono movil 
              </div>
              <br />

              
            </v-card-text>

            <v-card-actions>
              <div class="btn">
                
              </div>
            </v-card-actions>
          </v-card>
          <v-card class="mx-auto cards" max-width="344">
            <v-img height="320px" src="../assets/invf.jpeg"></v-img>

            <v-card-title>Kibhu</v-card-title>

            <v-card-subtitle>registrate ahora a Kibhu</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Te invitamos a conocer nuestro inventario en linea, de una manera, facil rapida y confiable.
              </div>
              <br />

              
            </v-card-text>

            <v-card-actions>
              <div class="btn">
                
              </div>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-carousel-item>

      
    </v-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bloque {
  margin: 100px;
}
p {
  color: #4b4b4b;
}
.cards {
  margin: 22px;
}
.v-card__title {
  font-size: 23px !important;
  font-weight: 800 !important;
}
.v-card__subtitle {
  font-size: 16px !important;
  font-weight: 600 !important;
  color: #daa520 !important;
  line-height: 20px !important;
}
.btn button {
  background: #daa520;
  color: #fff;
  border: none;
  outline: none;
  font-size: 17px;
  padding: 5px 8px;
  border-radius: 5px;
  margin: 10px 0;
}
</style>
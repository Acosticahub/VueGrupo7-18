<template>
  <div class="bloque">
    <h1>Sobre Nosotros</h1>
    <br />
    <p>
      Somos un Equipo de Desarrollo estructurado con las bases de la Metodología
      Ágil Scrum, con formación en programación gracias al programa MisiónTic
      2022 y estudios externos. En este espacio puedes contactarnos para
      resolver cualquier tipo de inquietud, adquirir mayor información sobre
      nuestro producto y aportarnos para un mayor crecimiento. A continuación,
      información un poco más detallada sobre los integrantes del Scrum Team.
    </p>
    <br />
    <v-carousel height="670px" :show-arrows="false">
      <v-carousel-item>
        <v-row>
          <v-card class="mx-auto cards" max-width="344">
            <v-img height="320px" src="../../assets/Acosta.jpg"></v-img>

            <v-card-title>Andrés David Acosta</v-card-title>

            <v-card-subtitle>Full Stack Developer</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Cursando la Tecnología en Desarrollo de Software, y mejorando
                conocimientos de programación con MinTic2022.
              </div>
              <br />

              <div>acostabuitrago0123@gmail.com</div>
            </v-card-text>

            <v-card-actions>
              <div class="btn">
                <button>Contacto</button>
              </div>
            </v-card-actions>
          </v-card>
          <v-card class="mx-auto cards" max-width="344">
            <v-img height="320px" src="../../assets/Dosman.jpg"></v-img>

            <v-card-title>Jhon Dosman</v-card-title>

            <v-card-subtitle>Back-end Developer</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Cursando Tecnología en Sistemas y adquiriendo conocimientos en
                programación con Mintic2022.
              </div>
              <br /><br />

              <div>dosman.diazjhon4166@gmail.com</div>
            </v-card-text>

            <v-card-actions>
              <div class="btn">
                <button>Contacto</button>
              </div>
            </v-card-actions>
          </v-card>
          <v-card class="mx-auto cards" max-width="344">
            <v-img height="320px" src="../../assets/Altamirano.jpeg"></v-img>

            <v-card-title>Juan Pablo Altamirano</v-card-title>

            <v-card-subtitle>Back-end Developer</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Adquiriendo conocimiento como programador y desarrollador de
                páginas web con el programa Mintic2022.
              </div>
              <br />

              <div>mapuchi_12_2002@hotmail.com</div>
            </v-card-text>

            <v-card-actions>
              <div class="btn">
                <button>Contacto</button>
              </div>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-carousel-item>

      <v-carousel-item>
        <v-row>
          <v-card class="mx-auto cards" max-width="344">
            <v-img height="320px" src="../../assets/Daniel.jpg"></v-img>

            <v-card-title>Daniel Arias</v-card-title>

            <v-card-subtitle>Full Stack Developer</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Economista al que se le atravesó el deseo de aprender a
                programar con el programa MinTic2022.
              </div>
              <br />

              <div>alejolarias542@gmail.com</div>
            </v-card-text>

            <v-card-actions>
              <div class="btn">
                <button>Contacto</button>
              </div>
            </v-card-actions>
          </v-card>
          <v-card class="mx-auto cards" max-width="344">
            <v-img height="320px" src="../../assets/Bastidas.jpg"></v-img>

            <v-card-title>Juan Camilo Bastidas</v-card-title>

            <v-card-subtitle>Full Stack Developer</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Diseñador Gráfico y músico, proceso formativo como full stack
                developer y aprendiendo con el programa MinTic2022.
              </div>
              <br />

              <div>juank2411@outlook.com</div>
            </v-card-text>

            <v-card-actions>
              <div class="btn">
                <button>Contacto</button>
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
  margin: auto 100px auto;
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
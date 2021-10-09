    <template>
  <div class="login" id="LoginWeb">
    <div class="contenedor ml-5">
      <span>Nombre de usuario</span>
      <input type="text" placeholder="Enter your Username" />
      <span>Contraseña</span>
      <input type="password" placeholder="Enter your Password" />

      <v-checkbox
        v-model="ex4"
        label="Remember me"
        color="warning"
        value="recordar"
        hide-details
      ></v-checkbox>
      
      <router-link to="/appkibhu" type="submit" value="Login" class="button" >Login</router-link>
      
      <div id="configcuenta">
        <a href="" style="text-decoration:none; color:gray; ">Olvide mi Contraseña | </a>
        <a href="" style="text-decoration:none; color:gray; ">No tengo cuenta</a>
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style>

.contenedor {
  width: 400px;
  padding: 60px;
  padding-left: 40px;
  padding-right: 5px;
  border-radius: 25px;
  background-color:rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 100px;
  right: 200px;
  width: 500px;
  height: 400px;

}

input {
  font-size: 20px;
  width: 88%;
  padding: 10px;
  border: solid;
  border-color: rgba(111, 111, 111, 0.2);
}
.input-contenedor {
  margin-bottom: 15px;
  border: 1px solid #daa520;
}
.icon {
  min-width: 50px;
  text-align: center;
  color: #000;
}
.button {
  border: none;
  width: 90%;
  color: white;
  font-size: 20px;
  background: #daa520;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration-color: aliceblue;
  text-align: center;
}
.button:hover {
  background: gray;
  text-decoration: none;
  color: aliceblue;
  text-align: center;
}
p {
  text-align: center;
}
.link {
  text-decoration: none;
  color: #daa520;
  font-weight: 600;
}
.link:hover {
  color: gray;
}
@media (min-width: 768px) {
  .formulario {
    margin: auto;
    width: 500px;
    margin-top: 150px;
    border-radius: 2%;
  }
}
.login{
  background-image: url("../../assets/FondoLogin.jpg");
  background-size: cover;
  width: 100%;
  height: 750px;
  margin: 0;
}

</style>
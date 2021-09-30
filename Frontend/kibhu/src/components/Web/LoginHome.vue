    <template>
  <div>
    <img
      src="../../assets/FondoLogin.jpg"
      alt="50px"
    />
    <div class="contenedor">
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
      <div>
        <a href="">Olvide mi Contraseña|</a>
        <a href="">No tengo cuenta</a>
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style>
.contenedor {
  width: 500px;
  position: relative;
  right: -1000px;
  padding: 10px;
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
  width: 100%;
  color: white;
  font-size: 20px;
  background: #daa520;
  padding: 15px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.button:hover {
  background: #000;
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
  color: #000;
}
@media (min-width: 768px) {
  .formulario {
    margin: auto;
    width: 500px;
    margin-top: 150px;
    border-radius: 2%;
  }
}
</style>
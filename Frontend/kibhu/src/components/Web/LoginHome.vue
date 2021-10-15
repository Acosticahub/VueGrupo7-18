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
      <v-alert border="left" color="red lighten-2" dark v-model="showError">{{
        error
      }}</v-alert>
      <router-link
        to="/appkibhu"
        type="submit"
        value="Login"
        class="button"
        @click="login()"
        >Login</router-link
      >
      <div class="configcuenta">
        <a href="" style="text-decoration: none; color: gray"
          >Olvide mi Contraseña |
        </a>
        <a href="" style="text-decoration: none; color: gray"
          >No tengo cuenta</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import validateUser from "../../controllers/User.controller.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      showError: false,
      error: "",
    };
  },
  methods: {
    login() {
      validateUser(this.username, this.password)
        .then((response) => {
          const user = response.data;
          sessionStorage.setItem("username", user.username);
          this.$emit("login-success", this.username);
          window.window.open("/appkibhu");
        })
        .catch((err) => {
          this.showError = true;
          this.error = err.response.data.message;
          setInterval(() => {
            this.showError = false;
          }, 3000);
        });
    },
  },
};
</script>

<style>
.configcuenta {
  margin-left: 55px;
  margin-top: 15px;
}
.contenedor {
  width: 400px;
  padding: 60px;
  padding-left: 40px;
  padding-right: 5px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.8);
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
  background: #daa520 !important;
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
.login {
  background-image: url("../../assets/FondoLogin.jpg");
  background-size: cover;
  width: 100%;
  height: 750px;
  margin: 0;
}
</style>
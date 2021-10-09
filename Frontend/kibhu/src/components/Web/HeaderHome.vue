    <template>
  <header>
    <nav>
        
      <v-app-bar flat app>
        <div >
            
          <v-img
            contain
            lazy-src="../../assets/Logo Kibhu blanco-02.svg"
            max-height="200"
            max-width="130"
            src="../../assets/Logo Kibhu Para fondo claro -02.png"
          ></v-img>
        </div>
        <v-spacer></v-spacer>

        <!--<div >
            <a
            href="#LoginWeb"
            depressed
            text
            class="text-decoration-none black--text ma-12  "
            >Inicio</a
            >
            <a
            href="#Precios"
            depressed
            text
            class="text-decoration-none black--text ma-12 depressed"
            >Servicios</a
            >
            
            <a
            href="#SobreNosotros"
            depressed
            text
            class="text-decoration-none black--text ma-12 "
            >Sobre Nosotros</a
            >
            <a
            href="#Noticias"
            depressed
            text
            class="text-decoration-none black--text ma-12 "
            >Noticias</a
            >
        </div>-->

<ul>
        <li><a class="active" href=#LoginWeb>Inicio</a></li>
        <li><a href="#Precios">Servicios</a></li>
        <li><a href="#SobreNosotros">Sobre Nosotros</a></li>
        <li><a href="#Noticias">Noticias</a></li>
        <li><a class="search-box" >  
            <button class="btn-search"><em class="fa fa-search"></em></button>
            <input type="text" class="input-search" placeholder="Búsqueda">
        </a> </li>               
    </ul>
    <!--<input type="checkbox" id="check">
    <label for ="check" class="checkbtn">
        <em class="fas fa-list-ul"></em>
    </label>-->
    

        <v-btn
          class="ma-2"
          :loading="loading"
          :disabled="loading"
          color="#DAA520"
          @click="loader = 'loading'"
        >
          <span style="color: white">Regístrate</span>
          <v-icon style="color: white">mdi-account-plus</v-icon>
        </v-btn>
      </v-app-bar>
    </nav>
  </header>
</template>

    <script>
export default {
  name: "Header",
};
</script>

    <style>

nav ul{
    float: right;
    margin-right: 20px;
    margin-top: 15px;
}

nav ul li{
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
    
}

nav ul li a{
    color: rgb(0, 0, 0);
    font-size: 15px;
    padding: 7px 13px;
    border-radius: 3px;
    text-transform: uppercase;
    
}

nav ul a:hover{
    text-decoration: none;
    color: #fff;
    background-color: #DAA520;
}

nav ul a :active:hover{

    transition: all .2s ease-in-out;
}

/*Collapse Menu-Menu colapsable*/

.checkbtn{
    font-size: 30px;
    color: rgb(87, 87, 87);
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display: none;
}

#check {
    display: none;
}

@media (max-width: 952px){
    label.logo {
        font-size: 30px;
        padding-left: 50px;
    }
    nav ul li a {
        font-size: 15px;
    }
}

@media (max-width: 1336px){
    .checkbtn{
        display: block;

    }
    ul{
        position: fixed;
        width: 100%;
        height: 100vh;
        background: gray;
        top: 80px;
        left: -100%;
        text-align: center;
        transition: all .5s;
        
    }
    nav  ul li {
        display: block;
        margin: 50px;
        line-height: 30px;
    }
    nav ul li a{
        font-size: 20px;
    }
    a:hover,a.active{
        background: #DAA520;
        color: white;
    }
    #check:checked ~ ul{
        left: 0;

    }
    
}


/*search button - boton busqueda */
.search-box{
    width: fit-content;
    height: fit-content;
    position: relative;
    padding-top: 5px;
    
}


.input-search{
    height: 50px;
    width: 50px;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    transition: all .5s ease-in-out;
    background-color: #DAA520;
    padding-right: 40px;
    color:rgb(70, 70, 70);
}

.input-search::placeholder{
    color:rgba(255,255,255,.5);
    font-size: px;
    letter-spacing: 2px;
    font-weight: 100;
}
.btn-search{
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color:#ffffff ;
    background-color:transparent;
    pointer-events: painted; 
    right: 13px;
    
}
.btn-search:focus ~ .input-search{
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom:1px solid rgba(0, 0, 0, 0.5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.input-search:focus{
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom:1px solid rgba(0, 0, 0, 0.5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}



</style>
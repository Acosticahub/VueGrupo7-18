  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import Home from '../views/Home.vue'


  Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/appkibhu',
      name: 'Appkibhu',

      component: () => import( '../views/Appkibhu.vue')
    },
    {
      path: '/HeaderHome',
      name: 'HeaderHome',
    
      component: () => import( '../components/Web/HeaderHome.vue')
    },
    {
      path: '/inicioapp',
      name: 'InicioApp',
    
      component: () => import( '../components/Aplicacion/InicioApp.vue')
    },
    {
      path: '/clientes',
      name: 'Clientes',
    
      component: () => import( '../components/Aplicacion/Clientes/Clientes.vue')
    },
    {
      path: '/clientes/new',
      name: 'New Cliente',
    
      component: () => import( '../components/Aplicacion/Clientes/NewCliente.vue')
    },
    {
      path: '/clientes/:identification',
      name: 'Edit Client',
    
      component: () => import( '../components/Aplicacion/Clientes/NewCliente.vue')
    },

    {
      path: '/productos',
      name: 'Productos',

    component: () => import( '../components/Aplicacion/Productos/Productos.vue')
  },
  {
    path: '/newproducto',
    name: 'NewProducto',

    component: () => import( '../components/Aplicacion/Productos/NewProducto.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuarios',

    component: () => import( '../components/Aplicacion/Usuarios/Usuarios.vue')
  },
  {
    path: '/newusuario',
    name: 'NewUsuario',

    component: () => import( '../components/Aplicacion/Usuarios/NewUsuario.vue')
  },
  {
    path: '/proveedores',
    name: 'Proveedores',

    component: () => import( '../components/Aplicacion/Proveedores/Proveedores.vue')
  },
  {
    path: '/newproveedores',
    name: 'NewProveedores',

    component: () => import( '../components/Aplicacion/Proveedores/NewProveedores.vue')
  },

  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  export default router

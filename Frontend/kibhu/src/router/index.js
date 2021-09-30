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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Appkibhu.vue')
  },
  {
    path: '/HeaderHome',
    name: 'HeaderHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Web/HeaderHome.vue')
  },
  {
    path: '/inicioapp',
    name: 'InicioApp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Aplicacion/InicioApp.vue')
  },
  {
    path: '/clientes',
    name: 'Clientes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Aplicacion/Clientes/Clientes.vue')
  },
  {
    path: '/newcliente',
    name: 'NewCliente',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Aplicacion/Clientes/NewCliente.vue')
  },
  {
  path: '/productos',
  name: 'Productos',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../components/Aplicacion/Productos/Productos.vue')
},
{
  path: '/newproducto',
  name: 'NewProducto',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../components/Aplicacion/Productos/NewProducto.vue')
},
{
  path: '/usuarios',
  name: 'Usuarios',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../components/Aplicacion/Usuarios/Usuarios.vue')
},
{
  path: '/newusuario',
  name: 'NewUsuario',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../components/Aplicacion/Usuarios/NewUsuario.vue')
},
{
  path: '/proveedores',
  name: 'Proveedores',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../components/Aplicacion/Proveedores/Proveedores.vue')
},
{
  path: '/newproveedores',
  name: 'NewProveedores',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../components/Aplicacion/Proveedores/NewProveedores.vue')
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

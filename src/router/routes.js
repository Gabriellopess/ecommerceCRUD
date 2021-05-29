import Home from '@/pages/Home';
import CreateProduto from '@/pages/produto/CreateProduto';
import MeusProdutos from '@/pages/produto/MeusProdutos';
import EditProduto from '@/pages/produto/EditProduto';

import Login from '@/pages/Login';
import Cadastro from '@/pages/Cadastro';

import store from "@/store";
import Swal from "sweetalert2";



const routes = [
    {
        path: '/login',
        component: Login,
        name: 'login',
        beforeEnter: (to, from, next) => {
          if(store.getters.isAuthenticated){
            next('/hub')
            Swal.fire({
              title: "Você já está logado",
              text: `Para acessar a página de login, faça o logout.`,
              type: "warning",
              confirmButtonClass: "md-button md-danger btn-fill",
              confirmButtonText: "Ok, entendi",
              buttonsStyling: false
            })
          } else {
            next()
          }
        },
    },
    {
        path: '/cadastro',
        component: Cadastro,
        name: 'cadastro',
        beforeEnter: (to, from, next) => {
          if(store.getters.isAuthenticated){
            next('/hub')
            Swal.fire({
              title: "Você já está logado",
              text: `Para acessar a página de cadastro, faça o logout.`,
              type: "warning",
              confirmButtonClass: "md-button md-danger btn-fill",
              confirmButtonText: "Ok, entendi",
              buttonsStyling: false
            })
          } else {
            next()
          }
        },
    },
    {
        path: '/hub',
        component: Home,
        name: 'hub',
        beforeEnter: (to, from, next) => {
            if(store.getters.isAuthenticated){
              next()
            } else {
              next('/login')
              Swal.fire({
                title: "VOCÊ PRECISA FAZER LOGIN",
                text: `Para acessar a página, faça o login.`,
                type: "warning",
                confirmButtonClass: "md-button md-danger btn-fill",
                confirmButtonText: "Ok, entendi",
                buttonsStyling: false
              })
            }
        },
    },
    {
        path: '/meusprodutos',
        component: MeusProdutos,
        name: 'meus produtos',
        beforeEnter: (to, from, next) => {
            if(store.getters.isAuthenticated){
              next()
            } else {
              next('/login')
              Swal.fire({
                title: "VOCÊ PRECISA FAZER LOGIN",
                text: `Para acessar a página, faça o login.`,
                type: "warning",
                confirmButtonClass: "md-button md-danger btn-fill",
                confirmButtonText: "Ok, entendi",
                buttonsStyling: false
              })
            }
        },
    },
    {
        path: '/createproduto',
        component: CreateProduto,
        name: 'criar produto',
        beforeEnter: (to, from, next) => {
            if(store.getters.isAuthenticated){
              next()
            } else {
              next('/login')
              Swal.fire({
                title: "VOCÊ PRECISA FAZER LOGIN",
                text: `Para acessar a página, faça o login.`,
                type: "warning",
                confirmButtonClass: "md-button md-danger btn-fill",
                confirmButtonText: "Ok, entendi",
                buttonsStyling: false
              })
            }
        },
    },
    {
        path: '/editproduto',
        component: EditProduto,
        name: 'editar produto',
        beforeEnter: (to, from, next) => {
            if(store.getters.isAuthenticated){
              next()
            } else {
              next('/login')
              Swal.fire({
                title: "VOCÊ PRECISA FAZER LOGIN",
                text: `Para acessar a página, faça o login.`,
                type: "warning",
                confirmButtonClass: "md-button md-danger btn-fill",
                confirmButtonText: "Ok, entendi",
                buttonsStyling: false
              })
            }
        },
    },

    

    {
        path: '*',
        redirect: '/login',
    },
    
];

export default { routes };
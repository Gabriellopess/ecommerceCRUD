import Home from '@/pages/Home';
import CreateProduto from '@/pages/produto/CreateProduto';
import MeusProdutos from '@/pages/produto/MeusProdutos';
import EditProduto from '@/pages/produto/EditProduto';
// import Servicos from '@/pages/Servicos'

import Login from '@/pages/Login';
import Cadastro from '@/pages/Cadastro';

import store from "@/store";
import Swal from "sweetalert2";



const routes = [
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/cadastro',
        component: Cadastro,
        name: 'cadastro'
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
    },
    {
        path: '/createproduto',
        component: CreateProduto,
        name: 'criar produto',
    },
    {
        path: '/editproduto',
        component: EditProduto,
        name: 'editar produto',
    },

    

    {
        path: '*',
        redirect: '/login',
    },
    
];

export default { routes };
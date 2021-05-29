<template>
  <div id="navbar">
        <Burger id="burgerbtn"></Burger>
        <ul id="nbmenu">
            <li><a href="#/hub"><b>Hub</b></a></li>

            <!-- Essa seção pode ficar dentro de um dropdown em um 'user' icon -->
            <!-- <li><a href="#/meusprodutos"><b>Meus Produtos</b></a></li> -->
            <!-- <li><a href="#"><b>Minhas informações</b></a></li> -->
            <li v-if="isLogin"> <!-- v-if="$route.name != 'login'" -->
                <md-menu md-direction="bottom-end" :mdCloseOnClick="closeOnClick" >
                    <md-button md-menu-trigger id="icon">
                        <b-avatar icon="people-fill"></b-avatar>
                    </md-button>

                    <md-menu-content>
                        <router-link to="MeusProdutos">
                            <md-menu-item @click="data = 'click 1'">Meus Produtos</md-menu-item>
                        </router-link>
                        <md-menu-item @click="data = 'click 2'">
                            <b-button variant="danger" size="sm" @click="logout" id="button">Logout</b-button>
                        </md-menu-item>
                    </md-menu-content>
                </md-menu>
            </li>
        </ul>
  </div>
</template>


<script>
import Burger from './Menu/Burger.vue'
import { mapActions } from 'vuex'
// import store from "@/store";

export default {
    data () {
      return {
        data: '',
        closeOnClick: false,
      }
    },
    components: {
        Burger,
    },
    computed: {
        isLogin() {
            let c1 = this.$route.name
            let flag = true
            if(c1 === 'login' || c1 === 'cadastro')
                flag = false
            return flag
        }
    },
    methods: {
        ...mapActions('auth', ['AUTH_SUCCESS']),
        logout(){
        console.log(this.$store.getters.isAuthenticated)
        this.$store.dispatch('AUTH_LOGOUT')
          .then(() => {
            console.log(this.$store.getters.isAuthenticated)
        console.log("deslogando")
        this.$router.push('/login')
          })
      },
    },
}
</script>

<style scoped>
    #navbar{
        font-size: 1.1rem;
        text-decoration: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background-color: rgb(156, 33, 156);
        display: flex;
        align-items: center;
        background-image: url("../assets/PREPI.png");
        background-size: auto 120px;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
        justify-items: right;
        z-index: 2;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
    }
    #nbmenu{
        display: none;
        margin: 0;
    }
    @media (min-width: 960px) {
        #burgerbtn{
            display: none;
        }
        #navbar{
            box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.2);
            background-position: 60px;
            justify-content: right;
            flex-direction: row;
            justify-content: flex-end;
        }
        #nbmenu{
            list-style: none;
            display: flex;
            padding-left: 0;
            padding-right: 60px;
            align-items: center;
            box-sizing: border-box;
            float: right;
        }
        #nbmenu li{
            float: left;
            padding-right: 25px;
        }
        #nbmenu a {
            text-decoration: none;
            color: black;
            font-family: 'Nunito', sans-serif;
            font-weight: 400;
        }
        #nbmenu li :hover{
            /*color:#bed6bb; */
            /* color: #fb5475; #d48cb4 */
            color:#9ecdfa;
        }
        #icon{
            border-radius: 20px;
        }
        #dropmenu{
            background-color: violet;
        }
        #button{
            justify-content: center;
            margin-top: 8px;
            margin-left: 20px;
        }
    }
</style> 
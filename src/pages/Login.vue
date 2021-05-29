<template>
  <div id="body">  
    <div id="title">LogIn</div>
    <b-form id="form">

      <div class="form-group">
        <label class="label">Username: </label>
        <b-form-input type="text" id="textbox" required v-model="user.username"></b-form-input>
      </div>
      <div class="form-group">
          <label class="label">Senha: </label>
          <b-form-input type="password" id="textbox" required v-model="user.password"></b-form-input>
      </div>

      <div>
        <b-button variant="success" @click="login" id="button">Login</b-button>
      </div>

      <router-link to="Cadastro">
        <b-button variant="primary" id="button1">Cadastre-se!</b-button>
      </router-link>

    </b-form>
  </div>
</template>




<script>
import { mapActions } from 'vuex'
import store from "@/store";
import Swal from "sweetalert2";
import axios from "axios";

  export default {
    beforeRouteLeave(to, from, next) {
      if(to.name == 'cadastro'){
        next()
      } else if(store.getters.isAuthenticated){
        next()
      } else {
        Swal.fire({
          title: "VOCÊ PRECISA FAZER LOGIN",
          text: `Para sair desta página, faça o login.`,
          type: "warning",
          confirmButtonClass: "md-button md-danger btn-fill",
          confirmButtonText: "Ok, entendi",
          buttonsStyling: false
        })
        next(false)
      }
    },

    data() {
      return {
        user: {
          username: '',
          password: ''
        },

        item:{
          username: '',
          nome: '',
          password: '',
          data_nascimento: '',
          cpf: '',
        },

      }
    },

    methods: {
      ...mapActions('auth', ['AUTH_SUCCESS']),
      login(){
        this.$http.post('api-token-auth/', this.user)
          .then(resp => {
            const token = resp.data
            const data = { 
              username: this.user.username,
              password: this.user.password,
            }
            this.$store.dispatch('AUTH_REQUEST', data).then(() => {
              this.$router.push('hub')  
            })
            this.user.username = ''
            this.user.password = ''
          })
          .catch(err => {
            Swal.fire({
              title: "Erro ao logar.",
              text: `Por favor, tente novamente.`,
              type: "warning",
              confirmButtonClass: "md-button md-danger btn-fill",
              confirmButtonText: "Ok, entendi",
              buttonsStyling: false
            })
            this.user.username = ''
            this.user.password = ''
            });
      },
    },
  }
</script>

<style>
    #body{
        padding-top: 60px;
        padding-bottom: 60px;
        background-color: whitesmoke;
    }

    #title{
        font-weight: 800;
        font-size: 28px;
    }

    #form {
        background-color: #8aabca;
        margin: auto;
        margin-top: 5px;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #8aabca; /*#efefef*/ 
        box-shadow:
            /* Top layer shadow */
            0 1px 1px rgba(0, 0, 0, 0.15),
                /* Second layer */
            0 10px  0 -5px #8aabca ,  /* #eee*/
                /* Second Layer shadow */
            0 10px 1px -4px rgba(0, 0, 0, 0.15),
                /*Third layer*/
            0 20px 0 -10px #8aabca,
                /*Third layer shadow*/
            0 20px 1px -9px rgba(0, 0, 0, 0.15);
        padding: 30px;
        
    }

    .form-group {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 30px 20px 0;
        width: 70%;
        border-bottom: 1px solid black;
        color: black;
        font-weight: 600;
        font-family: 'Nunito', sans-serif;
        font-size: 18px;

    }

    .label{
        left: 95px;
        width: 145px;
        display: flex;
        padding: 10px;
        align-items: center;
    }

    #textbox {
      border: hidden;
      border-radius: 20px;
      height: 30px;
    }

    #modal-textbox {
      border: hidden;
      border-radius: 20px;
      height: 30px;
      background-color: grey;
    }

    #button{
      margin: 10px;
      margin-top: 25px;
      /* color: white; */
      font-weight: 400;
      font-family: 'Nunito', sans-serif;
      font-size: 17px;
      color: oldlace;
    }

    #button1{
      margin: 5px;
      font-weight: 400;
      font-family: 'Nunito', sans-serif;
      font-size: 17px;
      color: oldlace; 
    }


    .button-success {
      border: hidden;
      margin: 10px;
      margin-top: 20px;
      color: white;
      border-radius: 4px;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);

      background: rgb(28, 184, 65);

      
      font-weight: 600;
      font-family: 'Nunito', sans-serif;
      font-size: 18px;
      color: oldlace;
    }


</style>
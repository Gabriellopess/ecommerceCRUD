<template>
  <div id="body">
    <div id="title">Cadastre-se para mais informações:</div>
    <b-form id="form">

      <div class="form-group">
        <label class="label">Username: </label>
        <b-form-input type="text" id="textbox" required v-model="item.username"></b-form-input>
      </div>
      <div class="form-group">
          <label class="label">Senha: </label>
          <b-form-input type="password" id="textbox" required v-model="item.password"></b-form-input>
      </div>
      <div class="form-group">
        <label class="label">Nome Completo: </label>
        <b-form-input type="text" id="textbox" required v-model="item.nome"></b-form-input>
      </div>
      <div class="form-group">
        <label class="label">CPF: </label>
        <b-form-input type="number" id="textbox" required v-model="item.cpf"></b-form-input>
      </div>
      <div class="form-group">
        <label class="label">Data de nascimento: </label>
        <b-form-input type="date" id="textbox" required v-model="item.data_nascimento"></b-form-input>
      </div>


      <div class="button">
          <b-button variant="success" type="submit" @click="create">Cadastrar</b-button>
      </div>
      <div>
          <router-link to="Login">
            <b-button id="button" type="reset" variant="danger">Voltar</b-button>
          </router-link>
      </div>

    </b-form>
  </div>
</template>




<script>
// import { mapActions } from 'vuex'
// import store from "@/store";
import axios from "axios";
import Swal from "sweetalert2";

  export default {
    
    data() {
      return {
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
      create: function() {
        // this.authToken = localStorage.getItem("user-token")
          axios
            .post("http://127.0.0.1:8000/user/create", this.item,
            )
            .then(response => {
              Swal.fire({
                title: "Conta criada",
                text: `Utilize username e senha para fazer login`,
                confirmButtonText: "ENTENDI",
              })
              this.$router.push("/Login");
            })
            .catch(error => {
              Swal.fire({
                type: "warning",
                title: "Ocorreu um erro!",
                text: "Por favor, tente novamente"
              });
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


    .button {
      margin: 0px;
      margin-top: 20px;
      font-weight: 600;
      font-family: 'Nunito', sans-serif;
      font-size: 18px;
      color: oldlace;
    }

    #button{
      margin-top: 10px;
    }


</style>
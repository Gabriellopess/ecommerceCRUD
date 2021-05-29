<template>
  <div id="body">  
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
          <input type="submit" value="Login" class="button-success">
      </div>
      <div>
        <b-button variant="success" type="submit" @click="create">Cadastro</b-button>
        <!-- <b-button variant="danger" type="submit" @click="logout">Logout</b-button> -->
      </div>

    </b-form>
  </div>
</template>




<script>
// import { mapActions } from 'vuex'
import store from "@/store";
import axios from "axios";

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
              console.log(response.data);
              alert("Conta criada, execute o login")
              this.$router.push("login");
            })
            .catch(error => {
              // Swal.fire({
              //   type: "warning",
              //   title: "Ocorreu um erro!",
              //   text: "Por favor, tente novamente"
              // });
              alert("erro no create")
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
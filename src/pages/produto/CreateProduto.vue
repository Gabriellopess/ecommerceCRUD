<template>
  <div id='body'>
      <div id="title"> Cadastre um Produto: </div>
    <b-form id="form" @submit.prevent="create" method="post">
      <b-form-group id="input-group" label="Nome do produto:" label-for="input-1">
        <b-form-input
          id="input"
          v-model="produto.nome"
          type="text"
          placeholder="Insira o nome"
          description="We'll never share your email with anyone else."
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group" label="Descrição do produto:" label-for="input-2">
        <b-form-input
          id="input"
          v-model="produto.descricao"
          type="text"
          placeholder="Insira uma descrição"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group" label="Preço desejado:" label-for="input-3">
        <b-form-input
          id="input"
          v-model="produto.preco"
          type="number"
          placeholder="00.00"

          required
        ></b-form-input>
      </b-form-group>

      <b-button id="button" type="submit" variant="success">Criar Produto</b-button>

      <router-link to="MeusProdutos">
        <b-button id="button" type="reset" variant="danger">Voltar</b-button>
      </router-link>
    </b-form>
    
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

  export default {
    data() {
      return {
        produto: {
          nome: '',
          descricao: '',
          preco: '',
          user: {},
        },
      }
    },

    methods: {
      create: function () {
          this.authToken = localStorage.getItem("user-token")
          this.produto.user = localStorage.getItem("user-id")
          axios
            .post("http://127.0.0.1:8000/produto/list", this.produto, {
              headers: {
                Authorization: "Token " + this.authToken
              }
            })
            .then(response => {
              Swal.fire({
                title: `Produto cadastrado!`,
                buttonsStyling: false,
                confirmButtonClass: "md-button md-info"
              });
              this.$router.push("/MeusProdutos");
            })
            .catch(error => {
              Swal.fire({
                type: "warning",
                title: "Ocorreu um erro!",
                text: "Por favor, tente novamente"
              });
            });
      },
    }
  }
</script>


<style scoped>
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
        background-color: white;
        margin: auto;
        margin-top: 5px;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #8aabca; /*#efefef*/ 
        border-radius: 20px;
        box-shadow:
            /* Top layer shadow */
            0 1px 1px rgba(0, 0, 0, 0.15);
        padding: 30px;
    }

    #input-group{
        margin-bottom: 10px;
        width: 70%;
    }

    #input{
        margin-bottom: 5px;
        margin-left: 10px;
        width: 100%;
    }

    #button{
        float: left;
        margin: 8px;
    }
    

    
</style>
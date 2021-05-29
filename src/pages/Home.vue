<template>
  <div id="body">
    <md-table id="table" v-model="produtos" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Hub de Produtos</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Nome" md-sort-by="name" md-numeric>{{ item.nome }}</md-table-cell>
        <md-table-cell md-label="Descrição" md-sort-by="email" md-numeric>{{ item.descricao }}</md-table-cell>
        <md-table-cell md-label="Preço" md-sort-by="gender" md-numeric>R${{ item.preco }}</md-table-cell>
        <md-table-cell md-label="Vendedor" md-sort-by="title" md-numeric>{{ item.usuario }}</md-table-cell>
      </md-table-row>
    </md-table>

  </div>
</template>

<script>
import axios from "axios";

  export default {
     created(){
      this.ListProdutos();
    },
    
    data: () => ({
      produtos: [
        {
            id: "",
            nome: "",
            descricao: "",
            preco: "",
            usuario: "",
        }
      ]
    }),

    methods: {
        ListProdutos: function() {
        // this.id = localStorage.getItem("user-id")
        this.authToken = localStorage.getItem("user-token")
        axios
            .get("http://127.0.0.1:8000/produto/list", {
            headers: {
                Authorization: "Token " + this.authToken
            }
            })
            .then(response => {
            this.produtos = response.data;
            });
        },

    },

  }
</script>

<style scoped>
    #body{
        padding-top: 60px;
        padding-bottom: 60px;
        background-color: whitesmoke;
        /* justify-content: center; */
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #table{
        width: 80%;
        display: flex;
        text-align-last: center;
        margin-bottom: 10px;
        /* float: right; */
    }

    #button{
        margin-top: 15px;
    }
</style>

<template>
  <div id="body">
    <md-table id="table" v-model="user.produto_list" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Meus produtos</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <!-- <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.nome }}</md-table-cell> -->
        <md-table-cell md-label="Nome" md-sort-by="name" md-numeric>{{ item.nome }}</md-table-cell>
        <md-table-cell md-label="Descrição" md-sort-by="email" md-numeric>{{ item.descricao }}</md-table-cell>
        <md-table-cell md-label="Preço" md-sort-by="gender" md-numeric>{{ item.preco }}</md-table-cell>
        <md-table-cell md-label="Data de cadastro" md-sort-by="title" md-numeric>{{ item.created_at }}</md-table-cell>

        <md-table-cell md-sort-by="id" md-label="AÇÕES" >
            <md-button
                class="md-just-icon md-danger md-simple"
                @click.native="handleDelete(item.id)" >
                <span>deletar</span>
            </md-button>
            
            <router-link to="EditProduto">
                <md-button
                    class="md-just-icon md-warning md-simple"
                    @click.native="handleEdit(item)" >
                    <span>editar</span>
                </md-button>
            </router-link>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <router-link to="CreateProduto">
    <b-button id="button" type="submit" variant="success">Adicionar Produto</b-button>
    </router-link>

    <router-link to="hub">
    <b-button id="button" type="reset" variant="danger">Voltar ao Hub</b-button>
    </router-link>

  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

  export default {
     created(){
      this.ListProdutos();
    },
    
    data: () => ({
      user: [
        {
            id: "",
            nome: "",
            produto_list: {},
        }
      ]
    }),

    methods: {
    ListProdutos: function() {
      this.id = localStorage.getItem("user-id")
      this.authToken = localStorage.getItem("user-token")
      axios
        .get("http://127.0.0.1:8000/user/rud/" + this.id, {
          headers: {
            Authorization: "Token " + this.authToken
          }
        })
        .then(response => {
          this.user = response.data;
        });
    },

    handleDelete(item) {
      Swal.fire({
        title: "VOCÊ TEM CERTEZA?",
        text: `Você não poderá voltar atrás!`,
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "md-button md-success btn-fill",
        cancelButtonClass: "md-button md-danger btn-fill",
        confirmButtonText: "Sim, deletar!",
         cancelButtonText:"Cancelar",
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          this.deleteItem(item);
          Swal.fire({
            title: "Deletado!",
            text: `Você deletou o item.`,
            type: "success",
            confirmButtonClass: "md-button md-success btn-fill",
            buttonsStyling: true
          });
        }
      });
    },

    deleteItem(id, i) {
      this.authToken = localStorage.getItem("user-token")
      fetch("http://127.0.0.1:8000/produto/rud/" + id, {
        method: "DELETE",
        headers: {
          Authorization: "Token " + this.authToken
        }
      }).then(() => {
        this.ListProdutos();
      });
    },

    handleEdit(item) {
      sessionStorage.setItem("produtoID", item.id);
      Swal.fire({
        title: `Você deseja editar o produto: ${item.nome}`,
        buttonsStyling: true,
        confirmButtonClass: "md-button md-info"
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
    }

    #button{
        margin-top: 15px;
    }
</style>
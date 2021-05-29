<!--
<template>
  <div id="body">
    <b-table striped hover :items="items">
        <button>Teste</button>
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>

<style scoped>
    #body{
        padding-top: 60px;
        padding-bottom: 60px;
        background-color: whitesmoke;
    }
</style> -->


<!--
<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-header v-model="items" class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>assignment</md-icon>
          </div>
          <h4 class="title">LISTA DE MEDICAMENTOS: {{items.user.nome}}</h4>
        </md-card-header>


        <md-card-content>
            <md-table v-model="items.medicamento_list"  table-header-color="green">
              <md-table-row slot="md-table-row" slot-scope="{item}">
                <md-table-cell md-label="#">{{ item.id }}</md-table-cell>
                <md-table-cell md-label="NOME">{{ item.nome }}</md-table-cell>
                <md-table-cell md-label="DOSAGEM">{{ item.dosagem }}</md-table-cell>
              </md-table-row>
            </md-table> 
        </md-card-content>
      </md-card>
    </div>
  </div>
</template> -->



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
          console.log(response.data)
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
      console.log(item.id)
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
        /* float: right; */
    }

    #button{
        margin-top: 15px;
    }
</style>
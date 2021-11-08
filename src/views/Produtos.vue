<template>
  <b-container>
    <b-card class="mt-1">
      <b-table 
        striped
        hover
        :items="produtos"
        :fields="fields"
      >
        <template #cell(actions)="row">
          <b-button size="sm" @click="exibeEdicao(row.item, row.index, $event.target)" variant="primary" class="m-1">
            <b-icon icon="pencil"></b-icon>
          </b-button>
          <b-button size="sm" @click="exibeConfirmacao(row.item, row.index, $event.target)" variant="danger" class="m-1">
            <b-icon icon="trash"></b-icon>
          </b-button>
        </template>
      </b-table>
    </b-card>

    <b-card>
      <b-button
        class="btn text-light"
        variant="success"
        @click="showNovoProduto"
      > 
        Novo Produto
        <b-icon icon="plus"></b-icon>
      </b-button>
    </b-card>

    <b-modal ref="remove-produto" hide-header ok-only>
      <div class="d-block text-center">
        <p>Tem certeza que deseja remover o produto?</p>
      </div>
      <div slot="modal-footer">
        <b-btn variant="outline-secondary" @click="cancelarRemocao" class="me-1">Cancelar</b-btn>
        <b-btn variant="danger" @click="confirmarRemocao"><b-icon icon="trash"></b-icon>Confirmar</b-btn>
      </div>
    </b-modal>

    <NovoProdutoModal
      @produtoSalvo="(produto) => produtos.push(produto)"
      ref="novoProdutoModal"
    />
    <EditaProdutoModal
      @produtoEditado="(produto) => selecionado = produto"
      ref="editaProdutoModal"
      :produtoSelecionado="selecionado"
    />

  </b-container>
</template>

<script>
import axios from 'axios';
import NovoProdutoModal from '../components/NovoProdutoModal.vue'
import EditaProdutoModal from '../components/EditaProdutoModal.vue'
export default {
  name: 'Produtos',
  components:{
    NovoProdutoModal,
    EditaProdutoModal
  },
  data() {
    return {
      produtos: [],
      fields: [
        { key: 'codigo', label: 'Código' },
        { key: 'descricao', label: 'Descrição' },
        { key: 'tipo', label: 'Tipo' },
        { key: 'valorFornecedor', label: 'Valor do Fornecedor' },
        { key: 'qtdEstoque', label: 'Estoque' },
        { key: 'actions', label: 'Ações' },
      ],
      selecionado: {
        id:'',
        codigo: '',
        descricao:'',
        tipo:'',
        valorFornecedor:'',
        qtdEstoque:'',
      },
    }
  },
  mounted() {
    this.buscarProdutos()
  },
  computed: {
    retorna(any) {
      return any.label
    }
  },
  methods: {
    buscarProdutos() {
      axios.get('http://localhost:9090/produtos')
      .then(
        response => this.produtos = response.data
      ).catch(function (error) {
        console.log(error);
      });
    },
    showNovoProduto() {
      this.$refs.novoProdutoModal.show()
    },
    exibeConfirmacao(item) {
      this.selecionado = item
      this.$refs['remove-produto'].show()
    },
    confirmarRemocao() {
      axios.delete('http://localhost:9090/produtos', {
        data: {
          ...this.selecionado
        }
      })
      .then(
        response => this.produtos = response.data
      ).catch(function (error) {
        console.log(error);
      }).finally(() => {
        this.$refs['remove-produto'].hide()
        this.buscarProdutos();
      });
    },
    cancelarRemocao() {
      this.selecionado = {}
      this.$refs['remove-produto'].hide()
    },
    exibeEdicao(item) {
      this.selecionado = item
      this.$refs.editaProdutoModal.show()
    }
  }
}
</script>

<style>
  /* .card-button {
    height: 150px;
    width: 150px;
  } */
</style>
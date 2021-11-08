<template>
  <b-container>
    <b-card class="mt-1">
      <b-card>
        <b-button
          class="btn text-light m-1"
          variant="primary"
          @click="showMovimentacaoModal"
        > 
          Registrar Movimentacao
          <b-icon icon="plus"></b-icon>
        </b-button>
      </b-card>
      <b-table 
        striped
        hover
        :items="movimentacoes"
        :fields="fields"
      >
      </b-table>
    </b-card>

    <MovimentacaoModal
      @movimentacaoSalva="(movimentacao) => movimentacoes.push(movimentacao)"
      ref="movimentacaoProdutoModal"
    />

  </b-container>
</template>

<script>
import axios from 'axios';
import MovimentacaoModal from '../components/MovimentacaoModal.vue'
export default {
  name: 'Movimentacoes',
  components: {
    MovimentacaoModal
  },
  data() {
    return {
      movimentacoes: [],
      fields: [
        { key: 'produto.descricao', label: 'Produto' },
        { key: 'tipo', label: 'Tipo' },
        { key: 'dataDaVenda', label: 'Data da Venda' },
        { key: 'qtdMovimentada', label: 'Quantidade Movimentada' }
      ],
      tiposDeProdutos: []
    }
  },
  mounted() {
    this.buscarTiposDeProduto()
    this.buscarMovimentacoes()
  },
  methods: {
    buscarTiposDeProduto() {
      axios.get()
      .then(
        response => this.tiposDeProdutos = response.data
      ).catch(function (error) {
        console.log(error);
      })
    },
    buscarMovimentacoes() {
      axios.get('http://localhost:9090/movimento-estoque')
      .then(
        response => this.movimentacoes = response.data
      ).catch(function (error) {
        console.log(error);
      });
    },
    showMovimentacaoModal() {
      this.$refs.movimentacaoProdutoModal.show()
    },
  }
}
</script>

<style>

</style>
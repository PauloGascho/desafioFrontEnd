<template>
  <b-modal ref="movimentacao-modal" hide-header ok-only>
    <div class="d-block">
      <b-form-group
        label="Código do produto"
      >
        <b-form-input
          v-model="movimentacaoForm.codigo"
          placeholder="Digite o código do produto"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Tipo de movimentação"
      >
        <select v-model="movimentacaoForm.tipo" class="form-select">
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
      </b-form-group>
    </div>
    <b-form-group
        label="Valor da Venda"
      >
        <b-form-input
          v-model="movimentacaoForm.valor"
          placeholder="Digite o valor da venda"
        ></b-form-input>
    </b-form-group>
    <b-form-group
        label="Quantidade"
      >
        <b-form-input
          v-model="movimentacaoForm.qtdMovimentada"
          placeholder="Digite a quantidade movimentada"
        ></b-form-input>
    </b-form-group>
    <div slot="modal-footer">
      <b-btn variant="outline-primary" @click="cancelarFormulario" class="me-1">Cancelar</b-btn>
      <b-btn variant="success" @click="salvar"><b-icon icon="check"></b-icon>Confirmar</b-btn>
    </div>
  </b-modal>
</template>

<script>
import Vue from 'vue'
import { BModal } from 'bootstrap-vue'
import axios from 'axios'
Vue.component('b-modal', BModal)
export default {
  name: 'MovimentacaoModal',
  data() {
    return {
      movimentacaoForm: {
        codigo: '',
        tipo: '',
        valor: '',
        qtdMovimentada: ''
      },
      produto: {}
    }
  },
  methods: {
    show() {
      this.$refs['movimentacao-modal'].show()
    },
    salvarMovimento() {
      const data = new Date().toISOString()
      axios.post('http://localhost:9090/movimento-estoque', {
        produto: this.produto,
        tipo: this.movimentacaoForm.tipo,
        valor: this.movimentacaoForm.valor,
        dataDaVenda: data,
        qtdMovimentada: this.movimentacaoForm.qtdMovimentada
      })
      .then(
        response => this.$emit('movimentacaoSalva',response.data)
      ).catch(function (error) {
        console.log(error);
      }).finally(() => {
        this.$refs['movimentacao-modal'].hide()
      });
    },
    salvar() {
      axios.get(`http://localhost:9090/produtos/codigo/${this.movimentacaoForm.codigo}`)
      .then((response) => {
        if(response.data)
          this.produto = response.data
        if(this.movimentacaoForm.tipo == 'saida' && this.movimentacaoForm.qtdMovimentada > this.produto.qtdEstoque) {
          alert('A quantidade de saída informada é maior que valor em estoque!')
          return
        }
        this.salvarMovimento()
      }).catch(function (error) {
        console.log(error);
      });
    },
    cancelarFormulario() {
      this.produtoForm = {
        codigo: '',
        tipo: ''
      }
      this.$refs['movimentacao-modal'].hide()
    },
  }
}
</script>

<style>

</style>
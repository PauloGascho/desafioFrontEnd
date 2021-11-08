<template>
  <b-modal ref="edita-produto" hide-header ok-only>
    <div class="d-block">
      <b-form-group
        class="formGroup"
        label="Código"
      >
        <b-form-input
          v-model="produtoSelecionado.codigo"
          placeholder="Digite o código do produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="formGroup"
        label="Descrição"
      >
        <b-form-input
          v-model="produtoSelecionado.descricao"
          placeholder="Digite a descrição do produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="formGroup"
        label="Tipo"
      >
        <b-form-input
          v-model="produtoSelecionado.tipo"
          placeholder="Digite o tipo do produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="formGroup"
        label="Valor do fornecedor"
      >
        <b-form-input
          v-model="produtoSelecionado.valorFornecedor"
          placeholder="Digite o valor do fornecedor"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="formGroup"
        label="Estoque"
      >
        <b-form-input
          v-model="produtoSelecionado.qtdEstoque"
          placeholder="Digite quantidade em estoque"
        ></b-form-input>
      </b-form-group>

    </div>
    <div slot="modal-footer">
      <b-btn variant="outline-primary" @click="cancelarFormulario" class="me-1">Cancelar</b-btn>
      <b-btn variant="primary" @click="salvar"><b-icon icon="check"></b-icon>Atualizar</b-btn>
    </div>
  </b-modal>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'
import { BModal } from 'bootstrap-vue'
Vue.component('b-modal', BModal)
export default {
  name: 'EditaProdutoModal',
  props: {
    produtoSelecionado: Object
  },
  methods: {
    show() {
      this.$refs['edita-produto'].show()
    },
    salvar() {
      axios.put('http://localhost:9090/produtos', this.$props.produtoSelecionado )
      .then(
        response => this.$emit('produtoEditado', response.data)
      ).catch(function (error) {
        console.log(error);
      }).finally(() => {
        this.$refs['edita-produto'].hide()
      });
    },
    cancelarFormulario() {
      this.$refs['edita-produto'].hide()
    },
  }
}
</script>

<style>

</style>
<template>
    <b-modal ref="novo-produto" hide-header ok-only>
      <div class="d-block">
        <b-form-group
          class="formGroup"
          label="Código"
        >
          <b-form-input
            v-model="produtoForm.codigo"
            placeholder="Digite o código do produto"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="formGroup"
          label="Descrição"
        >
          <b-form-input
            v-model="produtoForm.descricao"
            placeholder="Digite a descrição do produto"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="formGroup"
          label="Tipo"
        >
          <b-form-input
            v-model="produtoForm.tipo"
            placeholder="Digite o tipo do produto"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="formGroup"
          label="Valor do fornecedor"
        >
          <b-form-input
            v-model="produtoForm.valorFornecedor"
            placeholder="Digite o valor do fornecedor"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="formGroup"
          label="Estoque"
        >
          <b-form-input
            v-model="produtoForm.qtdEstoque"
            placeholder="Digite quantidade em estoque"
          ></b-form-input>
        </b-form-group>

      </div>
      <div slot="modal-footer">
        <b-btn variant="outline-primary" @click="cancelarFormulario" class="me-1">Cancelar</b-btn>
        <b-btn variant="primary" @click="salvar"><b-icon icon="check"></b-icon>Confirmar</b-btn>
      </div>
    </b-modal>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'
import { BModal } from 'bootstrap-vue'
Vue.component('b-modal', BModal)
export default {
  name: 'NovoProdutoModal',
  data() {
    return {
      produtoForm: {
        codigo: '',
        descricao:'',
        tipo:'',
        valorFornecedor:'',
        qtdEstoque:'',
      },
    }
  },
  methods: {
    show() {
      this.$refs['novo-produto'].show()
    },
    salvar() {
      axios.post('http://localhost:9090/produtos', this.produtoForm )
      .then(
        response => this.$emit('produtoSalvo',response.data)
      ).catch(function (error) {
        console.log(error);
      }).finally(() => {
        this.$refs['novo-produto'].hide()
      });
    },
    cancelarFormulario() {
      this.produtoForm = {
        codigo: '',
        descricao:'',
        tipo:'',
        valor:'',
        estoque:''
      }
      this.$refs['novo-produto'].hide()
    },
  }
}
</script>

<style scoped>
  .formGroup {
    margin-bottom: 5px;
  }
</style>
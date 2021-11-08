<template>
  <b-container class="mt-1">
    <b-card>
      <b-table
        striped
        hover
        :items="buscados"
        :fields="fields"
      />
    </b-card>
  </b-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LucroProduto',
  data() {
    return {
      codigo: '',
      buscados: [],
      fields: [
        { key: 'codigo', label: 'Código' },
        { key: 'descricao', label: 'Descrição' },
        { key: 'qtdSaida', label: 'Quantidade de saída' },
        { key: 'lucro', label: 'Lucro Bruto' },
      ],
    }
  },
  mounted() {
    this.buscar()
  },
  methods: {
    buscar() {
      axios.get('http://localhost:9090/produtos/lucros')
      .then((response) => {
        if(response.data)
          this.buscados = response.data
      }).catch(function (error) {
        console.log(error);
      });
    },
  }
}
</script>

<style>

</style>
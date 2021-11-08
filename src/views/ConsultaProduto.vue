<template>
  <b-container>
    <b-card>
      <b-row>
        <b-col>
          <b-form-group
            label="Tipo de movimentação"
          >
            <select v-model="tipo" class="form-select">
              <option v-for="(tipo,index) in tipos" :key="index" :value="tipo">{{tipo}}</option>
            </select>
          </b-form-group>
        </b-col>
        <b-col>
          <b-btn variant="primary" @click="buscar">
            <fa icon="search"/>
            Buscar
          </b-btn>
        </b-col>
      </b-row>
    </b-card>
    <b-card v-if="buscados.length">
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
  name: 'ConsultaProduto',
  data() {
    return {
      tipos: '',
      tipo: '',
      buscados: [],
      fields: [
        { key: 'codigo', label: 'Código' },
        { key: 'descricao', label: 'Descrição' },
        { key: 'qtdSaida', label: 'Quantidade de saída' },
        { key: 'qtdDisponivel', label: 'Quantidade disponível' },
      ],
    }
  },
  mounted() {
    this.buscarTodosOsTipos()
  },
  methods: {
    buscar() {
      axios.get(`http://localhost:9090/produtos/tipo/${this.tipo}`)
      .then((response) => {
        if(response.data)
          this.buscados = response.data
      }).catch(function (error) {
        console.log(error);
      });
    },
    buscarTodosOsTipos() {
      axios.get('http://localhost:9090/produtos/tipos')
      .then((response) => {
        if(response.data)
          this.tipos = response.data
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style>

</style>
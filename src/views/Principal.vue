<template>
<b-container fluid>
  <b-container fluid="sm">
    <b-row>
      <b-col class="col-cards">
        <a href="/#/produtos" class="btn card-button m-1 text-light">
          <fa class="card-icon" icon="box"/>
          <p>Produtos</p>
        </a>
        <a href="/#/movimentacao" class="btn card-button m-1 text-light">
          <fa class="card-icon" icon="exchange-alt"/>
          <p>Movimentação</p>
        </a>
        <a href="/#/consulta-produto" class="btn card-button m-1 text-light">
          <fa class="card-icon" icon="search"/>
          <p>Consulta de produtos</p>
        </a>
        <a href="/#/lucro-produto" class="btn card-button m-1 text-light">
          <fa class="card-icon" icon="chart-line"/>
          <p>Lucro de produtos</p>
        </a>
      </b-col>
    </b-row>
  </b-container>
</b-container>
</template>

<script>
export default {
	name: 'Principal'
}
</script>

<style>
  .card-button {
    background-color: #563d7c !important;
    height: 150px;
    width: 150px;
  }
  .card-button:hover {
    background-color: #5e4e77 !important;
  }
  .col-cards p{
    /* margin-bottom: 16px; */
    margin-top: 16px;
  }
  .card-icon {
    margin-top: 16px;
  }
</style>
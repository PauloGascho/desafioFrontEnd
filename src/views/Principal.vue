<template>
<b-container fluid>
  <b-container fluid="sm">
    <b-row>
      <b-col>
        <a href="/#/produtos" class="btn card-button m-1 text-light">
          <fa icon="box"/>
          <p>Produtos</p>
        </a>
        <a href="/#/movimentacao" class="btn card-button m-1 text-light">
          <fa icon="exchange-alt"/>
          <p>Movimentação</p>
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
</style>
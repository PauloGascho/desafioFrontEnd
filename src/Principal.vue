<template>
<b-container fluid>

  <b-container fluid="sm">
    <b-row>
      <b-col>
        <button type="button" class="btn card-button m-1">
          <fa icon="box"/>
          <div>Produtos</div>
        </button>
        <b-button class="card-button m-1">
          <fa icon="box"/>
          <div>Produtos</div>
        </b-button>
        <b-button class="card-button m-1">
          <fa icon="exchange-alt"/>
          <div>Movimentação</div>
        </b-button>
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
  .navbar {
    background-color: #563d7c;
  }
  .card-button {
    background-color: #563d7c !important;
    height: 150px;
    width: 150px;
  }
</style>
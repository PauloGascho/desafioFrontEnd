<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" class="navbar">
      <b-navbar-brand class="ms-2" href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Opções" right>
            <b-dropdown-item href="#">Produtos</b-dropdown-item>
            <b-dropdown-item href="#">Movimentação</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Principal/>
  </div>
</template>

<script>
import Principal from './Principal.vue'

export default {
  name: 'App',
  components: {
    Principal
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

<template>
  <div class="header">
    <nav class="navbar  navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">FAKESTOREAPI</a>
        <router-link to="/" >Home</router-link>
        <router-link to="/Produtos">Produtos</router-link>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script setup>
</script>

<style>


</style>
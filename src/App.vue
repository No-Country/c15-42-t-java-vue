<script setup>
import FormLogin from './components/FormLogin.vue';
import FormCliente from './components/FormCliente.vue'
import FormProduct from './components/FormProduct.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  </header>
    <hr>

    <div>
      <h2>Formulario de Login</h2>
      <FormLogin />
    </div>

    <br>
    <hr>

    <div>
      <h2>Formulario de Cliente</h2>
      <FormCliente />
    </div>

    <br>
    <hr>

    <div>
      <h2>Formulario de Producto</h2>
      <FormProduct />
    </div>
  <RouterView />
</template>

<style scoped>

h2 {
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
}
.logo {
  display: flex;
  margin: 0 auto 2rem;
  align-items: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>

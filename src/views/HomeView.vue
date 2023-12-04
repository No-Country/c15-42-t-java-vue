<script setup>
</script>

<template>
  <main>
    <section class="container-left">
      <h1 class="container-left__message">¡Encuentra la planta perfecta para tu hogar!</h1>
      <p class="container-left__subtitle">Decorativas, útiles en la cocina y además curativas.</p>
    </section>
    <section class="container-right">
      <img class="container-right__img" src="/src/assets/img/planta-portada1.png" alt="" srcset="">
    </section>
  </main>
</template>

<style scoped>
main{
  display: flex;
  align-items: center;
  column-gap: 140px;
  padding: 0 10%;
  margin-top: 5rem;
  }

  .container-left {
    width: 60%;
  }

  .container-left__message{
    font-size: 50px;
  }

  .container-left__subtitle{
    font-size: 30px;
  }

  .container-right{
    width: 40%;
  }
 
 .container-right__img{
  width: 100%;
 }
</style>

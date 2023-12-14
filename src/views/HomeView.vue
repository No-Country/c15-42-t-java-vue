<script setup>
</script>

<template>
  <main>
    <div class="main-content">
      <section class="container-left">
      <h1 class="container-left__message">¡Encuentra la planta perfecta para tu hogar!</h1>
      <p class="container-left__subtitle">Decorativas, útiles en la cocina y además curativas.</p>
      <section class="container-img-responsive">
      <img class="container-img-responsive__img" src="/src/assets/img/planta-portada1.png" alt="" srcset="">
    </section>
      <div class="button-container">
        <button><RouterLink to="/categories" class="button">Ver categorías</RouterLink></button>
      </div>
    </section>
    <section class="container-right">
      <img class="container-right__img" src="/src/assets/img/planta-portada1.png" alt="" srcset="">
    </section>
    </div>
    
   
  </main>
</template>

<style scoped>
  .main-content {
    display: flex;
    align-items: center;
    column-gap: 140px;
    padding: 0 10%;
    margin-top: 5rem;
    @media(max-width:768px) {
          margin-top: 2.5rem;
          flex-direction: column;
          row-gap: 40px;
          padding: 0 3%;
      }
  }

  .container-left {
    width: 60%;
    @media(max-width: 768px) {
      width: 100%;
    }
  }

  .container-left__message{
    font-size: 42px;
    line-height: normal;
    @media(max-width: 768px) {
      font-size: 24px;
    }
  }

  .container-left__subtitle{
    margin-top: 10px;
    font-size: 30px;
    line-height: normal;
    @media(max-width: 768px) {
      font-size: 18px;
    }
  }

  .container-right{
    width: 40%;
    @media(max-width: 768px) {
      display: none;
    }
  }
 
 .container-right__img{
  width: 100%;
 }

 .button-container {
  margin-top: 32px;
  @media(max-width: 768px) {
    width: 100%;
      display: flex;
      justify-content: center;
    }
 }
 .button {
   text-decoration: none;
   background-color: black;
   color: white;
   padding: 12px 12px;
   border-radius: 16px;
   height: 40px;
 }
 
 .container-img-responsive {
  margin: 32px 0 44px 0;
  display: flex;
  justify-content: center;
  @media(min-width: 768px) {
    display: none;
  }
 }

 .container-img-responsive__img {
    width: 75%;
 }
</style>

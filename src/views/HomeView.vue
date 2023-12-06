<template>
  <main>
    <div class="main-content">
      <section class="container-left">
      <h1 class="container-left__message">¡Encuentra la planta perfecta para tu hogar!</h1>
      <p class="container-left__subtitle">Decorativas, útiles en la cocina y además curativas.</p>
      <div>
        <button><RouterLink to="/categories">Ver categorías</RouterLink></button>
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
          flex-direction: column;
          row-gap: 40px;
          padding: 7%;
      }
  }

  .container-left {
    width: 60%;
  }

  .container-left__message{
    font-size: 42px;
    line-height: normal;
  }

  .container-left__subtitle{
    margin-top: 10px;
    font-size: 30px;
    line-height: normal;
  }

  .container-right{
    width: 40%;
  }
 
 .container-right__img{
  width: 100%;
 }

 
</style>

<script setup>
import HpHeader from '@/components/HeaderHp.vue'
</script>

<template>
  <Header>
    <HpHeader />
  </Header>
  <main>
    <div>
      <section class="container-left">
      <h1 class="container-left__message">¡Encuentra la planta perfecta para tu hogar!</h1>
      <p class="container-left__subtitle">Decorativas, útiles en la cocina y además curativas.</p>
    </section>
    <section class="container-right">
      <img class="container-right__img" src="/src/assets/img/planta-portada1.png" alt="" srcset="">
    </section>
    </div>
    
    <section class="category">
      <div class="category__containertitle">
        <h2 class="containertitle__title">Categorías de plantas</h2>
      </div>
      <v-card
    class="mx-auto"
    max-width="200"
    height="200"
    image="https://es.wikipedia.org/wiki/Planta_ornamental#/media/Archivo:Rhododendron_ponticum_(1).jpg"
    title="Decorativas"
    background="green"
  ></v-card>
      <div>
        
      </div>
    </section>
  </main>
</template>

<style scoped>
  div{
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

 .category{
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
 }
</style>

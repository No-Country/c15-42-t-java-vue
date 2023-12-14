<script setup>
import axiosClient from '/src/utils/axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const plants = ref([])
let categoryId = 0

const fetchPlants = async () => {
  try {
    const { data } = await axiosClient.get('/8d6bc2c1-d99f-4d2c-a74d-46fcd3732bc1')
    plants.value = data.filter((plant) => plant.category.id == categoryId)
  } catch (error) {
    console.log(error)
  }
}

const addToCart = (plant) => {
  console.log(plant);
  alert(`${plant.name} fue añadido al carrito`);
}

onMounted(() => {
  const route = useRoute()
  categoryId = route.params.id
  fetchPlants()
})
</script>
<template>
  <h2 class="title">Plantas por categoría</h2>
  <section class="container">
    <div class="container__card" v-for="plant in plants" :key="plant.id">
      <div class="card__name">
        {{ plant.name }}
      </div>
      <div class="container__img-desc">
        <div>
          <img :src="plant.imgUrl" alt="" srcset="" class="container__img-desc__img" />
        </div>
        <div class="container__img-desc__desc">
          {{ plant.description }}
        </div>
      </div>
      <div class="container__price-car">
        <div>${{ plant.precio }}</div>
        <div class="container__button">
          <button @click="addToCart(plant)" class="button">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title {
  text-align: center;
  margin: 40px 0;
}
.container {
  display: flex;
  column-gap: 32px;
  justify-content: center;
  @media(max-width: 768px) {
    flex-direction: column;
    align-items: center;
    row-gap: 24px;
  }
}
.container__card {
  border: 1px solid lightgray;
  border-radius: 16px;
  padding: 16px 24px;
  width: 500px;
  @media(max-width: 768px) {
    width: 330px;
  }
}

.card__name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
}
.container__img-desc {
  display: flex;
  column-gap: 24px;
  align-items: center;
  @media(max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    row-gap: 16px;
  }
}
.container__price-car {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}
/* .container__button{

}  */
.button {
  text-decoration: none;
  background-color: black;
  color: white;
  padding: 12px;
  border-radius: 16px;
}
.container__img-desc__img {
  height: 180px;
  border-radius: 16px;
}
.container__img-desc__desc {
  font-size: 14px;
}
</style>

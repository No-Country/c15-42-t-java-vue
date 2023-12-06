<script setup>
import axiosClient from '/src/utils/axios'
import { onMounted, ref } from 'vue'

const categories = ref([])
const fetchCategories = async () => {
  try {
    const { data } = await axiosClient.get('/cc47bc69-6cb8-465e-9661-55daab715e29')
    categories.value = data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchCategories()
})
</script>

<template>
  <section class="categories">
    <h2 class="categories-title">Categorías</h2>
    <div class="categories-content">
      <div v-for="categoria in categories" :key="categoria.id" class="category-card">
        <div class="category-title">
          {{ categoria.name }}
        </div>
        <div class="img">
          <img :src="categoria.imgUrl" alt="" srcset="" class="category-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories {
  margin-bottom: 80px;
}
.categories-title {
  text-align: center;
  margin: 80px 0 40px 0;
}
.category-title {
  text-align: start;
  font-size: 24px;
  font-weight: 600;
}
.category-card {
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid lightgray;
  border-radius: 16px;
}

.categories-content {
  display: flex;
  column-gap: 16px;
  justify-content: center;
}
.category-img {
  width: 50%;
}

.img {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>

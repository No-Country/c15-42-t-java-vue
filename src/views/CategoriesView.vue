<script setup>
  import axiosClient from '/src/utils/axios'
  import { onMounted, ref  } from 'vue'
import { RouterLink } from 'vue-router';

  const categories = ref([])
  const fetchCategories = async () => {
    try {
      const { data } = await axiosClient.get('/287a8b2d-66ca-4539-8969-23a1c1ceb72e')
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
      <RouterLink 
        v-for="categoria in categories" :key="categoria.id"
        :to="{name: 'plants', params: {id: categoria.id}}"
        class="link"
      >
        <div class="category-card">
            <div class="category-title">
              {{ categoria.name }}
            </div>
            <div class="img">
              <img :src="categoria.imgUrl" alt="" srcset="" class="category-img" />
            </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.categories {
  margin-bottom: 80px;
  @media(max-width: 768px) {
    width: 90vw;
  }
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
  @media(max-width: 768px) {
    flex-direction: column;
    row-gap: 16px;
    align-items: center;
  }
}
.category-img {
  width: 50%;
}

.img {
  width: 100%;
  display: flex;
  justify-content: center;
}
.link {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.link:visited {
  color: black;
}
.link:active {
  color: black;
}
</style>

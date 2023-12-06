<script setup>
import { onMounted, ref } from 'vue';
import { RouterView } from 'vue-router';
import axiosClient from "./utils/axios";

const categories = ref([]);
const fetchCategorias = async () => {
  try {
    const dataCategoria = await axiosClient.get("/cc47bc69-6cb8-465e-9661-55daab715e29");
    categories.value = dataCategoria;
  } catch (error) {
    console.log(error);
  }
};

onMounted (() => {
  fetchCategorias();
})

</script>

<template>

  <RouterView />
  
</template>

<style scoped>


</style>

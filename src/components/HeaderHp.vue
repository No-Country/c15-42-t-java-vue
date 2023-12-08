<template>
    <div class="arreglo">
        <RouterLink class="logo" to="/">
            <img src="../assets/Logo.png" width="50">
            <h1>HomePlants</h1>
        </RouterLink>
        <div class="buscador">
            <BuscadorHp />
        </div>
        <div class="naveg">
            <NavBar />
        </div>
    </div>
</template>
<style scoped>

.arreglo {
    display: flex;
    align-items: center;
    column-gap: 14px;
}

.logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    column-gap: 8px;
}

.logo:visited {
    color: black;
}

.logo:active {
    color: black;
}

h1{
    font-size: 20px;
}
.buscador{
    width: 80%;
}

</style>
<script setup>
import NavBar from '@/components/NavBar.vue'
import BuscadorHp from './BuscadorHp.vue'
import { RouterLink } from 'vue-router';
</script>
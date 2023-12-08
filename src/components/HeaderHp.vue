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

}

.logo {
    display: flex;
    position: absolute;
    top: 20px;
    text-decoration: inherit;
    color: black;
    left: 10px;
}

.naveg{
    position: absolute;
    top: 20px;
    right: 10px;
}

h1{
    margin-top: 10px;
    font-size: 20px;
    margin-left: 5px;
}
.buscador{
    position: absolute;
    width: 80%;
    top: 60px;
    left: 10px;
    padding: 0;
}

</style>
<script setup>
import NavBar from '@/components/NavBar.vue'
import BuscadorHp from './BuscadorHp.vue'
import { RouterLink } from 'vue-router';
</script>
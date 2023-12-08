<template>
    <div class="arreglo">
        <img src="../assets/Logo.png" width="50">
        <h1>HomePlants</h1>
        <div class="buscador">
        <BuscadorHp />
        </div>
        <div class="naveg">
        <NavBar />
        </div>
    </div>
</template>
<style scoped>


.arreglo img{
    position: absolute;
    left: 20px;
    top:20px;
}
h1{
    position: absolute;
    left:75px;
    top: 30px;
    font-size: 20px;
}
.buscador{
    width: 80%;
    position: absolute;
    top:90px;
    left: 20px
}
.naveg{
    position: absolute;
    top: 15px;
    right: 5px;
}
</style>
<script setup>
import NavBar from '@/components/NavBar.vue'
import BuscadorHp from './BuscadorHp.vue'
</script>
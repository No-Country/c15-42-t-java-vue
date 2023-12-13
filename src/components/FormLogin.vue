<script setup>
import RegistroCliente from './InicioRegistro.vue'
</script>

<template>
    <h3>Acceso usuarios</h3>
    <div>
        <input type="text" placeholder="Nombre">
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Password">
        <button>Login</button>
        <RegistroCliente />

    </div>
</template>

<style scoped>
    h3{
        text-align: center;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 10px;
    }

    input {
        font-size: 15px;
    }

    div input {
        margin: 10px 10px;
        border-radius: 5%;
        border: 3% transparent lightgreen;
        box-shadow: 10px seagreen;
        padding: 5px;
    }

    button {
        font-size: 15px;
        border: rgb(0, 0, 0) solid 1px;
        border-radius: 20%;
        padding: 5px;
        background-color: green;
        color: white
    }
</style>
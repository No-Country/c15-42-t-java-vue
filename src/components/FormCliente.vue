<script setup>
</script>

<template>
    <div>
        <input type="text" placeholder="Nombre">
        <input type="text" placeholder="Apellido">
        <input type="text" placeholder="Documento"> 
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Telefono">
        <input type="text" placeholder="Password">
        <input type="text" placeholder="Password2">
        <button>Ingresar</button>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 10px;
    }

    input {
        font-size: large;
    }

    div input {
        margin: 10px 10px;
        border-radius: 5%;
        border: 3% transparent lightgreen;
        box-shadow: 10px seagreen;
    }

    button {
        font-size: 20px;
    }
</style>
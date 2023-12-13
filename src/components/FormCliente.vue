<script setup>
</script>

<template>
    <h3>Registro de usuario</h3>
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
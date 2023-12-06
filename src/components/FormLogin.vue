<script setup>
</script>

<template>
    <div>
        <input type="text" placeholder="Nombre">
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Password">
        <button>Login</button>
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
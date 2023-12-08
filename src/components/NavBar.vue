<template>
    <div class="text-right mr-5 ml-5 mt-3">
      <v-menu
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="green"
            v-bind="props"
            icon="true"
            absolute="true"
          >
          <v-icon icon="mdi-menu" />
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            route :to="item.route"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>
  <script>
  export default {
    data: () => ({
      items: [
        { title: 'Home', route: '/'},
        { title: 'Productos', route: '/categories'},
        { title: 'Carrito', route: '/cart' },
        { title: 'Login' },
      ],
     

    }),
  }
</script>
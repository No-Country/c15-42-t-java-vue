<template>
    <div class="text-center">
      <v-btn
        color="none"
        
      >
        
        Registro
        

        <v-dialog
          v-model="dialog"
          activator="parent"
          width="auto"
        >
          <v-card>
            <v-card-text>
              <FormCliente />
            </v-card-text>
            <v-card-actions>
              <v-btn color="green" block @click="dialog = false">cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
    </div>
  </template>


<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }

</script>
<script setup>
import FormCliente from './FormCliente.vue';
</script>
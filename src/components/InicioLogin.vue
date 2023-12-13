<template>
    <div class="text-center">
      <v-btn
        color="green"
        icon="true"
      >
        <v-icon aria-hidden="false">
        mdi-account
        </v-icon>

        <v-dialog
          v-model="dialog"
          activator="parent"
          width="auto"
        >
          <v-card>
            <v-card-text>
              <LoginForm />
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
import LoginForm from './FormLogin.vue'
</script>
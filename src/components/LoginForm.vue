<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const visible = ref(false)
</script>

<template>
  <div class="login-form">
    <v-img
      class="mx-auto my-6"
      max-width="100"
      src="/favicon.svg"
    />

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">
        Account
      </div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      />

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      />

      <v-btn
        class="mb-5"
        color="blue"
        size="large"
        variant="tonal"
        block
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <RouterLink
          class="text-blue text-decoration-none"
          to="/register"
        >
          Don't have an account? Register
        </RouterLink>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.login-form {
  min-width: 500px;
}
</style>

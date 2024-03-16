<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { emailRule, requiredRule } from '@/helpers/rules'
import { loginUser } from '@/api'
import router from '@/router'
import { useUserStore } from '@/stores/user'

const password = ref('')
const isPasswordVisible = ref(false)
const email = ref('')
const loginError = ref<null | Error>(null)

const isLoginDisabled = computed(() =>
  !email.value
  || !password.value
  || (emailRule(email.value) !== true))

const { setUser } = useUserStore()

async function login(): Promise<void> {
  try {
    const user = await loginUser({
      email: email.value,
      password: password.value,
    })

    setUser(user)

    router.push('/')
  }
  catch (error) {
    loginError.value = error as Error
  }
}
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
      title="Log in"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">
        Email
      </div>

      <v-text-field
        v-model="email"
        :rules="[requiredRule, emailRule]"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      />

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password
      </div>

      <v-text-field
        v-model="password"
        :rules="[requiredRule]"
        :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="isPasswordVisible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="isPasswordVisible = !isPasswordVisible"
      />

      <v-btn
        class="mb-5"
        color="blue"
        size="large"
        variant="tonal"
        :disabled="isLoginDisabled"
        block
        @click="login"
      >
        Log In
      </v-btn>

      <v-alert v-if="loginError" :text="loginError.message" type="error" />

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

<script setup lang="ts">
import router from '@/router'
import { useUserStore } from '@/stores/user'

const { removeUser } = useUserStore()

function logout() {
  removeUser()
  router.push('/login')
}
</script>

<template>
  <main>
    <div>CREATE TRIP</div>
    <button @click="logout">
      Log out
    </button>
  </main>
</template>

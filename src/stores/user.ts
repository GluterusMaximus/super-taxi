import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Role } from '@/types/role'

interface User {
  id: string
  name: string
  email: string
  role: Role
  token: string
}

export const useUserStore = defineStore('user', () => {
  const userFromStore = localStorage.getItem('user')
  const user = ref(userFromStore === null ? null : JSON.parse(userFromStore) as User)

  const userGetter = computed(() => user)

  function setUser(data: User) {
    user.value = data
    localStorage.setItem('user', JSON.stringify(data))
  }

  function removeUser() {
    user.value = null
    localStorage.removeItem('user')
  }

  return { user: userGetter, setUser, removeUser }
})

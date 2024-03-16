import axios from 'axios'
import type { ApiError, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '@/types/api'

const BASE_URL = 'http://localhost:5000'

export async function createUser(data: RegisterRequest): Promise<RegisterResponse> {
  try {
    const response = await axios.post<RegisterResponse>(`${BASE_URL}/api/users`, data)

    return response.data
  }
  catch (error) {
    console.error(error)
    throw new Error((error as ApiError).response.data.message)
  }
}

export async function loginUser(data: LoginRequest): Promise<LoginResponse> {
  try {
    const response = await axios.post<LoginResponse>(`${BASE_URL}/api/users/login`, data)

    return response.data
  }
  catch (error) {
    console.error(error)
    throw new Error((error as ApiError).response.data.message)
  }
}

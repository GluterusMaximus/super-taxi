import type { Role } from './role'

export interface RegisterRequest {
  email: string
  name: string
  role: Role
  password: string
}

export interface RegisterResponse {
  id: string
  name: string
  email: string
  role: Role
  token: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  id: string
  name: string
  email: string
  role: Role
  token: string
}

export interface ApiError {
  response: {
    data: {
      errors: unknown[]
      message: string
      status: string
    }
  }
}

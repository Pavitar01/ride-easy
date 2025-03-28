import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = {
  id: string
  name?: string
  email?: string
}

interface AuthState {
  user: User | "",
  token: string | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: "",
  token: "",
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.user = ""
      state.token = ""
      state.isAuthenticated = false
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer

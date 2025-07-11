import { create } from 'zustand'

interface AuthState {
  token: string | null
  username: string | null
  setToken: (token: string) => void
  setUser: (username: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  username: null,
  setToken: (token) => set({ token }),
  setUser: (username) => set({ username }),
  logout: () => set({ token: null, username: null }),
}))
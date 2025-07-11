import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const token = useAuthStore((state) => state.token)

  useEffect(() => {
    if (!token) {
      router.push('/login')
    }
  }, [token, router])

  return <>{token ? children : null}</>
}

export default ProtectedRoute
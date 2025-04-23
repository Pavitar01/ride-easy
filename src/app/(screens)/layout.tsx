'use client'

import { ReactNode, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { Box } from '@mui/material'
import { Header } from '@/shared/ui'
import Footer from '@/shared/ui/footer'
import { useAppSelector } from '@/store/hooks'
import { useRouter } from 'next/navigation'
import { PublicEnvProvider } from 'next-runtime-env'

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(state => state?.auth?.user?.id);
  const { push } = useRouter()
  useEffect(() => {
    if (user) {
      push("/profile")
    }
  }, [user])
  return (
    <Box className="layout-wrapper">
      <PublicEnvProvider>
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </PublicEnvProvider>
    </Box>
  )
}

export default ProtectedLayout

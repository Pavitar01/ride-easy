'use client'

import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import { Box } from '@mui/material'
import { Header } from '@/shared/ui'
import Footer from '@/shared/ui/footer'

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box className="layout-wrapper">
      <Header />
      {children}
      <Footer />
      <ToastContainer />
    </Box>
  )
}

export default ProtectedLayout

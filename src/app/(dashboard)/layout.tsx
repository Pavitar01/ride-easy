import { Metadata } from 'next'
import { Box } from '@mui/material'
import AboutUsSection from '@/modules/home/sections/about-us-section'
import FacilitySection from '@/modules/home/sections/facility-section'
import HeroSection from '@/modules/home/sections/hero-section'
import VehiclesSection from '@/modules/home/sections/vehicles-section'
import { Header } from '@/shared/ui'
import Footer from '@/shared/ui/footer'

export const metadata: Metadata = {
  title: 'RideEasy | Home',
  description: 'Bike & Scooter Rental home page',
  icons: {
    icon: '/app-logo.png',
  },
}
const ProtectedLayout = () => {
  return (
    <Box className="layout-wrapper">
      <Header />
      <HeroSection />
      <FacilitySection />
      <AboutUsSection />
      <VehiclesSection />
      <Footer />
    </Box>
  )
}

export default ProtectedLayout

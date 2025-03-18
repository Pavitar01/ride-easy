import { Box } from '@mui/material'
import FacilitySection from '@/modules/home/sections/facility-section'
import HeroSection from '@/modules/home/sections/hero-section'
import { Header } from '@/shared/ui'
import AboutUsSection from '@/modules/home/sections/about-us-section'
import VehiclesSection from '@/modules/home/sections/vehicles-section'

const ProtectedLayout = () => {
  return (
    <Box className="layout-wrapper">
      <Header />
      <HeroSection />
      <FacilitySection />
      <AboutUsSection />
      <VehiclesSection/>
    </Box>
  )
}

export default ProtectedLayout

import HeroSection from "@/modules/home/hero-section"
import { Header } from "@/shared/ui"
import { Box } from "@mui/material"

const ProtectedLayout = () => {
  return (
    <Box className="layout-wrapper">
      <Header/>
      <HeroSection/>
    </Box>
  )
}

export default ProtectedLayout

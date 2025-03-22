import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import './styles.scss'
import { Activa } from '../../assets'

const HeroSection = () => {
  return (
    <Box className="vehicles-hero-section">
      <Image
        className="bgimage"
        src={Activa}
        alt="background-image"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      <Box className="hero-section-wrapper">
        <Container maxWidth="lg" className="hero-section-container">
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontSize: {
                md: 'var(--global-xxxl-font-size)',
                xs: 'var(--global-xl-font-size)',
              },
            }}
            className="hero-section-heading"
          >
            Rent Vehicles
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: {
                md: 'var(--global-regular-font-size)',
                xs: 'var(--global-medium-font-size)',
              },
            }}
            className="hero-section-description"
          >
            Affordable, well-maintained bikes and Activas with flexible plans, easy pickup/drop, minimal paperwork, no hidden charges, and 24/7 support.
          </Typography>
        </Container>

        <Box sx={{ height: '200vh' }}></Box>
      </Box>
    </Box>
  )
}

export default HeroSection

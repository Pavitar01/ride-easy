import { Box, Container, Typography } from '@mui/material'
import './styles.scss'
import { Bikers } from '../../assets'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <Box className="about-us-hero-section">
      <Image
        loading='lazy'
        className="bgimage"
        src={Bikers}
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
            About Us
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
            RideEasy offers bike and scooter rentals for city commutes and adventures—ride your way! Whether you need a scooter for city commutes or a bike for adventure, we offer the perfect two-wheeler for your journey.
          </Typography>
        </Container>

        <Box sx={{ height: '200vh' }}></Box>
      </Box>
    </Box>
  )
}

export default HeroSection

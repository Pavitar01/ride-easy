'use client'
import Image from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import { Circle } from '@/shared/assets'
import BaseButton from '@/shared/ui/base-button'
import { Rider2 } from '../../assets'
import './styles.scss'

const AboutUsSection = () => {
  const moveToVehiclesSection = () => {
    const vehiclesSection = document.getElementById('vehicles-section')
    vehiclesSection?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Box className="about-us-section">
      <Container maxWidth="lg" className="container">
        <Box className="about-us-left-section">
          <Box className="image-container">
            <Image
             loading="lazy"
              src={Rider2}
              className="about-us-image"
              alt="about-us-image"
              quality={100}
              width={500}
              height={500}
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Image
           loading="lazy"
            src={Circle}
            alt="circle-image"
            className="circle-image"
            width={260}
            height={260}
          />
        </Box>
        <Box className="about-us-right-section">
          <Typography component="h1" className="about-us-title">
            About RideEasy
          </Typography>
          <Typography
            component="h1"
            className="about-us-heading"
            sx={{
              fontSize: {
                md: 'var(--global-xxl-font-size-alt)',
                lg: 'var(--global-xl-font-size)',
                xs: 'var(--global-xl-font-size-alt)',
              },
            }}
          >
            Find the Perfect Rental Vehicle Today
          </Typography>
          <Typography component="p" className="about-us-description">
            Unlock the freedom to ride with RideEasy’s bike and scooter rentals.
            Whether you need a scooter for city commutes or a bike for
            adventure, we offer the perfect two-wheeler for your journey.
          </Typography>
          <BaseButton
            onClick={moveToVehiclesSection}
            sx={{
              marginTop: '32px',
              width: {
                md: 'max-content',
                xs: '100%',
              },
            }}
          >
            Discover More
          </BaseButton>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutUsSection

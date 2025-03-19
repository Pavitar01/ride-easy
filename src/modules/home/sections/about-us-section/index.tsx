import Image from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import BaseButton from '@/shared/ui/base-button'
import { Circle, RiderCouples2 } from '../../assets'
import './styles.scss'

const AboutUsSection = () => {
  return (
    <Box className="about-us-section">
      <Container maxWidth="lg" className="container">
        <Box className="about-us-left-section">
          <Image
            src={RiderCouples2}
            alt="about-us-image"
            height={550}
            width={500}
          />
          <Image
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

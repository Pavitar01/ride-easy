import Image from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import { TypeWriter } from '@/shared/ui'
import { RiderCouples1 } from '../../assets'
import DateLocationPicker from '../../components/date-location-picker'
import { Circle } from '@/shared/assets'
import './styles.scss'

const textList = [
  {
    text: 'Anytime !',
    delay: 2000,
  },
  {
    text: 'Anywhere !',
    delay: 2000,
  },
]

const HeroSection = () => {
  return (
    <Box className="hero-section">
      <Box className="hero-section-wrapper">
        <Container maxWidth="lg" className="hero-section-container">
          <Box className="left-section">
            <Typography component="p" className="hero-section-title">
              Enjoy your ride!
            </Typography>
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
              Travel with Ease <TypeWriter textList={textList} />
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
              <span className="highlight">RideEasy</span> – Enjoy fast,
              affordable bike and scooter rentals for effortless urban travel.
              Find, unlock, and ride anytime with ease and convenience. 🚲🛴
            </Typography>
            <DateLocationPicker />
          </Box>
          <Box
            className="right-section"
            display={{ xs: 'none !important', md: 'flex !important' }}
          >
            <Image
              loading="lazy"
              src={RiderCouples1}
              alt="rider-image"
              className="rider-image"
              width={524}
              height={624}
            />
            <Image
              loading="lazy"
              src={Circle}
              alt="circle-image"
              className="circle-image"
              width={220}
              height={220}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default HeroSection

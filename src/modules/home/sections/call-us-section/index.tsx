'use client'
import Image from 'next/image'
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import BaseButton from '@/shared/ui/base-button'
import { SCooter } from '../../assets'
import './styles.scss'

const CallUsSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box className="call-us-section">
      <Box className="bg-image">
        <Image src={SCooter} alt="call-us-image" />
      </Box>

      <Container maxWidth="lg" className="container">
        <Typography
          component="h1"
          className="call-us-heading"
          sx={{
            fontSize: {
              md: 'var(--global-xxl-font-size-alt)',
              lg: 'var(--global-xl-font-size)',
              xs: 'var(--global-xl-font-size-alt)',
            },
          }}
        >
          Need a Ride? Call Us Today to Book!
        </Typography>
        <Typography
          component="p"
          className="call-us-description"
          sx={{
            fontSize: {
              md: 'var(--global-regular-font-size)',
              xs: 'var(--global-regular-font-size-alt)',
            },
          }}
        >
          Looking for a hassle-free ride? Call us now and reserve your bike or
          scooter for a smooth and comfortable journey anytime, anywhere
        </Typography>
        <BaseButton sx={{ marginTop: '50px', width: !isMobile?'250px':"100%" }}>
          Rent a Vehicle
        </BaseButton>
      </Container>
    </Box>
  )
}

export default CallUsSection

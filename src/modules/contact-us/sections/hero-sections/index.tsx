import { Box, Container, Typography } from '@mui/material'
import ContactCard from './card/contact-card'
import './styles.scss'

const HeroSection = () => {
  return (
    <Box className="contact-us-hero-section">
      <Container maxWidth="lg" className="container">
        <Box className="left-section">
          <Typography component="h1" className="hero-section-title">
            Contact Us
          </Typography>
          <Typography
            component="p"
            className="hero-section-heading"
            sx={{
              fontSize: {
                md: 'var(--global-xxl-font-size-alt)',
                lg: 'var(--global-xl-font-size)',
                xs: 'var(--global-xl-font-size-alt)',
              },
            }}
          >
            How May We Help?
          </Typography>
          <Typography
            className="hero-section-description"
            component="p"
            sx={{
              fontSize: {
                md: 'var(--global-regular-font-size)',
                xs: 'var(--global-medium-font-size)',
              },
            }}
          >
            Need help or have questions? Contact us anytime! Our team will
            respond quickly. Whether it's support, feedback, or inquiries, we're
            here for you.
          </Typography>
          <Typography
            component="h2"
            className="hero-section-subtitle"
            sx={{
              fontSize: {
                md: 'var(--global-xl-font-size-alt)',
                xs: 'var(--global-xl-font-size-alt)',
              },
            }}
          >
            Costumer service hours
          </Typography>
          <Typography className="hero-section-time" component="p">
            Monday – Saturday : 9.00 am – 7.00 pm
          </Typography>
        </Box>
        <Box className="right-section">
          <ContactCard />
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection

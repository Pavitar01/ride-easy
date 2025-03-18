import { Box, Container, Typography } from '@mui/material'
import FacilityCard from './card/facility-card'
import { FacilityList } from './facility-list'
import './styles.scss'

const FacilitySection = () => {
  return (
    <Box className="facility-section">
      <Typography className="facility-section-title" component="p">
        Our facilities
      </Typography>
      <Typography
        className="facility-section-heading"
        component="p"
        sx={{
          fontSize: {
            md: 'var(--global-xxl-font-size-alt)',
            lg: 'var(--global-xl-font-size)',
            xs: 'var(--global-xl-font-size-alt)',
          },
        }}
      >
        Facilities That Elevate Your Experience
      </Typography>
      <Container maxWidth="lg" className="container">
        <Box className="facility-cards">
          {FacilityList.map((item, index) => {
            return (
              <FacilityCard
                description={item.description}
                icon={item.icon}
                title={item.title}
                key={index}
              />
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}

export default FacilitySection

'use client'

import {
  Box,
  Container,
  Typography,
} from '@mui/material'
import VehicleCard from './card'
import { vehicles } from './vehicles'
import './styles.scss'

const ChooseVehiclesSection = () => {

  return (
    <Box className="choose-vehicles-section">
      <Container maxWidth="lg" className="container">
        <Box className="wrapper">
          <Box className="title-container">
            <Typography component="h1" className="vehicles-section-title">
              Our Collection
            </Typography>
            <Typography
              component="h1"
              className="vehicles-section-heading"
              sx={{
                fontSize: {
                  md: 'var(--global-xxl-font-size-alt)',
                  lg: 'var(--global-xl-font-size)',
                  xs: 'var(--global-xl-font-size-alt)',
                },
              }}
            >
              Choose vehicles
            </Typography>
          </Box>
        </Box>

        <Box className="vehicles">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={index}
              features={vehicle.features}
              title={vehicle.title}
              price={vehicle.price}
              image={vehicle.image}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default ChooseVehiclesSection

'use client'

import { Box, CircularProgress, Container, Typography } from '@mui/material'
import { useListVehicles } from '@/shared/hooks'
import { Vehicle } from '@/types'
import VehicleCard from './card'
import './styles.scss'

const ChooseVehiclesSection = () => {
  const { listVehicles, isLoading } = useListVehicles()
  const transformedData = listVehicles.map((item: Vehicle) => ({
    id: item.$id,
    title: item.name,
    features: {
      fuel: item.fuel,
      transmission: item.transmission,
      passenger: item.passengers,
    },
    price: item.price,
    image: item.imageUrl,
  }))
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
          {isLoading ? (
            <Box className="vehicle-card-loader">
              <CircularProgress />
            </Box>
          ) : transformedData.length > 0 ? (
            transformedData.map((vehicle, index) => (
              <VehicleCard
                key={index}
                id={vehicle.id}
                features={vehicle.features}
                title={vehicle.title}
                price={vehicle.price}
                image={vehicle.image}
              />
            ))
          ) : (
            <Box className="vehicle-card-wrapper"></Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default ChooseVehiclesSection

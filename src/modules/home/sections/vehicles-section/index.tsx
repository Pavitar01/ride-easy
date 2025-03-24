'use client'

import { useState } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import VehicleCard from './card'
import { useListVehicles } from './hooks/useListVehicles'
import './styles.scss'
import { Vehicle } from './types'
import { vehicles } from './vehicles'

interface AllVehiclesButtonProps {
  isMobile: boolean
  handleShowMore: () => void
  visibleCount: number
}
const VehiclesSection = () => {
  const { listVehicles, isLoading } = useListVehicles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [visibleCount, setVisibleCount] = useState(3)

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3)
  }

  const transformedData = listVehicles.map((item: Vehicle) => ({
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
    <Box className="vehicles-section">
      <Container maxWidth="lg" className="container">
        <Box className="wrapper">
          <Box className="title-container">
            <Typography component="h1" className="vehicles-section-title">
              Deal of the day
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
              Discount vehicles
            </Typography>
          </Box>
          <AllVehiclesButton
            isMobile={!isMobile}
            handleShowMore={handleShowMore}
            visibleCount={visibleCount}
          />
        </Box>

        <Box className="vehicles">
          {isLoading ? (
            <Box className="skeleton-container">
              <CircularProgress color="inherit" />
            </Box>
          ) : (
            transformedData
              .slice(0, visibleCount)
              .map((vehicle, index) => (
                <VehicleCard
                  key={index}
                  features={vehicle.features}
                  title={vehicle.title}
                  price={vehicle.price}
                  image={vehicle.image}
                />
              ))
          )}
        </Box>
        <AllVehiclesButton
          isMobile={isMobile}
          handleShowMore={handleShowMore}
          visibleCount={visibleCount}
        />
      </Container>
    </Box>
  )
}

const AllVehiclesButton = ({
  isMobile,
  handleShowMore,
  visibleCount,
}: AllVehiclesButtonProps) => {
  return (
    visibleCount <= vehicles.length && (
      <Box
        sx={{ display: isMobile ? 'flex' : 'none' }}
        justifyContent="center"
        mt={3}
      >
        <Button
          variant="outlined"
          className="all-vehicles-button"
          onClick={handleShowMore}
          disabled={visibleCount >= vehicles.length}
        >
          <ArrowRightAltIcon color="inherit" />
          &nbsp; &nbsp;More Vehicles
        </Button>
      </Box>
    )
  )
}
export default VehiclesSection

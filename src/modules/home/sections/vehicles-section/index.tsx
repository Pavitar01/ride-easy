'use client'

import { useState, useRef, useEffect } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import VehicleCard from './card'
import { vehicles } from './vehicles'
import './styles.scss'

interface AllVehiclesButtonProps {
  isMobile: boolean
  handleShowMore: () => void
  visibleCount: number
}

const VehiclesSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [visibleCount, setVisibleCount] = useState(3)
  const lastVehicleRef = useRef<HTMLDivElement | null>(null)
  const isFirstRender = useRef(true)

  const handleShowMore = () => {
    isFirstRender.current = false
    setVisibleCount(vehicles.length)
  }

  useEffect(() => {
    if (!isFirstRender.current && lastVehicleRef.current) {
      lastVehicleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [visibleCount])

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
          {vehicles.slice(0, visibleCount).map((vehicle, index) => (
            <div key={index} ref={index === visibleCount - 1 ? lastVehicleRef : null}>
              <VehicleCard
                features={vehicle.features}
                title={vehicle.title}
                price={vehicle.price}
                image={vehicle.image}
              />
            </div>
          ))}
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
          <ArrowRightAltIcon color="inherit" className="arrow-right-icon" />
          &nbsp; &nbsp;More Vehicles
        </Button>
      </Box>
    )
  )
}
export default VehiclesSection

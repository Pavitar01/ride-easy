'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Box, Typography } from '@mui/material'
import BaseButton from '@/shared/ui/base-button'
import './styles.scss'
import { useTransition } from 'react'

interface VehicleCardProps {
  id: string
  title: string
  price: number
  image: string
  features: {
    transmission: string
    fuel: string
    passenger: number
  }
}
const VehicleCard = ({
  title,
  price,
  image,
  features,
  id,
}: VehicleCardProps) => {
  const { push } = useRouter()
  const [_, setTransition] = useTransition()

  const rentThisBike = () => {
    setTransition(() => {
      push('/vehicles/#booking-section?vehicle=' + id)
    })
  }
  return (
    <Box className="vehicle-card-wrapper">
      <Box className="vehicle-image-container">
        <Image loading="lazy" src={image} alt={`${title}-image`} height={300} width={300} />
      </Box>
      <Box className="vehicle-details">
        <Typography className="vehicle-name" component="p">
          {title}
        </Typography>
        <Typography className="vehicle-price" component="p">
          ₹{price}/day
        </Typography>
      </Box>
      <Box className="vehicle-features-container">
        <Box className="vehicle-features-heading">
          <Typography className="vehicle-transmission" component="p">
            Transmission
          </Typography>
          <Typography className="vehicle-fuel" component="p">
            Fuel
          </Typography>
          <Typography className="vehicle-passenger" component="p">
            Passengers
          </Typography>
        </Box>
        <Box className="vehicle-features-body">
          <Typography className="vehicle-transmission" component="p">
            {features.transmission}
          </Typography>
          <Typography className="vehicle-fuel" component="p">
            {features.fuel}
          </Typography>
          <Typography className="vehicle-passenger" component="p">
            {features.passenger}
          </Typography>
        </Box>
      </Box>
      <BaseButton
        sx={{ width: '100%', marginTop: '20px' }}
        onClick={rentThisBike}
      >
        Book Now
      </BaseButton>
    </Box>
  )
}

export default VehicleCard

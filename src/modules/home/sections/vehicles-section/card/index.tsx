import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { Activa } from '@/modules/home/assets'
import BaseButton from '@/shared/ui/base-button'
import './styles.scss'

interface VehicleCardProps {
  title: string
  price: number
  image: string
  features: {
    transmission: string
    fuel: string
    passenger: number
  }
}
const VehicleCard = ({ title, price, image, features }: VehicleCardProps) => {
  return (
    <Box className="vehicle-card-wrapper">
      <Box className="vehicle-image-container">
        <Image src={image} alt={`${title}-image`} height={300} width={300} />
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
      <BaseButton sx={{ width: '100%', marginTop: '20px' }}>
        Book Now
      </BaseButton>
    </Box>
  )
}

export default VehicleCard

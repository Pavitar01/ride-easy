'use client'
import AirlineStopsIcon from '@mui/icons-material/AirlineStops'
import { Box, Typography, IconButton } from '@mui/material'
import './styles.scss'

interface DirectionCardProps {
  details: {
    name: string
    coordinates: [number, number]
    rating: number
    description: string
  }
  openGoogleMaps: (lat: number, lng: number) => void
}

const DirectionCard = ({ details, openGoogleMaps }: DirectionCardProps) => {
  return (
      <Box display="flex" className="direction-card">
        <Box className="direction-card__info">
          <Typography variant="h6" className="direction-card__name">
            {details.name}
          </Typography>
          <Typography variant="body2" className="direction-card__description">
            {details.description}
          </Typography>
          <Typography variant="body2" className="direction-card__rating">
            {Array.from({ length: Math.round(details.rating) }, (_, i) => (
              <span key={i}>⭐</span>
            ))}
            &nbsp;
            {details.rating.toFixed(1)}
          </Typography>
        </Box>
        <Box
          className="direction-card__button-container"
          onClick={() =>
            openGoogleMaps(details.coordinates[0], details.coordinates[1])
          }
        >
          <IconButton className="direction-card__button">
            <AirlineStopsIcon />
          </IconButton>
          <Typography variant="body2" className="direction-card__button-text">
            Get Direction
          </Typography>
        </Box>
      </Box>
  )
}

export default DirectionCard

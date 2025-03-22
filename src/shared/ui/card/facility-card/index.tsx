import { Box, Typography } from '@mui/material'
import './styles.scss'

interface FacilityCardProps {
  icon: any
  title: string
  description: string
}
const FacilityCard = ({ icon, title, description }: FacilityCardProps) => {
  return (
    <Box className="facility-card">
      <Box className="facility-card-icon">{icon}</Box>
      <Typography
        component="p"
        className="facility-card-title"
        sx={{
          fontSize: {
            md: 'var(--global-regular-font-size)',
            xs: 'var(--global-regular-font-size-alt)',
          },
        }}
      >
        {title}
      </Typography>
      <Typography component="p" className="facility-card-description">
        {description}
      </Typography>
    </Box>
  )
}

export default FacilityCard

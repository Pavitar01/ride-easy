import { Typography, TypographyProps } from '@mui/material'
import './styles.scss'

interface UnderlineAnimationProps extends TypographyProps {
  text: string
  origin?: 'right' | 'center' | 'left'
  isSelected?: boolean
}

const UnderlineAnimation = ({
  isSelected,
  text,
  origin,
  ...props
}: UnderlineAnimationProps) => {
  return (
    <Typography
      component="p"
      className={`hover-underline-animation ${origin} ${isSelected ? 'selected' : ''}`}
      {...props}
    >
      {text}
    </Typography>
  )
}

export default UnderlineAnimation

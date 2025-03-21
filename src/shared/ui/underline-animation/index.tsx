import { Typography, TypographyProps } from '@mui/material'
import './styles.scss'

interface UnderlineAnimationProps extends TypographyProps {
  text: string
  origin?: 'right' | 'center' | 'left'
}

const UnderlineAnimation = ({
  text,
  origin,
  ...props
}: UnderlineAnimationProps) => {
  return (
    <Typography component="p" className={`hover-underline-animation ${origin}`} {...props}>
      {text}
    </Typography>
  )
}

export default UnderlineAnimation

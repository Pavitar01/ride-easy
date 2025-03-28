'use client'

import { useEffect } from 'react'
import { AccountCircle } from '@mui/icons-material'
import { Typography, TypographyProps } from '@mui/material'
import { useAppSelector } from '@/store/hooks'
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
  const user = useAppSelector((state) => state.auth.user)
  return text.includes('Login') ? (
    <Typography
      component="p"
      className={`hover-underline-animation ${origin} ${isSelected ? 'selected' : ''}`}
      {...props}
    >
      {!user.id ? text : 'Profile'}
    </Typography>
  ) : (
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

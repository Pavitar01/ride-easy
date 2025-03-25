'use client'

import { Button, ButtonProps } from '@mui/material'
import './styles.scss'

interface BaseButtonProps extends ButtonProps {
  children: React.ReactNode
}

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  variant = 'contained',
  ...props
}) => {
  return (
    <Button
      {...props}
      id="base-button"
      variant={variant}
      disableElevation
      suppressHydrationWarning
    >
      {children}
    </Button>
  )
}

export default BaseButton

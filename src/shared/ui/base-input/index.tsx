'use client'

import { JSX, forwardRef } from 'react'
import { InputBase, InputBaseProps } from '@mui/material'
import './styles.scss'

interface BaseInputProps extends Omit<InputBaseProps, 'color'> {
  className?: string
  placeHolder?: string
  endAdornment?: JSX.Element
  rows?: number
  multiline?: boolean;
  accept?: string
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, placeHolder, endAdornment, ...rest }, ref) => {
    return (
      <InputBase
        className={`${className} base-style`}
        placeholder={placeHolder}
        inputProps={{ 'aria-label': 'search' }}
        endAdornment={endAdornment}
        inputRef={ref}
        {...rest}
      />
    )
  }
)
BaseInput.displayName = 'BaseInput'
export { BaseInput }

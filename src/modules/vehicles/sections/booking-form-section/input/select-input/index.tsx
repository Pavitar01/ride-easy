'use client'

import { Controller, Control } from 'react-hook-form'
import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import './styles.scss'

interface Option {
  id: string
  label: string
}

interface SelectInputProps {
  label: string
  name: 'vehicle' | 'pickupLocation'
  options: Option[]
  errors?: Record<string, { message?: string }>
  control: Control<any>
}

const SelectInput = ({
  label,
  name,
  options,
  errors,
  control,
}: SelectInputProps) => {
  return (
    <Box className="select-input-wrapper">
      <Typography fontFamily="inherit" className="title">
        {label}
      </Typography>
      <FormControl
        sx={{
          width: { xs: '100%', md: '150px' },
          minWidth: '150px',
          mt: '8px',
        }}
        error={Boolean(errors?.[name]?.message)}
      >
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select
              {...field}
              labelId={`select-${name}-label`}
              id={`select-${name}`}
              value={field.value}
              onChange={(event: SelectChangeEvent) =>
                field.onChange(event.target.value)
              }
              sx={{ fontFamily: 'inherit' }}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select {label}
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {errors?.[name]?.message && (
          <FormHelperText className="error-text">
            {errors[name]?.message}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  )
}

export default SelectInput

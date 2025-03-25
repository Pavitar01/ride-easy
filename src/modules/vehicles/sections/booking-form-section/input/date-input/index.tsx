'use client'

import { Controller } from 'react-hook-form'
import { Control } from 'react-hook-form'
import dayjs from 'dayjs'
import { Box, FormControl, FormHelperText, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import './styles.scss'

interface DateInputProps {
  label: string
  name: string
  control: Control<any>
  errors?: Record<string, { message?: string }>
}

const DateInput = ({ label, name, control, errors }: DateInputProps) => {
  return (
    <Box className="date-input-wrapper">
      <Typography className="date-input-title" variant="h6" gutterBottom>
        {label}
      </Typography>
      <FormControl
        sx={{ width: '100%', minWidth: '150px', mt: '8px' }}
        error={Boolean(errors?.[name]?.message)}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name={name}
            control={control}
            defaultValue={dayjs()}
            render={({ field }) => (
              <DatePicker
                {...field}
                value={field.value ? dayjs(field.value) : null}
                onChange={(newValue) => field.onChange(newValue)}
                slotProps={{
                  textField: {
                    InputLabelProps: { shrink: true },
                  },
                }}
                className="custom-date-picker"
              />
            )}
          />
        </LocalizationProvider>
        {errors?.[name]?.message && (
          <FormHelperText className="error-text">
            {errors[name]?.message}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  )
}

export default DateInput

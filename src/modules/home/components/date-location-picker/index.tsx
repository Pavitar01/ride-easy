'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dayjs, { Dayjs } from 'dayjs'
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import BaseButton from '@/shared/ui/base-button'
import './styles.scss'

const DateLocationPicker = () => {
  const { push } = useRouter()
  const [location, setLocation] = useState('')
  const [pickUpDate, setPickUpDate] = useState<Dayjs | null>(null)
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null)

  const bookRide = () => {
    const params = new URLSearchParams()
    if (location) params.append('pickupLocation', location)
    if (pickUpDate) params.append('pickUpDate', pickUpDate.format('YYYY-MM-DD'))
    if (returnDate) params.append('returnDate', returnDate.format('YYYY-MM-DD'))

    push(`/vehicles/#booking-section?${params.toString()}`)
  }

  return (
    <Box className="date-location-picker">
      <Input
        title="Location"
        type="Select"
        value={location}
        onChange={(value) => setLocation(value as string)}
      />
      <Input
        title="Pick Up Date"
        type="date"
        value={pickUpDate}
        onChange={(value) => setPickUpDate(value as Dayjs | null)}
      />
      <Input
        title="Return Date"
        type="date"
        value={returnDate}
        onChange={(value) => setReturnDate(value as Dayjs | null)}
      />
      <BaseButton sx={{ height: '56px', marginTop: '32px' }} onClick={bookRide}>
        Book Now
      </BaseButton>
    </Box>
  )
}

interface InputProps {
  title: string
  type: 'date' | 'Select'
  value: string | Dayjs | null
  onChange: (value: string | Dayjs | null) => void
}

const Input = ({ title, type, value, onChange }: InputProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value)
  }

  return (
    <Box className="input-wrapper">
      <Typography fontFamily="inherit">{title}</Typography>
      <Box>
        {type === 'Select' ? (
          <FormControl sx={{ width: { xs: '100%', md: '180px' }, mt: '8px' }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value as string}
              onChange={handleChange}
              sx={{ fontFamily: 'inherit' }}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select Location
              </MenuItem>
              <MenuItem value="Dehradun">Dehradun</MenuItem>
              <MenuItem value="Mussorie">Mussorie</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              sx={{ fontFamily: 'inherit' }}
              components={['DatePicker']}
            >
              <DatePicker
                value={value as Dayjs | null}
                onChange={onChange}
                sx={{
                  width: { xs: '100%', md: '180px' },
                  mt: '8px',
                  fontFamily: 'inherit',
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        )}
      </Box>
    </Box>
  )
}

export default DateLocationPicker

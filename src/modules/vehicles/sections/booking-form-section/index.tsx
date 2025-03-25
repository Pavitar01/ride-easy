'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { usePathname, useSearchParams } from 'next/navigation'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Typography,
} from '@mui/material'
import { locations } from '@/shared/constants'
import { BaseInput } from '@/shared/ui/base-input'
import { vehicles } from '../choose-vehicles/vehicles'
import DateInput from './input/date-input'
import SelectInput from './input/select-input'
import './styles.scss'

interface IBookingForm {
  fullName: string
  email: string
  phone: number
  vehicle: string
  pickupDate: string
  returnDate: string
  pickupLocation: string
  message?: string
}

const BookingFormSection = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    setCurrentDate(new Date().toISOString().split('T')[0]) // Sets today's date once on the client
  }, [])
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<IBookingForm>()
  const onSubmit = async (data: IBookingForm) => {
    const formData = new FormData()
    formData.append('fullName', data.fullName)
    formData.append('email', data.email)
    formData.append('phone', String(data.phone))
    formData.append('vehicle', data.vehicle)
    formData.append('pickupDate', data.pickupDate)
    formData.append('returnDate', data.returnDate)
    formData.append('pickupLocation', data.pickupLocation)
    formData.append('message', data.message || '')

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Booking successful!')
      } else {
        toast.error(`Failed to book`)
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    }
  }

  useEffect(() => {
    reset({
      fullName: searchParams.get('fullName') || '',
      email: searchParams.get('email') || '',
      phone: searchParams.get('phone')
        ? Number(searchParams.get('phone'))
        : undefined,
      vehicle: searchParams.get('vehicle') || '',
      pickupDate: searchParams.get('pickupDate') || currentDate,
      returnDate: searchParams.get('returnDate') || currentDate,
      pickupLocation: searchParams.get('pickupLocation') || '',
      message: searchParams.get('message') || '',
    })
  }, [searchParams, reset, currentDate])

  useEffect(() => {
    if (window.location.hash) {
      const cleanHash = window.location.hash.split('?')[0]

      if (cleanHash.startsWith('#') && cleanHash.length > 1) {
        const element = document.querySelector(cleanHash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }, [pathname])

  return (
    <Box className="booking-form-section" id="booking-section">
      <Box className="booking-form">
        <Typography component="h1" className="booking-form-title">
          Rent now
        </Typography>
        <Typography
          component="h3"
          className="booking-form-heading"
          sx={{
            fontSize: {
              md: 'var(--global-xxl-font-size-alt)',
              lg: 'var(--global-xl-font-size)',
              xs: 'var(--global-xl-font-size-alt)',
            },
          }}
        >
          Booking form
        </Typography>
        <Typography component="p" className="booking-form-description">
          Easily book your bike or Activa in just a few steps! Fill details,
          choose vehicle, rental duration, and pickup location. 🚀🏍
        </Typography>
        <Box className="booking-form-details-wrapper">
          <Box className="user-details-wrapper">
            <FormControl error={!!errors.fullName} className="form-control">
              <Typography component="p" className="title">
                Full Name *
              </Typography>
              <BaseInput
                sx={{
                  backgroundColor:
                    'var(--global-color-secondary-dark-alt) !important;',
                }}
                className={`base-input ${
                  errors.fullName ? 'error-border' : ''
                }`}
                placeHolder="Full Name"
                {...register('fullName', { required: 'Full name is required' })}
              />
              {errors.fullName && (
                <FormHelperText className="error-text">
                  {errors.fullName.message}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl error={!!errors.email} className="form-control">
              <Typography component="p" className="title">
                Email *
              </Typography>
              <BaseInput
                sx={{
                  backgroundColor:
                    'var(--global-color-secondary-dark-alt) !important;',
                }}
                className={`base-input ${errors.email ? 'error-border' : ''}`}
                placeHolder="Email"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <FormHelperText className="error-text">
                  {errors.email.message}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl error={!!errors.phone} className="form-control">
              <Typography component="p" className="title">
                Phone Number *
              </Typography>
              <BaseInput
                sx={{
                  backgroundColor:
                    'var(--global-color-secondary-dark-alt) !important;',
                }}
                className={`base-input ${errors.phone ? 'error-border' : ''}`}
                placeHolder="Phone"
                {...register('phone', { required: 'Phone is required' })}
              />
              {errors.phone && (
                <FormHelperText className="error-text">
                  {errors.phone.message}
                </FormHelperText>
              )}
            </FormControl>
          </Box>
          <Box className="location-vehicles-details-wrapper">
            <SelectInput
              label="Vehicles *"
              name="vehicle"
              options={vehicles}
              control={control}
              errors={errors}
            />
            <DateInput
              label="Pickup Date *"
              name="pickupDate"
              errors={errors}
              control={control}
            />
            <DateInput
              label="Return Date *"
              name="returnDate"
              control={control}
              errors={errors}
            />
            <SelectInput
              label="Pickup Location *"
              name="pickupLocation"
              options={locations}
              control={control}
              errors={errors}
            />
          </Box>
          <FormControl
            error={!!errors.message}
            className="message-form-control"
          >
            <Typography component="p" className="title">
              Message
            </Typography>

            <Box
              className={`message-base-input ${errors.message ? 'error-border' : ''}`}
            >
              <BaseInput
                multiline
                className={`message-input`}
                placeHolder="Write message ..."
                rows={3}
                {...register('message', {
                  required: 'Message cannot be empty',
                })}
              />
            </Box>
            {errors.message && (
              <FormHelperText className="error-text">
                {errors.message.message}
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <Button
          className="booking-now-button"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          disableElevation
          fullWidth
        >
          Booking Now
        </Button>
      </Box>
    </Box>
  )
}

export default BookingFormSection

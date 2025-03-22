'use client'
import { Box, Button, FormControl, FormHelperText, Typography } from "@mui/material"
import { BaseInput } from "@/shared/ui/base-input"
import { useForm } from "react-hook-form"
import { Message } from "@mui/icons-material"
import "./styles.scss"


interface IBookingForm {
    fullName: string,
    email: string;
    phone: number;
    vehicle: string;
    pickupDate: string;
    returnDate: string;
    pickupLocation: string;
    message?: string
}

const BookingFormSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IBookingForm>()
    return (
        <Box className="booking-form-section">
            <Box className="booking-form">
                <Typography component='h1' className="booking-form-title">Rent now</Typography>
                <Typography component='h3' className="booking-form-heading"
                    sx={{
                        fontSize: {
                            md: 'var(--global-xxl-font-size-alt)',
                            lg: 'var(--global-xl-font-size)',
                            xs: 'var(--global-xl-font-size-alt)',
                        },
                    }}
                >Booking form
                </Typography>
                <Typography component='p' className="booking-form-description">
                Easily book your bike or Activa in just a few steps! Fill details, choose vehicle, rental duration, and pickup location. 🚀🏍
                </Typography>
                <Box className="booking-form-details-wrapper">
                    <Box className="user-details-wrapper">
                        <FormControl error={!!errors.fullName} className="form-control">
                            <Typography component="p" className="title">Full Name</Typography>
                            <BaseInput
                                sx={{
                                    backgroundColor: 'var(--global-color-secondary-dark-alt) !important;',
                                }}
                                className={`base-input ${errors.fullName ? 'error-border' : ''
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
                            <Typography component="p" className="title">Email</Typography>
                            <BaseInput
                                sx={{
                                    backgroundColor: 'var(--global-color-secondary-dark-alt) !important;',
                                }}
                                className={`base-input ${errors.email ? 'error-border' : ''
                                    }`}
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
                            <Typography component="p" className="title">Phone Number</Typography>
                            <BaseInput
                                sx={{
                                    backgroundColor: 'var(--global-color-secondary-dark-alt) !important;',
                                }}
                                className={`base-input ${errors.phone ? 'error-border' : ''
                                    }`}
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
                    <FormControl error={!!errors.message} className="message-form-control">
                        <Typography component="p" className="title">Message</Typography>

                        <Box className={`message-base-input ${errors.message ? 'error-border' : ''}`}>
                            <BaseInput
                                multiline
                                className={`message-input`}
                                placeHolder="Write message ..."
                                rows={3}
                                {...register('message', { required: 'Message cannot be empty' })}
                            />
                        </Box>
                        {errors.message && (
                            <FormHelperText className="error-text">
                                {errors.message.message}
                            </FormHelperText>
                        )}
                    </FormControl>

                </Box>

                <Box className="booking-form-details-wrapper">
                    {/* <Box className="location-vehicles-details-wrapper">
                        <FormControl error={!!errors.fullName} className="form-control">
                            <Typography component="p" className="title">Full Name</Typography>
                            <BaseInput
                                sx={{
                                    backgroundColor: 'var(--global-color-secondary-dark-alt) !important;',
                                }}
                                className={`base-input ${errors.fullName ? 'error-border' : ''
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
                            <Typography component="p" className="title">Email</Typography>
                            <BaseInput
                                sx={{
                                    backgroundColor: 'var(--global-color-secondary-dark-alt) !important;',
                                }}
                                className={`base-input ${errors.email ? 'error-border' : ''
                                    }`}
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
                            <Typography component="p" className="title">Phone Number</Typography>
                            <BaseInput
                                sx={{
                                    backgroundColor: 'var(--global-color-secondary-dark-alt) !important;',
                                }}
                                className={`base-input ${errors.phone ? 'error-border' : ''
                                    }`}
                                placeHolder="Phone"
                                {...register('phone', { required: 'Phone is required' })}
                            />
                            {errors.phone && (
                                <FormHelperText className="error-text">
                                    {errors.phone.message}
                                </FormHelperText>
                            )}
                        </FormControl>
                    </Box> */}
                </Box>
                <Button className="booking-now-button" variant="contained" disableElevation fullWidth>Booking Now</Button>
            </Box>
            
        </Box>
    )
}

export default BookingFormSection

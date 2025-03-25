import { Metadata } from 'next'
import BookingFormSection from '@/modules/vehicles/sections/booking-form-section'
import ChooseVehiclesSection from '@/modules/vehicles/sections/choose-vehicles'
import HeroSection from '@/modules/vehicles/sections/hero-section'
import WhyChooseUsSection from '@/modules/vehicles/sections/why-choose-us-section'

export const metadata: Metadata = {
  title: 'RideEasy | Vehicles',
  description: 'Bike & Scooter Rental Vehicles page',
  icons: {
    icon: '/app-logo.ico',
  },
}

const page = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <ChooseVehiclesSection/>
      <BookingFormSection />
    </>
  )
}

export default page

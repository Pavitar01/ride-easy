import { Metadata } from 'next'
import AboutUsSection from '@/modules/home/sections/about-us-section'
import CallUsSection from '@/modules/home/sections/call-us-section'
import FacilitySection from '@/modules/home/sections/facility-section'
import HeroSection from '@/modules/home/sections/hero-section'
import VehiclesSection from '@/modules/home/sections/vehicles-section'

export const metadata: Metadata = {
  title: 'RideEasy | Home',
  description: 'Bike & Scooter Rental home page',
  icons: {
    icon: '/app-logo.ico',
  },
}

const page = () => {
  return (
    <>
      <HeroSection />
      <FacilitySection />
      <AboutUsSection />
      <VehiclesSection />
      <CallUsSection />
    </>
  )
}

export default page

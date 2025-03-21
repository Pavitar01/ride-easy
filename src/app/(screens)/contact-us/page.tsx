'use client' 
import HeroSection from '@/modules/contact-us/sections/hero-sections'
import dynamic from 'next/dynamic'

const LocationSection = dynamic(() => import('@/modules/contact-us/sections/location-section'), { ssr: false })

const Page = () => {
  return (
    <>
      <HeroSection />
      <LocationSection />
    </>
  )
}

export default Page

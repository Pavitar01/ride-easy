import { Metadata } from "next"
import HeroSection from "@/modules/about-us/sections/hero-section"
import WhoWeAreSection from "@/modules/about-us/sections/who-we-are-section"

export const metadata: Metadata = {
  title: 'RideEasy | About Us',
  description: 'Bike & Scooter Rental about page',
  icons: {
    icon: "/app-logo.ico"
  },
}

const page = () => {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
    </>
  )
}

export default page

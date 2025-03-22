import { Metadata } from 'next'
import { ReactNode } from 'react'


export const metadata: Metadata = {
    title: 'RideEasy | Contact Us',
    description: 'Bike & Scooter Rental contact page',
    icons: {
        icon: "/app-logo.ico"
    },
}
const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {
                children
            }
        </>
    )
}

export default layout

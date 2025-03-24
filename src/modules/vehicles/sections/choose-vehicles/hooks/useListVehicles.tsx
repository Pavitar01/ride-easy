'use client'

import { useEffect, useState } from 'react'

export const useListVehicles = () => {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    const fetchVehicleList = async () => {
      const response = await fetch('/api/vehicles')
      const data = await response.json()
      setVehicles(data)
    }
    fetchVehicleList()
  }, [])

  return { vehicles }
}

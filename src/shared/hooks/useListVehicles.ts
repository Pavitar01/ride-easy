'use client'

import { useEffect, useState } from 'react'
import { Vehicle } from '@/types'

export const useListVehicles = () => {
  const [listVehicles, setLisVehicles] = useState<Vehicle[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVehicleList = async () => {
      try {
        const response = await fetch('/api/vehicles')
        if (!response.ok) {
          throw new Error('Failed to fetch vehicles')
        }
        const data = await response.json()
        setLisVehicles(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    }

    fetchVehicleList()
  }, [])

  return { listVehicles, isLoading, error }
}

'use client'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import DirectionCard from './card/direction-card'

const markerIcon = new L.Icon({
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

const locations: {
  name: string
  coordinates: [number, number]
  rating: number
  description: string
}[] = [
  {
    name: 'Dehradun',
    coordinates: [30.3165, 78.0322],
    rating: 4.5,
    description:
      'A beautiful city known for its picturesque landscapes and schools.',
  },
  {
    name: 'Mussoorie',
    coordinates: [30.4591, 78.0642],
    rating: 4.7,
    description:
      'A popular hill station with breathtaking views and colonial charm.',
  },
]

const openGoogleMaps = (lat: number, lng: number) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
  window.open(url, '_blank')
}

const IndiaMap = () => {
  return (
    <MapContainer
      minZoom={5}
      center={[30.3165, 78.0322]}
      zoom={10}
      maxBounds={[
        [6.746, 68.162],
        [35.675, 97.395],
      ]}
      maxBoundsViscosity={1.0}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {locations.map(({ name, coordinates, rating, description }) => (
        <Marker key={name} position={coordinates} icon={markerIcon}>
          <Popup className="direction-card">
            <DirectionCard
              openGoogleMaps={openGoogleMaps}
              details={{
                name,
                coordinates,
                rating,
                description,
              }}
            />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default IndiaMap

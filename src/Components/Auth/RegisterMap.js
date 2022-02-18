import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet'
import * as ELG from 'esri-leaflet-geocoder'
import { useEffect, useState } from 'react'

function LocationMarker({ location }) {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  useEffect(() => {
    setPosition({ lat: location.y, lng: location.x })
    map.flyTo({ lat: location.y, lng: location.x }, map.getZoom())
  }, [location, map])

  return position === null ? null : <Marker position={position}></Marker>
}

const RegisterMap = ({ text }) => {
  const [location, setLocation] = useState(undefined)
  const [textParam, setTextParam] = useState(undefined)

  useEffect(() => {
    setTextParam(text)
  }, [text])

  useEffect(() => {
    ELG.geocode({ apikey: process.env.REACT_APP_GEOCODE_API_KEY })
      .text(textParam)
      .run(function (err, results, response) {
        if (err) {
          console.log(err)
          return
        }
        setLocation(response.candidates[0].location)
      })
  }, [textParam])

  return !location ? null : (
    <MapContainer
      center={[location.y, location.x]}
      zoom={8}
      style={{ width: '100%', height: '20vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker location={location} />
    </MapContainer>
  )
}

export default RegisterMap

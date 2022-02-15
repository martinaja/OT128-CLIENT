import React, { useEffect, useMemo, useState } from 'react'
import './ContactMap.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import * as ELG from 'esri-leaflet-geocoder'

const ContactMap = () => {
  const [showInfo, setShowInfo] = useState(false)
  const [geo, setGeo] = useState({})

  const icon = new Icon({
    iconUrl: '/images/Logo Somos Mas.png',
    iconSize: [75, 40],
  })

  const eventHandlers = useMemo(
    () => ({
      click() {
        setShowInfo(true)
      },
    }),
    [],
  )

  useEffect(() => {
    if (!geo) return
    ELG.geocode({ apikey: process.env.REACT_APP_GEOCODE_API_KEY })
      .text('Las garzas 2609, Paraná ,Entre ríos')
      .run(function (err, results, response) {
        if (err) {
          console.log(err)
          return
        }
        setGeo(response.candidates[0].location)
      })
  }, [])

  return geo.y ? (
    <MapContainer
      center={[geo.y, geo.x]}
      zoom={14}
      style={{ width: '80%', height: '100vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={[geo.y, geo.x]}
        icon={icon}
        eventHandlers={eventHandlers}
      />

      {showInfo && (
        <Popup
          position={[geo.y, geo.x]}
          onClose={() => {
            setShowInfo(false)
          }}
        >
          Hola
        </Popup>
      )}
    </MapContainer>
  ) : null
}

export default ContactMap

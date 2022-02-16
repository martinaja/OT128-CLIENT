import React, { useEffect, useMemo, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import * as ELG from 'esri-leaflet-geocoder'
import { useDispatch, useSelector } from 'react-redux'
import { alertServiceError } from '../AlertService'
import { getOrganizationData } from '../../features/organization/organizationReducer'
import Spinner from '../Spinner'

const ContactMap = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.organization)

  const [showInfo, setShowInfo] = useState(false)
  const [geo, setGeo] = useState({})

  // icon that will indicate the location
  const icon = new Icon({
    iconUrl: '/images/marker somos mas.png',
    iconSize: [55, 70],
  })

  // onCLick event for the marker
  const eventHandlers = useMemo(
    () => ({
      click() {
        setShowInfo(true)
      },
    }),
    [],
  )

  // Transform the string of adress in latitud and longitud for mapcointaner
  useEffect(() => {
    if (!geo) return
    if (state.status === 'success') {
      ELG.geocode({ apikey: process.env.REACT_APP_GEOCODE_API_KEY })
        .text(state.data.address)
        .run(function (err, results, response) {
          if (err) {
            console.log(err)
            return
          }
          setGeo(response.candidates[0].location)
        })
    }
  }, [state.status])

  // if geo.y exist render MapContainer, otherwise the app will crash
  return geo.y ? (
    <MapContainer
      center={[geo.y, geo.x]}
      zoom={20}
      style={{ width: '100%', height: '80vh' }}
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
          <h2>{state.data.name}</h2>
          <p>{state.data.short_description}</p>
        </Popup>
      )}
    </MapContainer>
  ) : (
    <Spinner />
  )
}

export default ContactMap

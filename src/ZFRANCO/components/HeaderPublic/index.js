import { useState } from 'react'

import { arrayData } from './data'
import { NavBarPublic } from './NavBarPublic'
import { SideBarPublic } from './SideBarPublic'

import { useSelector } from 'react-redux'

export const HeaderPublic = () => {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = ''

  const { isAuthenticated, role } = useSelector((state) => state.auth)

  let arrayDataAdmin = []

  if (role === 'Admin')
    arrayDataAdmin = arrayData.filter((data) => {
      return data.pathName !== 'Contacto'
    })

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div id="main-header">
      <NavBarPublic
        toggle={toggle}
        pathname={pathname}
        isAuthenticated={isAuthenticated}
        role={role}
        arrayDataToShow={arrayData}
      />

      <SideBarPublic
        toggle={toggle}
        isOpen={isOpen}
        isAuthenticated={isAuthenticated}
        role={role}
        arrayDataToShow={arrayData}
      />
    </div>
  )
}

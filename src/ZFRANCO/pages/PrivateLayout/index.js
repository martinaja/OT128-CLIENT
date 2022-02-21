import React from 'react'

import { HeaderBackoffice } from '../../components/HeaderBackOffice/HeaderBackOffice'

import { Outlet } from 'react-router-dom'

export const BackOfficeLayout = () => {
  return (
    <>
      <HeaderBackoffice />
      <Outlet />
    </>
  )
}

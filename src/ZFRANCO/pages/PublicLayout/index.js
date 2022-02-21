import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderPublic } from '../../components/HeaderPublic'
import { FooterPublic } from '../../components/FooterPublic'

export const PublicLayout = () => {
  return (
    <>
      <HeaderPublic />
      <Outlet />
      <FooterPublic />
    </>
  )
}

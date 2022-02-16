import { Button } from '@mui/material'
import React from 'react'
import style from './NotFound.module.css'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className={style['container']}>
      <h1>¡Ups! No se encontrá la página</h1>

      <Button
        component={Link}
        to="/"
        endIcon={<HomeIcon />}
        variant="contained"
      >
        Ir a la home
      </Button>
    </div>
  )
}

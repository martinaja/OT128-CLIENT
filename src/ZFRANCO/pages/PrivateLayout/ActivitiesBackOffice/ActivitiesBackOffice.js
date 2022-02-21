import React from 'react'

import {
  Avatar,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

import { ActivitiesSearch } from './ActivitiesSearch'

import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

const ActivitieRow = ({ activitie }) => {
  const createdAt = activitie['created_at'].slice(0, 10)
  return (
    <TableRow
      key={activitie.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {activitie.name}
      </TableCell>
      <TableCell>
        <Avatar
          src={activitie.image}
          alt={activitie.name}
          variant="square"
          sx={{ width: 120, height: 120, margin: 'auto' }}
        />
      </TableCell>
      <TableCell align="right">
        <Typography variant="body">{createdAt}</Typography>
      </TableCell>
      <TableCell align="right">
        <Button sx={{ m: 1 }} variant="contained" color="success">
          Editar
        </Button>
      </TableCell>
      <TableCell align="right">
        <Button variant="contained" color="success">
          Eliminar
        </Button>
      </TableCell>
    </TableRow>
  )
}

export const ActivitiesBackOffice = () => {
  const response = useSelector((state) => state.activities)

  return (
    <Container>
      <ActivitiesSearch />
      <TableContainer
        component={Paper}
        sx={{ boxShadow: 5, marginTop: 5, marginBottom: 5 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="right">CreatedAt</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                <Link
                  to="/backoffice/actividades/crear"
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="contained" color="success">
                    Crear Actividad
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {response.activities.map((activitie) => (
              <ActivitieRow key={activitie.id} activitie={activitie} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

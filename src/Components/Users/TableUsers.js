import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Button } from '@mui/material'
import { alertServiceConfirm } from '../AlertService'
import { Link } from 'react-router-dom'

const TableUsers = () => {
  // function call to delete user
  const deleteUser = (params) => {
    console.log('action->', params.field, 'id->', params.id)
  }

  // set table
  const columns = [
    {
      field: 'edit',
      headerName: 'Editar',
      sortable: false,

      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation()
          console.log('action->', params.field, 'id->', params.id)
        }

        return (
          <Button>
            <EditIcon color="primary" onClick={onClick} />
          </Button>
        )
      },
    },
    {
      field: 'delete',
      headerName: 'Borrar',
      sortable: false,

      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation()
          alertServiceConfirm(
            'Desea eliminar este usuario?',
            'eliminar',
            () => {
              deleteUser(params)
            },
          )
        }

        return (
          <Button>
            <DeleteIcon sx={{ color: 'rgb(255, 0, 0)' }} onClick={onClick} />
          </Button>
        )
      },
    },
    { field: 'name', headerName: 'Nombre', name: 'Full Name', width: 170 },
    {
      field: 'email',
      headerName: 'Correo Electrónico',
      name: 'Email de contacto',
      width: 180,
    },
  ]

  // mock of users
  const mock = [
    { id: 1, name: 'Snow Jon', email: 'Jon@gmail.com' },
    { id: 2, name: 'Lannister Cersei', email: 'Cersei@gmail.com' },
    { id: 3, name: 'Lannister Jaime', email: 'Jaime@gmail.com' },
    { id: 4, name: 'Stark Arya', email: 'Arya@gmail.com' },
    { id: 5, name: 'Targaryen Daenerys', email: 'Daenerys@gmail.com' },
    { id: 6, name: 'Melisandre Jorge', email: 'Jorge@gmail.com' },
    { id: 7, name: 'Clifford Ferrara', email: 'Ferrara@gmail.com' },
    { id: 8, name: 'Frances Rossini', email: 'Rossini@gmail.com' },
    { id: 9, name: 'Roxie Harvey', email: 'Harvey@gmail.com' },
    { id: 10, name: 'Lautaro Zapata', email: 'Lautarogzapata@gmail.com' },
  ]

  return (
    <Box
      width={{ sx: '100%', md: '600px' }}
      style={{ height: 600, backgroundColor: 'white', margin: 'auto' }}
    >
      <Link to="/backoffice/users/create" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" sx={{ m: 2 }}>
          {' '}
          Crear nuevo usuario
        </Button>
      </Link>
      <DataGrid
        rows={mock}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Box>
  )
}

export default TableUsers

import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'

const TableUsers = () => {
  const columns = [
    { field: 'name', name: 'Full Name', width: 140 },
    { field: 'email', name: 'Email de contacto', width: 150 },
    {
      field: 'action',
      headerName: 'Editar',
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation() // don't select this row after clicking
          console.log(params)
        }

        return <Button onClick={onClick}>Click</Button>
      },
    },
    {
      field: 'delete',
      headerName: 'Borrar',
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation() // don't select this row after clicking
          console.log(params)
        }

        return <Button onClick={onClick}>Borrar</Button>
      },
    },
  ]

  const rows = [
    { id: 1, name: 'Snow Jon', email: 'Jon@gmail.com' },
    { id: 2, name: 'Lannister Cersei', email: 'Cersei@gmail.com' },
    { id: 3, name: 'Lannister Jaime', email: 'Jaime@gmail.com' },
    { id: 4, name: 'Stark Arya', email: 'Arya@gmail.com' },
    { id: 5, name: 'Targaryen Daenerys', email: 'Daenerys@gmail.com' },
    { id: 6, name: 'Melisandre Jorge', email: 'Jorge@gmail.com' },
    { id: 7, name: 'Clifford Ferrara', email: 'Ferrara@gmail.com' },
    { id: 8, name: 'Frances Rossini', email: 'Rossini@gmail.com' },
    { id: 9, name: 'Roxie Harvey', email: 'Harvey@gmail.com' },
  ]

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

export default TableUsers

import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { alertServiceConfirm } from '../../AlertService'

// mock of news
const mock = [
  {
    id: 1,
    name: 'Titulo de la noticia',
    image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    createdAt: '2022-01-01',
  },
  {
    id: 2,
    name: 'Titulo de la noticia',
    image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    createdAt: '2022-01-01',
  },
  {
    id: 3,
    name: 'Titulo de la noticia',
    image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    createdAt: '2022-01-01',
  },
  {
    id: 4,
    name: 'Titulo de la noticia',
    image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    createdAt: '2022-01-01',
  },
  {
    id: 5,
    name: 'Titulo de la noticia',
    image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    createdAt: '2022-01-01',
  },
  {
    id: 6,
    name: 'Titulo de la noticia',
    image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    createdAt: '2022-01-01',
  },
  {
    id: 7,
    name: 'Titulo de la noticia',
    image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    createdAt: '2022-01-01',
  },
  {
    id: 8,
    name: 'Titulo de la noticia',
    image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    createdAt: '2022-01-01',
  },
  {
    id: 9,
    name: 'Titulo de la noticia',
    image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    createdAt: '2022-01-01',
  },
  {
    id: 10,
    name: 'Titulo de la noticia',
    image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    createdAt: '2022-01-01',
  },
  {
    id: 11,
    name: 'Titulo de la noticia',
    image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    createdAt: '2022-01-01',
  },
]

const deleteNews = (params) => {
  console.log(params.field, params.id)
}

// set table
const columns = [
  {
    field: 'edit',
    headerName: 'Editar',
    sortable: false,
    width: 70,

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
    width: 70,

    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation()
        alertServiceConfirm('¿Desea eliminar esta noticia?', 'Eliminar', () => {
          deleteNews(params)
        })
      }

      return (
        <Button>
          <DeleteIcon sx={{ color: 'rgb(255, 0, 0)' }} onClick={onClick} />
        </Button>
      )
    },
  },
  { field: 'name', headerName: 'Título', name: 'name', width: 270 },
  {
    field: 'image',
    headerName: 'Imagen',
    name: 'image',
    width: 150,
    renderCell: (params) => (
      <img
        alt=""
        style={{ maxHeight: '100px', maxWidth: '150px', margin: 'auto' }}
        src={params.row.image}
      />
    ),
  },
  {
    field: 'createdAt',
    headerName: 'Fecha',
    name: 'createdAt',
    width: 270,
  },
]

export default function NewsTable() {
  return (
    <Box
      width={{ sx: '100%', md: '850px' }}
      style={{ backgroundColor: 'white', margin: 'auto' }}
    >
      <Button
        component={Link}
        to="/backoffice/news/create"
        variant="outlined"
        sx={{ m: 2 }}
      >
        Crear noticia
      </Button>

      <DataGrid
        rows={mock}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        style={{ height: '800px' }}
        getRowHeight={({ id, densityFactor }) => {
          if (id % 1 === 0) {
            return 100 * densityFactor
          }
          return null
        }}
      />
    </Box>
  )
}

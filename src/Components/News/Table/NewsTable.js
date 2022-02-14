import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { alertServiceConfirm } from '../../AlertService'
import { useDispatch, useSelector } from 'react-redux'
import SearchNewsBackoffice from '../SearchNews/SearchNewsBackoffice'
import { fetchDeleteNews } from '../../../features/news/newsReducer'
import Spinner from '../../Spinner'
export default function NewsTable() {
  const newsState = useSelector((state) => state.news)
  const dispatch = useDispatch()

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
          <Button component={Link} to={`/backoffice/news/create/${params.id}`}>
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
          alertServiceConfirm(
            '¿Desea eliminar esta noticia?',
            'Eliminar',
            () => {
              dispatch(fetchDeleteNews(params.id))
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
      field: 'created_at',
      headerName: 'Fecha',
      name: 'created_at',
      width: 270,
      renderCell: (params) => params.row.created_at.substring(0, 10),
    },
  ]

  return (
    <Box
      width={{ sx: '100%', md: '900px' }}
      sx={{ m: '25px auto', bg: 'white', p: 2 }}
    >
      <Button
        component={Link}
        to="/backoffice/news/create"
        variant="outlined"
        sx={{ m: 2 }}
      >
        Crear noticia
      </Button>
      <SearchNewsBackoffice />
      {newsState.loader ? (
        <Spinner />
      ) : (
        <DataGrid
          rows={newsState.news}
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
      )}
    </Box>
  )
}

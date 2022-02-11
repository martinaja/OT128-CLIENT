import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Button } from '@mui/material'
import { alertServiceConfirm, alertServiceError } from '../AlertService'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../features/categories/categoriesReducer'

const CategoriesList = () => {
  // function call to delete category
  const deleteCategory = (params) => {
    console.log('action->', params.field, 'id->', params.id)
  }

  // Retrieve data from api
  const dispatch = useDispatch()
  const state = useSelector((state) => state.categories)

  useEffect(() => {
    if (state.status === 'idle') {
      dispatch(getCategory())
    }

    if (state.status === 'error') {
      alertServiceError(
        state.errorMsg,
        'Se produjo un error al intentar obtener datos de categorías',
      )
    }
  }, [state.status, dispatch])

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
          <Button
            component={Link}
            to={`/backoffice/categories/create/${params.id}`}
            endIcon={<EditIcon />}
          />
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
            'Desea eliminar esta categoría?',
            'eliminar',
            () => {
              deleteCategory(params)
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
      width: 270,
      field: 'created_at',
      headerName: 'Fecha creación',
      type: 'date',
      valueFormatter: (params) => {
        const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }
        const d = new Date(params.value)
        return d.toLocaleDateString('es-AR', options)
      },
    },
  ]

  // mock of categories
  // const mock = [
  //   { id: 1, name: 'Snow Jon', created_at: '2022-01-29T11:55:20.000000Z' },
  //   {
  //     id: 2,
  //     name: 'Lannister Cersei',
  //     created_at: '2022-01-27T11:55:20.000000Z',
  //   },
  //   {
  //     id: 3,
  //     name: 'Lannister Jaime',
  //     created_at: '2020-01-27T11:55:20.000000Z',
  //   },
  //   { id: 4, name: 'Stark Arya', created_at: '2022-01-30T11:55:20.000000Z' },
  //   {
  //     id: 5,
  //     name: 'Targaryen Daenerys',
  //     created_at: '2021-07-16T11:55:20.000000Z',
  //   },
  //   {
  //     id: 6,
  //     name: 'Melisandre Jorge',
  //     created_at: '2022-01-27T11:55:20.000000Z',
  //   },
  //   {
  //     id: 7,
  //     name: 'Clifford Ferrara',
  //     created_at: '2022-01-27T11:55:20.000000Z',
  //   },
  //   {
  //     id: 8,
  //     name: 'Frances Rossini',
  //     created_at: '2022-01-27T11:55:20.000000Z',
  //   },
  //   { id: 9, name: 'Roxie Harvey', created_at: '2022-01-27T11:55:20.000000Z' },
  //   {
  //     id: 10,
  //     name: 'Lautaro Zapata',
  //     created_at: '2022-01-27T11:55:20.000000Z',
  //   },
  // ]

  return (
    <Box
      width={{ sx: '100%', md: '600px' }}
      style={{ backgroundColor: 'white', margin: 'auto' }}
    >
      <Link
        to="/backoffice/categories/create"
        style={{ textDecoration: 'none' }}
      >
        <Button variant="outlined" sx={{ m: 2 }}>
          {' '}
          Crear nueva Categoía
        </Button>
      </Link>
      <DataGrid
        rows={state.allCategories}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        style={{ height: 600 }}
      />
    </Box>
  )
}

export default CategoriesList

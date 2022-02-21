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
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getActivities, setLoading } from '../../features/activitiesReducer'
import { deleteActivity } from '../../Services/apiServices/activitiesApiService'
import { alertServiceConfirm } from '../AlertService'
import { ActivitiesSearch } from './ActivitiesSearch'

const ActivitieRow = ({ activitie }) => {
  const { id, name, image } = activitie
  const history = useHistory()
  const createdAt = activitie['created_at'].slice(0, 10)
  const dispatch = useDispatch()

  const removeActivitie = () => {
    alertServiceConfirm(
      '¿Está seguro de eliminar este miembro?',
      'Aceptar',
      () => {
        deleteActivity(id)
        setTimeout(() => {
          dispatch(setLoading(true))
          dispatch(getActivities())
        }, 1000)
      },
    )
  }

  return (
    <TableRow
      key={name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell>
        <Avatar
          src={image}
          alt={name}
          variant="square"
          sx={{ width: 120, height: 120, margin: 'auto' }}
        />
      </TableCell>
      <TableCell align="right">
        <Typography variant="body">{createdAt}</Typography>
      </TableCell>
      <TableCell align="right">
        <Button
          sx={{ m: 1 }}
          variant="contained"
          color="success"
          onClick={() => history.push(`/backoffice/activities/create/${id}`)}
        >
          Editar
        </Button>
      </TableCell>
      <TableCell align="right">
        <Button variant="contained" color="success" onClick={removeActivitie}>
          Eliminar
        </Button>
      </TableCell>
    </TableRow>
  )
}

const ActivitiesScreen = () => {
  const dispatch = useDispatch()
  const response = useSelector((state) => state.activities)
  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(getActivities())
  }, [dispatch])

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
                  to="/backoffice/activities/create"
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

export default ActivitiesScreen

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
import { Link } from 'react-router-dom'
import Sidebar from '../BackOffice/BackOfficeSidebar'

const mock = [
  {
    id: 1,
    name: 'Actividad 1',
    image: 'https://picsum.photos/200/200',
    createdAt: '2020-01-01',
  },
  {
    id: 2,
    name: 'Actividad 2',
    image: 'https://picsum.photos/200/200',
    createdAt: '2020-01-01',
  },
  {
    id: 3,
    name: 'Actividad 3',
    image: 'https://picsum.photos/200/200',
    createdAt: '2020-01-01',
  },
]

const ActivitieRow = ({ activitie }) => {
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
        <Typography variant="body">{activitie.createdAt}</Typography>
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

const ActivitiesScreen = () => {
  return (
    <Container>
      <Sidebar />
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
            {mock.map((activitie) => (
              <ActivitieRow key={activitie.id} activitie={activitie} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ActivitiesScreen

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
} from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMember } from '../../features/members/membersReducer'
import { deleteMembers } from '../../Services/apiServices/membersApiService'
import { alertServiceConfirm, alertServiceError } from '../AlertService'
import Sidebar from '../BackOffice/BackOfficeSidebar'
import { MemberSearch } from './MemberSearch'

const MemberRow = ({ member }) => {
  const { id, name, image } = member
  const removeMember = () => {
    alertServiceConfirm(
      '¿Está seguro de eliminar este miembro?',
      'Aceptar',
      () => {
        deleteMembers(id)
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      },
    )
  }

  return (
    <TableRow
      key={member.name}
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
        <Button sx={{ m: 1 }} variant="contained" color="success">
          Editar
        </Button>
      </TableCell>
      <TableCell align="right">
        <Button variant="contained" color="success" onClick={removeMember}>
          Eliminar
        </Button>
      </TableCell>
    </TableRow>
  )
}

const MembersScreen = () => {
  const dispatch = useDispatch()

  const { status, members, errMsg } = useSelector((state) => state.members)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMember())
    }

    if (status === 'error') {
      alertServiceError(errMsg, 'No se pudo editar la información')
    }
  }, [dispatch, status, errMsg])

  return (
    <Container>
      <Sidebar />
      <MemberSearch />
      <TableContainer
        component={Paper}
        sx={{ boxShadow: 5, marginTop: 5, marginBottom: 5 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Photo</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                <Link
                  to="/backoffice/members/create"
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="contained" color="success">
                    Crear Miembro
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <MemberRow key={member.id} member={member} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default MembersScreen

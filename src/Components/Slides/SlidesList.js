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
  import { Link } from 'react-router-dom'
  
  const mock = [
    {
      id: 1,
      title: "Titulo 1",
      image: 'https://picsum.photos/200/200',
      order: 1
    },
    {
      id: 2,
      title: 'Titulo 2',
      image: 'https://picsum.photos/200/200',
      order: 2
    },
    {
      id: 3,
      title: 'Titiulo 3',
      image: 'https://picsum.photos/200/200',
      order: 3
    },
  ]
  
  const Slideslist = ({ slide }) => {
    return (
      <TableRow
        key={slide.title}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {slide.title}
        </TableCell>
        <TableCell>
          <Avatar
            src={slide.image}
            alt={slide.order}
            variant="square"
            sx={{ width: 120, height: 120, margin: 'auto' }}
          />
          
        </TableCell>
        <TableCell  align="center">
          {slide.order}
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
  
  const SlidesScreen = () => {
    return (
      <Container>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: 5, marginTop: 5, marginBottom: 5 }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell  align="center">Order</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">
                  <Link
                    to="/backoffice/slides/create"
                    style={{ textDecoration: 'none' }}
                  >
                    <Button variant="contained" color="success">
                      Crear slide
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mock.map((slide) => (
                <Slideslist key={slide.id} slide={slide} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    )
  }
  
  export default SlidesScreen
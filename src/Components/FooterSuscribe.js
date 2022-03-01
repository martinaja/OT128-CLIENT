import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Typography,
  TextField,
} from '@mui/material'
import { useState } from 'react'

export const FooterSuscribe = () => {
  const isUserSubscribe = localStorage.getItem('isUserSubscribe')

  return <>{!isUserSubscribe && <SubscribeForm />}</>
}

const SubscribeForm = () => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputError, setInputError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputEmail)) {
      setInputError('* Direccion de email incorrecta')
      return console.log('error') // Later add alert message for user input error
    }

    localStorage.setItem('isUserSubscribe', true)

    return console.log('succes') // later add succes pop-up
  }

  return (
    <Container>
      {/* <div className="subscribe__container">
        
        <FormControl onSubmit={handleSubmit}>
          <FormLabel>
            <Typography>Correo electrónico</Typography>
            <Input
              color="warning"
              type="email"
              name="subscribeEmail"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </FormLabel>
          <small>{inputError}</small>
          <Button type="submit" value="Subscribe" width="18px" color="inherit">
            Suscribirme
          </Button>
        </FormControl>
      </div> */}
      <FormControl onSubmit={handleSubmit}>
        <Typography>Recibir las ultimas novedades</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          id="email"
          label="Correo electrónico"
          name="email"
          error={inputError}
        />
        <Button type="submit" value="Subscribe" width="18px" color="inherit">
          Suscribirme
        </Button>
      </FormControl>
    </Container>
  )
}

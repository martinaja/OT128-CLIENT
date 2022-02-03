import { InputLabel } from '@material-ui/core'
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { CardFooter } from 'reactstrap'

export const FooterSuscribe = () => {
  const isUserSubscribe = localStorage.getItem('isUserSubscribe')

  return <footer>{!isUserSubscribe && <SubscribeForm />}</footer>
}

const SubscribeForm = () => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputError, setInputError] = useState('')

  const handleSubmit = (e) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputEmail)) {
      setInputError('* direccion de email incorrecta')
      return null // Later add alert message for user input error
    }

    e.preventDefault()

    localStorage.setItem('isUserSubscribe', true)

    return console.log('succes') // later add succes pop-up
  }

  return (
    <CardFooter>
      <Container>
        <Typography>Informate</Typography>
        <FormControl onSubmit={handleSubmit}>
          <FormLabel>
            <Typography>e-mail</Typography>
            <Input
              type="email"
              name="subscribeEmail"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </FormLabel>
          <small>{inputError}</small>
          <Button type="submit" value="Subscribe" width="12px" color="inherit">
            Suscribe
          </Button>
        </FormControl>
      </Container>
    </CardFooter>
  )
}

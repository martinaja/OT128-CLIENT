import {
  Button,
  Container,
  FormControl,
  Typography,
  TextField,
} from '@mui/material'
import { useState } from 'react'

import styles from './FooterSuscribe.module.css'

export const FooterSuscribe = ({ setUserSubscribe }) => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputError, setInputError] = useState('')

  const handleSubmit = () => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputEmail)) {
      return setInputError('* Direccion de email incorrecta')
    }

    setInputError('')
    localStorage.setItem('isUserSubscribe', true)
    setUserSubscribe(true)
  }

  return (
    <Container className={styles.formContainer}>
      <FormControl className={styles.formControl}>
        <Typography className={styles.formTitle}>
          Recibir las ultimas novedades
        </Typography>
        <TextField
          id="email-suscribe"
          label="Correo electrónico"
          variant="filled"
          onChange={(e) => setInputEmail(e.target.value)}
          helperText={<small className={styles.errorText}>{inputError}</small>}
        />
        <Button
          type="submit"
          color="inherit"
          className={styles.formButton}
          onClick={handleSubmit}
        >
          Suscribirme
        </Button>
      </FormControl>
    </Container>
  )
}

import React from 'react'

import {
  ListItem,
  ListItemText,
  List,
  Avatar,
  ListItemAvatar,
  Divider,
  Typography,
} from '@mui/material'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import EmailIcon from '@mui/icons-material/Email'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'

import { useSelector } from 'react-redux'

export const ContactDetails = () => {
  const state = useSelector((state) => state.organization)

  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Info de contacto.
      </Typography>
      <List
        sx={{
          maxWidth: 360,
          bgcolor: 'background.paper',
          textAlign: 'center',
          boxShadow: 1,
          mx: 'auto',
          mt: 2,
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PermContactCalendarIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Nombre" secondary={state.data.name} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Dirección" secondary={state.data.address} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ContactPhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Telefono" secondary={state.data.phone} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PhoneIphoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Celular" secondary={state.data.cellphone} />
        </ListItem>
      </List>
    </>
  )
}

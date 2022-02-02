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
import React from 'react'

const ContactDetails = ({ data }) => {
  const { name, phone, email, cellphone } = data
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
          <ListItemText primary="Nombre" secondary={name} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Email" secondary={email} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ContactPhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Telefono" secondary={phone} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PhoneIphoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Celular" secondary={cellphone} />
        </ListItem>
      </List>
    </>
  )
}

export default ContactDetails

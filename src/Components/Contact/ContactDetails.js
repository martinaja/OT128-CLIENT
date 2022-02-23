import {
  ListItem,
  ListItemText,
  List,
  Avatar,
  ListItemAvatar,
  Divider,
  Typography,
  Grid,
  Box,
} from '@mui/material'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import EmailIcon from '@mui/icons-material/Email'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import React from 'react'
import { useSelector } from 'react-redux'

const ContactDetails = () => {
  const state = useSelector((state) => state.organization)

  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h2" component="div">
        Info
      </Typography>

      <Grid container spacing={0} sx={{ mb: 3 }}>
        <Grid item xs={0} md={8}>
          <Box
            display={{ xs: 'none', md: 'block' }}
            sx={{ boxShadow: 3 }}
            height={'100%'}
          >
            <img width="100%" src="/images/datos contacto.png" />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <List
            sx={{
              bgcolor: 'background.paper',
              textAlign: 'center',
              boxShadow: 3,
              display: 'grid',
              height: '100%',
              mb: 1,
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
              <ListItemText
                primary="Dirección"
                secondary={state.data.address}
              />
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
              <ListItemText
                primary="Celular"
                secondary={state.data.cellphone}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  )
}

export default ContactDetails

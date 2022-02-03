import React from 'react'
import { Box, Paper } from '@material-ui/core'
import Countdown, { zeroPad } from 'react-countdown'

export default function Timer({ dateFromApi }) {
  console.log('dateFromApi', dateFromApi)
  const date = new Date(dateFromApi) /*Date from API*/
  const dateToUTM = date.toUTCString()

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div style={{ textAlign: 'center' }}>
      <h2>La campaña comienza en...</h2>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4em',
          textAlign: 'center',
          opacity: '0.9',
        }}
      >
        <Paper
          elevation={5}
          style={{
            border: '.1px solid black',
            padding: '1.3em',
            minWidth: '3em',
          }}
        >
          <div style={{ fontSize: '4em' }}>{zeroPad(days)}</div>
          <div>
            <small>días</small>
          </div>
        </Paper>
        <Paper
          elevation={3}
          style={{
            border: '.1px solid black',
            padding: '1.3em',
            minWidth: '3em',
          }}
        >
          <div style={{ fontSize: '4em' }}>{zeroPad(hours)}</div>
          <small>hs</small>
        </Paper>
        <Paper
          elevation={3}
          style={{
            border: '.1px solid black',
            padding: '1.3em',
            minWidth: '3em',
          }}
        >
          <div style={{ fontSize: '4em' }}>{zeroPad(minutes)}</div>
          <small>min</small>
        </Paper>
        <Paper
          elevation={3}
          style={{
            border: '.1px solid black',
            padding: '1.3em',
            minWidth: '3em',
          }}
        >
          <div style={{ fontSize: '4em' }}>{zeroPad(seconds)}</div>
          <small>seg</small>
        </Paper>
      </Box>
    </div>
  )
  return <Countdown date={dateToUTM + '-0300'} renderer={renderer} />
}

import React from 'react'
import { Box, Paper } from '@material-ui/core'
import Countdown, { zeroPad } from 'react-countdown'
import './Timer.css'

export default function Timer({ date }) {
  const d = new Date(date)
  const dateToUTM = d.toUTCString()

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="timer-container">
      <p className="timer-header">Comienza en...</p>
      <Box className="timer-box">
        <Paper elevation={5} className="timer-block-container">
          <div className="timer-data">{zeroPad(days)}</div>
          <div>
            <small>días</small>
          </div>
        </Paper>
        <Paper elevation={3} className="timer-block-container">
          <div className="timer-data">{zeroPad(hours)}</div>
          <small>hs</small>
        </Paper>
        <Paper elevation={3} className="timer-block-container">
          <div className="timer-data">{zeroPad(minutes)}</div>
          <small>min</small>
        </Paper>
        <Paper elevation={3} className="timer-block-container">
          <div className="timer-data">{zeroPad(seconds)}</div>
          <small>seg</small>
        </Paper>
      </Box>
    </div>
  )
  return <Countdown date={dateToUTM + '-0300'} renderer={renderer} />
}

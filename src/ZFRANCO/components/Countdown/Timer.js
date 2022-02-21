import React from 'react'

import { Box, Paper } from '@material-ui/core'
import Countdown, { zeroPad } from 'react-countdown'

import styles from './Timer.module.css'

export const Timer = ({ date }) => {
  const d = new Date(date)
  const dateToUTM = d.toUTCString()

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className={styles.timer__container}>
      <p className={styles.timer__header}>Comienza en...</p>
      <Box className={styles.timer__box}>
        <Paper elevation={5} className={styles.timer__block__container}>
          <div className={styles.timer__data}>{zeroPad(days)}</div>
          <div>
            <small>días</small>
          </div>
        </Paper>
        <Paper elevation={3} className={styles.timer__block__container}>
          <div className={styles.timer__data}>{zeroPad(hours)}</div>
          <small>hs</small>
        </Paper>
        <Paper elevation={3} className={styles.timer__block__container}>
          <div className={styles.timer__data}>{zeroPad(minutes)}</div>
          <small>min</small>
        </Paper>
        <Paper elevation={3} className={styles.timer__block__container}>
          <div className={styles.timer__data}>{zeroPad(seconds)}</div>
          <small>seg</small>
        </Paper>
      </Box>
    </div>
  )
  return <Countdown date={dateToUTM + '-0300'} renderer={renderer} />
}

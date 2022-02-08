import React from 'react'
import { LoadingButton } from '@mui/lab'
import SendIcon from '@mui/icons-material/Send'

export default function ButtonLoader({ label, loading }) {
  return (
    <LoadingButton
      type="submit"
      endIcon={<SendIcon />}
      loading={loading}
      loadingPosition="end"
      variant="contained"
      fullWidth
    >
      {label}
    </LoadingButton>
  )
}

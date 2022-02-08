import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

export const LinearProgressFeedback = ({ isActive = false }) => {
  return (
    <>
      {isActive && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
    </>
  )
}

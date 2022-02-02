import { Skeleton, Stack, Typography } from '@mui/material'
import React from 'react'

export const SkeletonArticle = () => {
  return (
    <>
      <Stack padding="1%">
        <Typography variant="h1">
          <Skeleton />
        </Typography>
        <Typography variant="h2">
          <Skeleton />
        </Typography>
        <Skeleton variant="body" height={700} />
      </Stack>
    </>
  )
}

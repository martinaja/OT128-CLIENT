import React from 'react'
import { makeStyles, Divider, Box } from '@material-ui/core'
import Pagination from '@mui/material/Pagination'
import { ActivitiesCard } from './ActivitiesList'
import { Grid } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  paginator: {
    justifyContent: 'center',
  }
}))

export const AllProjects = ({ projectsList }, { numItems = 6 }) => {
  const classes = useStyles()
  const itemsPerPage = numItems
  const [page, setPage] = React.useState(1)
  const [noOfPages] = React.useState(
    Math.ceil(projectsList.length / itemsPerPage),
  )

  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <Box sx={{
      maxWidth: '1400px',
      justifyContent: 'center',
      mx: 'auto',
    }}>
      <Grid container>
        {projectsList
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((projectItem, index) => {
            return (
              <Grid item xs={8} md={6} lg={4} key={index}>
                <ActivitiesCard
                  name={projectItem.name}
                  image={projectItem.image}
                  description={projectItem.description}
                  isMin={true}
                  key={index}
                />
              </Grid>
            )
          })}      
      </Grid>
      <Divider />
      <Box component="span" sx={{ mt:'20px'}}>
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          classes={{ ul: classes.paginator }}
        />
      </Box>
    </Box>
  )
}


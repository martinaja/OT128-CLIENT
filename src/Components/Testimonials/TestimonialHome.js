import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import CustomCard from './../Card/CustomCard'
import { useDispatch, useSelector } from 'react-redux'
import { getTestimonial } from '../../features/testimonial/testimonialReducer'

const TestimonialHome = () => {
  const dispatch = useDispatch()

  const testimonialState = useSelector((state) => state.testimonial)

  useEffect(() => {
    dispatch(getTestimonial())
  }, [])

  return (
    <>
      <h1>Testimonios</h1>
      <Grid container rows={{ xs: 1, sm: 8, md: 6 }} spacing={{ xs: 2, md: 3 }}>
        {testimonialState.status === 'fulfilled' ? (
          testimonialState.data.map((element) => {
            return (
              <Grid item key={element.id}>
                <CustomCard
                  image={element.image}
                  name={element.name}
                  description={element.description}
                />
              </Grid>
            )
          })
        ) : (
          <p>No hay testimonios</p>
        )}
      </Grid>
    </>
  )
}

export default TestimonialHome

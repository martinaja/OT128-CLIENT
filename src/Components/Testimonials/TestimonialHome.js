import { Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../CardListStyles.css'
import { getTestimonial } from '../../features/testimonial/testimonialReducer'
import { TestimonialGrid } from './TestimonialGrid'

const TestimonialHome = () => {
  const testimonialState = useSelector(
    (state) => state.testimonial.testimonials,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTestimonial())
  }, [dispatch])

  return (
    <>
      <Typography variant="h3" textAlign="center" mt={5}>
        Testimonios
      </Typography>
      <Typography variant="body1" textAlign="center" p={2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
        blanditiis enim ipsa nemo asperiores illo, perspiciatis ratione rem non
        corporis itaque, ea reiciendis dolorem doloribus expedita vero
        necessitatibus quasi magni?
      </Typography>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 550px))',
          justifyContent: 'center',
        }}
      >
        {testimonialState?.length > 0 ? (
          testimonialState.map((testimony, index) => {
            return (
              <Container>
                <TestimonialGrid
                  id={testimony.id}
                  link="testimonios"
                  name={testimony.name}
                  image={testimony.image}
                  description={testimony.description}
                  key={index}
                />
              </Container>
            )
          })
        ) : (
          <p>No se encontraron testimonios</p>
        )}
      </div>
    </>
  )
}

export default TestimonialHome

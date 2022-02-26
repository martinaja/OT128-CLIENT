import { Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../CardListStyles.css'
import { getTestimonial } from '../../features/testimonial/testimonialReducer'
import { TestimonialGrid } from './TestimonialGrid'
import { SkeletonArticle } from '../Skeleton/SkeletonArticle'

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
      <img src="/images/testimonios.jpeg" alt="testomonios" width="100%" />
      <Typography variant="h3" textAlign="center" mt={5}>
        Testimonios
      </Typography>
      {testimonialState?.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 550px))',
            justifyContent: 'center',
            marginTop: '3rem',
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
            <p style={{ textAlign: 'center' }}>No se encontraron testimonios</p>
          )}
        </div>
      ) : (
        <SkeletonArticle />
      )}
    </>
  )
}

export default TestimonialHome

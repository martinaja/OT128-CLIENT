import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../CardListStyles.css'
import { useBreakPoints } from '../../utils/hooks/useBreakPoints'
import { getTestimonial } from '../../features/testimonial/testimonialReducer'
import CustomCard from '../Card/CustomCard'

const TestimonialHome = () => {
  const testimonialState = useSelector(
    (state) => state.testimonial.testimonials,
  )
  const dispatch = useDispatch()

  const isMatchMin = useBreakPoints('(max-width: 694px)')
  const isMatchRest = useBreakPoints('(min-width: 695px)')

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
      {isMatchMin && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {testimonialState?.length > 0 ? (
            testimonialState.map((testimony, index) => {
              return (
                <CustomCard
                  id={testimony.id}
                  link="testimonios"
                  name={testimony.name}
                  image={testimony.image}
                  description={testimony.description}
                  key={index}
                />
              )
            })
          ) : (
            <p>No se encontraron testimonios</p>
          )}
        </div>
      )}

      {isMatchRest && (
        <div
          style={{
            display: 'grid',
            alignContent: 'center',
            alignItems: 'center',
            justifyItems: 'center',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          }}
        >
          {testimonialState?.length > 0 ? (
            testimonialState.map((testimony, index) => {
              return (
                <CustomCard
                  id={testimony.id}
                  link="testimonios"
                  name={testimony.name}
                  image={testimony.image}
                  description={testimony.description}
                  key={index}
                />
              )
            })
          ) : (
            <p>No se encontraron testimonios</p>
          )}
        </div>
      )}
    </>
  )
}

export default TestimonialHome

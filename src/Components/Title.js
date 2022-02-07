import React from 'react'
import defaultImage from '../assets/defaultImage.jpg'

export const Title = ({ children, image }) => {
  return (
    <>
      <h1>{children}</h1>
      <img width="100%" src={image || defaultImage} alt={children} />
    </>
  )
}

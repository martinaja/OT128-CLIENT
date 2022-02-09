import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const LazyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width}
    />
    {image.text && <span>{image.text}</span>}
  </div>
)

//  for use :
//  props = {
//    image: {
//      alt: string,
//      height: string,
//      src: string,
//      width: string,
//      text: string,
//    }
//  }
//   more info at https://github.com/Aljullu/react-lazy-load-image-component#readme

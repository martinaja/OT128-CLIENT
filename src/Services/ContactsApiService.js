import {
    getHandler,
    postHandler,
    putHandler,
    deleteHandler,
  } from './privatePublicService'
  
  const contactGetUrl = process.env.REACT_APP_API_CONTACT_GET
  const contactPostUrl = process.env.REACT_APP_API_CONTACT_POST
  const contactPutUrl = process.env.REACT_APP_API_CONTACT_PUT
  const contactDeleteUrl = process.env.REACT_APP_API_CONTACT_DELETE
  
  export const getContact = (id) => {
    return getHandler(contactGetUrl, id)
  }
  
  export const postContact = (id, bodydata) => {
    return postHandler(contactPostUrl, id, bodydata)
  }
  
  export const putContact = (id, bodydata) => {
    return putHandler(contactPutUrl, id, bodydata)
  }
  
  export const deleteContact = (id) => {
    return deleteHandler(contactDeleteUrl, id)
  }

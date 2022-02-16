import { Box } from '@mui/system'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import terms from '../../../src/assets/terms.pdf'

export const Terms = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <>
      <Box sx={{spacing: '5px'}}>
        <Document file={terms} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Pagina {pageNumber} de {numPages}
        </p>
        <Button variant="contained" onClick={() => setPageNumber( pageNumber === 1  ?  pageNumber : pageNumber - 1)}>
          Anterior
        </Button>
        <button onClick={() => setPageNumber(  pageNumber === numPages  ?  pageNumber : pageNumber + 1)}>
          Siguiente
        </button>
      </Box>
    </>
  )
}

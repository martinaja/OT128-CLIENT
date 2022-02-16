import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import terms from '../../../src/assets/terms.pdf'

export const Terms = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages })  => {
    setNumPages(numPages)
  }


  return (
    <>
      <div>
        <Box sx={{ height: '900px' }}>
          <Document file={terms} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </Box>
        <p>
          Pagina {pageNumber} de {numPages}
        </p>
        <Button
          sx={{ width: '150px' }}
          variant="contained"
          onClick={() =>
            setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1)
          }
        >
          Anterior
        </Button>
        <Button
          sx={{ width: '150px' }}
          variant="contained"
          onClick={() =>
            setPageNumber(pageNumber === numPages ? pageNumber : pageNumber + 1)
          }
        >
          Siguiente
        </Button>
      </div>
    </>
  )
}

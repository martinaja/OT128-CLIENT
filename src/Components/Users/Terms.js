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
      <div>
        <Document file={terms} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button onClick={() => setPageNumber(pageNumber + 1)}>
          {' '}
          Siguiente
        </button>
      </div>
    </>
  )
}

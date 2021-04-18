import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useParams } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MyPDFViewer(props) {

  const { pdfURL } = useParams();  // Ex: lpr, facemask, 

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  console.log("/assets/pdfs/pdfURL", `/assets/pdfs/${pdfURL}`)
  return (
    <div>
      <Document
        file={`http://localhost:3000/assets/pdfs/${pdfURL}`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default MyPDFViewer;
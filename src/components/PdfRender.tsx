"use client";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


const PdfRender = ({ url }: { url: string }) => {
  return (
    <div className={"w-full bg-white rounded-md shadow-md flex flex-col"}>
      <div
        className={
          "h-14 border-b border-zinc-200 flex items-center justify-between px-2"
        }
      >
        <div className={"flex items-center gap-2"}>Pdf functions</div>
      </div>
      {/*pdf rendering*/}
      <div className={"flex-1 w-full max-h-screen"}>
        <div>
          <Document className={"max-h-full"} file={url}>
            <Page pageIndex={14} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PdfRender;

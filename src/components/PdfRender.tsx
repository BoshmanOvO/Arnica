"use client";
import React, { useState } from "react";

type Props = { url: string; name: string };

const PdfRender = (params: Props) => {
  console.log(params.url);
  return (
    <div className={"w-full bg-white rounded-md shadow-md flex flex-col"}>
      <div
        className={
          "h-14 border-b border-zinc-200 flex items-center justify-between px-2"
        }
      >
        <div className={"flex items-center gap-2"}>
          {/*  pdf name */}
          <h1
            className={
              "capitalize text-lg font-bold justify-between items-center text-center"
            }
          >
            {params.name}
          </h1>
        </div>
      </div>
      {/*pdf rendering*/}
      <div className={"flex-1 w-full h-full max-h-screen"}>
        <div className={"w-full h-full p-1"}>
          <iframe
            className={"w-full h-[calc(100vh-3.5rem)]"}
            // height={"645"}
            // width={"100%"}
            name={"pdfRender"}
            src={`https://docs.google.com/gview?url=${params.url}&embedded=true`}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default PdfRender;

"use client";
import React from "react";
import PdfRender from "@/components/PdfRender";
import ChatWrapper from "@/components/ChatWrapper";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Doc } from "../../../../../convex/_generated/dataModel";

interface PageProps {
  params: {
    fileId: Doc<"files">["_id"];
  };
}


const Page = ({ params }: PageProps) => {
  const getFileById = useQuery(api.file.getFileById, { fileId: params.fileId });
  const getUrl = useQuery(api.file.getUrl, { fileId: getFileById?.fileId! });
  let Url = getUrl ? getUrl.toString() : "";
  console.log(Url);
  return (
    <div
      className={"flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]"}
    >
      <div className={"mx-auto w-full max-w-7xl grow lg:flex xl:px-2"}>
        {/*left side*/}
        <div className={"flex-1 xl:flex"}>
          <div className={"px-4 py-6 xl:flex-1 xl:pl-6 lg:pl-8 sm:px-6"}>
            <PdfRender url={Url} name={getFileById?.name ?? ""}/>
          </div>
        </div>
        {/*right side*/}
        <div
          className={
            "shrink-0 flex-[0.75] border-t border-gray-200 lg:border-t-0 lg:border-l lg:w-96"
          }
        >
          <ChatWrapper />
        </div>
      </div>
    </div>
  );
};

export default Page;

/*
 * requirements: user can see their entire pdf files in left side
 * PDF functions: rotate, go to next page, etc.
 * chat part in the right
 * */

"use client";
import React from "react";
import PdfRender from "@/components/PdfRender";
import ChatWrapper from "@/components/ChatWrapper";

const Page = ({ params: { fileId } }: { params: { fileId: string } }) => {
  return (
    <div
      className={"flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]"}
    >
      <div className={"mx-auto w-full max-w-7xl grow lg:flex xl:px-2"}>
        {/*left side*/}
        <div className={"flex-1 xl:flex"}>
          <div className={"px-4 py-6 xl:flex-1 xl:pl-6 lg:pl-8 sm:px-6"}>
            hello
            <PdfRender />
          </div>
        </div>
        {/*right side*/}
          <div className={'shrink-0 flex-[0.75] border-t border-gray-200 lg:border-t-0 lg:border-l lg:w-96'}>
            right
            <ChatWrapper/>
          </div>
      </div>
    </div>
  );
};

export default Page;

/*
 * requirements: user can see their entire pdf files in left side
 * pdf functions: rotate, go to next page, etc.
 * chat part in the right
 * */

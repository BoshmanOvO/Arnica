import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Dropzone from "react-dropzone";
import { CloudUpload, File } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useUploadThing } from "@/lib/uploadthing";
import { useToast } from "@/components/ui/use-toast";

// TODO : i will use upload stuff here with convex it is easy

const UploadDropZone = () => {
  const [uploading, setUploading] = useState<boolean>(true);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { startUpload } = useUploadThing("pdfUploader");
  const { toast } = useToast();

  const startSimulatingProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        } else {
          return prev + 5;
        }
      });
    }, 500);
    return interval;
  };
  return (
    <Dropzone
      multiple={false}
      onDrop={async (accepted) => {
        console.log(accepted);
        setUploading(true);
        const progressInterval = startSimulatingProgress();
        const response = await startUpload(accepted);
        if (!response) {
          toast({
            title: `Error in Uploading file`,
            description: `Please try again later`,
            variant: "destructive",
          });
        }
        const [fileRosponse] = response;
        const key = fileRosponse?.key; // this key will later store in the database;
        if (!key) {
          toast({
            title: `Error in Uploading file`,
            description: `Please try again later`,
            variant: "destructive",
          });
        }
        await new Promise((resolve) => setTimeout(resolve, 10000));
        clearInterval(progressInterval);
        setUploadProgress(100);
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <section
          {...getRootProps()}
          className={"border h-64 m-4 border-dashed border-gray-300 rounded-lg"}
        >
          <div className={"flex items-center justify-center h-full w-full"}>
            <label
              htmlFor="file"
              className={
                "flex flex-col justify-center items-center h-full w-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              }
            >
              <div
                className={
                  "flex flex-col items-center justify-center pt-5 pb-6"
                }
              >
                <CloudUpload className={"h-4 w-4 mb-2 text-zinc-500"} />
                <p className={"mb-2 text-zinc-700 text-sm"}>
                  <span className={"font-semibold"}>Click to upload</span> or
                  drag & drop
                </p>
                <p className={"text-zinc-500 text-xs"}>PDF (upto 4MB)</p>
              </div>

              {acceptedFiles && acceptedFiles[0] ? (
                <div
                  className={
                    "max-w-xs bg-white flex items-center rounded-md overflow-hidden outline-[1px] outline-zinc-200 divide-x divide-zinc-200"
                  }
                >
                  <div className={"px-3 py-3 h-full grid place-items-center"}>
                    <File className={"h-4 w-4 text-blue-500"} />
                  </div>
                  <div className={"px-3 py-2 truncate text-sm h-full"}>
                    {acceptedFiles[0].name}
                  </div>
                </div>
              ) : null}
              {uploading ? (
                <div className={"w-full mt-4 max-w-xs mx-auto"}>
                  <Progress
                    value={uploadProgress}
                    className={"h-1 w-full bg-zinc-200"}
                  />
                </div>
              ) : null}
            </label>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

const UploadButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Upload File</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={"flex font-bold mb-5"}>
            Upload Your File Here
          </DialogTitle>
          <UploadDropZone />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;

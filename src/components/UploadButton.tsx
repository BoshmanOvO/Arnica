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
import { CloudUpload, File, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type UploadStatus = "pending" | "processing" | "failed" | "success";

const UploadDropZone = () => {
  const user = useUser();
  const userId = user?.user?.id ?? ""; // user_1111

  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [status, setStatus] = useState<UploadStatus>("pending");

  const createFile = useMutation(api.file.createFile);
  const generateUploadUrl = useMutation(api.file.generateUploadUrl);
  const getFile = useMutation(api.file.getFile);

  const { toast } = useToast();
  const router = useRouter();

  const startSimulatingProgress = () => {
    setUploadProgress(0);
    setStatus("processing");
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        } else {
          setStatus("processing");
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
        const postUrl = await generateUploadUrl();
        const result = await fetch(postUrl, {
          method: "POST",
          headers: { "Content-Type": accepted[0].type },
          body: accepted[0],
        });
        console.log(accepted[0].type);
        const { storageId } = await result.json();
        try {
          await new Promise((resolve) => setTimeout(resolve, 10000));
          clearInterval(progressInterval);
          setUploadProgress(100);
          setStatus("success");
          // TODO : upload status not working
          await createFile({
            name: accepted[0].name,
            fileId: storageId,
            uploadStatus: status,
            clerkId: userId,
            fileSize: accepted[0].size,
          });
          const f = await getFile({ storageId });
          toast({
            title: `File named: ${accepted[0].name}, Uploaded successfully`,
            variant: "success",
          });
          router.push(`/dashboard/${f?._id}`);
        } catch (error) {
          setStatus("failed");
          toast({
            title: "Error in uploading file",
            description: "Please try again later",
            variant: "destructive",
          });
        }
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
                  {uploadProgress === 100 ? (
                    <div
                      className={
                        "flex gap-1 items-center justify-center text-sm text-zinc-700 text-center pt-2"
                      }
                    >
                      <Loader2 className={"h-3 w-3 animate-spin"} />{" "}
                      Redirecting...
                    </div>
                  ) : null}
                </div>
              ) : null}
              <input
                {...getInputProps()}
                type={"file"}
                id={"dropzone-file"}
                className={"hidden"}
              />
            </label>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) setIsOpen(v);
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
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

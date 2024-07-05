"use client";
import UploadButton from "@/components/UploadButton";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import Lottie from "lottie-react";
import "@lottiefiles/lottie-player";
import Cloud from "../../../../public/cloud.json";
import Loading from "../../../../public/loading.json";
import Link from "next/link";
import { MessageSquare, Plus, TrashIcon } from "lucide-react";
import { format, formatRelative, subDays } from "date-fns";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const { isAuthenticated } = useConvexAuth();
  if (!isAuthenticated) return null;
  const user = useUser();
  const userId = user?.user?.id ?? "";
  console.log(userId);
  const allFiles = useQuery(api.file.getAllFilesForUser, { userId });
  const deleteFile = useMutation(api.file.deleteFile);
  const { toast } = useToast();
  const isLoading = allFiles == undefined;
  return (
    <main className={"mx-auto max-w-7xl md:p-10"}>
      <div
        className={
          "flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0"
        }
      >
        <h1 className={"font-bold text-5xl mb-3 text-gray-900"}>My Files</h1>
        <UploadButton />
      </div>

      {allFiles && allFiles?.length > 0 ? (
        <ul
          className={
            "mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3 mr-3 ml-3"
          }
        >
          {allFiles.map((file) => (
            <li
              key={file._id}
              className={
                "col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg"
              }
            >
              <Link
                href={`/dashboard/${file._id}`}
                className={"flex flex-col gap-2"}
              >
                <div
                  className={
                    "pt-6 px-6 flex w-full items-center justify-between space-x-6"
                  }
                >
                  <div
                    className={
                      "h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    }
                  />
                  <div className={"flex-1 truncate"}>
                    <div className={"flex items-center space-x-3"}>
                      <h3 className={"truncate font-medium"}>{file.name}</h3>
                    </div>
                  </div>
                </div>
              </Link>

              <div
                className={
                  "px-6 mt-4 grid grid-cols-3 place-items-start py-2 gap-6 text-xs text-zinc-500 items-center"
                }
              >
                <div className={"flex items-center gap-2"}>
                  <Plus className={"w-5 h-5"} />
                  {format(new Date(file._creationTime), "MMM, dd, yyyy")}
                  {/*{formatRelative(subDays(file._creationTime, 3), new Date())}*/}
                </div>

                <div className={"flex item-center justify-between"}>
                  <MessageSquare className={"h-4 w-4"} />
                </div>

                <Button
                  variant={"destructive"}
                  size={"sm"}
                  className={"w-full"}
                  onClick={async () => {
                    await deleteFile({ fileId: file._id });
                    toast({
                      title: `File named ${file.name}, Deleted Successfully`,
                      variant: "destructive",
                    });
                  }}
                >
                  <TrashIcon className={"h-4 w-4"} />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : isLoading ? (
        <div
          className={
            "absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col items-center"
          }
        >
          <div className={"lg:md:size-96 size-50 flex flex-col items-center"}>
            <Lottie animationData={Loading} />
          </div>
        </div>
      ) : (
        <div
          className={
            "absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col items-center"
          }
        >
          <div className={"lg:md:size-96 size-50 flex flex-col items-center"}>
            <Lottie animationData={Cloud} />
            <h3 className={"font-semibold text-xl text-zinc-700 flex"}>
              Pretty empty around here
            </h3>
          </div>
        </div>
      )}
    </main>
  );
};

export default Dashboard;

// TODO : toast not working

import { createUploadthing, type FileRouter } from "uploadthing/next";
import {useUser} from "@clerk/nextjs";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const user = useUser();
      if(!user || !user?.user?.id) {
        throw new Error("Unauthorized user");
      }
      return {userId: user.user.id};
    })
    .onUploadComplete(async ({ metadata, file }) => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

/**
 * User request for upload -> middleware -> onUploadComplete
 * */

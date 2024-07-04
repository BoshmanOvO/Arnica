import { generateReactHelpers } from "@uploadthing/react";
import {OurFileRouter} from "@/app/(root)/uploadthing/core";


export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();

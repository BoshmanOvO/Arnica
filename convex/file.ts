import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";
import { uploadStatus } from "./schema";
import {getUser, getUserById} from "./utils/userUtils";

export const getUrl = query({
  args: {
    fileId: v.id("_storage"),
  },
  async handler(ctx, args) {
    return ctx.storage.getUrl(args.fileId);
  },
});

export const generateUploadUrl = mutation(async (ctx) => {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new ConvexError(
      "Not authenticated, you must logged in to get a upload url",
    );
  }
  return await ctx.storage.generateUploadUrl();
});

export const createFile = mutation({
  args: {
    name: v.string(),
    fileId: v.id("_storage"),
    uploadStatus,
    clerkId: v.string(),
    fileSize: v.number(),
  },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity();
    console.log(identity?.tokenIdentifier);
    if (!identity) {
      throw new ConvexError(
        "Not authenticated, you must log in to create a file",
      );
    }

    await ctx.db.insert("files", {
      name: args.name,
      fileId: args.fileId,
      uploadStatus: args.uploadStatus,
      userId: args.clerkId,
      fileSize: args.fileSize,
    });
  },
});

export const getFile = mutation({
  args: {
    storageId: v.id("_storage"),
  },
  async handler(ctx, args) {
    return await ctx.db
      .query("files")
      .filter((q) => q.eq(q.field("fileId"), args.storageId))
      .first();
  },
});

export const getAllFilesForUser = query({
  args: { userId: v.string() },
  async handler(ctx, args) {
    const getUser = await getUserById(ctx, args.userId);
    if (!getUser) {
      throw new ConvexError("User not found.");
    }
    const file = await ctx.db
      .query("files")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();

    file.sort((a, b) => {
      return a._creationTime - b._creationTime;
    });
    return file;
  },
});

export const deleteFile = mutation({
  args: { fileId: v.id("files") },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity();
    console.log(identity?.tokenIdentifier);
    if (!identity) {
      throw new ConvexError(
        "Not authenticated, you must log in to delete file",
      );
    }
    await ctx.db.delete(args.fileId);
  },
});

export const getFileById = query({
  args: { fileId: v.id("files") },
  async handler(ctx, args) {
    return await ctx.db.get(args.fileId);
  },
});

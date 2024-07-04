import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// enum
export const uploadStatus = v.union(
  v.literal("pending"),
  v.literal("processing"),
  v.literal("failed"),
  v.literal("success"),
);

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    name: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    files: v.array(v.id("files")),
  }),
  files: defineTable({
    name: v.string(),
    // fileUrl: v.string(),
    // key: v.string(),
    uploadStatus,
    fileId: v.id("_storage"),
    userId: v.id("users"),
  }),
});

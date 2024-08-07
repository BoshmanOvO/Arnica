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
    tokenIdentifier: v.string(),
  })
    .index("token_identifier", ["tokenIdentifier"]),
  files: defineTable({
    name: v.string(),
    uploadStatus,
    fileSize: v.optional(v.number()),
    fileId: v.id("_storage"),
    userId: v.string(),
  }),
});

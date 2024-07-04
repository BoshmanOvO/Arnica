import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const createFile = mutation({
  args: {},
  async handler(ctx, args) {},
});

export const getAllFile = query({
  args: { clerkId: v.string() },
  async handler(ctx, args) {
    // const identity = await ctx.auth.getUserIdentity();
    // console.log(identity?.tokenIdentifier);
    // if (!identity) {
    //   throw new ConvexError("Not authenticated, you must log in to get file");
    // }
    const file = await ctx.db
      .query("files")
      .filter((q) => q.eq(q.field("userId"), args.clerkId))
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
    // const identity = await ctx.auth.getUserIdentity();
    // console.log(identity?.tokenIdentifier);
    // if (!identity) {
    //   throw new ConvexError(
    //     "Not authenticated, you must log in to delete file",
    //   );
    // }
    await ctx.db.delete(args.fileId);
  },
});

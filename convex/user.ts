import { internalMutation, mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = internalMutation({
  args: {
    Id: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    name: v.string(),
    tokenIdentifier: v.string(),
  },
  async handler(ctx, args) {
    await ctx.db.insert("users", {
      clerkId: args.Id,
      email: args.email,
      imageUrl: args.imageUrl,
      name: args.name,
      tokenIdentifier: args.tokenIdentifier,
    });
  },
});

import { MutationCtx, QueryCtx } from "../_generated/server";

export async function hasAccess(ctx: MutationCtx | QueryCtx, ID: string) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    return null;
  }
  const user = await ctx.db
    .query("users")
    .withIndex("token_identifier", (q) =>
      q.eq("tokenIdentifier", identity.tokenIdentifier),
    )
    .first();
  if (!user) {
    return null;
  }
  return { user };
}

import {MutationCtx, QueryCtx} from "../_generated/server";
import {ConvexError} from "convex/values";

export async function getUser(
	ctx: MutationCtx | QueryCtx,
	tokenIdentifier: string,
) {
	console.log("getUser : ", tokenIdentifier);
	const user = await ctx.db
		.query("users")
		.withIndex("token_identifier", (q) =>
			q.eq("tokenIdentifier", tokenIdentifier),
		)
		.first();
	if (!user) {
		throw new ConvexError("User not found.");
	}
	return user;
}


export async function getUserById(
	ctx: MutationCtx | QueryCtx,
	userId: string,
) {
	const user = await ctx.db
		.query("users")
		.filter((q) => q.eq(q.field("clerkId"), userId))
		.first();
	if (!user) {
		throw new ConvexError("User not found.");
	}
	return user;
}
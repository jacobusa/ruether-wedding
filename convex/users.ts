import { v } from "convex/values";
import { query } from "./_generated/server";
import { getViewerId } from "./auth";

export const getUsersByName = query({
  args: { name: v.optional(v.string()) },
  handler: async (ctx, args) => {
    if (!args.name) {
      return [];
    }
    const users = await ctx.db.query("users").collect();
    return users
      .filter((user) =>
        user.name?.toLocaleLowerCase().includes(args.name!.toLocaleLowerCase())
      )
      .slice(0, 1);
  },
});

export const getUserById = query({
  args: { id: v.id("users") },
  handler: async (ctx, args) => {
    if (!args.id) {
      return;
    }
    return ctx.db.get(args.id);
  },
});

export const getViewerInfo = query({
  args: {},
  handler: async (ctx) => {
    const viewerId = await getViewerId(ctx);
    if (viewerId === null) {
      throw new Error("User is not authenticated");
    }
    return {
      viewer: await ctx.db.get(viewerId),
    };

    // const userIdentity = (await ctx.auth.getUserIdentity())!;
    // if (userIdentity?.subject) {
    //   return await ctx.db.get(userIdentity.subject as Id<"users">);
    // }
    // return null;
  },
});

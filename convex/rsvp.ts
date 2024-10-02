import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getViewerId } from "./auth";
import { rsvpSchema } from "./schema";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { userId, ...schema } = rsvpSchema;
export const getRSVP = query({
  args: {
    userId: v.optional(v.id("users")),
  },
  handler: async (ctx, { userId }) => {
    if (!userId) return;
    const viewerId = await getViewerId(ctx);
    if (viewerId === null) {
      throw new ConvexError(`User is not authenticated userId: ${userId}`);
    }
    return await ctx.db
      .query("rsvp")
      .filter((q) => q.eq(q.field("userId"), userId))
      .first();
  },
});
export const addRSVP = mutation({
  args: {
    data: v.object(schema),
  },
  handler: async (ctx, { data }) => {
    const viewerId = await getViewerId(ctx);
    if (viewerId === null) {
      throw new ConvexError(
        `User is not authenticated data:${JSON.stringify(data)}`
      );
    }
    const rsvpId = await ctx.db.insert("rsvp", { ...data, userId: viewerId });
    return rsvpId;
  },
});

export const updateRSVP = mutation({
  args: {
    id: v.id("rsvp"),
    data: v.object(schema),
  },
  handler: async (ctx, { id, data }) => {
    const viewerId = await getViewerId(ctx);
    if (viewerId === null) {
      throw new ConvexError(
        `User is not authenticated id: ${id} data:${JSON.stringify(data)}`
      );
    }
    const plusOneData = data.hasPlusOne
      ? {}
      : {
          plusOneFirstName: undefined,
          plusOneLastName: undefined,
          plusOneEmail: undefined,
          plusOneMealPreference: undefined,
        };
    const rsvpId = await ctx.db.patch(id, {
      ...data,
      ...plusOneData,
      userId: viewerId,
    });
    return rsvpId;
  },
});

// const existingSession = await ctx.db
//   .query("sessions")
//   .withIndex("sessionToken", (q) =>
//     q.eq("sessionToken", session.sessionToken),
//   )
//   .unique();
// if (existingSession === null) {
//   return null;
// }
// await ctx.db.patch(existingSession._id, session);

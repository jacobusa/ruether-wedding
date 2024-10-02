import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getViewerId } from "./auth";
import { obfuscateEmail } from "../utils/obfuscateEmail";

export const getUsersByName = query({
  args: { name: v.optional(v.string()) },
  handler: async (ctx, args) => {
    if (!args.name) {
      return [];
    }
    const users = await ctx.db.query("users").collect();
    return users
      .filter((user) => {
        const fullSearchName = `${user.firstName} ${user.lastName} ${user?.coupleFirstName} ${user?.coupleLastName}`;
        return fullSearchName
          ?.toLocaleLowerCase()
          .includes(args.name!.toLocaleLowerCase());
      })
      .slice(0, 2)
      .map((user) => ({
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
        email: obfuscateEmail(user.email),
        coupleFirstName: user?.coupleFirstName,
        coupleLastName: user?.coupleLastName,
        isCouple: user?.isCouple,
      }));
  },
});

export const getUserByIdPublic = query({
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
      throw new ConvexError("User is not authenticated");
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

// TODO: Lock this down
export const getUsers = query({
  // args: {},
  handler: async (ctx) => {
    const viewerInfo = await getViewerInfo(ctx, {});
    if (
      viewerInfo === null ||
      !viewerInfo ||
      !viewerInfo.viewer ||
      !viewerInfo.viewer.admin
    ) {
      throw new ConvexError("User is not authorized");
    }
    const users = await ctx.db.query("users").collect();
    const rsvps = await ctx.db.query("rsvp").collect();
    const usersWithRSVPs = users.map((user) => {
      const foundRSVP = rsvps.find((rsvp) => user._id === rsvp.userId);
      return {
        ...user,
        didRSVP: !!foundRSVP,
        rsvpTime: foundRSVP?._creationTime,
      };
    });
    return usersWithRSVPs;
  },
});

export const getUserById = query({
  args: { id: v.optional(v.id("users")) },
  handler: async (ctx, args) => {
    if (!args.id) return;
    const viewerInfo = await getViewerInfo(ctx, {});
    if (!viewerInfo || !viewerInfo.viewer || !viewerInfo.viewer.admin) {
      throw new ConvexError(`User is not authorized userId:${args.id}`);
    }
    const user = await ctx.db.get(args.id);
    if (!user) return null;
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isCouple: user.isCouple ?? false,
      coupleFirstName: user.coupleFirstName,
      coupleLastName: user.coupleLastName,
      coupleEmail: user.coupleEmail,
    };
  },
});

export const createUser = mutation({
  args: {
    email: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    isCouple: v.optional(v.boolean()),
    coupleFirstName: v.optional(v.string()),
    coupleLastName: v.optional(v.string()),
    coupleEmail: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const viewerInfo = await getViewerInfo(ctx, {});
    if (!viewerInfo || !viewerInfo.viewer || !viewerInfo.viewer.admin) {
      throw new ConvexError(
        `User is not authorized args: ${JSON.stringify(args)}`
      );
    }
    const emailExistsUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();
    if (emailExistsUser.length > 0)
      throw new ConvexError("Email already exists");
    const userId = await ctx.db.insert("users", args);
    return userId;
  },
});

export const updateUser = mutation({
  args: {
    id: v.id("users"),
    data: v.object({
      email: v.string(),
      firstName: v.string(),
      lastName: v.string(),
      isCouple: v.optional(v.boolean()),
      coupleFirstName: v.optional(v.string()),
      coupleLastName: v.optional(v.string()),
      coupleEmail: v.optional(v.string()),
    }),
  },
  handler: async (ctx, { id, data }) => {
    const viewerInfo = await getViewerInfo(ctx, {});
    if (!viewerInfo || !viewerInfo.viewer || !viewerInfo.viewer.admin) {
      throw new ConvexError(
        `User is not authorized id: ${id} data: ${JSON.stringify(data)}`
      );
    }

    const emailExistsUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), data?.email))
      .collect();
    const isExistingUser =
      emailExistsUser?.length === 1 && emailExistsUser[0]._id === id;
    if (emailExistsUser.length > 0 && !isExistingUser)
      throw new ConvexError(
        `Email already exists id: ${id} data: ${JSON.stringify(data)} `
      );

    const userId = await ctx.db.patch(id, {
      ...data,
    });
    return userId;
  },
});

export const deleteUser = mutation({
  args: {
    id: v.id("users"),
  },
  handler: async (ctx, { id }) => {
    const viewerInfo = await getViewerInfo(ctx, {});
    if (
      viewerInfo === null ||
      !viewerInfo ||
      !viewerInfo.viewer ||
      !viewerInfo.viewer.admin
    ) {
      throw new ConvexError(`User is not authorized userid:${id}`);
    }
    const userId = await ctx.db.delete(id);
    return userId;
  },
});

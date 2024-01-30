import { action, mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

export const createTodo = mutation({
  args: {
    text: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("todos", {
      text: args.text,
    });
    // await ctx.scheduler.runAfter(0, api.todos.callThirdPartyAPI);
  },
});

export const getTodos = query({
  handler: async (ctx) => {
    return ctx.db.query("todos").collect();
  },
});

// export const callThirdPartyAPI = action({
//   handler: (ctx) => {
//     ctx.runMutation(api.todos.createTodo, {});
//   },
// });

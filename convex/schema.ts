import { defineSchema, defineTable } from "convex/server";
import { Validator, v } from "convex/values";

// The users, accounts, sessions and verificationTokens tables are modeled
// from https://authjs.dev/getting-started/adapters#models

export const userSchema = {
  email: v.string(),
  firstName: v.string(),
  lastName: v.string(),
  admin: v.optional(v.boolean()),
  emailVerified: v.optional(v.number()),
  image: v.optional(v.string()),
  isCouple: v.optional(v.boolean()),
  coupleFirstName: v.optional(v.string()),
  coupleLastName: v.optional(v.string()),
  coupleEmail: v.optional(v.string()),
};

export const sessionSchema = {
  userId: v.id("users"),
  expires: v.number(),
  sessionToken: v.string(),
};

export const accountSchema = {
  userId: v.id("users"),
  type: v.union(
    v.literal("email"),
    v.literal("oidc"),
    v.literal("oauth"),
    v.literal("webauthn")
  ),
  provider: v.string(),
  providerAccountId: v.string(),
  refresh_token: v.optional(v.string()),
  access_token: v.optional(v.string()),
  expires_at: v.optional(v.number()),
  token_type: v.optional(v.string() as Validator<Lowercase<string>>),
  scope: v.optional(v.string()),
  id_token: v.optional(v.string()),
  session_state: v.optional(v.string()),
};

export const verificationTokenSchema = {
  identifier: v.string(),
  token: v.string(),
  expires: v.number(),
};

export const authenticatorSchema = {
  credentialID: v.string(),
  userId: v.id("users"),
  providerAccountId: v.string(),
  credentialPublicKey: v.string(),
  counter: v.number(),
  credentialDeviceType: v.string(),
  credentialBackedUp: v.boolean(),
  transports: v.optional(v.string()),
};

const authTables = {
  users: defineTable(userSchema).index("email", ["email"]),
  sessions: defineTable(sessionSchema)
    .index("sessionToken", ["sessionToken"])
    .index("userId", ["userId"]),
  accounts: defineTable(accountSchema)
    .index("providerAndAccountId", ["provider", "providerAccountId"])
    .index("userId", ["userId"]),
  verificationTokens: defineTable(verificationTokenSchema).index(
    "identifierToken",
    ["identifier", "token"]
  ),
  authenticators: defineTable(authenticatorSchema)
    .index("userId", ["userId"])
    .index("credentialID", ["credentialID"]),
};

export const rsvpSchema = {
  userId: v.id("users"),
  firstName: v.string(),
  lastName: v.string(),
  email: v.string(),
  phoneNumber: v.optional(v.string()),
  hasPlusOne: v.boolean(),
  plusOneFirstName: v.optional(v.string()),
  plusOneLastName: v.optional(v.string()),
  plusOneEmail: v.optional(v.string()),
  country: v.string(),
  province: v.string(),
  street: v.string(),
  city: v.string(),
  zip: v.string(),
  mealSelection: v.union(
    v.literal("Chicken"),
    v.literal("Steak"),
    v.literal("Vegetarian")
  ),
  plusOneMealSelection: v.optional(
    v.union(v.literal("Chicken"), v.literal("Steak"), v.literal("Vegetarian"))
  ),
  accomodation: v.optional(v.string()),
  accessabilityNeeds: v.optional(v.string()),
  dietaryRestrictions: v.optional(v.string()),
  transport: v.optional(v.string()),
  songRequest: v.optional(v.string()),
  marriageAdvice: v.optional(v.string()),
  cocktailSuggestion: v.optional(v.string()),
};

export default defineSchema({
  ...authTables,
  rsvp: defineTable(rsvpSchema),
});

import { ConvexAdapter } from "@/app/ConvexAdapter";
import { SignJWT, importPKCS8 } from "jose";
import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { sendVerificationRequest } from "./lib/authSendRequest";

if (process.env.CONVEX_AUTH_PRIVATE_KEY === undefined) {
  throw new Error(
    "Missing CONVEX_AUTH_PRIVATE_KEY Next.js environment variable"
  );
}

if (process.env.NEXT_PUBLIC_CONVEX_URL === undefined) {
  throw new Error(
    "Missing NEXT_PUBLIC_CONVEX_URL Next.js environment variable"
  );
}

const CONVEX_SITE_URL = process.env.NEXT_PUBLIC_CONVEX_URL.replace(
  /.cloud$/,
  ".site"
);

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Resend({
      name: "Ruether Wedding",
      from: "RSVP@ruetherwedding.com",
      sendVerificationRequest,
    }),
  ],
  adapter: ConvexAdapter,
  callbacks: {
    // Attach a JWT for authenticating with Convex
    async session({ session }) {
      const privateKey = await importPKCS8(
        process.env.CONVEX_AUTH_PRIVATE_KEY!,
        "RS256"
      );
      const convexToken = await new SignJWT({
        // These fields will be available on `ctx.auth.getUserIdentity()`
        // in Convex functions:
        sub: session.userId,
      })
        .setProtectedHeader({ alg: "RS256" })
        .setIssuedAt()
        .setIssuer(CONVEX_SITE_URL)
        .setAudience("convex")
        .setExpirationTime("1h")
        .sign(privateKey);
      return { ...session, convexToken };
    },
  },
  pages: {
    error: "/error",
  },
});

declare module "next-auth" {
  interface Session {
    convexToken: string;
  }
}

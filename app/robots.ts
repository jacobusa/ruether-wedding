import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/contact"],
        disallow: ["/rsvp", "/signin", "/error", "/users"],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  };
}

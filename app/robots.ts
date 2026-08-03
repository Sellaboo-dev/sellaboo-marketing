import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://sellaboo.com/sitemap.xml",
    host: "https://sellaboo.com",
  };
}

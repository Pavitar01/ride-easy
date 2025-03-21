import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ride-easy-netlify.app/",
      lastModified: new Date().toISOString(),
      priority: 1.0,
    },
  ];
}

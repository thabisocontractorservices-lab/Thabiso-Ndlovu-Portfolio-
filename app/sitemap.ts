import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://thabisondlovu.co.za";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...["philosophy", "approach", "projects", "about", "booking"].map((slug) => ({
      url: `${base}/#${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

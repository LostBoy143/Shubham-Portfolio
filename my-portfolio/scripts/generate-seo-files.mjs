import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const siteUrl = (process.env.VITE_SITE_URL || process.env.SITE_URL || "").replace(/\/$/, "");

if (!siteUrl || !/^https?:\/\//i.test(siteUrl)) {
  throw new Error(
    "Set VITE_SITE_URL before generating SEO files, for example: VITE_SITE_URL=https://your-domain.com npm run seo"
  );
}

const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/projects", priority: "0.9", changefreq: "weekly" },
  { path: "/project/1", priority: "0.8", changefreq: "monthly" },
  { path: "/project/2", priority: "0.8", changefreq: "monthly" },
  { path: "/project/3", priority: "0.6", changefreq: "monthly" },
  { path: "/project/4", priority: "0.6", changefreq: "monthly" },
];

const today = new Date().toISOString().slice(0, 10);
const publicDir = resolve("public");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync(resolve(publicDir, "sitemap.xml"), sitemap);
writeFileSync(resolve(publicDir, "robots.txt"), robots);

console.log(`Generated sitemap.xml and robots.txt for ${siteUrl}`);

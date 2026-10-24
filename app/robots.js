export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://awwalproductions.com/sitemap.xml",
  };
}

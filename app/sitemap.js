import { pages } from "../lib/routes.mjs";
export default function sitemap() {
  return pages.map((page) => ({
    url: `https://awwalproductions.com${page.path}`,
    changeFrequency: "monthly",
    priority:
      page.path === "/" ? 1 : page.path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}

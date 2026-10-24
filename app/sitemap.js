import { pages } from "../lib/routes.mjs";
import { newProjects, projectPath } from "../lib/projects.mjs";
export default function sitemap() {
  return [
    ...pages,
    ...newProjects.map((project) => ({ path: projectPath(project) })),
  ].map((page) => ({
    url: `https://awwalproductions.com${page.path}`,
    changeFrequency: "monthly",
    priority:
      page.path === "/" ? 1 : page.path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}

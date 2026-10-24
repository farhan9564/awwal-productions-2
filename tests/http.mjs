import { socialPortfolioPath } from "../lib/social-projects.mjs";
import { metaCases, metaCasePath } from "../lib/meta-cases.mjs";
import assert from "node:assert/strict";
import { pages as legacyPages } from "../lib/routes.mjs";
import { newProjects, projectPath } from "../lib/projects.mjs";
const pages = [
  ...legacyPages,
  { path: socialPortfolioPath },
  ...metaCases
    .filter((study) => !["mbm", "digikon"].includes(study.slug))
    .map((study) => ({ path: metaCasePath(study) })),
  ...newProjects.map((project) => ({ path: projectPath(project) })),
];
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3101";
const responses = await Promise.all(
  pages.map(async (page) => {
    const response = await fetch(base + page.path);
    assert.equal(response.status, 200, page.path);
    const html = await response.text();
    assert.ok(html.includes("<main"), page.path);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    assert.ok(canonical, `Canonical ${page.path}`);
    assert.equal(new URL(canonical[1]).pathname, page.path);
    if (page.legacy) {
      const redirect = await fetch(base + page.legacy, { redirect: "manual" });
      assert.equal(redirect.status, 308, page.legacy);
      assert.equal(
        new URL(redirect.headers.get("location"), base).pathname,
        page.path,
      );
    }
    return html;
  }),
);
const images = new Set(
  responses.flatMap((html) =>
    [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((match) => match[1]),
  ),
);
await Promise.all(
  [...images]
    .filter((path) => path.startsWith("/assets/"))
    .map(async (path) =>
      assert.equal((await fetch(base + path)).status, 200, path),
    ),
);
assert.equal((await fetch(base + "/this-page-does-not-exist")).status, 404);
const sitemap = await (await fetch(base + "/sitemap.xml")).text();
assert.equal((sitemap.match(/<loc>/g) || []).length, pages.length);
assert.ok(!sitemap.includes(".html"));
const good = await fetch(base + "/api/enquiry", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    name: "Farhan",
    email: "farhan@example.com",
    service: "Web Development",
    message: "A website for our business",
  }),
});
assert.equal(good.status, 200);
assert.ok((await good.json()).emailUrl.startsWith("mailto:"));
const bad = await fetch(base + "/api/enquiry", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: "{}",
});
assert.equal(bad.status, 400);
console.log(
  `Passed: ${pages.length} pages, ${legacyPages.length} permanent redirects, ${images.size} image URLs, canonical metadata, sitemap, 404 and enquiry API.`,
);

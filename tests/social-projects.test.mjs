import test from "node:test";
import assert from "node:assert/strict";
import {
  socialProjects,
  socialPortfolioPath,
} from "../lib/social-projects.mjs";
import sitemap from "../app/sitemap.js";
test("the five supplied Instagram profiles are present once with exact handles", () => {
  assert.equal(socialProjects.length, 5);
  assert.deepEqual(
    socialProjects.map((project) => project.handle),
    [
      "jsons.sports",
      "musapalace",
      "legacy_by_sheraton",
      "surg.edent",
      "noorelamhat",
    ],
  );
  assert.equal(new Set(socialProjects.map((project) => project.url)).size, 5);
  for (const project of socialProjects) {
    const url = new URL(project.url);
    assert.equal(url.hostname, "www.instagram.com");
    assert.equal(url.pathname, `/${project.handle}/`);
    assert.ok(project.name && project.niche && project.description);
  }
  assert.equal(
    sitemap().filter(
      (entry) => new URL(entry.url).pathname === socialPortfolioPath,
    ).length,
    1,
  );
});

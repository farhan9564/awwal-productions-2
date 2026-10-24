import test from "node:test";
import assert from "node:assert/strict";
import {
  shopifyProjects,
  webProjects,
  featuredWebProjects,
  projects,
  webNiches,
  shopifyPortfolioPath,
  projectPath,
} from "../lib/projects.mjs";
import sitemap from "../app/sitemap.js";
test("the four supplied Shopify stores are separated from web development without losing any projects", () => {
  assert.deepEqual(
    shopifyProjects.map((project) => new URL(project.url).hostname),
    [
      "fastapparel.co",
      "ibhapparel.com",
      "jsonssports.com",
      "iqrastudio.online",
    ],
  );
  assert.equal(shopifyProjects.length, 4);
  assert.equal(webProjects.length, 21);
  assert.equal(
    new Set([...shopifyProjects, ...webProjects].map(projectPath)).size,
    projects.length,
  );
  for (const project of shopifyProjects) {
    assert.equal(project.platform, "Shopify");
    assert.ok(!webProjects.some((item) => item.slug === project.slug));
  }
  assert.ok(
    webNiches.every((niche) =>
      webProjects.some((project) => project.niche === niche.id),
    ),
  );
  assert.equal(featuredWebProjects.length, 4);
  assert.ok(
    featuredWebProjects.every((project) => webProjects.includes(project)),
  );
  assert.equal(
    sitemap().filter(
      (entry) => new URL(entry.url).pathname === shopifyPortfolioPath,
    ).length,
    1,
  );
});

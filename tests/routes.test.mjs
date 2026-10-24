import { socialPortfolioPath } from "../lib/social-projects.mjs";
import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { pages } from "../lib/routes.mjs";
import config from "../next.config.mjs";
test("every old page permanently redirects to one existing React page", async () => {
  const redirects = await config.redirects();
  assert.equal(pages.length, 26);
  assert.equal(new Set(pages.map((p) => p.path)).size, pages.length);
  for (const page of pages) {
    assert.ok(
      redirects.some(
        (r) =>
          r.source === page.legacy &&
          r.destination === page.path &&
          r.permanent,
      ),
    );
    await access(`app${page.path === "/" ? "" : page.path}/page.jsx`);
    const source = await readFile(
      `app${page.path === "/" ? "" : page.path}/page.jsx`,
      "utf8",
    );
    assert.ok(!/href="[^"#]*\.html/.test(source), page.path);
    for (const [, href] of source.matchAll(/href="(\/[^"#]*)/g))
      assert.ok(
        pages.some((p) => p.path === href) || href === socialPortfolioPath,
        `Missing ${href}`,
      );
  }
});

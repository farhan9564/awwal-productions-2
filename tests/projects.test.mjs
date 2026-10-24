import test from "node:test";
import assert from "node:assert/strict";
import {
  niches,
  projects,
  newProjects,
  projectPath,
} from "../lib/projects.mjs";
import { transitionDestination } from "../lib/navigation.mjs";

test("all supplied sites appear once, including existing Verda Apparels", () => {
  assert.equal(projects.length, 25);
  assert.equal(newProjects.length, 12);
  assert.equal(
    new Set(projects.map((project) => new URL(project.url).hostname)).size,
    25,
  );
  assert.equal(new Set(projects.map(projectPath)).size, 25);
  const supplied = [
    "samstreeservice.com.au",
    "waqasdevelopers.com",
    "mcadw.com",
    "cottoartisan.com",
    "fensenembroidary.com",
    "luminos-skin-treatment-website.vercel.app",
    "lionel-sports.com",
    "novaraclothing.com",
    "rivanocombat.com",
    "verdacollective.com.au",
    "veltortex.com",
    "thehawkwings.com",
    "verdaapparels.com",
  ];
  for (const hostname of supplied)
    assert.equal(
      projects.filter((project) => new URL(project.url).hostname === hostname)
        .length,
      1,
      hostname,
    );
  for (const project of projects)
    assert.ok(niches.some((niche) => niche.id === project.niche));
});

test("page transitions only intercept an ordinary internal page change", () => {
  const current = "https://awwalproductions.com/portfolio";
  assert.equal(transitionDestination(current, "/about"), "/about");
  assert.equal(
    transitionDestination(current, "/contact?service=web#enquiry"),
    "/contact?service=web#enquiry",
  );
  for (const href of [
    "#sportswear",
    "/portfolio#fashion",
    "mailto:info@example.com",
    "https://example.com/",
    "/assets/awwal-logo.svg",
    "/api/enquiry",
  ])
    assert.equal(transitionDestination(current, href), null, href);
  for (const options of [
    { ctrlKey: true },
    { metaKey: true },
    { altKey: true },
    { shiftKey: true },
    { button: 1 },
    { target: "_blank" },
    { download: true },
    { defaultPrevented: true },
  ])
    assert.equal(transitionDestination(current, "/about", options), null);
});

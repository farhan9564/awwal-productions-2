import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import {
  metaCases,
  metaCasePath,
  archiveScreenshots,
} from "../lib/meta-cases.mjs";
import { projects } from "../lib/projects.mjs";
const find = (slug) => metaCases.find((study) => study.slug === slug);
const value = (slug, label) =>
  find(slug).metrics.find((metric) => metric.label === label)?.value;

test("all unique case studies have distinct routes, metrics and real source images", async () => {
  assert.equal(metaCases.length, 13);
  assert.equal(new Set(metaCases.map(metaCasePath)).size, 13);
  assert.equal(
    metaCases.filter((study) => study.slug === "mughal-homes").length,
    1,
  );
  assert.equal(
    metaCases.filter((study) => study.group === "ecommerce").length,
    6,
  );
  for (const study of metaCases) {
    assert.ok(
      !projects.some((project) => project.slug === study.slug),
      study.slug,
    );
    assert.ok(study.metrics.length >= 3);
    assert.ok(study.images.length > 0);
    for (const image of study.images) {
      assert.ok(image.sourceFile.endsWith(".docx"));
      assert.ok(image.width > 0 && image.height > 0);
      await access("public" + image.src);
    }
    for (const metric of study.metrics)
      assert.ok(["dashboard", "calculated"].includes(metric.origin));
    for (const metric of study.reported)
      assert.ok(["reported", "calculated"].includes(metric.origin));
  }
  for (const image of archiveScreenshots) await access("public" + image.src);
});

test("headlines retain snapshot metrics instead of conflicting narrative claims", () => {
  assert.equal(value("digikon", "New messaging contacts"), "3,793");
  assert.equal(value("digikon", "Ad spend"), "PKR 324,435.60");
  assert.equal(value("iqra-studio-ads", "Meta ad spend"), "PKR 104,182.71");
  assert.equal(value("iqra-studio-ads", "Purchase value / ad spend"), "6.82×");
  assert.equal(value("resin-collection", "Orders created"), "311");
  assert.equal(value("mbm", "Purchases in five visible rows"), "63");
  assert.equal(value("mughal-homes", "Meta leads in later snapshot"), "19");
  assert.equal(find("iteach-stuff").reported.length, 0);
  assert.ok(
    !find("kuwait-electronics-c").reported.some((metric) =>
      /sales|revenue/i.test(metric.label),
    ),
  );
  assert.equal((710999 / 104182.71).toFixed(2), "6.82");
  assert.equal((3000000 / 200723.79).toFixed(2), "14.95");
  assert.equal((2000000 / 109773.3).toFixed(2), "18.22");
});

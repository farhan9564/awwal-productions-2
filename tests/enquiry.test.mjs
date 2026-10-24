import test from "node:test";
import assert from "node:assert/strict";
import { prepareEnquiry } from "../lib/enquiry.mjs";
const enquiry = {
  name: "Farhan",
  email: "farhan@example.com",
  service: "Web Development",
  message: "A B2B site with categories & an enquiry form.",
};
test("preserves the complete enquiry in correctly encoded email and WhatsApp handoffs", () => {
  const result = prepareEnquiry(enquiry);
  const email = new URL(result.emailUrl);
  assert.equal(
    email.searchParams.get("subject"),
    "Project enquiry — Web Development",
  );
  assert.ok(email.searchParams.get("body").includes(enquiry.message));
  assert.ok(email.searchParams.get("body").includes("Business: Not specified"));
  const whatsapp = new URL(result.whatsappUrl);
  assert.equal(whatsapp.hostname, "wa.me");
  assert.ok(whatsapp.searchParams.get("text").includes(enquiry.message));
});
test("rejects incomplete, oversized or incorrectly typed enquiries", () => {
  for (const input of [
    null,
    {},
    [],
    { ...enquiry, email: "invalid" },
    { ...enquiry, service: "Unknown" },
    { ...enquiry, message: "" },
    { ...enquiry, message: "x".repeat(4001) },
    { ...enquiry, name: [] },
  ])
    assert.throws(() => prepareEnquiry(input));
});

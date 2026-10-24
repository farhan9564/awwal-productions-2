export const services = [
  "Web Development",
  "Digital Marketing",
  "Social Media Management",
  "Shopify Store Development",
  "Multiple Services",
];
const limits = {
  name: 120,
  email: 160,
  company: 160,
  service: 80,
  budget: 80,
  timeline: 80,
  message: 4000,
};
export function prepareEnquiry(input) {
  if (!input || typeof input !== "object" || Array.isArray(input))
    throw new Error("Please complete the enquiry form.");
  const data = {};
  for (const [key, limit] of Object.entries(limits)) {
    if (input[key] !== undefined && typeof input[key] !== "string")
      throw new Error("Invalid form details.");
    data[key] = (input[key] || "").trim();
    if (data[key].length > limit)
      throw new Error(`The ${key} field is too long.`);
  }
  if (
    !data.name ||
    !data.message ||
    !services.includes(data.service) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  )
    throw new Error(
      "Please enter your name, a valid email, a service and your project details.",
    );
  const subject = `Project enquiry — ${data.service}`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Business: ${data.company || "Not specified"}`,
    `Service: ${data.service}`,
    `Budget: ${data.budget || "Not specified"}`,
    `Timeline: ${data.timeline || "Not specified"}`,
    "",
    "Project details:",
    data.message,
  ].join("\n");
  return {
    emailUrl: `mailto:info@awwalproductions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    whatsappUrl: `https://wa.me/923034045884?text=${encodeURIComponent(subject + "\n\n" + body)}`,
  };
}

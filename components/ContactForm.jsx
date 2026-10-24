"use client";
import { useRef, useState } from "react";
import { services } from "../lib/enquiry.mjs";

export default function ContactForm() {
  const form = useRef(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function prepare(channel) {
    if (busy || !form.current.reportValidity()) return;
    // Reserve a browsing context during the click so popup blockers do not discard WhatsApp.
    const popup =
      channel === "whatsapp" ? window.open("about:blank", "_blank") : null;
    if (popup) popup.opener = null;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form.current))),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Please try again.");
      if (channel === "email") window.location.href = data.emailUrl;
      else if (popup) popup.location.href = data.whatsappUrl;
      else window.location.href = data.whatsappUrl;
    } catch (e) {
      popup?.close();
      setError(
        e.message ||
          "Unable to prepare the message. Please use the contact details on this page.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <form
      className="contact-form reveal delay-1"
      id="enquiryForm"
      ref={form}
      onSubmit={(e) => {
        e.preventDefault();
        prepare("email");
      }}
    >
      <h2>Request a project discussion.</h2>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Your name *</label>
          <input
            autoComplete="name"
            id="name"
            name="name"
            maxLength={120}
            placeholder="Your full name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email address *</label>
          <input
            autoComplete="email"
            id="email"
            name="email"
            maxLength={160}
            placeholder="you@company.com"
            required
            type="email"
          />
        </div>
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="company">Business / Company</label>
          <input
            id="company"
            name="company"
            maxLength={160}
            placeholder="Your brand (optional)"
          />
        </div>
        <div className="field">
          <label htmlFor="service">Service you need *</label>
          <select id="service" name="service" required defaultValue="">
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="budget">Approximate budget</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="">Not sure yet</option>
            {[
              "Under $500",
              "$500–$1,500",
              "$1,500–$5,000",
              "$5,000+",
              "Let's discuss",
            ].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="timeline">Project timeline</label>
          <select id="timeline" name="timeline" defaultValue="">
            <option value="">Let&apos;s discuss</option>
            {[
              "As soon as possible",
              "Within 1 month",
              "Within 2–3 months",
              "Flexible",
            ].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Tell us a little about the project *</label>
        <textarea
          id="message"
          name="message"
          maxLength={4000}
          placeholder="Briefly describe your business, goals, target market and the features or results you need."
          required
        />
      </div>
      <div className="form-actions">
        <button className="btn btn-lime" type="submit" disabled={busy}>
          {busy ? "Preparing…" : "Send via email"}{" "}
          <span className="arr" aria-hidden="true">
            ↗
          </span>
        </button>
        <button
          className="btn btn-outline"
          id="sendWhatsApp"
          type="button"
          disabled={busy}
          onClick={() => prepare("whatsapp")}
        >
          Send via WhatsApp{" "}
          <span className="arr" aria-hidden="true">
            ↗
          </span>
        </button>
      </div>
      {error && <p role="alert">{error}</p>}
      <p className="form-smallprint">
        This form prepares a message and opens your email app or WhatsApp. You
        review and send the message there. Messages are not stored or delivered
        by this website. If your email app does not open, use the contact
        details on this page.
      </p>
    </form>
  );
}

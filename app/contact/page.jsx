import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact Awwal Productions | Start Your Digital Project",
  description:
    "Request a quote for a website, Shopify store, Meta Ads or social media management. Contact Awwal Productions worldwide by email or WhatsApp.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Awwal Productions | Start Your Digital Project",
    description:
      "Request a quote for a website, Shopify store, Meta Ads or social media management. Contact Awwal Productions worldwide by email or WhatsApp.",
    url: "/contact",
    siteName: "Awwal Productions",
    type: "website",
    locale: "en_US",
    images: [{ url: "/assets/awwal-full-logo.png", alt: "Awwal Productions" }],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            '{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://awwalproductions.com/#organization", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "logo": "https://awwalproductions.com/assets/awwal-full-logo.png", "email": "info@awwalproductions.com", "telephone": "+923034045884", "description": "Website development, Shopify store development, digital advertising and social media management for international brands.", "address": {"@type": "PostalAddress", "addressCountry": "PK"}, "contactPoint": {"@type": "ContactPoint", "contactType": "sales", "email": "info@awwalproductions.com", "telephone": "+923034045884", "availableLanguage": ["English", "Urdu"]}}, {"@type": "WebSite", "@id": "https://awwalproductions.com/#website", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "publisher": {"@id": "https://awwalproductions.com/#organization"}}, {"@type": "WebPage", "@id": "https://awwalproductions.com/contact#webpage", "url": "https://awwalproductions.com/contact", "name": "Contact Awwal Productions | Start Your Digital Project", "description": "Request a quote for a website, Shopify store, Meta Ads or social media management. Contact Awwal Productions worldwide by email or WhatsApp.", "isPartOf": {"@id": "https://awwalproductions.com/#website"}, "inLanguage": "en"}, {"@type": "BreadcrumbList", "@id": "https://awwalproductions.com/contact#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://awwalproductions.com/"}, {"@type": "ListItem", "position": 2, "name": "Contact Awwal Productions", "item": "https://awwalproductions.com/contact"}]}]}',
        }}
      />
      <main id="main">
        <section
          aria-label="Contact Awwal Productions"
          className="page-hero page-hero-sm"
        >
          <div className="container">
            <div className="crumbs">
              <Link href="/" prefetch={false}>
                {"Home"}
              </Link>
              <span>{"/"}</span>
              <span>{"CONTACT"}</span>
            </div>
            <span className="eyebrow">{"AWWAL PRODUCTIONS / CONTACT"}</span>
            <h1>
              {"Tell us your goal. "}
              <br />
              <span className="text-lime">
                {"We’ll discuss the next step."}
              </span>
            </h1>
            <p>
              {
                "Planning a business website, Shopify store, Meta Ads campaign or monthly social content? Share your brief and we can discuss scope, budget and a realistic timeline."
              }
            </p>
          </div>
        </section>
        <section className="padded-section">
          <div className="container contact-layout">
            <div className="contact-info reveal">
              <span className="eyebrow">{"Get in touch"}</span>
              <h2 className="section-title">
                {"Every great project starts with a conversation."}
              </h2>
              <p className="contact-prompt">
                {
                  "We work with businesses internationally. Include what you sell, your audience and what you want to improve—more qualified enquiries, a clearer website or a better shopping experience."
                }
              </p>
              <a
                className="contact-method"
                href="mailto:info@awwalproductions.com"
              >
                <small>{"EMAIL US"}</small>
                <strong>{"info@awwalproductions.com ↗"}</strong>
              </a>
              <a
                className="contact-method"
                href="https://wa.me/923034045884"
                rel="noopener noreferrer"
                target="_blank"
              >
                <small>{"WHATSAPP / PHONE"}</small>
                <strong>{"+92 303 4045884 ↗"}</strong>
              </a>
              <div style={{ paddingTop: "29px" }}>
                <span className="rounded-tag">
                  <span className="dot"></span>
                  {" Based in Pakistan • Serving worldwide"}
                </span>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}

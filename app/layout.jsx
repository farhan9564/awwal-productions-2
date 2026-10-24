import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteEffects from "../components/SiteEffects";
import PageTransition from "../components/PageTransition";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://awwalproductions.com"),
  title: { default: "Awwal Productions", template: "%s" },
  description:
    "Web development, Shopify stores and digital marketing by Awwal Productions.",
  icons: { icon: "/assets/favicon.png" },
  openGraph: {
    siteName: "Awwal Productions",
    type: "website",
    locale: "en_US",
    images: [{ url: "/assets/awwal-full-logo.png", alt: "Awwal Productions" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/awwal-full-logo.png"],
  },
  robots: { index: true, follow: true },
};
export const viewport = { themeColor: "#08090b" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to main content
        </a>
        <PageTransition />
        <SiteEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

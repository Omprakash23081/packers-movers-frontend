import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import ScrollMemory from "@/components/layout/ScrollMemory";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunitacargopackersmovers.com"),

  title: {
    default: "Best Packers and Movers in Nagpur | Sunita Cargo Packers Movers",
    template: "%s | Sunita Cargo Packers Movers",
  },

  description:
    "Sunita Cargo Packers Movers provides safe, affordable and professional home shifting, office relocation, car transport and warehouse storage services in Nagpur and across India.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    title: "Sunita Cargo Packers Movers Nagpur",
    description:
      "Trusted Packers and Movers in Nagpur offering home shifting, office relocation, vehicle transport and storage services across India.",
    url: "https://sunitacargopackersmovers.com",
    siteName: "Sunita Cargo Packers Movers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sunita Cargo Packers Movers Nagpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sunita Cargo Packers Movers",
    description:
      "Professional packers and movers services in Nagpur for safe relocation and transport.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sunitacargopackersmovers.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Sunita Cargo Packers Movers",
  image: "https://sunitacargopackersmovers.com/og-image.jpg",
  url: "https://sunitacargopackersmovers.com",
  telephone: "+917387661300",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Plot No. 78 B, Sariputra Housing society, Ganesh Nagar, Dawalameti, Amravati Road, Wadi",
    addressLocality: "Nagpur",
    addressRegion: "MH",
    postalCode: "440023",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.1042,
    longitude: 79.0527,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ScrollMemory />
        {/* Local Business SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <Navbar />
        <main className="flex-grow pb-20 md:pb-0">{children}</main>

        <Footer />

        <FloatingButtons />
      </body>
    </html>
  );
}

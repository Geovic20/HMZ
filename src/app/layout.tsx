import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

// Titres : Space Grotesk (SemiBold / Bold). Texte et interface : Inter (Regular → Bold).
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["600", "700"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

const title = "Hamza Tech Store | iPhone, Smartphones, Tablettes & Troc au Bénin";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: ["iPhone Cotonou", "smartphone Bénin", "troc téléphone Cotonou", "tablette", "accessoires", "Hamza Tech Store"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050B14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#contenu"
          className="sr-only z-[60] rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Aller au contenu
        </a>
        <Navbar />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

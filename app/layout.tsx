import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { BackToTop } from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Urban Deco — Muebles & Decoración",
    template: "%s · Urban Deco",
  },
  description:
    "Sillones, racks, camas y decoración premium para tu hogar. Envíos a todo el país y cuotas sin interés.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Urban Deco",
    title: "Urban Deco — Muebles & Decoración",
    description:
      "Muebles y decoración premium para tu hogar. Envíos a todo el país y cuotas sin interés.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Deco — Muebles & Decoración",
    description: "Muebles y decoración premium para tu hogar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <BackToTop />
        </CartProvider>
      </body>
    </html>
  );
}

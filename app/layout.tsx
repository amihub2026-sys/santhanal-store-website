import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { LanguageProvider } from "../components/LanguageProvider";
import Footer from "../components/Footer";
export const metadata: Metadata = {
  metadataBase: new URL("https://santhanal-store.amihub2026.chatgpt.site"),
  title: "Santhanal Store | Pure Sandalwood Tradition in Madurai",
  description: "A cinematic journey through Madurai tradition, pure sandalwood and the blessings of Meenakshi Amman.",
  openGraph: {
    title: "Santhanal Store",
    description: "Pure fragrance. Living tradition.",
    type: "website",
    images: [{ url: "/og.png", width: 1735, height: 906, alt: "Santhanal Store — Pure fragrance and living tradition" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santhanal Store",
    description: "Pure fragrance. Living tradition.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta">
      <body>
        <LanguageProvider>
          <Navbar />

          {children}

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Renan Cunha",
  description: "Personal site of Renan Cunha — software engineer focused on web apps, APIs and cloud systems.",
  metadataBase: new URL("https://renancunha.com"),
  openGraph: {
    title: "Renan Cunha",
    description: "Software engineer building web apps, APIs and systems running in the cloud.",
    url: "https://renancunha.com",
    siteName: "Renan Cunha",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renan Cunha",
    description: "Software engineer building web apps, APIs and systems running in the cloud.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}

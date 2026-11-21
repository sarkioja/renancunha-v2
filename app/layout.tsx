import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "Renan Cunha, software engineer in Curitiba, Brazil. Web apps, APIs, cloud and AI research.";

export const metadata: Metadata = {
  title: "Renan Cunha",
  description,
  metadataBase: new URL("https://renancunha.com"),
  openGraph: {
    title: "Renan Cunha",
    description,
    url: "https://renancunha.com",
    siteName: "Renan Cunha",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Renan Cunha",
    description,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#151516" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

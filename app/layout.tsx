import type { Metadata } from "next";

import "./globals.css";
import Providers from "./Provider";

export const metadata: Metadata = {
  title: "Hydrominex",
  description: "Made by Team Hydrominex",
  icons:
    "https://img.freepik.com/premium-vector/dump-truck-icon-isolated-white-background_103044-862.jpg?w=740",
  metadataBase: new URL("https://hydrominex.vercel.app/"),
  openGraph: {
    title: "Hydrominex",
    description: "Hydrominex's personal website",
    url: "https://hydrominex.vercel.app/",
    siteName: "Hydrominex",
    images: [
      {
        url: "https://img.freepik.com/premium-vector/dump-truck-icon-isolated-white-background_103044-862.jpg?w=740",
        width: 800,
        height: 600,
        alt: "Hydrominex",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

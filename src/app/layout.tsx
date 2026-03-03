import type { Metadata } from "next";
import { Literata, DM_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Boon Town — Built for the Applicant",
  description:
    "The first grant platform built exclusively for the applicant. Boon Town learns your organization, handles the chaos, and puts you in control.",
  metadataBase: new URL("https://boon.town"),
  openGraph: {
    title: "Boon Town — Built for the Applicant",
    description:
      "The first grant platform built exclusively for the applicant. It learns your organization, handles the chaos, and puts you in control.",
    url: "https://boon.town",
    siteName: "Boon Town",
    type: "website",
    // TODO: Create og-image.png (1200x630) and add to public/
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Boon Town — Built for the Applicant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boon Town — Built for the Applicant",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${literata.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

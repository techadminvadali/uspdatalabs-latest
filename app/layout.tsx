import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import DM_Sans from "@/lib/fonts/dm-sans";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "USP DataLabs",
  description: "Data Automation Platform for Human.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DM_Sans.className} overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

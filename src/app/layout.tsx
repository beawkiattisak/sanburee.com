import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import localfont from "next/font/local";

const terminus = localfont(
  {
    src: [
      {
      path: "./fonts/terminus.woff",
    },
  ],
  variable: "--font-terminus",
});

export const metadata: Metadata = {
  title: "beawkiattisak",
  description: "about beawkiattisak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${terminus.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

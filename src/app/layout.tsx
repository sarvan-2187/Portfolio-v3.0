import type { Metadata } from "next";
import { Archivo } from 'next/font/google';
import "./globals.css";

const archivo = Archivo({
  display: "swap",
  weight:'variable',
  subsets: ["latin"],
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: "Sarvan Kumar",
  description: "Created using Next.js, Framer-Motion and Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`antialiased bg-stone-950 text-stone-100 ${archivo.variable} font-sans`}>{children}</body>
    </html>
  );
}

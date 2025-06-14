// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../lib/fontawesome";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IvyCounsel - From Aspiration to Achievement",
  description:
    "To provide the personalized, research-driven support each student deserves, we work with a limited number of students at a time. Spots fill quickly—don’t miss out!",
  keywords: "education, university, college, learning, courses, programs",
  authors: [{ name: "IvyCounsel" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

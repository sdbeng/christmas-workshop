import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { DevCycleClientsideProvider } from "@devcycle/nextjs-sdk";
import { getClientContext } from "./devcycle";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santa's Workshop",
  description: 'Feature Flag Christmas Preparations',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <DevCycleClientsideProvider context={getClientContext()}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main  className="min-h-screen bg-gradient-to-b from-green-800 to-red-800">
        {children}
        </main>
      </body>
        </DevCycleClientsideProvider>
    </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";
import { NavBar } from "@/sanity/sanity.types";
import { client } from "@/sanity/client";
import { defaultNavBarData } from "@/data/navItems";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "China Sanda Club - The World-Class Sanda Club 中国散打 - 世界一流的散打搏击俱乐部",
  description: "World-class Sanda martial arts training club offering expert coaching, flexible schedules, and programs for all skill levels.",
};

const NAVBAR_QUERY = `*[_type == "navBar"][0]`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let navBarData: NavBar | null = null;
  try {
    navBarData = await client.fetch<NavBar>(NAVBAR_QUERY);
    if (!navBarData) {
      throw new Error("No nav bar data found");
    }
  }
  catch (error) {
    navBarData = defaultNavBarData;
    console.error("Error fetching nav bar data from Sanity.io", error);
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header navBarData={navBarData} />
          {children}
          <Footer navItems={navBarData?.navItems} />
        </ThemeProvider>
      </body>
    </html>
  );
}

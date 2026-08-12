import type { Metadata } from "next";
import { Inter, Geist_Mono, Bebas_Neue } from "next/font/google";

import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";
import { NavBar, Address } from "@/sanity/sanity.types";
import { client } from "@/sanity/client";
import { defaultNavBarData } from "@/data/navItems";
import { defaultAddressData } from "@/data/address";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "China Sanda Club - The World-Class Sanda Club 中国散打 - 世界一流的散打搏击俱乐部",
  description: "World-class Sanda martial arts training club offering expert coaching, flexible schedules, and programs for all skill levels.",
};

const NAVBAR_QUERY = `*[_type == "navBar"][0]`;
const ADDRESS_QUERY = `*[_type == "address"][0]`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let navBarData: NavBar | null = null;
  try {
    navBarData = await client.fetch<NavBar>(NAVBAR_QUERY);
    console.log("Fetched nav bar data successfully");
    if (!navBarData) {
      throw new Error("No nav bar data found");
    }
  }
  catch (error) {
    navBarData = defaultNavBarData;
    console.error("Error fetching nav bar data from Sanity.io", error);
  }

  let addressData: Address | null = null;
  try {
    addressData = await client.fetch<Address>(ADDRESS_QUERY);
    console.log("Fetched address data successfully");
    if (!addressData) {
      throw new Error("No address data found");
    }
  }
  catch (error) {
    addressData = defaultAddressData;
    console.error("Error fetching address data from Sanity.io", error);
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        <ThemeProvider>
          <Header navBarData={navBarData} />
          {children}
          <Footer navItems={navBarData?.navItems} address={addressData} />
        </ThemeProvider>
      </body>
    </html>
  );
}

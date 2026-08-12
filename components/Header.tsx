"use client";

import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

import { NavBar } from "@/sanity/sanity.types";

const Header = ({ navBarData }: { navBarData: NavBar | null }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = navBarData?.navItems || [];
  const siteName = navBarData?.siteName || "中国散打";
  const siteName2 = navBarData?.siteName2 || "China Sanda Club";

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActiveLink = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-foreground shadow-sm">
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 overflow-hidden rounded-full">
              <Image
                src="/logo.jpeg"
                alt="China Sanda Club logo"
                fill
                // Matches the rendered box above; the browser picks the DPR
                // variant from the srcset Next generates.
                sizes="(min-width: 768px) 56px, (min-width: 640px) 48px, 40px"
                className="object-cover translate-y-1"
                priority
              />
            </div>
            {/* Title */}
            <Link href="/" className="space-x-2 font-bold ">
              <div className="text-2xl display font-bold text-background">
                <span>{siteName2}</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation & Action Button */}
          <div className="hidden lg:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((link) => (
              <Link
                key={link.url}
                href={link.url || "/"}
                className={`flex flex-col px-1 md:px-2 lg:px-3 xl:px-4 py-2 nav-link ${
                  isActiveLink(link.url || "/") ? "nav-link-active" : ""
                }`}
              >
                <span>{link.name}</span>
              </Link>
            ))}
            {/* Action Button */}
            <Link
              href="/contact"
              className="px-6 py-3 ml-4 btn-primary display hidden md:inline-block"
            >
              Book A Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 btn-secondary"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden fixed right-0 top-16 bottom-0 w-64 bg-[#1a1a1a] border-l border-[#333] shadow-2xl"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url || "/"}
                    className={`flex justify-center gap-2 px-4 py-2 text-center text-base nav-link ${
                      isActiveLink(link.url || "/") ? "nav-link-active" : ""
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    <span>{link.name}</span>
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mx-auto px-6 py-3 btn-primary w-full inline-block"
                  onClick={toggleMobileMenu}
                >
                  Book A Trial
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

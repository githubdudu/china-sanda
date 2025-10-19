"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { ThemeToggle } from "./ThemeToggle";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
  { href: "/coaches", label: "Coaches" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-background border-b
      border-foreground/10 shadow-sm"
    >
      <nav className="container mx-auto px-2">
        <div className="flex items-center justify-between sm:h-16 md:h-25">
          {/* Logo */}
          <div className="h-10 sm:h-16 md:h-20 w-10 sm:w-16 md:w-20 relative">
            <Image
              src="/logo.jpeg"
              alt="China Sanda Club logo"
              fill
              // add sizes to increase performance
              // The size is image resolution.
              sizes="90px, (min-width: 640px) 120px, (min-width: 768px) 180px"
              className="object-fill"
              priority
            />
          </div>

          {/* Title */}
          <Link
            href="/"
            className="flex md:flex-5 justify-center lg:justify-self-start items-center space-x-2 hover:opacity-60
            transition-opacity text-sm md:text-lg lg:text-xl xl:text-2xl font-bold text-primary pl-0.5 sm:pl-1 md:pl-2"
          >
            <div className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-primary">
              <span>中国散打</span>
              <span>China Sanda Club</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-1 md:px-2 lg:px-3 xl:px-4 py-2 text-xs md:text-sm lg:text-base nav-link"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
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

          <Link
            href="/contact"
            className="px-6 py-2 ml-4 btn-primary hidden md:inline-block"
          >
            Book Trial
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-foreground/10">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-center text-base nav-link"
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-foreground">
                  Theme
                </span>
                <ThemeToggle />
              </div>
              <Link
                href="/contact"
                className="mx-4 px-6 py-2 btn-primary"
                onClick={toggleMobileMenu}
              >
                Book Trial
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

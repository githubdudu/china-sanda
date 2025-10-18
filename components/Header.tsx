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
          <div className="h-10 sm:h-16 md:h-25 w-10 sm:w-16 md:w-20 relative">
            <Logo />
          </div>

          {/* Title */}
          <Link
            href="/"
            className="flex md:flex-5 md:justify-self-start items-center space-x-2 hover:opacity-60
            transition-opacity text-sm md:text-lg lg:text-xl xl:text-2xl font-bold text-primary pl-0.5 sm:pl-1 md:pl-2"
          >
            <div className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-primary">
              <span>中国散打</span>
              <span>China Sanda Club</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-1 md:px-2 lg:px-3 xl:px-4 py-2 text-xs md:text-sm lg:text-base
                  font-medium text-foreground hover:text-primary
                  hover:bg-primary/5 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-6 py-2 bg-primary text-white font-medium
                rounded-full hover:bg-primary-dark transition-colors shadow-md
                hover:shadow-lg"
            >
              Book
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-foreground
              hover:bg-foreground/5 focus:outline-none focus:ring-2
              focus:ring-primary"
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
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-foreground/10">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-base font-medium text-foreground
                    hover:text-primary hover:bg-primary/5 rounded-md
                    transition-colors"
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
                className="mx-4 mt-2 px-6 py-3 bg-primary text-white
                  font-medium text-center rounded-full hover:bg-primary-dark
                  transition-colors shadow-md"
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

const Logo = () => (
  <Image
    src="/logo.jpeg"
    alt="China Sanda Club logo"
    layout="fill"
    objectFit="contain"
    priority
  />
);

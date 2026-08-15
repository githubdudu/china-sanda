import Link from "next/link";

import { Address, NavItems } from "@/sanity/sanity.types";

export const Footer = ({
  navItems = [],
  address,
}: {
  navItems?: NavItems;
  address?: Address;
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background-secondary border-t border-foreground/10">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-primary">
              Auckland Combat Academy
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              World-class Sanda martial arts training club offering expert
              coaching, flexible schedules, and programs for all skill levels.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              The World-Class Art of Chinese Kickboxing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url || "/"}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Contact Us</h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <p className="font-medium text-foreground">Address:</p>
                <p>
                  {address?.streetNumber}
                &nbsp;
                  {address?.streetName}
                </p>
                <p>
                  {address?.suburb}
                </p>
                <p>
                  {address?.city}
                  {" "}
                  {address?.postcode}
                </p>
                <p>
                  {address?.country}
                </p>
              </li>
              <li>
                <span className="font-medium text-foreground">Phone:</span>
                <br />
                {address?.phone}
              </li>
              <li>
                <span className="font-medium text-foreground">Email:</span>
                <br />
                <a
                  href={`mailto:${address?.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {address?.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-foreground/10 bg-background">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-foreground/60">
            {"© "}
            {currentYear}
            &nbsp;China Sanda Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

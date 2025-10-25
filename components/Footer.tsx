import Link from "next/link";

import { ButtonContent } from "@/sanity/sanity.types";

export const Footer = ({
  navItems = [],
}: {
  navItems?: ({ _key: string } & ButtonContent)[];
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background-secondary border-t border-foreground/10">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-primary">
              中国散打 China Sanda Club
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              World-class Sanda martial arts training club offering expert
              coaching, flexible schedules, and programs for all skill levels.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              世界一流的散打搏击俱乐部
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
                <span className="font-medium text-foreground">Address:</span>
                <br />
                123 Martial Arts Way
                <br />
                City, Province 100000
              </li>
              <li>
                <span className="font-medium text-foreground">Phone:</span>
                <br />
                +86 123 4567 8900
              </li>
              <li>
                <span className="font-medium text-foreground">Email:</span>
                <br />
                <a
                  href="mailto:info@chinasandaclub.com"
                  className="hover:text-primary transition-colors"
                >
                  info@chinasandaclub.com
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

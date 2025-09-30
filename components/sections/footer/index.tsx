import { ReactNode } from "react";
import { Brain } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo,
  name = "Second Brain",
  columns = [
    {
      title: "Product",
      links: [
        { text: "Features", href: "#items" },
        { text: "About", href: "#hero" },
        { text: "FAQ", href: "#faq" },
        { text: "Contact", href: "#footer" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "GitHub", href: siteConfig.links.github },
        { text: "Documentation", href: siteConfig.docsUrl },
        { text: "API Reference", href: "/docs/api" },
        { text: "Support", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Blog", href: "/blog" },
        { text: "Careers", href: "/careers" },
        { text: "Contact", href: "/contact" },
      ],
    },
  ],
  copyright = `© ${new Date().getFullYear()} Second Brain. Portfolio showcase by Mikolaj Dobrucki.`,
  policies = [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                {logo || <Brain className="h-6 w-6" />}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
              <p className="text-muted-foreground mt-2 max-w-[300px] text-sm">
                A modular productivity & knowledge management platform. Built
                with Next.js, TypeScript, Tailwind, and Prisma.
              </p>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div className="text-muted-foreground text-sm">{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a
                  key={index}
                  href={policy.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}

import { ReactNode } from "react";

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
        { text: "Features", href: "/#features" },
        { text: "Pricing", href: "/pricing" },
        { text: "Templates & PARA", href: "/#templates" },
        { text: "Dashboards", href: "/#dashboards" },
        { text: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", href: "/about" },
        { text: "Blog", href: "/blog" },
        { text: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Documentation", href: "/docs" },
        { text: "Support", href: "/support" },
        { text: "Community", href: "/community" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Email", href: `mailto:${siteConfig.links.email}` },
        { text: "Twitter", href: siteConfig.links.twitter },
        { text: "Github", href: siteConfig.links.github },
      ],
    },
  ],
  copyright = `© ${new Date().getFullYear()} Second Brain. All rights reserved.`,
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
                {logo && logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
              <p className="text-muted-foreground mt-2 max-w-[300px] text-sm">
                A modular productivity and knowledge management platform to
                organize tasks, projects, goals, habits, notes, and resources in
                one connected workspace.
              </p>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
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

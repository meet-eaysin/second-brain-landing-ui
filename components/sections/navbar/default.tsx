import { Brain, Menu } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button, type ButtonProps } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

export default function Navbar({
  logo,
  name = "Second Brain",
  homeUrl = siteConfig.url,
  mobileLinks = [
    { text: "Features", href: "/features" },
    { text: "Modules", href: "/modules" },
    { text: "Templates", href: "/templates" },
    { text: "Docs", href: "/docs" },
    { text: "Pricing", href: "/pricing" },
  ],
  actions = [
    {
      text: "Sign In",
      href: "/login",
      isButton: false,
    },
    {
      text: "Get Started",
      href: siteConfig.getStartedUrl,
      isButton: true,
      variant: "default",
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  return (
    <header
      className={cn(
        "bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 backdrop-blur",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <NavbarComponent className="h-16">
          <NavbarLeft>
            <a
              href={homeUrl}
              className="mr-3 flex items-center gap-2 text-lg font-bold"
            >
              <div className="flex items-center overflow-hidden whitespace-nowrap">
                <Brain className="me-2" size={17} />
                <span>{name}</span>
              </div>

              <span className="bg-muted rounded-full px-2 py-1 text-xs">
                v1.0
              </span>
            </a>

            {showNavigation && (
              <nav className="hidden items-center space-x-8 md:flex">
                {mobileLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="hover:text-foreground text-sm transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </nav>
            )}
          </NavbarLeft>

          <NavbarRight>
            {/* Social Icons */}
            <div className="hidden items-center gap-2 md:flex">
              {/* GitHub */}
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Button>
              {/* Twitter/X */}
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Button>
              {/* LinkedIn */}
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 5.43 3.42 7 1.5 7S-1.98 5.43-1.98 3.5 0.57 0 2.5 0s2.48 1.57 2.48 3.5zM.02 24h4.96V7.98H.02V24zM8.9 7.98h4.76v2.16h.07c.66-1.25 2.27-2.57 4.67-2.57 4.99 0 5.91 3.29 5.91 7.57V24h-4.96v-7.95c0-1.9-.04-4.34-2.64-4.34-2.64 0-3.05 2.07-3.05 4.21V24H8.9V7.98z" />
                </svg>
              </Button>
            </div>

            {actions.map((action, index) =>
              action.isButton ? (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  size="sm"
                  asChild
                  className="hidden md:inline-flex"
                >
                  <a href={action.href}>
                    {action.icon}
                    {action.text}
                    {action.iconRight}
                  </a>
                </Button>
              ) : (
                <a
                  key={index}
                  href={action.href}
                  className="hidden text-sm md:block"
                >
                  {action.text}
                </a>
              ),
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href={homeUrl}
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>{name}</span>
                  </a>
                  {mobileLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.text}
                    </a>
                  ))}
                  <div className="mt-4 flex flex-col gap-3">
                    {actions.map((action, index) =>
                      action.isButton ? (
                        <Button
                          key={index}
                          variant={action.variant || "default"}
                          asChild
                        >
                          <a href={action.href}>{action.text}</a>
                        </Button>
                      ) : (
                        <a
                          key={index}
                          href={action.href}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          {action.text}
                        </a>
                      ),
                    )}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}

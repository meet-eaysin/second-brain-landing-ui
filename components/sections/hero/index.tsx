"use client";

import { ArrowRightIcon, Brain, Github } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Badge } from "../../ui/badge";
import { Button, type ButtonProps } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import { Section } from "../../ui/section";
import Screenshot from "../../ui/screenshot";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = "Organize Your Mind, Amplify Your Output",
  description = "Second Brain is a modular, type-safe platform that unifies your tasks, projects, and knowledge. Structure your workflow your way, with deeply connected data and powerful visualizations.",
  mockup = (
    <Screenshot
      srcLight="/dashboard-light.png"
      srcDark="/dashboard-dark.png"
      alt="Second Brain app screenshot"
      width={1248}
      height={765}
      className="w-full"
    />
  ),
  badge = (
    <Badge
      variant="outline"
      className="animate-pulse border-brand/30 bg-brand/10 text-brand"
    >
      <Brain className="mr-1 h-3 w-3" />
      AI Insights — Coming Soon
    </Badge>
  ),
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Explore the Demo",
      variant: "default",
      iconRight: <ArrowRightIcon className="ml-2 h-4 w-4" />,
    },
    {
      href: siteConfig.links.github,
      text: "GitHub",
      variant: "glow",
      icon: <Github className="mr-2 size-4" />,
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}
          <h1 className="animate-appear relative z-10 inline-block bg-gradient-to-r from-foreground to-foreground dark:to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <p className="animate-appear text-muted-foreground relative z-10 max-w-[740px] text-balance text-lg font-medium opacity-0 delay-100 sm:text-xl">
            {description}
          </p>

          {/* CTA Buttons */}
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex flex-wrap justify-center gap-4 opacity-0 delay-300">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                >
                  <a href={button.href}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Mockup section */}
        {mockup !== false && (
          <div className="relative w-full pt-12">
            <MockupFrame
              className="animate-appear opacity-0 delay-700"
              size="small"
            >
              <Mockup
                type="responsive"
                className="bg-background/90 w-full rounded-xl border-0"
              >
                {mockup}
              </Mockup>
            </MockupFrame>
            <Glow
              variant="top"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
          </div>
        )}
      </div>
    </Section>
  );
}

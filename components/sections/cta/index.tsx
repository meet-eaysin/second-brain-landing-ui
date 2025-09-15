import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button, type ButtonProps } from "../../ui/button";
import Glow from "../../ui/glow";
import { Section } from "../../ui/section";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface CTAProps {
  title?: string;
  buttons?: CTAButtonProps[] | false;
  className?: string;
}

export default function CTA({
  title = "Ready to See the System in Action?",
  buttons = [
    {
      href: siteConfig.links.demo,
      text: "View Live Demo",
      variant: "default",
    },
    {
      href: "/pricing",
      text: "Explore the Code",
      variant: "outline",
    },
  ],
  className,
}: CTAProps) {
  return (
    <Section className={cn("group relative overflow-hidden", className)}>
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="max-w-[640px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {buttons !== false && buttons.length > 0 && (
          <div className="flex justify-center gap-4">
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
      <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}

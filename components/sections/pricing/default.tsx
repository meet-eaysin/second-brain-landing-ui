import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Section } from "../../ui/section";
import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Badge } from "../../ui/badge";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Future Plans for Second Brain",
  description = "Experience the full power of modular productivity. Comprehensive plans designed for every workflow.",
  plans = [
    {
      name: "Free",
      description: "For individuals starting their productivity journey",
      price: 0,
      priceNote: "Always free. Core experience included.",
      cta: {
        variant: "glow",
        label: "Get Started",
        href: "/signup",
      },
      features: [
        "Tasks, Notes, Projects & Habits modules",
        "1 Personal Workspace",
        "Basic custom properties",
        "Table, Board & Calendar views",
        "Local data storage",
      ],
      variant: "default",
    },
    {
      name: "Pro",
      description: "For power users needing advanced capabilities",
      price: 12,
      priceNote: "Monthly per user. All premium features.",
      cta: {
        variant: "default",
        label: "Coming Soon",
        href: "#",
        disabled: true,
      },
      features: [
        "Everything in Free",
        "All modules: Goals, Journal, Finance, People, Resources",
        "Advanced custom properties & formulas",
        "Timeline, Gallery & List views",
        "AI-assisted content generation",
        "Advanced dashboards & analytics",
        "Cloud sync & backup",
        "Priority email support",
      ],
      variant: "glow-brand",
      badge: (
        <Badge variant="outline" className="ml-2 border-brand/30 text-brand">
          Coming Soon
        </Badge>
      ),
    },
    {
      name: "Team",
      description: "For teams collaborating in shared workspaces",
      price: 8,
      priceNote: "Monthly per user (min 5 seats). Team collaboration.",
      cta: {
        variant: "default",
        label: "Coming Soon",
        href: "#",
        disabled: true,
      },
      features: [
        "Everything in Pro",
        "Shared team workspaces",
        "Advanced user permissions & roles",
        "Real-time collaboration",
        "Team AI knowledge base",
        "Advanced automation & workflows",
        "Audit logs & activity history",
        "Dedicated account manager",
      ],
      variant: "glow",
      badge: (
        <Badge variant="outline" className="ml-2 border-brand/30 text-brand">
          Coming Later
        </Badge>
      ),
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon as ReactNode}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
                badge={plan.badge}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

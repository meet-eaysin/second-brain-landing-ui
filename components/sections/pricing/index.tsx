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
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that fits your productivity needs. Start free and upgrade as you grow.",
  plans = [
    {
      name: "Free",
      description: "Perfect for individuals getting started",
      price: 0,
      priceNote: "Free forever. No credit card required.",
      cta: {
        variant: "glow",
        label: "Get Started Free",
        href: "/signup",
      },
      features: [
        "Core modules: Tasks, Notes, Projects",
        "1 Personal Workspace",
        "Basic database properties",
        "Table, Board & Calendar views",
        "Local data storage",
        "Community support",
      ],
      variant: "default",
    },
    {
      name: "Pro",
      description: "For power users and professionals",
      price: 15,
      priceNote: "Per user per month. Billed annually.",
      cta: {
        variant: "default",
        label: "Start Pro Trial",
        href: "/pricing#pro",
      },
      features: [
        "Everything in Free",
        "All 15+ modules unlocked",
        "Advanced custom properties & formulas",
        "All view types: Timeline, Gallery, List",
        "Cloud sync & backup",
        "Advanced search & filtering",
        "Custom dashboards & analytics",
        "Priority email support",
        "API access",
      ],
      variant: "glow-brand",
      badge: (
        <Badge variant="outline" className="ml-2 border-brand/30 text-brand">
          Most Popular
        </Badge>
      ),
    },
    {
      name: "Team",
      description: "For teams and organizations",
      price: 10,
      priceNote: "Per user per month (min 3 seats).",
      cta: {
        variant: "default",
        label: "Contact Sales",
        href: "/contact",
      },
      features: [
        "Everything in Pro",
        "Shared team workspaces",
        "Advanced permissions & roles",
        "Real-time collaboration",
        "Team analytics & reporting",
        "Audit logs & compliance",
        "Custom integrations",
        "Dedicated success manager",
        "SLA support",
      ],
      variant: "glow",
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

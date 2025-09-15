import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Section } from "../../ui/section";
import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Choose the plan that fits your workflow",
  description = "Access all Second Brain modules and features. Flexible, transparent pricing for individuals and teams.",
  plans = [
    {
      name: "Free",
      description:
        "For individuals starting to organize their personal knowledge",
      price: 0,
      priceNote: "Forever free. Core modules included.",
      cta: {
        variant: "glow",
        label: "Get started for free",
        href: "/signup",
      },
      features: [
        "Access to Task, Notes, Projects, and Habits modules",
        "Create 1 Workspace",
        "Basic custom properties for databases",
        "Board, Table, and Calendar views",
      ],
      variant: "default",
    },
    {
      name: "Pro",
      description: "For power users who need full flexibility and analytics",
      price: 49,
      priceNote:
        "Monthly subscription. Includes all modules and advanced features.",
      cta: {
        variant: "default",
        label: "Upgrade to Pro",
        href: "/signup/pro",
      },
      features: [
        "Unlimited Workspaces",
        "All modules: Task, Notes, Projects, Habits, Goals, Journal, Finance, People, Resources, Content, etc.",
        "Custom properties and multiple database views",
        "Dashboard, Analytics, and Notifications",
      ],
      variant: "glow-brand",
    },
    {
      name: "Team",
      description: "For teams collaborating across projects and tasks",
      price: 199,
      priceNote: "Monthly subscription. Full team access.",
      cta: {
        variant: "default",
        label: "Upgrade for your team",
        href: "/signup/team",
      },
      features: [
        "Everything in Pro",
        "Team collaboration features",
        "Shared Workspaces and Projects",
        "Advanced user permissions and roles",
        "Priority support",
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
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

import { ReactNode } from "react";

import { Section } from "../../ui/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  items = [
    {
      question:
        "What makes Second Brain different from other productivity tools?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Second Brain offers a truly modular architecture with 15+ specialized
          modules that work together seamlessly. Unlike rigid tools, you can
          customize every aspect of your workspace while maintaining powerful
          relationships between your data. It's designed to adapt to your
          workflow, not force you to adapt to it.
        </p>
      ),
    },
    {
      question: "How many modules are available?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Second Brain includes 15+ specialized modules including Tasks,
          Projects, Notes, Databases, Calendar, People, Finance, Journal, Goals,
          Templates, Search, and more. Each module is pre-configured for its
          purpose but fully customizable with your own properties, views, and
          workflows.
        </p>
      ),
    },
    {
      question: "Can I import data from other tools?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Yes! Second Brain supports importing data from popular tools like
          Notion, Trello, Asana, and Todoist. We also provide CSV import/export
          capabilities and API access for custom integrations. Our team can help
          with complex migrations.
        </p>
      ),
    },
    {
      question: "Is this a portfolio project?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Yes! This is a personal portfolio showcase demonstrating the Second
          Brain productivity platform. The application is currently in
          development and serves as an example of modern web development with
          Next.js, TypeScript, and advanced UI components.
        </p>
      ),
    },
    {
      question: "What technologies are used?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          The landing page is built with Next.js 15, Tailwind CSS 4, shadcn/ui
          components, and TypeScript. The full application uses a modular
          architecture with React, Node.js, and modern web technologies for a
          comprehensive productivity system.
        </p>
      ),
    },
    {
      question: "Does Second Brain support team collaboration?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Absolutely. Team workspaces allow multiple users with role-based
          permissions, real-time collaboration, shared dashboards, and audit
          logs. You can invite unlimited team members and manage permissions at
          the workspace, module, and item levels.
        </p>
      ),
    },
    {
      question: "How secure is my data?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Security is our top priority. We use end-to-end encryption, regular
          security audits, SOC 2 compliance, and industry-standard practices.
          Your data is encrypted at rest and in transit, with regular backups
          and disaster recovery procedures in place.
        </p>
      ),
    },
    {
      question: "Can I access my data offline?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Yes! Second Brain works offline with local data storage. Your changes
          sync automatically when you reconnect. Pro and Team plans include
          cloud backup and sync across devices.
        </p>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}

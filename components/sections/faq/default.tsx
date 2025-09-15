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
      question: "What is Second Brain?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Second Brain is a modular productivity and knowledge management
          platform that acts as an external extension of your mind. It helps you
          organize tasks, projects, goals, habits, notes, and resources in one
          connected workspace, with the flexibility to create custom modules and
          track relationships between all your data.
        </p>
      ),
    },
    {
      question: "How does the modular system work?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Every workspace is built from modules like Tasks, Projects, Goals,
          Habits, Notes, Journal, and more. Each module is pre-configured for
          its purpose but fully customizable, allowing you to add your own
          properties, views, and templates, or even create entirely new modules.
        </p>
      ),
    },
    {
      question: "What is the property system?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Every item in Second Brain is powered by a typed property system.
          Properties like text, number, date, select, relation, formula, and
          media allow you to structure your data intelligently. You can link
          items across modules to see all connections in one place.
        </p>
      ),
    },
    {
      question: "Can I visualize my data in different ways?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Yes! Each module supports multiple views, including Table, Board
          (Kanban), Gallery, List, Calendar, and Timeline. Views can be
          filtered, sorted, and grouped, letting you organize and explore your
          data exactly how you want.
        </p>
      ),
    },
    {
      question: "Does Second Brain support collaboration?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Absolutely. Team workspaces allow multiple users with role-based
          permissions, commenting, shared dashboards, and collaborative project
          management, all while maintaining data integrity and security.
        </p>
      ),
    },
    {
      question: "Can I use templates and pre-built systems?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Yes. Each module comes with intelligent pre-defined templates (e.g.,
          Meeting Notes, Daily Habits) and you can also create your own.
          Additionally, the platform supports PARA methodology for organizing
          Projects, Areas, Resources, and Archives.
        </p>
      ),
    },
    {
      question: "Is my data secure?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Absolutely. Second Brain uses industry-standard encryption and
          security practices, ensuring your data stays safe and private while
          remaining easily accessible within your workspace.
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

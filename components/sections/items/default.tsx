import { ReactNode } from "react";
import {
  CheckSquare,
  Clipboard,
  FileText,
  Target,
  BookOpen,
  Users,
  Activity,
  DollarSign,
  Link,
  Database,
  Braces,
  Workflow,
} from "lucide-react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Built on a Powerful, Modular Foundation",
  items = [
    {
      title: "Modular Architecture",
      description:
        "Pre-built databases (Tasks, Notes, Projects) that are fully extensible. Create your own modules for any use case.",
      icon: <Database className="size-5 stroke-1" />,
    },
    {
      title: "Type-Safe Properties",
      description:
        "Define strict schemas with rich types: Relations, Formulas, Selects, Dates, and more. The core of your data integrity.",
      icon: <Braces className="size-5 stroke-1" />,
    },
    {
      title: "Relational Data",
      description:
        "Connect anything to everything. Link a Task to a Project, a Note to a Person, and see the entire context instantly.",
      icon: <Workflow className="size-5 stroke-1" />,
    },
    {
      title: "Tasks & Projects",
      description:
        "More than a todo list. Actionable items with custom statuses, priorities, and relations to goals and knowledge.",
      icon: <CheckSquare className="size-5 stroke-1" />,
    },
    {
      title: "Knowledge Base",
      description:
        "Organize notes, resources, and journals. Connect them to your active projects for a seamless workflow.",
      icon: <FileText className="size-5 stroke-1" />,
    },
    {
      title: "Goals & Habits",
      description:
        "Track objectives and build routines. Measure progress with dashboards powered by your actual task and project data.",
      icon: <Target className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[720px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          {title}
        </h2>

        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <Item
                key={index}
                className="hover:border-brand/20 transition-colors"
              >
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon className="bg-brand/10 text-brand">
                    {item.icon}
                  </ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

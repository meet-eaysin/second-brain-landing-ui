import { ReactNode } from "react";
import {
  CheckSquare,
  Clipboard,
  FileText,
  Grid,
  Target,
  BookOpen,
  Users,
  Database as DatabaseIcon,
  Activity,
  DollarSign,
  Link,
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
  title = "All the modules you need to organize your Second Brain",
  items = [
    {
      title: "Tasks",
      description: "Organize todos, set priorities, and track progress",
      icon: <CheckSquare className="size-5 stroke-1" />,
    },
    {
      title: "Projects",
      description: "Manage projects, deadlines, and deliverables",
      icon: <Clipboard className="size-5 stroke-1" />,
    },
    {
      title: "Goals",
      description: "Set, track, and achieve your objectives",
      icon: <Target className="size-5 stroke-1" />,
    },
    {
      title: "Habits",
      description: "Build routines and measure daily consistency",
      icon: <Activity className="size-5 stroke-1" />,
    },
    {
      title: "Notes",
      description: "Capture ideas, research, and personal notes",
      icon: <FileText className="size-5 stroke-1" />,
    },
    {
      title: "Journal",
      description: "Maintain daily reflections and progress logs",
      icon: <BookOpen className="size-5 stroke-1" />,
    },
    {
      title: "People",
      description: "Manage contacts, relationships, and networks",
      icon: <Users className="size-5 stroke-1" />,
    },
    {
      title: "Finance",
      description: "Track budgets, expenses, and financial goals",
      icon: <DollarSign className="size-5 stroke-1" />,
    },
    {
      title: "Resources",
      description: "Organize links, documents, and references",
      icon: <Link className="size-5 stroke-1" />,
    },
    {
      title: "PARA",
      description:
        "Organize knowledge with Projects, Areas, Resources, Archives",
      icon: <Grid className="size-5 stroke-1" />,
    },
    {
      title: "Workspaces",
      description: "Collaborate and manage different environments",
      icon: <Users className="size-5 stroke-1" />,
    },
    {
      title: "Database",
      description: "Create custom tables and multiple views like Notion",
      icon: <DatabaseIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[720px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>

        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
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

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
  Calendar,
  Search,
  Settings,
  FolderOpen,
  BarChart3,
  Shield,
  Zap,
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
  title = "15+ Specialized Modules for Every Workflow",
  items = [
    {
      title: "Task Management",
      description:
        "Advanced task tracking with priorities, due dates, dependencies, and custom workflows. Connect tasks to projects and goals.",
      icon: <CheckSquare className="size-5 stroke-1" />,
    },
    {
      title: "Project Planning",
      description:
        "Comprehensive project management with timelines, resource allocation, and progress tracking across teams.",
      icon: <FolderOpen className="size-5 stroke-1" />,
    },
    {
      title: "Rich Text Notes",
      description:
        "Notion-like editor for creating detailed notes, documentation, and knowledge base entries with rich formatting.",
      icon: <FileText className="size-5 stroke-1" />,
    },
    {
      title: "Custom Databases",
      description:
        "Build flexible databases with type-safe properties: Text, Number, Date, Select, Relation, Formula, and Media types.",
      icon: <Database className="size-5 stroke-1" />,
    },
    {
      title: "Calendar Integration",
      description:
        "Schedule management with calendar views, reminders, and integration with external calendar systems.",
      icon: <Calendar className="size-5 stroke-1" />,
    },
    {
      title: "PARA Method",
      description:
        "Organize knowledge using the PARA system: Projects, Areas, Resources, Archive for systematic information management.",
      icon: <Workflow className="size-5 stroke-1" />,
    },
    {
      title: "People & Contacts",
      description:
        "Contact management with detailed profiles, relationship tracking, and team collaboration features.",
      icon: <Users className="size-5 stroke-1" />,
    },
    {
      title: "Financial Tracking",
      description:
        "Budget management, expense tracking, and financial goal setting with detailed reporting and analytics.",
      icon: <DollarSign className="size-5 stroke-1" />,
    },
    {
      title: "Advanced Search",
      description:
        "Powerful full-text search across all content with filters, advanced queries, and instant results.",
      icon: <Search className="size-5 stroke-1" />,
    },
    {
      title: "Dashboard Analytics",
      description:
        "Custom dashboards with charts, statistics, and widgets to visualize productivity and progress metrics.",
      icon: <BarChart3 className="size-5 stroke-1" />,
    },
    {
      title: "Workspace Management",
      description:
        "Multi-workspace support with permissions, roles, and collaborative features for teams and organizations.",
      icon: <Shield className="size-5 stroke-1" />,
    },
    {
      title: "Template System",
      description:
        "Reusable templates for common workflows, projects, and content types to accelerate productivity.",
      icon: <Clipboard className="size-5 stroke-1" />,
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

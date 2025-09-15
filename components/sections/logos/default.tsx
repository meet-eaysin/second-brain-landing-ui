import { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { Badge } from "../../ui/badge";
import Logo from "../../ui/logo";
import { Section } from "../../ui/section";

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
  Folder,
  Link,
} from "lucide-react";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "All-in-one Second Brain modules",
  badge = (
    <Badge variant="outline" className="border-brand/30 text-brand">
      Last updated: {siteConfig.stats.updated}
    </Badge>
  ),
  logos = [
    <Logo
      key="tasks"
      image={CheckSquare}
      name="Tasks"
      badge="Organize todos"
    />,
    <Logo
      key="projects"
      image={Clipboard}
      name="Projects"
      badge="Track progress"
    />,
    <Logo key="goals" image={Target} name="Goals" badge="Set objectives" />,
    <Logo key="habits" image={Activity} name="Habits" badge="Track routines" />,
    <Logo key="notes" image={FileText} name="Notes" badge="Capture ideas" />,
    <Logo
      key="journal"
      image={BookOpen}
      name="Journal"
      badge="Daily reflections"
    />,
    <Logo key="people" image={Users} name="People" badge="Manage contacts" />,
    <Logo
      key="finance"
      image={DollarSign}
      name="Finance"
      badge="Budget tracking"
    />,
    <Logo
      key="resources"
      image={Link}
      name="Resources"
      badge="Knowledge base"
    />,
    <Logo
      key="para"
      image={Grid}
      name="PARA"
      badge="Projects • Areas • Resources • Archive"
    />,
    <Logo
      key="workspaces"
      image={Folder}
      name="Workspaces"
      badge="Team collaboration"
    />,
    <Logo
      key="database"
      image={DatabaseIcon}
      name="Database"
      badge="Custom tables & views"
    />,
  ],
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-4">
          {badge !== false && badge}
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-[720px] text-sm sm:text-base">
            A modular workspace with pre-built systems for tasks, projects,
            goals, habits, notes, finance, and more — fully customizable to fit
            your workflow.
          </p>
        </div>

        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-10">
            {logos}
          </div>
        )}
      </div>
    </Section>
  );
}

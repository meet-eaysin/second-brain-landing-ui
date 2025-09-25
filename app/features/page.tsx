import { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import Navbar from "../../components/sections/navbar";
import Footer from "../../components/sections/footer";

export const metadata: Metadata = {
  title: "Features | Second Brain",
  description: "Explore all the powerful features of Second Brain - your complete productivity and knowledge management platform.",
};

const features = [
  {
    title: "Task Management",
    description: "Organize and track tasks with advanced filtering, priorities, and due dates. Connect tasks to projects and goals for better workflow management.",
    icon: "📋",
    category: "Productivity"
  },
  {
    title: "Project Planning",
    description: "Plan and manage projects with timelines, dependencies, and resource allocation. Track progress and collaborate with team members.",
    icon: "🎯",
    category: "Productivity"
  },
  {
    title: "Rich Text Notes",
    description: "Create rich, formatted notes with Notion-like editing capabilities. Link notes together and build a personal knowledge base.",
    icon: "📝",
    category: "Knowledge"
  },
  {
    title: "Custom Databases",
    description: "Build custom databases with flexible property types including text, numbers, dates, selects, relations, and formulas.",
    icon: "🗄️",
    category: "Data"
  },
  {
    title: "Calendar Integration",
    description: "Schedule tasks, meetings, and events. Sync with external calendars and get reminders for important deadlines.",
    icon: "📅",
    category: "Organization"
  },
  {
    title: "PARA Method",
    description: "Organize your knowledge using the PARA method: Projects, Areas, Resources, and Archive for systematic information management.",
    icon: "🗂️",
    category: "Knowledge"
  },
  {
    title: "People & Contacts",
    description: "Manage contacts, relationships, and team members. Track interactions and maintain detailed profiles.",
    icon: "👥",
    category: "Collaboration"
  },
  {
    title: "Financial Tracking",
    description: "Monitor budgets, expenses, and financial goals. Generate reports and track spending patterns.",
    icon: "💰",
    category: "Finance"
  },
  {
    title: "Template System",
    description: "Use built-in templates or create custom ones for common workflows, projects, and content types.",
    icon: "📋",
    category: "Productivity"
  },
  {
    title: "Advanced Search",
    description: "Powerful full-text search across all your content. Find information quickly with filters and advanced query options.",
    icon: "🔍",
    category: "Search"
  },
  {
    title: "Dashboard Analytics",
    description: "Build custom dashboards with charts, stats, and widgets to visualize your productivity and progress.",
    icon: "📊",
    category: "Analytics"
  },
  {
    title: "Multi-View System",
    description: "Switch between Table, Board, Gallery, List, Calendar, and Timeline views to see your data the way you want.",
    icon: "👁️",
    category: "Views"
  }
];

const categories = ["All", "Productivity", "Knowledge", "Data", "Organization", "Collaboration", "Finance", "Search", "Analytics", "Views"];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Section className="pt-24 pb-16">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Features Overview
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Everything you need to build your Second Brain
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the powerful features that make Second Brain your complete productivity and knowledge management platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {feature.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-muted/50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Join thousands of users who have transformed their productivity with Second Brain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href={siteConfig.getStartedUrl}>
                    Start Free Trial
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={siteConfig.links.github}>
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
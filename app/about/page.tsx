import { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import Navbar from "../../components/sections/navbar";
import Footer from "../../components/sections/footer";

export const metadata: Metadata = {
  title: "About | Second Brain",
  description: "Learn about Second Brain's mission to help individuals and teams build better productivity systems and knowledge management workflows.",
};

const values = [
  {
    title: "Modular by Design",
    description: "We believe productivity tools should adapt to your workflow, not the other way around. That's why Second Brain is built with a modular architecture that grows with you.",
    icon: "🧩"
  },
  {
    title: "Knowledge First",
    description: "Your knowledge is your most valuable asset. We focus on creating tools that help you capture, organize, and leverage your knowledge effectively.",
    icon: "🧠"
  },
  {
    title: "Privacy & Security",
    description: "Your data belongs to you. We prioritize security, privacy, and data ownership, ensuring you have full control over your information.",
    icon: "🔒"
  },
  {
    title: "Open & Extensible",
    description: "We believe in open standards and extensibility. Second Brain is designed to integrate with your existing tools and workflows.",
    icon: "🔓"
  }
];

const stats = [
  { label: "Active Users", value: "10,000+" },
  { label: "Workspaces Created", value: "3,400+" },
  { label: "Databases Built", value: "1,500+" },
  { label: "Years in Development", value: "2+" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Section className="pt-24 pb-16">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Story
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Building the future of productivity
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Second Brain was born from the frustration of using disconnected productivity tools.
              We believe everyone deserves a seamless, integrated system to manage their knowledge and tasks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Join our mission</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Help us build the ultimate productivity platform. Whether you're a developer, designer,
              or productivity enthusiast, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href={siteConfig.links.github}>
                  Contribute on GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={siteConfig.links.twitter}>
                  Follow us on Twitter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
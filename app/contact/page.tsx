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
  title: "Contact | Second Brain",
  description: "Get in touch with the Second Brain team. We're here to help with questions, feedback, or support.",
};

const contactMethods = [
  {
    title: "Email Support",
    description: "Send us an email for general inquiries, support, or feedback.",
    contact: siteConfig.links.email,
    icon: "📧",
    action: "Send Email"
  },
  {
    title: "GitHub Issues",
    description: "Report bugs, request features, or contribute to the project.",
    contact: siteConfig.links.github,
    icon: "🐛",
    action: "Open Issue"
  },
  {
    title: "Twitter",
    description: "Follow us for updates, tips, and community discussions.",
    contact: siteConfig.links.twitter,
    icon: "🐦",
    action: "Follow Us"
  },
  {
    title: "LinkedIn",
    description: "Connect with us professionally and stay updated on company news.",
    contact: siteConfig.links.linkedin,
    icon: "💼",
    action: "Connect"
  }
];

const offices = [
  {
    city: "Remote First",
    description: "Our team works remotely from around the world, allowing us to build the best possible product for our global community."
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Section className="pt-24 pb-16">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              We'd love to hear from you
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about Second Brain? Need support? Want to share feedback?
              We're here to help and always excited to connect with our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="text-3xl mb-2">{method.icon}</div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription className="text-base">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={method.contact}>
                      {method.action}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Office</h2>
            <div className="max-w-md mx-auto">
              {offices.map((office, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{office.city}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {office.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Join thousands of users who have transformed their productivity with Second Brain.
            </p>
            <Button size="lg" asChild>
              <Link href={siteConfig.getStartedUrl}>
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
import { Metadata } from "next";

import { Badge } from "../../components/ui/badge";
import { Section } from "../../components/ui/section";
import Navbar from "../../components/sections/navbar";
import Footer from "../../components/sections/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Second Brain",
  description: "Learn how Second Brain protects your privacy and handles your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4">
              Legal
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: September 25, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account,
              use our services, or contact us for support. This includes:
            </p>
            <ul>
              <li>Account information (name, email, password)</li>
              <li>Content you create or upload (notes, tasks, projects, etc.)</li>
              <li>Usage data and analytics</li>
              <li>Communications with our support team</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Communicate with you about products, services, and promotions</li>
              <li>Monitor and analyze usage patterns</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. This
              includes encryption of data in transit and at rest, regular security audits, and access
              controls.
            </p>

            <h2>Data Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties
              without your consent, except as described in this policy. We may share your information
              in the following circumstances:
            </p>
            <ul>
              <li>With service providers who assist us in operating our platform</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>In connection with a business transfer</li>
            </ul>

            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Data portability</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage,
              and provide personalized content. You can control cookie settings through your browser.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your data may be transferred to and processed in countries other than your own.
              We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect
              personal information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any
              material changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@secondbrain.app</li>
              <li>Address: [Company Address]</li>
            </ul>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
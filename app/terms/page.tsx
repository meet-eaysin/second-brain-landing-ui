import { Metadata } from "next";

import { Badge } from "../../components/ui/badge";
import { Section } from "../../components/ui/section";
import Navbar from "../../components/sections/navbar";
import Footer from "../../components/sections/footer";

export const metadata: Metadata = {
  title: "Terms of Service | Second Brain",
  description: "Read the terms and conditions for using Second Brain services.",
};

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: September 25, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using Second Brain, you accept and agree to be bound by the terms
              and provision of this agreement. If you do not agree to abide by the above,
              please do not use this service.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily use Second Brain for personal and commercial
              use, subject to the following restrictions:
            </p>
            <ul>
              <li>You must not modify or copy the materials</li>
              <li>You must not use the materials for any commercial purpose</li>
              <li>You must not attempt to decompile or reverse engineer any software</li>
              <li>You must not remove any copyright or other proprietary notations</li>
            </ul>

            <h2>User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate,
              complete, and current at all times. You are responsible for safeguarding the password
              and for all activities that occur under your account.
            </p>

            <h2>Acceptable Use</h2>
            <p>
              You agree not to use the service:
            </p>
            <ul>
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>

            <h2>Content</h2>
            <p>
              Our service allows you to post, link, store, share and otherwise make available certain
              information, text, graphics, or other material. You are responsible for content that you
              post to the service, including its legality, reliability, and appropriateness.
            </p>

            <h2>Prohibited Uses</h2>
            <p>
              You may not use our service:
            </p>
            <ul>
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations</li>
              <li>To infringe upon or violate our intellectual property rights</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability,
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The information on this website is provided on an 'as is' basis. To the fullest extent
              permitted by law, this Company excludes all representations, warranties, conditions
              and terms whether express or implied, statutory or otherwise.
            </p>

            <h2>Limitations</h2>
            <p>
              In no event shall Second Brain, nor its directors, employees, partners, agents,
              suppliers, or affiliates, be liable for any indirect, incidental, special, consequential,
              or punitive damages, including without limitation, loss of profits, data, use, goodwill,
              or other intangible losses.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which
              our company is incorporated, without regard to conflict of law provisions.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
              If a revision is material, we will try to provide at least 30 days notice prior to any new
              terms taking effect.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <ul>
              <li>Email: legal@secondbrain.app</li>
              <li>Address: [Company Address]</li>
            </ul>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
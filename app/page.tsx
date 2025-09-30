import CTA from "../components/sections/cta";
import FAQ from "../components/sections/faq";
import Footer from "../components/sections/footer";
import Hero from "../components/sections/hero";
import Items from "../components/sections/items";
import Navbar from "../components/sections/navbar";
import Pricing from "../components/sections/pricing";
import Stats from "../components/sections/stats";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full overflow-hidden">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="items">
        <Items />
      </section>
      <Stats />
      {/* <section id="pricing">
        <Pricing />
      </section> */}
      <section id="faq">
        <FAQ />
      </section>
      <CTA />
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustPillars from "@/components/TrustPillars";
import Services from "@/components/Services";
import ForParents from "@/components/ForParents";
import Process from "@/components/Process";
import MarketInsights from "@/components/MarketInsights";
import PricingTiers from "@/components/PricingTiers";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <TrustPillars />
        <Services />
        <ForParents />
        <Process />
        <MarketInsights />
        <PricingTiers />
        <CaseStudies />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

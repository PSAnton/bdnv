"use client";

import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { Navbar } from "@/components/navbar";
import { PricingSection } from "@/components/pricing-section";
import { SecuritySection } from "@/components/security-section";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ParticleBackground } from "@/components/particle-background";
import { usePrivy } from "@privy-io/react-auth";

export default function Home() {
  
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen flex flex-col relative overflow-hidden">

        
        
        <ParticleBackground />
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <HowItWorks />
          <PricingSection />
          <SecuritySection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
'use client';
import Feature from "@/components/landing/feature";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Overview from "@/components/landing/overview";
import UseCaseImpact from "@/components/landing/use-case-impact";
import WhyNow from "@/components/landing/why-now";
import { GlowCapture } from "@codaworks/react-glow";
import { ParallaxSection } from '@/components/ui/ParallaxSection';
import { SectionSpacer } from '@/components/ui/SectionSpacer';
import { useEffect, useState } from 'react';
import Architecture from "@/components/landing/architecture";
import PlatformDemo from "@/components/landing/platform-demo";

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`bg-white min-h-screen overflow-x-hidden w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <GlowCapture>
        <Header />
        <div className="w-full">
          {/* Hero Section - Full Screen */}
          <div className="relative z-10">
            <Overview />
            <SectionSpacer size="lg" />
          </div>

          {/* Platform Highlights Section */}
          <div className="relative z-20 bg-gradient-to-b from-white to-gray-50">
            <ParallaxSection 
              speed={0.3} 
              fadeIn={true}
              scaleEffect={false}
              className="py-16 md:py-24"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Feature />
              </div>
              <SectionSpacer size="lg" />
            </ParallaxSection>
          </div>

          {/* Platform Demo Section */}
          <div className="relative z-20 bg-white">
            <ParallaxSection 
              speed={0.3} 
              fadeIn={true}
              scaleEffect={false}
              className="py-16 md:py-24"
            >
              <PlatformDemo />
              <SectionSpacer size="lg" />
            </ParallaxSection>
          </div>

          {/* Architecture Section */}
          <div className="relative z-20 bg-gradient-to-b from-white to-gray-50">
            <ParallaxSection 
              speed={0.3} 
              fadeIn={true}
              scaleEffect={false}
              className="py-16 md:py-24"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Architecture />
              </div>
              <SectionSpacer size="lg" />
            </ParallaxSection>
          </div>      

          {/* Use Case Impact Section */}
          <div className="relative z-30 bg-white">
            <ParallaxSection 
              speed={0.3} 
              id="use-case-impact"
              fadeIn={true}
              scaleEffect={false}
            >
              <UseCaseImpact />
              <SectionSpacer size="lg" />
            </ParallaxSection>
          </div>

          {/* Why Now Section */}
          <div className="relative z-40 bg-gray-50">
            <ParallaxSection 
              speed={0.3} 
              id="why-now"
              fadeIn={true}
              scaleEffect={false}
              blurEffect={false}
            >
              <WhyNow />
              <SectionSpacer size="sm" />
            </ParallaxSection>
          </div>
        </div>
        <Footer />
      </GlowCapture>
    </div>
  );
}
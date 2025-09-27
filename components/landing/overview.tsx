"use client";

import DM_Sans from "@/lib/fonts/dm-sans";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { formatTypingSequence } from "@/lib/utils";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const sequence = formatTypingSequence([
  "From Raw Data to Intelligent Products - Instantly.",
  "Automation-first data platform for enterprises.",
  "Zero-code orchestration for data pipelines.",
  "GenAI-ready platform for modern businesses.",
  "Transform data chaos into intelligent products.",
  "No-code, no-deploy, no-complexity data platform.",
  "Enterprise data transformation made simple.",
  "Turn data into revenue-generating products.",
  "The future of data is automation-first.",
]);

export default function Overview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.3, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ y }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background SVGs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Line 1 - Top Left to Bottom Right */}
        <div className="absolute -left-20 sm:-left-40 -top-20 sm:-top-50 opacity-1">
          <Image
            src="/line1.svg" 
            alt="" 
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -right-20 sm:-right-40 -top-20 sm:-top-50 opacity-1">
          <Image 
            src="/line1.svg" 
            alt="" 
            width={800}
            height={600}
            className="w-full h-full object-cover scale-x-[-1]"
          />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-[60vh] sm:h-[80vh] opacity-5">
            <div className="grid grid-cols-6 sm:grid-cols-12 grid-rows-3 sm:grid-rows-6 h-full w-full">
              {Array.from({ length: 6 * 3 }).map((_, i) => (
                <div key={i} className="border border-gray-400"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
   
      
      {/* Content Container */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center space-y-8 max-w-6xl mx-auto px-8"
      >
        {/* Main Headline with Typing Animation */}
        <div className="space-y-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight min-h-24 sm:min-h-32">
            <TypeAnimation
              preRenderFirstString={true}
              speed={50}
              repeat={Infinity}
              sequence={sequence}
              className="bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent"
            />
          </h1>
          
          {/* Sub-headline */}
          <p className={`text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-4 ${DM_Sans.className}`}>
            An automation-first platform that lets you orchestrate data, deploy AI, and launch digital products — without writing code or building infra.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg w-full sm:w-auto">
            Talk to Us
          </Button>
          <Button variant="outline" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg shadow-lg w-full sm:w-auto">
            See the Platform
          </Button>
        </div>

        {/* Video Card Placeholder */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100">
            <div className="aspect-video bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Platform Demo</h3>
                <p className="text-sm sm:text-base text-gray-600">See USP DataLabs in action</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

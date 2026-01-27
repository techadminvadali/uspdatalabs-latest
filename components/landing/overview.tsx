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
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-16 bg-white"
    >
      {/* Left Side Image */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-0">
        <Image
          src="/left_side.png"
          alt=""
          width={300}
          height={400}
          className="w-auto h-auto max-w-[200px] md:max-w-[300px] opacity-80"
        />
      </div>

      {/* Right Side Image */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-0">
        <Image
          src="/right_side.png"
          alt=""
          width={300}
          height={400}
          className="w-auto h-auto max-w-[200px] md:max-w-[300px] opacity-80"
        />
      </div>
      
   
      
      {/* Content Container */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center max-w-6xl mx-auto px-8"
      >
        {/* Main Headline with Typing Animation */}
        <div className="mb-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4">
            <TypeAnimation
              preRenderFirstString={true}
              speed={50}
              repeat={Infinity}
              sequence={sequence}
              className="text-gray-900"
            />
          </h1>
          
          {/* Sub-headline */}
          <p className={`text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-4 ${DM_Sans.className}`}>
            An automation-first platform that lets you orchestrate data, deploy AI, and launch digital products — without writing code or building infra.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 px-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg w-full sm:w-auto">
            Talk to Us
          </Button>
          <Button variant="outline" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg shadow-lg w-full sm:w-auto">
            See the Platform
          </Button>
        </div>

        {/* Bottom Image */}
        <div className="flex justify-center mt-8">
          <Image
            src="/bottom_image.png"
            alt=""
      width={1000}
      height={1000}
            className="w-auto h-auto max-w-full opacity-90"
          />
        </div>

      </motion.div>
    </motion.div>
  );
}

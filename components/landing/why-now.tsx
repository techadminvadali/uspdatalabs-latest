"use client";

import { Brain, Cloud, Wrench, Zap, TrendingUp, AlertTriangle, Workflow, Boxes } from "lucide-react";
import DM_Sans from "@/lib/fonts/dm-sans";
import { motion } from "framer-motion";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import DotPattern from "@/components/magicui/dot-pattern";
import Ripple from "@/components/magicui/ripple";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Dummy icon component for hover overlay
const DummyIcon = () => <div className="h-12 w-12" />;

const challenges = [
  {
    Icon: DummyIcon,
    name: " ",
    description: (
      <div className="relative">
        <div className="flex items-center justify-center -mt-12 md:-mt-16 lg:-mt-20 pb-3 md:pb-5">
          <Image src="/Arrow.svg" alt="" width={64} height={64} className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 text-blue-500" />
        </div>
        <div className="text-sm md:text-base">GenAI projects stall in RAG complexity and compliance worries</div>
      </div>
    ),
    className: "col-span-4 md:col-span-2 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-6 md:p-8 z-10">
          <div className="text-xl md:text-2xl font-medium text-black text-center">
            <div className="flex items-center justify-center mb-2">
              <Brain className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            Saas-In-SaaS
            <br />
            Simplicity
          </div>
        </div>
        <DotPattern
          className={cn(
            "z-9",
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
      </div>
    ),
  },
  {
    Icon: DummyIcon,
    name: " ",
    description: (
      <div className="relative">
        <div className="flex items-center justify-center -mt-12 md:-mt-16 lg:-mt-20 pb-3 md:pb-5">
          <Image src="/Arrow.svg" alt="" width={64} height={64} className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 text-blue-500" />
        </div>
        <div className="text-sm md:text-base">Heavy engineering effort and human-driven complexity delay transformation journeys</div>
      </div>
    ),
    className: "col-span-4 md:col-span-2 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-6 md:p-8 z-10">
          <div className="text-xl md:text-2xl font-medium text-black text-center">
            <div className="flex items-center justify-center mb-2">
              <Workflow className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            Lean
            <br />
            Automation
          </div>
        </div>
        <DotPattern
          className={cn(
            "z-9",
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
      </div>
    ),
  },
  {
    Icon: DummyIcon,
    name: " ",
    description: (
      <div className="relative">
        <div className="flex items-center justify-center -mt-12 md:-mt-16 lg:-mt-20 pb-3 md:pb-5">
          <Image src="/Arrow.svg" alt="" width={64} height={64} className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 text-blue-500" />
        </div>
        <div className="text-sm md:text-base">Fragmented toolchains create tech debt faster than transformation</div>
      </div>
    ),
    className: "col-span-4 md:col-span-2 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-6 md:p-8 z-10">
          <div className="text-xl md:text-2xl font-medium text-black text-center">
            <div className="flex items-center justify-center mb-2">
              <Boxes className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            One Unified 
            <br />
            Platform
          </div>
        </div>
        <DotPattern
          className={cn(
            "z-9",
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
      </div>
    ),
  },
  {
    Icon: DummyIcon,
    name: " ",
    description: (
      <div className="relative">
        <div className="flex items-center justify-center -mt-12 md:-mt-16 lg:-mt-20 pb-3 md:pb-5">
          <Image src="/Arrow.svg" alt="" width={64} height={64} className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 text-blue-500" />
        </div>
        <div className="text-sm md:text-base">Data transformation is the mountain slowing AI/GenAI adoption.</div>
      </div>
    ),
    className: "col-span-4 md:col-span-2 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-6 md:p-8 z-10">
          <div className="text-xl md:text-2xl font-medium text-black text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            Fast Track To 
            <br />
            AI Gold
          </div>
        </div>
        <DotPattern
          className={cn(
            "z-9",
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
      </div>
    ),
  },
];

export default function WhyNow() {
  return (
    <div className="bg-gray-50 py-12 md:py-20 w-full grid overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 relative"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-800 ${DM_Sans.className}`}>
            Why Now?
          </h2>
          {/* Arrow - smaller on mobile, larger on desktop, flipped horizontally */}
          <Image 
            src="/direction.svg" 
            alt="" 
            width={200} 
            height={200} 
            className="absolute w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] -mt-8 md:-mt-16 lg:-mt-20 left-2 md:left-10 -scale-x-100 pointer-events-none" 
          />
      
          <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-blue-50 border border-blue-200 mb-4 md:mb-6">
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mr-2" />
            <span className="text-sm md:text-base text-blue-700 font-medium">Built for This Moment</span>
          </div>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            The AI wave is crashing over every industry, but most organizations are still paddling in outdated boats.
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <BentoGrid className="grid-cols-4">
            {challenges.map((challenge, idx) => (
              <BentoCard key={idx} {...challenge} />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </div>
  );
}
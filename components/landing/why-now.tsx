"use client";

import { Brain, Cloud, Wrench, Zap, TrendingUp, AlertTriangle,Workflow, Boxes } from "lucide-react";
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
        <div className="flex items-center justify-center -mt-20 pb-5">
          <Image src="/Arrow.svg" alt="" width={64} height={64} className="h-16 w-16 text-blue-500" />
        </div>
        <div>GenAI projects stall in RAG complexity and compliance worries</div>
      </div>
    ),
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium text-black text-center">
            <div className="flex items-center justify-center mb-2">
              <Brain className="w-8 h-8 " />
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
        <div className="flex items-center justify-center -mt-20 pb-5">
          <Image src="/Arrow.svg" alt="" width={64} height={64} className="h-16 w-16 text-blue-500" />
        </div>
        <div>Heavy engineering effort and human-driven complexity delay transformation journeys</div>
      </div>
    ),
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium text-black text-center">
            <div className="flex items-center justify-center mb-2">
            <Workflow className="w-8 h-8 " />
         
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
        <div className="flex items-center justify-center -mt-20 pb-5">
          <Image src="/Arrow.svg" alt="" width={64} height={64} className="h-16 w-16 text-blue-500" />
        </div>
        <div>Fragmented toolchains create tech debt faster than transformation</div>
      </div>
    ),
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium text-black text-center">
            <div className="flex items-center justify-center mb-2">
            <Boxes className="w-8 h-8 " />
         
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
        <div className="flex items-center justify-center -mt-20 pb-5">
          <Image src="/Arrow.svg" alt="" width={64} height={64} className="h-16 w-16 text-blue-500" />
        </div>
        <div >Data transformation is the mountain slowing AI/GenAI adoption.</div>
      </div>
    ),
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium text-black text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 " />
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
    <div className="bg-gray-50 py-20 w-full  grid overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-5xl font-bold mb-6 text-gray-800 ${DM_Sans.className}`}>
            Why Now?
          </h2>
          <Image src="/direction.svg" alt="" width={200} height={200} className=" items-center w-[200px] h-[200px] -mt-20 left-10 -scale-x-100 absolute" />
      
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <Zap className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium">Built for This Moment</span>
            </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The AI wave is crashing over every industry, but most organizations are still paddling in outdated boats.
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
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


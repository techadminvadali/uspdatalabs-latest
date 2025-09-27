"use client";

import DM_Sans from "@/lib/fonts/dm-sans";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { 
  Zap, 
  Code, 
  Network, 
  Shield, 
  Bot, 
  Plug,
  Database,
  Workflow,
  ArrowRight
} from "lucide-react";
import DotPattern from "@/components/magicui/dot-pattern";
import Ripple from "@/components/magicui/ripple";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

const features = [
  {
    Icon: Zap,
    name: "Automation ",
    description: "Drive ingestion, quality, transformation, governance, and AI workflows through configuration — not engineering.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-10 z-10">
          <div className="text-4xl font-medium text-black text-center">
            Zero-Code
            <br />
            Orchestration
          </div>
        </div>
        <DotPattern
          className={cn(
            "z-9",
            "[mask-image:radial-gradient(440px_circle_at_center,white,transparent)]",
          )}
        />
      </div>
    ),
  },
  {
    Icon: Code,
    name: "Saas-in-SaaS Engine",
    description: "Turn data pipelines into business-ready products. No build scripts. No deploy pipelines",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium text-black text-center">
            Deployless
            <br />
          Engine
          </div>
        </div>
        <Ripple />
      </div>
    ),
  },
  {
    Icon: Database,
    name: "Automated Data Marketplace",
    description: "Share data products externally in one-click → we auto-build secure, production-ready APIs behind the scenes.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium text-black text-center">
            Monetizable
            <br />
            APIs
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
    Icon: Network,
    name: "Data Mesh, Simplified",
    description: "Automate domain-aligned modeling and transformations with built-in glossary-to-entity intelligence — making Data Mesh real, fast, and scalable.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-3xl font-medium text-black text-center">
            Domain-Driven
            <br />
            Automation
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
    ),
  },
 
  {
    Icon: Shield,
    name: "Central Governance Without Friction",
    description: "Enforce trust , Role-based access at the most granular business function level through intuitive UI and metadata policies.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium text-black text-center">
            Granular
            <br />
            Security
          </div>
        </div>
        <Ripple />
      </div>
    ),
  },
  {
    Icon: Bot,
    name: "GenAI App Builder",
    description: "Build secure, enterprise-grade GenAI copilots and assistants — No Engineering effort ,No Managemnet of Pipelines ",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium text-black text-center">
            GenAI-Native
            <br />
            Platform
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.3}
          duration={2}
          repeatDelay={0.5}
          className={cn(
            "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-20%] h-[140%] skew-y-6",
          )}
        />
      </div>
    ),
  },
  {
    Icon: Plug,
    name: "Plug and Play. Not Rip and Replace.",
    description: "Connect instantly to your existing Cloud, BI and Security stack — no need to build pipelines or workflows, Public Cloud or On-Premise.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium text-black text-center">
            Native
            <br />
            Integrations
          </div>
        </div>
        <DotPattern
          className={cn(
            "z-9",
            "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]",
          )}
        />
      </div>
    ),
  },
];

export default function Feature() {
  return (
    <div id="platform" className={`${DM_Sans.className} mt-10`}>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6">Platform Highlights</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A next-gen automation-first data platform built to compress engineering cycles, reduce TCO, and fast-track AI & GenAI journeys.
        </p>
      </div>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

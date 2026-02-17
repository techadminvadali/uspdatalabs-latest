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
    name: "Automation",
    description: "Drive ingestion, quality, transformation, governance, and AI workflows through configuration — not engineering.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="flex justify-center items-center h-full w-full relative">
        <div className="text-center z-10 p-10">
          <div className="flex items-center justify-center mb-3">
            <Zap className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
          </div>
          <div className="text-4xl font-semibold bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Zero-Code
            <br />
            Orchestration
          </div>
        </div>
        <DotPattern
          className={cn(
            "absolute inset-0 z-0 opacity-40",
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
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
      <div className="flex justify-center items-center h-full w-full relative">
        <div className="text-center z-10 p-8">
          <div className="flex items-center justify-center mb-3">
            <Code className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
          </div>
          <div className="text-2xl font-semibold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            Deployless
            <br />
            Engine
          </div>
        </div>
        <div className="z-0">
          <Ripple />
        </div>
      </div>
    ),
  },
  {
    Icon: Database,
    name: "Automated Data Marketplace",
    description: "Share data products externally in one-click → we auto-build secure, production-ready APIs behind the scenes.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center items-center h-full w-full relative">
        <div className="text-center z-10 p-8">
          <div className="flex items-center justify-center mb-3">
            <Database className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
          </div>
          <div className="text-2xl font-semibold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            Monetizable
            <br />
            APIs
          </div>
        </div>
        <DotPattern
          className={cn(
            "absolute inset-0 z-0 opacity-30",
            "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]",
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
      <div className="flex justify-center items-center h-full w-full relative">
        <div className="text-center z-10 p-8">
          <div className="flex items-center justify-center mb-3">
            <Network className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
          </div>
          <div className="text-3xl font-semibold bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Domain-Driven
            <br />
            Automation
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.3}
          duration={3}
          repeatDelay={1}
          className={cn(
            "absolute inset-0 z-0",
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
      </div>
    ),
  },
  {
    Icon: Shield,
    name: "Central Governance Without Friction",
    description: "Enforce trust, Role-based access at the most granular business function level through intuitive UI and metadata policies.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center items-center h-full w-full relative">
        <div className="text-center z-10 p-8">
          <div className="flex items-center justify-center mb-3">
            <Shield className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
          </div>
          <div className="text-2xl font-semibold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            Granular
            <br />
            Security
          </div>
        </div>
        <div className="z-0">
          <Ripple />
        </div>
      </div>
    ),
  },
  {
    Icon: Bot,
    name: "GenAI App Builder",
    description: "Build secure, enterprise-grade GenAI copilots and assistants — No Engineering effort, No Management of Pipelines",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center items-center h-full w-full relative">
        <div className="text-center z-10 p-8">
          <div className="flex items-center justify-center mb-3">
            <Bot className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
          </div>
          <div className="text-2xl font-semibold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            GenAI-Native
            <br />
            Platform
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.2}
          duration={2}
          repeatDelay={0.5}
          className={cn(
            "absolute inset-0 z-0",
            "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
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
      <div className="flex justify-center items-center h-full w-full relative">
        <div className="text-center z-10 p-8">
          <div className="flex items-center justify-center mb-3">
            <Plug className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
          </div>
          <div className="text-2xl font-semibold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            Native
            <br />
            Integrations
          </div>
        </div>
        <DotPattern
          className={cn(
            "absolute inset-0 z-0 opacity-30",
            "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
          )}
        />
      </div>
    ),
  },
];

export default function Feature() {
  return (
    <div id="platform" className={`${DM_Sans.className} mt-0`}>
      <div className="text-center mb-8 [contain:paint]">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
          Platform Highlights
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto ">
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
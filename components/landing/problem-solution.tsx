"use client";

import { AlertTriangle, Zap, CheckCircle, XCircle, ArrowRight, Sparkles, TrendingUp, Shield, Clock, DollarSign, Circle, Globe, Award, Users, Lightbulb } from "lucide-react";
import DM_Sans from "@/lib/fonts/dm-sans";
import { motion } from "framer-motion";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import DotPattern from "@/components/magicui/dot-pattern";
import TextReveal from "@/components/magicui/text-reveal";
import WordRotate from "@/components/magicui/word-rotate";
import Ripple from "@/components/magicui/ripple";
import { cn } from "@/lib/utils";

const journeys = [
  {
    icon: Users,
    title: "On-premise to Cloud Migration",
    description: "Seamlessly migrate legacy systems to modern cloud infrastructure",
    details: "From mainframes to microservices, we help you modernize your data infrastructure without disrupting business operations."
  },
  {
    icon: Lightbulb,
    title: "First-time GenAI Implementation", 
    description: "Build your first AI applications without complex setup",
    details: "Jumpstart your AI journey with pre-built models, automated training pipelines, and production-ready deployment tools."
  },
  {
    icon: Zap,
    title: "Cross-domain Data Scaling",
    description: "Scale data operations across multiple business domains",
    details: "Connect data silos, establish governance frameworks, and enable self-service analytics across your entire organization."
  },
  {
    icon: Shield,
    title: "Compliance & Governance",
    description: "Achieve regulatory compliance with automated data governance",
    details: "Meet GDPR, CCPA, and industry-specific requirements with built-in compliance tools and audit trails."
  },
  {
    icon: Globe,
    title: "Global Data Operations",
    description: "Scale data operations across multiple regions and time zones",
    details: "Deploy and manage data infrastructure globally with region-specific compliance and performance optimization."
  },
  {
    icon: Award,
    title: "Data Product Innovation",
    description: "Transform data into revenue-generating products and services",
    details: "Create APIs, dashboards, and applications that turn your data assets into new business opportunities."
  }
];  

const problems = [
  {
    icon: AlertTriangle,
    title: "Siloed Data & Fragile Pipelines",
    description: "Legacy pipelines break at scale. Fragmented tools, custom scripts, and shadow workflows block visibility and create constant firefighting.",
    details: "Organizations struggle with data silos that prevent real-time insights, leading to delayed decision-making and missed opportunities. Custom scripts become maintenance nightmares as teams scale.",
    impact: "Average enterprise loses 20-30% of productivity due to data integration issues",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent text-center">
            Data
            <br />
            Silos
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
    icon: AlertTriangle,
    title: "Data Mesh — On the Roadmap, but Hard to Realize",
    description: "Every CIO wants to decentralize, but without domain-driven modeling automation, data mesh remains just a whiteboard dream.",
    details: "The promise of data mesh architecture is compelling, but implementation requires complex domain modeling, governance frameworks, and cross-team coordination that most organizations can't achieve.",
    impact: "90% of data mesh initiatives fail due to implementation complexity",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent text-center">
            Mesh
            <br />
            Complexity
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={15}
          maxOpacity={0.2}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(150px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-15%] h-[130%] skew-y-3",
          )}
        />
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    title: "GenAI Promises, Missed Timelines",
    description: "Everyone's investing in LLMs, but without clean, governed data flowing through trusted platforms, production use cases stall for months.",
    details: "While GenAI tools are powerful, they require high-quality, well-governed data to deliver reliable results. Most enterprises lack the data infrastructure to support production AI applications.",
    impact: "80% of GenAI projects fail to reach production due to data quality issues",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent text-center">
            AI
            <br />
            Readiness
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={25}
          maxOpacity={0.4}
          duration={2.5}
          repeatDelay={0.8}
          className={cn(
            "[mask-image:radial-gradient(180px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-18%] h-[136%] skew-y-4",
          )}
        />
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    title: "Rising Cloud Bills & Uncontrolled Complexity",
    description: "Costs spiral when every team builds its own stack. Shadow IT, redundant platforms, and scaling pre-prod environments blow up TCO.",
    details: "Cloud costs are growing 3x faster than revenue for most enterprises. Teams spin up their own tools and infrastructure, leading to massive cost overruns and security risks.",
    impact: "Average enterprise overspends 40% on cloud infrastructure due to poor governance",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent text-center">
            Cost
            <br />
            Control
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={18}
          maxOpacity={0.25}
          duration={2.8}
          repeatDelay={0.6}
          className={cn(
            "[mask-image:radial-gradient(160px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-16%] h-[132%] skew-y-5",
          )}
        />
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    title: "Legacy System Integration Nightmare",
    description: "Connecting legacy systems to modern data platforms requires months of custom development and ongoing maintenance.",
    details: "Most enterprises have 20+ years of legacy systems that need to be integrated with modern data platforms. This requires extensive custom coding and creates fragile dependencies.",
    impact: "Integration projects take 6-12 months longer than planned and cost 3x the original estimate",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent text-center">
            Legacy
            <br />
            Integration
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={22}
          maxOpacity={0.35}
          duration={2.2}
          repeatDelay={0.7}
          className={cn(
            "[mask-image:radial-gradient(170px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-17%] h-[134%] skew-y-4",
          )}
        />
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    title: "Data Governance & Compliance Chaos",
    description: "Regulatory requirements are increasing, but most organizations lack automated governance frameworks to ensure compliance.",
    details: "GDPR, CCPA, and industry-specific regulations require sophisticated data governance. Manual processes can't scale, leading to compliance risks and potential fines.",
    impact: "Average enterprise faces $2.5M in potential fines due to data governance gaps",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent text-center">
            Governance
            <br />
            Gap
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={16}
          maxOpacity={0.3}
          duration={2.6}
          repeatDelay={0.9}
          className={cn(
            "[mask-image:radial-gradient(140px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-14%] h-[128%] skew-y-3",
          )}
        />
      </div>
    ),
  }
];

const solutions = [
  {
    traditional: "Code-heavy pipelines",
    usp: "Zero-code orchestration for data ingestion",
    benefit: "Reduce development time by 80%"
  },
  {
    traditional: "Complex CI/CD & staging infra",
    usp: "No-deploy metadata execution",
    benefit: "Eliminate DevOps overhead completely"
  },
  {
    traditional: "Long engineering & QA cycles",
    usp: "5x faster productization",
    benefit: "Ship features in weeks, not months"
  },
  {
    traditional: "Tool sprawl",
    usp: "One unified automation layer",
    benefit: "Single platform for all data operations"
  },
  {
    traditional: "GenAI as an afterthought",
    usp: "GenAI built-in with access control",
    benefit: "AI-ready from day one"
  },
  {
    traditional: "Manual data governance",
    usp: "Automated compliance & governance",
    benefit: "Zero-touch regulatory compliance"
  }
];

export default function ProblemSolution() {
  return (
    <div className="bg-white py-20 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Section A: Why Enterprises Struggle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8 relative">
            <div className="absolute inset-0 flex justify-center">
              <DotPattern
                className={cn(
                  "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
              />
            </div>
            <div className="relative z-10">
              <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent ${DM_Sans.className}`}>
                Why Enterprises Struggle
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The data landscape is broken. Here&apos;s what&apos;s holding organizations back from realizing their potential.
              </p>
            </div>
          </div>
          
          <BentoGrid>
            {problems.map((problem, idx) => (
              <BentoCard 
                key={idx} 
                {...problem}
                background={
                  <div className="group relative h-full w-full">
                    {/* Original background */}
                    <div className="h-full w-full">
                      {problem.background}
                    </div>
                    
                    {/* Hover overlay with description */}
                    <div className="absolute inset-0 bg-[#f5f3f1] rounded-2xl p-6 border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="h-full flex flex-col justify-center">
                        <div className="text-center mb-4">
                          <h3 className="text-xl font-bold text-gray-800 mb-3">{problem.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{problem.details}</p>
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded">
                          <p className="text-orange-700 text-sm font-medium">{problem.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            ))}
          </BentoGrid>
        </motion.div>

        {/* Section B: The USP Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative py-16 overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50"></div>
            <AnimatedGridPattern
              numSquares={60}
              maxOpacity={0.05}
              duration={3}
              repeatDelay={1}
              className="opacity-60"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold sm:text-5xl bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent ${DM_Sans.className}`}>
                The Future of Data Automation
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your data operations with our automation-first platform
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-gray-300/20 rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
                  
                  {/* Card Content */}
                  <div className="relative">
                    {/* Badge */}
                    <div className="absolute -top-10 right-0 w-20 h-20 opacity-10">
                      <svg viewBox="0 0 100 100" className="text-orange-500 w-full h-full">
                        <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="currentColor" />
                      </svg>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-lg flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {solution.usp}
                      </h3>
                      <p className="text-gray-600 mb-4">{solution.benefit}</p>
                      
                      {/* Before/After Comparison */}
                      <div className="mt-6 space-y-3">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                            <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-sm text-gray-500">{solution.traditional}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-200 pointer-events-none transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg text-gray-600 mb-6">Ready to transform your data operations?</p>
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 transform hover:-translate-y-0.5 transition-all duration-300">
                <a href="/about">Schedule a Demo</a>
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Journey Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-4">
              Built for Every Journey
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you&apos;re migrating from on-prem, building your first GenAI app, or scaling across business domains — 
              we help you move faster, cheaper, and smarter, without hiring an army of engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journeys.map((journey, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <journey.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{journey.title}</h4>
                  <p className="text-gray-600 mb-3">{journey.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
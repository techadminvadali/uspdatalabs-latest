"use client";

import { Target, Zap, Layers, Users, Lightbulb, ArrowRight, Shield, Globe, Award, Clock, DollarSign, TrendingUp } from "lucide-react";
import DM_Sans from "@/lib/fonts/dm-sans";
import { motion } from "framer-motion";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const beliefs = [
  {
    icon: Target,
    title: "Simplify the Stack",
    description: "Eliminate complexity that's held organizations back for decades. No more fragmented tools or custom scripts.",
    details: "We believe in reducing cognitive load and technical debt. Every feature should be intuitive, every process should be streamlined, and every interaction should feel natural.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium text-black text-center">
            Simplify
            <br />
            Everything
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
    icon: Zap,
    title: "Automate the Boring",
    description: "Let machines handle repetitive tasks while humans focus on strategy and innovation.",
    details: "Automation isn't about replacing humans—it's about amplifying human potential. We automate the tedious work so your team can focus on what matters most: solving real business problems.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium text-black text-center">
            Automate
            <br />
            Everything
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
    icon: Layers,
    title: "Productize Your Data",
    description: "Turn data assets into revenue-generating products with zero additional engineering effort.",
    details: "Data is your most valuable asset, but only if it's accessible and actionable. We help you transform raw data into intelligent products that drive business value and create new revenue streams.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-8 z-10">
          <div className="text-2xl font-medium text-black text-center">
            Productize
            <br />
            Everything
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
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We challenge the status quo and constantly push the boundaries of what's possible in data automation.",
    details: "Every breakthrough starts with asking 'what if?' We're not satisfied with incremental improvements—we want to revolutionize how enterprises handle data."
  },
  {
    icon: Users,
    title: "Human-Augmented Design",
    description: "Technology should serve people, not the other way around. Every feature is designed with the end user in mind.",
    details: "We spend countless hours understanding user workflows, pain points, and aspirations to create tools that feel like they were made specifically for you."
  },
  {
    icon: Shield,
    title: "Security by Design",
    description: "Enterprise-grade security isn't an afterthought—it's built into every layer of our platform from day one.",
    details: "From data encryption to access controls, we ensure your most sensitive information is protected without compromising on usability or performance."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We're building technology that scales across industries, cultures, and continents to democratize data access.",
    details: "Our platform is designed to work seamlessly across different regulatory environments, time zones, and business cultures."
  }
];



const stats = [
  {
    icon: Clock,
    value: "80%",
    label: "Faster Time to Market",
    description: "Reduce development cycles from months to weeks"
  },
  {
    icon: DollarSign,
    value: "60%",
    label: "Cost Reduction",
    description: "Lower total cost of ownership across your data stack"
  },
  {
    icon: TrendingUp,
    value: "5x",
    label: "Productivity Boost",
    description: "Enable teams to focus on high-value work"
  },
  {
    icon: Users,
    value: "95%",
    label: "User Satisfaction",
    description: "Intuitive design that users actually love"
  }
];

export default function AboutVision() {
  return (
    <div className="bg-white py-20 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-5xl font-bold mb-6 text-gray-800 ${DM_Sans.className}`}>
            Our Belief
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            We believe the future of data isn&apos;t about writing more code. It&apos;s about writing less — or none at all.
          </p>
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              At USP DataLabs, we exist to eliminate the complexity that&apos;s held organizations back for decades. 
              Legacy pipelines, bloated DevOps, and fragile handoffs make every data initiative expensive, risky, and slow.
            </p>
          </div>
        </motion.div>

        {/* Core Beliefs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">We believe in flipping that model on its head:</h3>
          <BentoGrid>
            {beliefs.map((belief, idx) => (
              <BentoCard key={idx} {...belief} />
            ))}
          </BentoGrid>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Principles</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="text-center flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
                  <p className="text-gray-600 mb-3 flex-1">{value.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="relative overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                      <p className="text-sm text-gray-500 transform translate-y-0 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        {value.details}
                      </p>
                      <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
                    </div>
                    <button 
                      className="mt-3 text-sm text-blue-600 font-medium flex flex-col items-center mx-auto group-hover:opacity-0 transition-opacity duration-200"
                      aria-label="Show more"
                    ><svg className="w-4 h-4 mt-1 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                      <span>Learn more</span>
                      
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Proven Impact</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real customers across industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

   

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Data Journey?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the companies already seeing 80% cost reduction and 5x faster delivery.
            </p>
            <button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 mx-auto transition-all duration-300 hover:scale-105">
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


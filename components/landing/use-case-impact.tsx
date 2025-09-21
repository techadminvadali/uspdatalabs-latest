"use client";

import { Clock, Users, Euro, TrendingDown, ArrowRight } from "lucide-react";
import DM_Sans from "@/lib/fonts/dm-sans";
import { motion } from "framer-motion";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const metrics = [
  {
    icon: Clock,
    label: "Timeline",
    traditional: "12–15 months",
    usp: "4 months",
    improvement: "67% faster"
  },
  {
    icon: Users,
    label: "Team size", 
    traditional: "12 engineers",
    usp: "4 engineers",
    improvement: "67% reduction"
  },
  {
    icon: Euro,
    label: "Migration cost",
    traditional: "€2M+",
    usp: "€400K",
    improvement: "80% lower TCO"
  },
  {
    icon: TrendingDown,
    label: "Time to first delivery",
    traditional: "6 months", 
    usp: "3 weeks",
    improvement: "87% faster"
  }
];

export default function UseCaseImpact() {
  return (
    <div className="bg-white py-20 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-5xl font-bold mb-6 text-gray-800 ${DM_Sans.className}`}>
            Real Impact, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See how USP DataLabs transforms enterprise data operations with measurable outcomes.
          </p>
          <img src="/direction.svg" alt="" className=" items-center w-[200px] h-[200px] -mt-20 right-10  absolute" />
        </motion.div>

        {/* Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-12 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4"> Client Success Story</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <strong className="text-gray-800">20TB of data, 1000+ pipelines, €2M estimated migration cost</strong> — delivered in 4 months with 4 engineers at 80% lower TCO.
            </p>
          </div>

          {/* Metrics Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 border-r border-gray-200 last:border-r-0"
                >
                  <div className="text-center">
                    <metric.icon className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                    <h3 className="font-semibold text-gray-700 mb-4">{metric.label}</h3>
                    
                    <div className="space-y-3">
                      <div className="text-sm">
                        <div className="text-gray-500 mb-1">Traditional Estimate</div>
                        <div className="font-medium text-gray-800">{metric.traditional}</div>
                      </div>
                      
                      <div className="text-sm">
                        <div className="text-gray-500 mb-1">With USP DataLabs</div>
                        <div className="font-medium text-gray-800">{metric.usp}</div>
                      </div>
                      
                      <div className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {metric.improvement}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        
        </motion.div>
      </div>
    </div>
  );
}


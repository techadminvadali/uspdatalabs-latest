"use client";

import { Clock, Users, Euro, TrendingDown, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import DM_Sans from "@/lib/fonts/dm-sans";
import { motion } from "framer-motion";

const metrics = [
  {
    icon: Clock,
    label: "Timeline",
    traditional: "12–15 months",
    usp: "4 months",
    improvement: "67% faster",
    iconBg: "bg-blue-500",
    improvementBg: "bg-blue-100",
    improvementText: "text-blue-700"
  },
  {
    icon: Users,
    label: "Team size",
    traditional: "12 engineers",
    usp: "4 engineers",
    improvement: "67% reduction",
    iconBg: "bg-green-500",
    improvementBg: "bg-green-100",
    improvementText: "text-green-700"
  },
  {
    icon: Euro,
    label: "Migration cost",
    traditional: "€2M+",
    usp: "€400K",
    improvement: "80% lower TCO",
    iconBg: "bg-purple-500",
    improvementBg: "bg-purple-100",
    improvementText: "text-purple-700"
  },
  {
    icon: TrendingDown,
    label: "Time to first delivery",
    traditional: "6 months",
    usp: "3 weeks",
    improvement: "87% faster",
    iconBg: "bg-orange-500",
    improvementBg: "bg-orange-100",
    improvementText: "text-orange-700"
  }
];

export default function SuccessStory() {
  return (
    <div className="bg-white py-20 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-5xl font-bold mb-6 text-gray-800 ${DM_Sans.className}`}>
             Client Success Story
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <span className="text-gray-800 font-semibold">20TB of data, 1000+ pipelines, €2M estimated migration cost</span> — delivered in 4 months with 4 engineers at 80% lower TCO.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <metric.icon className="w-8 h-8 mx-auto mb-4 text-gray-600" />
                <h3 className="font-semibold text-gray-700 mb-4 text-lg">{metric.label}</h3>
                
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="text-gray-500 mb-1 font-medium">Traditional Estimate</div>
                    <div className="font-semibold text-red-500 text-lg">{metric.traditional}</div>
                  </div>
                  
                  <div className="text-sm">
                    <div className="text-gray-500 mb-1 font-medium">With USP DataLabs</div>
                    <div className="font-semibold text-green-500 text-lg">{metric.usp}</div>
                  </div>
                  
                  <div className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {metric.improvement}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stack Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-red-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow duration-300">
            <h4 className="font-bold text-red-800 mb-3 text-lg">Traditional Stack</h4>
            <p className="text-red-700 font-medium">CI/CD, ETL, DevOps, Multiple Tools</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow duration-300">
            <h4 className="font-bold text-green-800 mb-3 text-lg">USP Stack</h4>
            <p className="text-green-700 font-medium">Zero-code + metadata execution</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

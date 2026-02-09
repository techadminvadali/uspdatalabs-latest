'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Architecture() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Data Architecture
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive data platform is built on a multi-layered architecture 
            designed for scalability, governance, and seamless data movement.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Architecture Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <Image
                src="/architecture.jpg"
                alt="USP DataLabs Platform Architecture"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg"
                priority
              />
              {/* Overlay gradient for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-2xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Architecture Layers */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-6">
                Multi-Layered Architecture
              </h3>
              <p className="text-gray-600 mb-4">
                Our comprehensive data platform is built on a multi-layered architecture 
                designed for scalability, governance, and seamless data movement.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"></span>
                  Data Ingestion
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"></span>
                  Data Transformation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"></span>
                  Data Governance
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"></span>
                  Data Movement
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"></span>
                  Data Storage
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"></span>
                  Data Analytics
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
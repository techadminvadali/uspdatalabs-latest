'use client';
import { motion } from 'framer-motion';

export default function PlatformDemo() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
            Platform Demo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See USP DataLabs in action and discover how our automation-first platform transforms your data operations.
          </p>
        </motion.div>

        {/* Demo Video Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100">
            <div className="aspect-video bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:from-orange-600 hover:to-amber-600 transition-all cursor-pointer">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Watch Platform Demo</h3>
                <p className="text-sm sm:text-base text-gray-600">See how USP DataLabs transforms data operations</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
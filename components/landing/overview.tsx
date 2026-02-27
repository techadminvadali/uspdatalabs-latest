"use client";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { formatTypingSequence } from "@/lib/utils";
import DM_Sans from "@/lib/fonts/dm-sans";
import Image from "next/image";

import companyOne from '../../public/company_one.webp'
import companyThree from '../../public/company_three.png'
import companyFour from '../../public/company_four.png'
import companyFive from '../../public/american.png'
import companyTwo from '../../public/company_two.png'

import orb1 from '../../public/orb1.png'
import orb2 from '../../public/orb2.png'
import orb3 from '../../public/orb3.png'
import orb4 from '../../public/orb4.png'
import orb5 from '../../public/obr5.png'

import FinalLogo from '../../public/theLogo.jpeg'

import Link from "next/link";

const sequence = formatTypingSequence([
  "From Raw Data to Intelligent Products - Instantly.",
  "Automation-first data platform for enterprises.",
  "Zero-code orchestration for data pipelines.",
  "GenAI-ready platform for modern businesses.",
  "Transform data chaos into intelligent products.",
  "No-code, no-deploy, no-complexity data platform.",
  "Enterprise data transformation made simple.",
  "Turn data into revenue-generating products.",
  "The future of data is automation-first.",
]);

const defaultPartners = [
  { name: 'Vadali', logo: companyOne, link: 'https://www.vadali.in/' },
  { name: 'Linkgenz', logo: companyThree, link: 'https://linkgenz.com/' },
  { name: 'Sure Strategy Group', logo: companyFour, link: 'https://www.surestrategygroup.com/' },
  { name: 'Future Gen Services', logo: companyTwo, link: 'https://www.fgsc.eu/' },
  { name: 'American Coalition', logo: companyFive, link: 'https://maritimecoalition.us/' },
];

export default function Overview() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Trigger animations on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const play = shouldAnimate && inView;

  // Animation variants
  const headingContainerVariants: Variants = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: isMobile ? 0.15 : 0.3, 
        delayChildren: isMobile ? 0.2 : 0.5 
      } 
    },
  };

  const fadeInUpVariants: Variants = {
    hidden: { y: isMobile ? 30 : 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: isMobile ? 0.5 : 0.8, ease: [0.83, 0, 0.17, 1] },
    },
  };

  const descriptionVariants: Variants = {
    hidden: { y: isMobile ? 20 : 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: isMobile ? 0.5 : 0.8, 
        delay: isMobile ? 0.4 : 1.2, 
        ease: [0.83, 0, 0.17, 1] 
      },
    },
  };

  const buttonContainerVariants: Variants = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: isMobile ? 0.1 : 0.2, 
        delayChildren: isMobile ? 0.6 : 1.8 
      } 
    },
  };

  const buttonVariants: Variants = {
    hidden: { y: isMobile ? 15 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: isMobile ? 0.4 : 0.6, ease: [0.83, 0, 0.17, 1] },
    },
  };

  const orbitVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.3, ease: [0.83, 0, 0.17, 1] },
    },
  };

  const trustedByVariants: Variants = {
    hidden: { y: isMobile ? 20 : 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: isMobile ? 0.5 : 0.8, 
        delay: isMobile ? 0.8 : 2.2, 
        ease: [0.83, 0, 0.17, 1] 
      },
    },
  };

  return (
    <main
      ref={ref}
      className="bg-white relative flex flex-col w-full overflow-hidden pt-16"
    >
      {/* HERO Content */}
      <div className="flex-1 flex items-center justify-center px-6 pt-8 sm:pt-16 md:pt-24 lg:pt-24 pb-6 sm:pb-10 md:pb-12 lg:pb-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto w-full">
          
          {/* LEFT: TEXT CONTENT */}
          <motion.div
            initial="hidden"
            animate={play ? "visible" : "hidden"}
            variants={headingContainerVariants}
            className="relative z-10 text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8"
          >
            {/* Main Headline with Typing Animation — reserve enough height for longest phrases (no clipping, no layout shift) */}
            <motion.div variants={fadeInUpVariants} className="min-h-[150px] sm:min-h-[140px] md:min-h-[220px] lg:min-h-[280px] xl:min-h-[320px]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent tracking-tight leading-tight">
                <TypeAnimation
                  preRenderFirstString={true}
                  speed={50}
                  repeat={Infinity}
                  sequence={sequence}
                  cursor={true}
                />
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.div
              variants={descriptionVariants}
              className="max-w-xl mx-auto lg:mx-0"
            >
              <p className={`text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed ${DM_Sans.className}`}>
                An automation-first platform that lets you orchestrate data, deploy AI, and launch digital products —
                <span className="text-indigo-700 font-semibold"> without writing code or building infra.</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={buttonContainerVariants}
              initial="hidden"
              animate={play ? "visible" : "hidden"}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2 sm:pt-4 lg:pt-6"
            >
              <motion.div variants={buttonVariants}>
                <Button
                  className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-700/25 w-full sm:w-auto min-w-[180px] hover:scale-105"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>

              <motion.div variants={buttonVariants}>
                <Button
              variant="outline"
              className="border-2 border-indigo-700 hover:border-indigo-800 text-indigo-700 hover:text-indigo-800 font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 bg-transparent hover:bg-indigo-50 w-full sm:w-auto min-w-[180px] hover:scale-105"
            >
              <Link href="/about">About Us</Link>
            </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT: ORBIT ANIMATION - Hidden on mobile, visible on lg+ */}
          <motion.div
            initial="hidden"
            animate={play ? "visible" : "hidden"}
            variants={orbitVariants}
            className="hidden lg:block relative w-full h-[450px]"
          >
            {/* Orbit Container */}
            <div className="orbit-container relative w-full h-full flex justify-center items-center">
              {/* Glow Effect */}
              <div className="glow-effect"></div>

              {/* Orbit Paths */}
              <div className="orbit-path orbit-path-1"></div>
              <div className="orbit-path orbit-path-2"></div>
              <div className="orbit-path orbit-path-3"></div>
              <div className="orbit-path orbit-path-4"></div>

              {/* Orbit Icons - Now properly distributed across all 4 orbits */}
              {/* Orbit 1 - innermost */}
              <div className="orbit-icon icon-1">
                <Image 
                  src={orb1} 
                  alt="orb1" 
                  fill
                  className="object-cover rounded-full" 
                />
              </div>
              
              {/* Orbit 2 */}
              <div className="orbit-icon icon-2">
                <Image 
                  src={orb2} 
                  alt="orb2" 
                  fill
                  className="object-cover rounded-full" 
                />
              </div>
              
              {/* Orbit 3 */}
              <div className="orbit-icon icon-3">
                <Image 
                  src={orb3} 
                  alt="orb3" 
                  fill
                  className="object-cover rounded-full" 
                />
              </div>
              
              {/* Orbit 4 - outermost */}
              <div className="orbit-icon icon-4">
                <Image 
                  src={orb4} 
                  alt="orb4" 
                  fill
                  className="object-cover rounded-full" 
                />
              </div>
              
              {/* Orbit 4 - second icon on outermost (opposite side) */}
              <div className="orbit-icon icon-5">
                <Image 
                  src={orb5} 
                  alt="orb5" 
                  fill
                  className="object-cover rounded-full" 
                />
              </div>

              {/* Center Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <div className="relative w-28 h-28 rounded-full flex items-center justify-center shadow-2xl shadow-orange-400/30 border-2 border-orange-300/50 bg-white overflow-hidden">
                  <Image
                    src={FinalLogo}
                    alt="Center Logo"
                    width={100}
                    height={60}
                    className="object-contain animate-pulse-slow"
                  />
                </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partners / Trusted By Section */}
      
    </main>
  );
}
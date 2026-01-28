"use client";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { formatTypingSequence } from "@/lib/utils";
import DM_Sans from "@/lib/fonts/dm-sans";
import Image from "next/image";
import { SiOpenai, SiTypescript, SiPostgresql } from "react-icons/si";
import { FaDatabase, FaCloud, FaCogs, FaRobot, FaChartLine } from "react-icons/fa";

import companyOne from '../../public/company_one.webp'
import companyThree from '../../public/company_three.png'
import companyFour from '../../public/company_four.png'
import companyFive from '../../public/american.png'
import companyTwo from '../../public/company_two.png'


import logo from '../../public/logoUSP.png'
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
      className="min-h-screen bg-[#0a192f] relative flex flex-col w-full overflow-hidden"
    >
      {/* HERO Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20 sm:py-28 md:py-32 lg:py-40">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto w-full">
          
          {/* LEFT: TEXT CONTENT */}
          <motion.div
            initial="hidden"
            animate={play ? "visible" : "hidden"}
            variants={headingContainerVariants}
            className="relative z-10 text-center lg:text-left space-y-8"
          >
            {/* Main Headline with Typing Animation */}
            <motion.div variants={fadeInUpVariants}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
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
              <p className={`text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed ${DM_Sans.className}`}>
                An automation-first platform that lets you orchestrate data, deploy AI, and launch digital products —
                <span className="text-blue-400 font-semibold"> without writing code or building infra.</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={buttonContainerVariants}
              initial="hidden"
              animate={play ? "visible" : "hidden"}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-6"
            >
              <motion.div variants={buttonVariants}>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-600/25 w-full sm:w-auto min-w-[180px] hover:scale-105"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>

              <motion.div variants={buttonVariants}>
                <Button
                  variant="outline"
                  className="border-2 border-gray-500 hover:border-gray-400 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 bg-transparent hover:bg-white/5 w-full sm:w-auto min-w-[180px] hover:scale-105"
                >
                  <Link href="/about">About Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT: SINGLE ORBIT */}
          <motion.div
            initial="hidden"
            animate={play ? "visible" : "hidden"}
            variants={orbitVariants}
            className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex justify-center items-center"
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

              {/* Orbit Icons */}
              <div className="orbit-icon icon-1">
                <SiTypescript className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-400" />
              </div>
              <div className="orbit-icon icon-2">
                <FaDatabase className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-400" />
              </div>
              <div className="orbit-icon icon-3">
                <FaCloud className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-400" />
              </div>
              <div className="orbit-icon icon-4">
                <SiPostgresql className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-400" />
              </div>
              <div className="orbit-icon icon-5">
                <SiOpenai className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-400" />
              </div>
              <div className="orbit-icon icon-6">
                <FaCogs className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-400" />
              </div>
              <div className="orbit-icon icon-7">
                <FaChartLine className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-400" />
              </div>

              {/* Center Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 border-2 border-blue-400/30">
                  {/* <FaRobot className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" /> */}
                  <Image
                    src={logo}
                    alt="Center Glow"
                    layout="fill"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-full opacity-75 animate-pulse-slow"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partners / Trusted By Section */}
      <motion.div
        initial="hidden"
        animate={play || isMobile ? "visible" : "hidden"}
        variants={trustedByVariants}
        className="py-12 flex flex-col justify-center items-center gap-6 w-full bg-white"
      >
        <div className="text-gray-400 text-sm font-medium tracking-wider">
          TRUSTED BY
        </div>
        <div className="relative w-full max-w-5xl overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {defaultPartners.map((partner, index) => (
              <div
                key={`logo-${index}`}
                className="flex items-center justify-center mx-4 sm:mx-8 flex-shrink-0"
              >
                {partner.link ? (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:scale-105 transition-transform duration-200"
                  >
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={60}
                      className="object-contain h-12 sm:h-16 md:h-20 w-auto"
                    />
                  </a>
                ) : (
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain h-12 sm:h-16 md:h-20 w-auto cursor-default"
                  />
                )}
              </div>
            ))}
            {/* Duplicate for seamless marquee */}
            {defaultPartners.map((partner, index) => (
              <div
                key={`logo2-${index}`}
                className="flex items-center justify-center mx-4 sm:mx-8 flex-shrink-0"
              >
                {partner.link ? (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:scale-105 transition-transform duration-200"
                  >
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={60}
                      className="object-contain h-12 sm:h-16 md:h-20 w-auto"
                    />
                  </a>
                ) : (
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain h-12 sm:h-16 md:h-20 w-auto cursor-default"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
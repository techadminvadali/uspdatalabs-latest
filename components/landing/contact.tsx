"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DM_Sans from "@/lib/fonts/dm-sans";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Globe, ChevronDown, ChevronRight, Building2 } from "lucide-react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import ReCAPTCHA from "react-google-recaptcha";
import { TypeAnimation } from "react-type-animation";
import { formatTypingSequence } from "@/lib/utils";

const advantageSequence = formatTypingSequence([
  "USP Data Labs - A True Business Advantage",
  "Transform Your Data Operations Today",
]);

// Entity data based on the provided table
const ENTITIES = [
  {
    id: "1",
    name: "USP Data Labs Pte.Ltd.",
    address: "10 ANSON ROAD, #10 - 11 INTERNATIONAL PLAZA, SINGAPORE (079903)",
    email: "contact@uspdatalabs.com",
    country: "Singapore",
    city: "Singapore",
    continent: "Asia Pacific",
    continentColor: "blue",
    website: "www.uspdatalabs.com",
    phone: "+65 6123 4567"
  },
  {
    id: "2",
    name: "Smart IT Consulting Pte. Ltd.",
    address: "10 ANSON ROAD, #10 - 11 INTERNATIONAL PLAZA, SINGAPORE (079903)",
    email: "contact@smartitc.com.sg",
    country: "Singapore",
    city: "Singapore",
    continent: "Asia Pacific",
    continentColor: "blue",
    website: "www.smartitc.com.sg",
    phone: "+65 6123 4568"
  },
  {
    id: "3",
    name: "Future Gen Services B.V.",
    address: "Burg Caan Van Necklaan, The Hague",
    email: "contact@fgsc.eu",
    country: "The Netherlands",
    city: "The Hague",
    continent: "Europe",
    continentColor: "purple",
    website: "www.fgsc.eu",
    phone: "+31 70 123 4567"
  },
  {
    id: "4",
    name: "Smart IT Consulting",
    address: "Door No: 19-6-4 A G Road, Ward -17 Village, Vizianagaram Mandal, Vizianagaram District, Andhra Pradesh, Pin code – 535002",
    email: "contact@smartitc.com.sg",
    country: "India",
    city: "Vijaywada"  ,
    continent: "South Asia",
    continentColor: "green",
    website: "",
    phone: "+91 8922 123456"
  },
  {
    id: "5",
    name: "Smart IT Consulting LLC",
    address: "Sharjah Media City, Sharjah, UAE",
    email: "contact@smartitc.com.sg",
    country: "UAE",
    city: "Sharjah",
    continent: "Middle East",
    continentColor: "amber",
    website: "",
    phone: "+971 6 123 4567"
  },
  {
    id: "6",
    name: "Smart IT Consulting (Cambodia)",
    address: "De Castle Royal Apartment 2111 Street 288, Sangkat Boeng Keng Kang 1, Khan Chamkarmon Phnom Penh 120102, Cambodia",
    email: "contact@smartitc.com.sg",
    country: "Cambodia",
    city: "Phnom Penh",
    continent: "Asia Pacific",
    continentColor: "blue",
    website: "",
    phone: "+855 23 123 456"
  }
];

// Unique continents and countries from ENTITIES (office-locator style)
const CONTINENTS = Array.from(new Set(ENTITIES.map((e) => e.continent))).sort();
function getCountriesByContinent(continent: string) {
  return Array.from(new Set(ENTITIES.filter((e) => e.continent === continent).map((e) => e.country))).sort();
}
function getOfficesByCountry(continent: string, country: string) {
  return ENTITIES.filter((e) => e.continent === continent && e.country === country);
}

export default function Contact() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [selectedEntity, setSelectedEntity] = useState(ENTITIES[0]);
  const [expandedContinent, setExpandedContinent] = useState<string | null>(ENTITIES[0].continent);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(ENTITIES[0].country);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    honeypot: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleContinentToggle = (continent: string) => {
    setExpandedContinent((prev) => (prev === continent ? null : continent));
    if (selectedCountry) setSelectedCountry(null);
  };
  const handleCountrySelect = (country: string) => {
    setSelectedCountry((prev) => (prev === country ? null : country));
    const first = ENTITIES.find((e) => e.country === country);
    if (first) setSelectedEntity(first);
  };
  const handleOfficeSelect = (entity: (typeof ENTITIES)[0]) => {
    setSelectedEntity(entity);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.honeypot) {
      return;
    }

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
          selectedEntity: selectedEntity.name,
          entityEmail: selectedEntity.email
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
          honeypot: ""
        });
        setRecaptchaToken(null);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getContinentBadgeClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      green: "bg-green-100 text-green-700 border-green-200",
      amber: "bg-amber-100 text-amber-700 border-amber-200",
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="bg-white py-8 md:py-12 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 relative"
        >
          <div className="absolute inset-0 flex justify-center">
            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
              )}
            />
          </div>
          <div className="relative z-10">
            <h1 className={`text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent ${DM_Sans.className}`}>
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your data journey? Let&apos;s discuss how USP DataLabs can help your organization achieve faster, smarter, and more cost-effective data operations.
            </p>
          </div>
        </motion.div>

        {/* Office Locator: Continent → Country → Office (no map, show details) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="rounded-2xl border-2 border-orange-200/50 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30 shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[480px] lg:min-h-[520px]">
              {/* Left: Continent → Country → Office list (office locator style) */}
              <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-orange-200/50 bg-white/60 flex flex-col min-h-[280px] lg:min-h-[420px]">
                <div className="p-5 border-b border-orange-200/50">
                  <h2 className={`text-lg font-semibold text-gray-800 flex items-center gap-2 ${DM_Sans.className}`}>
                    <MapPin className="w-5 h-5 text-orange-600" />
                    Find your office
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">Select continent → country → office</p>
                </div>
                <div className="flex-1 overflow-y-auto p-4 min-h-[200px]">
                  {CONTINENTS.map((continent) => {
                    const countries = getCountriesByContinent(continent);
                    const isExpanded = expandedContinent === continent;
                    return (
                      <div key={continent} className="mb-1">
                        <button
                          type="button"
                          onClick={() => handleContinentToggle(continent)}
                          className={cn(
                            "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                            isExpanded ? "bg-orange-50 text-orange-700" : "text-gray-700 hover:bg-gray-100"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="w-4 h-4 flex-shrink-0" />
                            )}
                            <span>{continent}</span>
                          </div>
                          <span
                            className={cn(
                              "text-xs px-2 py-0.5 rounded-full",
                              isExpanded ? "bg-orange-100 text-orange-600" : "bg-gray-200 text-gray-500"
                            )}
                          >
                            {countries.length}
                          </span>
                        </button>
                        {isExpanded && (
                          <div className="ml-4 mt-1 space-y-1">
                            {countries.map((country) => {
                              const offices = getOfficesByCountry(continent, country);
                              const isCountrySelected = selectedCountry === country;
                              return (
                                <div key={country}>
                                  <button
                                    type="button"
                                    onClick={() => handleCountrySelect(country)}
                                    className={cn(
                                      "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all",
                                      isCountrySelected
                                        ? "bg-orange-50 text-orange-700 font-medium"
                                        : "text-gray-600 hover:bg-gray-50"
                                    )}
                                  >
                                    <span className="text-left">{country}</span>
                                    <span className={cn("text-xs", isCountrySelected ? "text-orange-500" : "text-gray-400")}>
                                      ({offices.length})
                                    </span>
                                  </button>
                                  {isCountrySelected && (
                                    <div className="ml-3 mt-1 space-y-1">
                                      {offices.map((entity) => (
                                        <button
                                          key={entity.id}
                                          type="button"
                                          onClick={() => handleOfficeSelect(entity)}
                                          className={cn(
                                            "w-full flex items-center gap-2 px-3 py-2 rounded-md text-xs transition-all text-left",
                                            selectedEntity.id === entity.id
                                              ? "bg-orange-100 text-orange-800 font-medium"
                                              : "text-gray-500 hover:bg-gray-50"
                                          )}
                                        >
                                          <Building2 className="w-3.5 h-3.5 flex-shrink-0 text-orange-500" />
                                          <span className="truncate">{entity.name}</span>
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Selected office details (no map — address, email, phone, website) */}
              <div className="flex-1 flex flex-col justify-center p-6 lg:p-10 min-h-[280px] lg:min-h-[420px]">
                <div className="flex items-center gap-2 mb-4">
                  <div className={cn("px-3 py-1 rounded-full border text-xs font-semibold", getContinentBadgeClasses(selectedEntity.continentColor))}>
                    {selectedEntity.continent}
                  </div>
                  <span className="text-sm text-gray-500">{selectedEntity.city}, {selectedEntity.country}</span>
                </div>
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${DM_Sans.className}`}>
                  {selectedEntity.name}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Address</p>
                      <p className="text-gray-700 text-sm leading-snug">{selectedEntity.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                      <a href={`mailto:${selectedEntity.email}`} className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                        {selectedEntity.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Phone</p>
                      <p className="text-gray-700 text-sm font-medium">{selectedEntity.phone}</p>
                      <p className="text-gray-500 text-xs mt-0.5">Mon–Fri 9AM–6PM local time</p>
                    </div>
                  </div>
                  {selectedEntity.website && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Website</p>
                        <a
                          href={`https://${selectedEntity.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                        >
                          {selectedEntity.website}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className={`text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent ${DM_Sans.className}`}>
                {selectedEntity.name}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Whether you&apos;re looking to modernize your data infrastructure, implement GenAI solutions, or reduce operational costs, we&apos;re here to help.
              </p>
              <div className={`inline-block px-4 py-2 rounded-full border ${getContinentBadgeClasses(selectedEntity.continentColor)}`}>
                <span className="text-sm font-medium">
                  {selectedEntity.continent}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                  <a 
                    href={`mailto:${selectedEntity.email}`}
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    {selectedEntity.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                  <p className="text-gray-600">{selectedEntity.phone}</p>
                  <p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM Local Time</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Visit Us</h3>
                  <p className="text-gray-600">{selectedEntity.address}</p>
                  <p className="text-gray-600 font-medium mt-1">{selectedEntity.city}, {selectedEntity.country}</p>
                </div>
              </div>

              {selectedEntity.website && (
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Website</h3>
                    <a 
                      href={`https://${selectedEntity.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      {selectedEntity.website}
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-xl p-6 relative overflow-hidden border border-orange-100">
              <div className="absolute inset-0">
                <AnimatedGridPattern
                  numSquares={20}
                  maxOpacity={0.1}
                  duration={3}
                  repeatDelay={1}
                  className={cn(
                    "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
                  )}
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-2xl text-center mb-2">
                  <TypeAnimation
                    preRenderFirstString={true}
                    speed={50}
                    repeat={Infinity}
                    sequence={advantageSequence}
                    className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent"
                  />
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <DotPattern
                className={cn(
                  "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
              />
            </div>
            
            <div className="relative z-10">
              <h2 className={`text-2xl font-bold mb-6 text-gray-800 ${DM_Sans.className}`}>
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full focus:ring-orange-500 focus:border-orange-500"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full focus:ring-orange-500 focus:border-orange-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full focus:ring-orange-500 focus:border-orange-500"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px] focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Tell us about your data challenges, goals, or any questions you have..."
                  />
                </div>

                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                    onChange={handleRecaptchaChange}
                    theme="light"
                    size="normal"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Message sent successfully! We&apos;ll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Something went wrong. Please try again or contact us directly.</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 text-lg font-semibold rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
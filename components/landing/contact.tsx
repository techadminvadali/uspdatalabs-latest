"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DM_Sans from "@/lib/fonts/dm-sans";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Globe, ChevronDown } from "lucide-react";
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
    continent: "Asia-APAC",
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
    continent: "Asia-APAC",
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
    city: "Vizianagaram",
    continent: "Asia-India",
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
    continent: "Asia-MiddleEast",
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
    continent: "Asia-APAC",
    continentColor: "blue",
    website: "",
    phone: "+855 23 123 456"
  }
];

export default function Contact() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [selectedEntity, setSelectedEntity] = useState(ENTITIES[0]);
  
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

  const handleEntityChange = (entityId: string) => {
    const entity = ENTITIES.find(e => e.id === entityId);
    if (entity) {
      setSelectedEntity(entity);
    }
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
    <div className="bg-white py-20 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
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

        {/* Enhanced Entity Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30 rounded-2xl p-8 border-2 border-orange-200/50 shadow-lg backdrop-blur-sm">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-400/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <label htmlFor="entity-select" className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span className={`text-lg font-semibold text-gray-800 ${DM_Sans.className}`}>
                    Select Your Preferred Location
                  </span>
                </label>
                <div className={`px-3 py-1 rounded-full border ${getContinentBadgeClasses(selectedEntity.continentColor)}`}>
                  <span className="text-xs font-semibold">{selectedEntity.continent}</span>
                </div>
              </div>
              
              <div className="relative">
                <select
                  id="entity-select"
                  value={selectedEntity.id}
                  onChange={(e) => handleEntityChange(e.target.value)}
                  className={`w-full appearance-none bg-white border-2 border-orange-300 rounded-xl px-5 py-4 pr-12 
                    text-gray-800 font-medium text-base
                    focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 
                    outline-none transition-all duration-200
                    hover:border-orange-400 hover:shadow-md
                    cursor-pointer ${DM_Sans.className}`}
                >
                  {ENTITIES.map((entity) => (
                    <option key={entity.id} value={entity.id}>
                      {entity.name} • {entity.city}, {entity.country}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-600 pointer-events-none" />
              </div>

              {/* Quick info preview */}
              <motion.div 
                key={selectedEntity.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3"
              >
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="truncate">{selectedEntity.city}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="truncate">{selectedEntity.country}</span>
                </div>
                {selectedEntity.website && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600 col-span-2 md:col-span-1">
                    <Globe className="w-3 h-3 text-orange-500 flex-shrink-0" />
                    <span className="truncate">{selectedEntity.website}</span>
                  </div>
                )}
              </motion.div>
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
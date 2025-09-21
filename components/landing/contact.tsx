"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DM_Sans from "@/lib/fonts/dm-sans";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    honeypot: "" // Spam protection
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Spam protection - if honeypot is filled, it's spam
    if (formData.honeypot) {
      return;
    }

    // Check reCAPTCHA
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
          recaptchaToken
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
            <h1 className={`text-5xl font-bold mb-6 text-gray-800 ${DM_Sans.className}`}>
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your data journey? Let&apos;s discuss how USP DataLabs can help your organization achieve faster, smarter, and more cost-effective data operations.
            </p>
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
              <h2 className={`text-3xl font-bold mb-6 text-gray-800 ${DM_Sans.className}`}>
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you&apos;re looking to modernize your data infrastructure, implement GenAI solutions, or reduce operational costs, we&apos;re here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                  <p className="text-gray-600">hello@uspdatalabs.com</p>
                  <p className="text-gray-600">support@uspdatalabs.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Visit Us</h3>
                  <p className="text-gray-600">123 Innovation Drive</p>
                  <p className="text-gray-600">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 relative overflow-hidden">
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
                <h3 className="font-bold text-gray-800 mb-2">Quick Response Guarantee</h3>
                <p className="text-gray-600 text-sm">
                  We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
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
                {/* Honeypot field for spam protection - hidden */}
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
                      className="w-full"
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
                      className="w-full"
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
                      className="w-full"
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
                      className="w-full"
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
                    className="w-full"
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
                    className="w-full min-h-[120px]"
                    placeholder="Tell us about your data challenges, goals, or any questions you have..."
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"} // Test key - replace with your real key
                    onChange={handleRecaptchaChange}
                    theme="light"
                    size="normal"
                  />
                </div>

                {/* Submit Status Messages */}
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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

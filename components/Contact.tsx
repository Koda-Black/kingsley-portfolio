"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kodablack.me@outlook.com",
      href: "mailto:kodablack.me@outlook.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 810 091 3619",
      href: "tel:+2348100913619",
    },
    { icon: MapPin, label: "Location", value: "Enugu, Nigeria", href: null },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/kodablack",
    },
    { icon: Github, label: "GitHub", href: "https://github.com/Koda-Black" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white dark:bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs font-medium mb-3">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-dark-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <link.icon size={16} />
                  {link.label}
                  <ArrowUpRight size={14} />
                </motion.a>
              ))}
            </div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-5 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl text-white"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                </span>
                <span className="text-sm font-semibold">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-sm text-white/90">
                Available for onsite, hybrid, or remote positions. Let's build
                something amazing!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-50 dark:bg-dark-900 rounded-xl p-5 sm:p-6 border border-gray-100 dark:border-dark-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all outline-none"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 gradient-bg text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-violet-500/20 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-emerald-600 dark:text-emerald-400 font-medium"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

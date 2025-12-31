"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/kodablack",
      icon: Linkedin,
    },
    { name: "GitHub", href: "https://github.com/Koda-Black", icon: Github },
    { name: "Email", href: "mailto:kodablack.me@outlook.com", icon: Mail },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 border-t border-gray-100 dark:border-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block mb-3">
              <span className="text-xl font-black tracking-tight">
                <span className="text-gray-900 dark:text-white">onu</span>
                <span className="gradient-text">.dev</span>
              </span>
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-xs">
              Building scalable solutions, one line of code at a time. Open to
              opportunities worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-dark-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="mailto:kodablack.me@outlook.com"
                  className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  kodablack.me@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348100913619"
                  className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  +234 810 091 3619
                </a>
              </li>
              <li>Enugu, Nigeria</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-dark-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {currentYear} Kingsley Onuorah. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-red-500" />{" "}
            using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Users, Target, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description:
        "Node.js, MongoDB, PostgreSQL, Redis, and cloud infrastructure expertise.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Proven Impact",
      description: "40% faster APIs, 98% code coverage, and 99.9% uptime.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Led cross-platform teams, mentoring developers at Yarna.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Target,
      title: "Domain Expertise",
      description: "Fintech, wellness, SaaS, and e-commerce solutions.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-medium mb-3">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">Building the Future,</span>
            <br className="hidden sm:block" />
            <span className="text-gray-900 dark:text-white">
              {" "}
              One Line at a Time
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A results-driven Fullstack Engineer passionate about innovative
            solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm{" "}
                <strong className="text-gray-800 dark:text-gray-200">
                  Kingsley Onuorah
                </strong>
                , a Backend/Fullstack Engineer with over 4 years of experience
                building scalable, high-performance applications. Currently at
                <strong className="text-gray-800 dark:text-gray-200">
                  {" "}
                  Fitnessspace
                </strong>
                , I specialize in backend development, cloud architecture, and
                AI/ML integration.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Previously, as{" "}
                <strong className="text-gray-800 dark:text-gray-200">
                  Team Lead & Fullstack Developer at Yarna
                </strong>
                , I led cross-platform teams and drove technical excellence
                across multiple projects. My stack includes Node.js, modern
                databases (MongoDB, PostgreSQL), caching (Redis), and container
                orchestration with Docker and Kubernetes.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm passionate about writing clean, maintainable code and
                implementing robust architectures that scale. Whether optimizing
                API performance, integrating AI/ML models, or designing
                cloud-native solutions, I focus on delivering measurable impact.
              </p>
            </div>

            {/* Info pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 text-xs font-medium">
                <MapPin size={12} />
                Enugu, Nigeria
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 text-xs font-medium">
                <Briefcase size={12} />
                Open to Remote/Hybrid/Onsite
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Node.js Expert",
                "Cloud Architecture",
                "AI/ML Integration",
                "Team Leadership",
              ].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                    i === 0
                      ? "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300"
                      : i === 1
                      ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                      : i === 2
                      ? "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300"
                      : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300"
                  }`}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right column - Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 grid grid-cols-2 gap-3"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-dark-900 dark:to-dark-800/50 border border-gray-100 dark:border-dark-700 hover:shadow-lg hover:border-gray-200 dark:hover:border-dark-600 transition-all group"
              >
                <div
                  className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}
                >
                  <item.icon className="text-white" size={18} />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 sm:mt-16 relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative p-6 sm:p-8 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Ready to Bring Your Vision to Life?
            </h3>
            <p className="text-sm text-white/80 mb-5 max-w-xl mx-auto">
              Let's discuss how I can help build amazing products for your team.
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-5 py-2.5 bg-white text-violet-600 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

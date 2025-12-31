"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Backend Engineer",
    "Cloud Architect",
    "AI/ML Integrator",
    "Team Lead",
  ];

  useEffect(() => {
    const fullText = roles[roleIndex];
    let index = 0;
    let isDeleting = false;
    let timer: NodeJS.Timeout;

    const type = () => {
      if (!isDeleting) {
        if (index <= fullText.length) {
          setText(fullText.slice(0, index));
          index++;
          timer = setTimeout(type, 80);
        } else {
          timer = setTimeout(() => {
            isDeleting = true;
            type();
          }, 2000);
        }
      } else {
        if (index > 0) {
          index--;
          setText(fullText.slice(0, index));
          timer = setTimeout(type, 50);
        } else {
          isDeleting = false;
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, [roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/30 dark:from-dark-950 dark:via-dark-900 dark:to-violet-950/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 bg-gradient-to-br from-sky-400/20 to-blue-500/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-[5%] w-72 h-72 bg-gradient-to-tr from-violet-500/15 to-fuchsia-500/15 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], x: [0, -15, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Open to Opportunities
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight"
              >
                <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                <span className="gradient-text">Kingsley</span>
                <motion.span
                  className="inline-block ml-2"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  👋
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-5 h-8 sm:h-9"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500">
                  {text}
                </span>
                <span className="animate-pulse text-violet-500">|</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-7 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Fullstack Engineer with{" "}
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  4+ years
                </span>{" "}
                of experience building production-ready applications serving{" "}
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  200,000+ users
                </span>
                . Specializing in scalable backend systems, cloud architecture,
                and AI integration.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <motion.a
                  href="#projects"
                  className="group px-5 py-3 gradient-bg text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/25 transition-all text-sm"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sparkles size={16} />
                  View My Work
                  <ArrowRight
                    className="group-hover:translate-x-0.5 transition-transform"
                    size={16}
                  />
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-5 py-3 bg-white dark:bg-dark-800 text-gray-900 dark:text-white rounded-xl font-medium border border-gray-200 dark:border-dark-700 hover:border-violet-300 dark:hover:border-violet-700 transition-all flex items-center justify-center shadow-sm hover:shadow-md text-sm"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let's Connect
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8"
              >
                {[
                  { value: "4+", label: "Years Exp." },
                  { value: "200K+", label: "Users Served" },
                  { value: "40%", label: "Faster APIs" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-xl sm:text-2xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex-shrink-0"
            >
              <div className="relative">
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-3 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 opacity-20 blur-2xl"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Gradient border */}
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 opacity-80"></div>

                {/* Image container */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-3 border-white dark:border-dark-900 shadow-2xl">
                  <Image
                    // src="/professional-profile-pic.png"
                    // src="/Kingsley.png"
                    src="/new-profile-pic.png"
                    alt="Kingsley Onuorah"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -right-2 top-6 px-2.5 py-1 bg-white dark:bg-dark-800 rounded-lg shadow-lg border border-gray-100 dark:border-dark-700 text-xs font-medium text-gray-700 dark:text-gray-300"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ☁️ AWS
                </motion.div>
                <motion.div
                  className="absolute -left-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-white dark:bg-dark-800 rounded-lg shadow-lg border border-gray-100 dark:border-dark-700 text-xs font-medium text-gray-700 dark:text-gray-300"
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  ⚡ Node.js
                </motion.div>
                <motion.div
                  className="absolute -right-3 bottom-10 px-2.5 py-1 bg-white dark:bg-dark-800 rounded-lg shadow-lg border border-gray-100 dark:border-dark-700 text-xs font-medium text-gray-700 dark:text-gray-300"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  🧠 AI/ML
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-7 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center"
        >
          <div className="w-0.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full mt-1.5"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Backend Engineer",
      company: "Fitnessspace",
      location: "Remote",
      period: "Nov 2023 - Present",
      type: "Work",
      icon: Briefcase,
      description:
        "Driving backend development and cloud architecture for wellness platform.",
      achievements: [
        "Optimized API response times by 40% through caching and query optimization",
        "Implemented microservices architecture handling 100K+ daily requests",
        "Integrated AI/ML models for personalized recommendations",
        "Achieved 98% code coverage through comprehensive testing",
      ],
      technologies: [
        "Node.js",
        "MongoDB",
        "Redis",
        "AWS",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      title: "Team Lead & Fullstack Developer",
      company: "Yarna",
      location: "Remote",
      period: "2021 - Nov 2023",
      type: "Work",
      icon: Briefcase,
      description:
        "Led cross-platform development team delivering fintech and e-commerce solutions.",
      achievements: [
        "Led team of 5+ developers with code review processes",
        "Reduced onboarding time by 30% through documentation",
        "Built applications serving 200,000+ users globally",
        "Achieved 99.9% uptime through robust architecture",
      ],
      technologies: [
        "React",
        "React Native",
        "Node.js",
        "MongoDB",
        "GCP",
        "Docker",
      ],
    },
    {
      title: "BSc Business Management",
      company: "University of Nigeria Nsukka",
      location: "Nsukka, Nigeria",
      period: "Sep 2019",
      type: "Education",
      icon: GraduationCap,
      description: "Business foundation with analytical and management skills.",
      achievements: [
        "Combined technical skills with business acumen",
        "Applied analytical thinking to engineering challenges",
      ],
      technologies: ["Business Analysis", "Project Management"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 bg-white dark:bg-dark-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium mb-3">
            Experience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">Work & Education</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A track record of delivering impactful solutions across diverse
            industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-violet-500 to-fuchsia-500 opacity-30"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 sm:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-4 top-1 w-3 h-3 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 ring-4 ring-white dark:ring-dark-950"></div>

                <div className="bg-gray-50 dark:bg-dark-900 rounded-xl p-4 sm:p-5 border border-gray-100 dark:border-dark-800 hover:shadow-lg hover:border-gray-200 dark:hover:border-dark-700 transition-all">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                            exp.type === "Work"
                              ? "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300"
                              : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                          }`}
                        >
                          {exp.type}
                        </span>
                        <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Calendar size={12} className="mr-1" />
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                          <Building2
                            size={14}
                            className="mr-1 text-violet-500"
                          />
                          {exp.company}
                        </span>
                        <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <MapPin size={12} className="mr-0.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle2
                          className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                          size={14}
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-medium rounded-md bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-dark-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 gradient-bg text-white rounded-xl font-medium text-sm shadow-lg shadow-violet-500/20 hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Discuss Your Project
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Zap, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "DevRise Academy",
      description:
        "Comprehensive coding academy platform empowering aspiring developers with structured learning paths, hands-on projects, and mentorship. Features interactive courses, progress tracking, community forums, and career guidance to help students transition into tech careers.",
      image: "/devrise.png",
      tags: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      links: {
        live: "https://thedevrise.com",
      },
      stats: [
        { label: "Students", value: "500+" },
        { label: "Courses", value: "20+" },
        { label: "Success Rate", value: "95%" },
      ],
      featured: true,
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "FarmShare Marketplace",
      description:
        "Agricultural pooled-buying marketplace connecting farmers directly with buyers across Nigeria. Features real-time pool tracking, secure payments, vendor verification, and a comprehensive dashboard for both buyers and vendors. Built with modern UI/UX and seamless user experience.",
      image: "/farmshare.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL"],
      links: {
        live: "https://farmshare-marketplace.vercel.app",
        github: "https://github.com/Koda-Black/farmshare-marketplace-v2",
      },
      stats: [
        { label: "Savings", value: "60%" },
        { label: "Pools", value: "500+" },
        { label: "Vendors", value: "150+" },
      ],
      featured: true,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Fitnessspace Platform",
      description:
        "Comprehensive wellness platform enabling users to track fitness goals, access personalized workout plans, and connect with trainers. Serving 50K+ active users with real-time analytics and AI-powered recommendations.",
      image: "/fitnessspace.png",
      tags: ["Node.js", "MongoDB", "Redis", "AWS", "AI/ML"],
      links: {
        live: "https://getfitness.space",
        app: "https://app.fitness.space",
      },
      stats: [
        { label: "Users", value: "50K+" },
        { label: "Daily Requests", value: "100K+" },
        { label: "Uptime", value: "99.9%" },
      ],
      featured: true,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Yarna Cross-Platform Suite",
      description:
        "Full-stack development of multiple applications across fintech and e-commerce domains. Built scalable backend systems and responsive frontends serving 200,000+ users globally.",
      image: "/yarna.png",
      tags: ["React", "React Native", "Node.js", "MongoDB", "GCP"],
      links: { live: "https://yarnaclient.onrender.com" },
      stats: [
        { label: "Users", value: "200K+" },
        { label: "Apps", value: "15+" },
        { label: "Features/Mo", value: "15+" },
      ],
      featured: true,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Natours Booking Platform",
      description:
        "Modern tour booking platform with real-time availability, secure payment processing, and user reviews. Focused on clean architecture and exceptional user experience.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
      tags: ["Node.js", "MongoDB", "Express", "Stripe"],
      links: {
        live: "https://natours-us.onrender.com",
        github: "https://github.com/Koda-Black",
      },
      stats: [
        { label: "Performance", value: "+40%" },
        { label: "Tours", value: "50+" },
        { label: "Coverage", value: "98%" },
      ],
      featured: false,
      color: "from-sky-500 to-blue-500",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-gray-50 dark:bg-dark-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium mb-3">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Real-world solutions delivering measurable impact across diverse
            industries
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-700 hover:shadow-xl hover:border-gray-200 dark:hover:border-dark-600 transition-all"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-0`}
              >
                {/* Image */}
                <div className="relative lg:w-2/5 h-48 sm:h-56 lg:h-auto overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity z-10`}
                  ></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg z-20">
                      ⭐ Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-5 sm:p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                      {project.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="text-center p-2 sm:p-3 bg-gray-50 dark:bg-dark-900 rounded-lg"
                        >
                          <div className="text-sm sm:text-base font-bold gradient-text">
                            {stat.value}
                          </div>
                          <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-medium rounded-md bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2">
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 gradient-bg text-white rounded-lg text-xs font-semibold hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </motion.a>
                    )}
                    {project.links.app && (
                      <motion.a
                        href={project.links.app}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-violet-600 text-white rounded-lg text-xs font-semibold hover:bg-violet-700 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Zap size={14} />
                        View App
                      </motion.a>
                    )}
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-xs font-semibold hover:bg-gray-800 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={14} />
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/Koda-Black"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            View more projects on GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

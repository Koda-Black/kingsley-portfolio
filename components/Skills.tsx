"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        "Node.js",
        "TypeScript",
        "Express",
        "NestJS",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      title: "Databases",
      color: "from-emerald-500 to-teal-500",
      skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Prisma"],
    },
    {
      title: "Cloud & DevOps",
      color: "from-orange-500 to-amber-500",
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    },
    {
      title: "Frontend",
      color: "from-violet-500 to-purple-500",
      skills: ["React", "React Native", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Architecture",
      color: "from-pink-500 to-rose-500",
      skills: ["Microservices", "System Design", "API Design", "Testing"],
    },
    {
      title: "AI/ML",
      color: "from-indigo-500 to-blue-500",
      skills: ["OpenAI API", "ML Integration", "Python", "Data Processing"],
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "15+", label: "Technologies" },
    { value: "4+", label: "Years Experience" },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-medium mb-3">
            Tech Stack
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Comprehensive expertise across modern development stack and cloud
            infrastructure
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
              className="bg-white dark:bg-dark-800 rounded-xl p-4 sm:p-5 border border-gray-100 dark:border-dark-700 hover:shadow-lg hover:border-gray-200 dark:hover:border-dark-600 transition-all group"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                ></div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.05 + skillIndex * 0.03,
                    }}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-3 sm:gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-xl p-4 sm:p-5 text-center border border-gray-100 dark:border-dark-700"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

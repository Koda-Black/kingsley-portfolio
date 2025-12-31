'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Cloud,
  Brain,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Calendar,
  Users,
  Zap
} from 'lucide-react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

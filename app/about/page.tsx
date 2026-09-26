"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Code2, GraduationCap, Sparkles, ArrowRight } from "lucide-react";

const skills = [
  "java",
 "Python",
  "Collections",
  "Open Sourcee",
  "React",
  "Next.js",
  
];

const stats = [
  { label: "Open source PRs", value: "2+" },
  { label: "Focus", value: "Java" },
  { label: "Goal", value: "softeware enginneering"},
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 py-24">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-indigo-400" />
            About me
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Suyash
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
          >
            I&apos;m a Java developer and student who loves solving problems and
            building things that work. I contribute to open source and I&apos;m
            preparing for software engineering internships.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Link
              href="mailto:you@example.com"
              className="group inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 font-medium text-white transition hover:bg-indigo-400"
            >
              <Mail className="h-4 w-4" />
              Contact me
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              Back home
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition hover:-translate-y-1 hover:border-indigo-400/40"
              >
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Two cards */}
          <motion.div
            variants={fadeUp}
            className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <GraduationCap className="h-6 w-6 text-cyan-400" />
              <h2 className="mt-4 text-xl font-semibold">Education</h2>
              <p className="mt-2 text-slate-400">
                Currently a student, building strong fundamentals in data
                structures, algorithms and object-oriented design.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Code2 className="h-6 w-6 text-indigo-400" />
              <h2 className="mt-4 text-xl font-semibold">What I do</h2>
              <p className="mt-2 text-slate-400">
                Write clean Java, practice DSA daily, and contribute to open
                source projects to learn from real-world codebases.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={fadeUp} className="mt-12">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-indigo-400/50 hover:bg-indigo-500/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
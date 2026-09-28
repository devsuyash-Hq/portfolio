import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "./component/Card";

export const metadata: Metadata = {
  title: "Suyash | Java Developer",
  description: "Portfolio of Suyash, a Java developer and student.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[120px]" />

      <section className="relative mx-auto max-w-4xl px-6 py-24">
        <p className="text-sm text-indigo-300">Java Developer • Student</p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Suyash
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          I build things with Java and Next.js, practice DSA, and contribute to
          open source while preparing for software engineering internships.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 font-medium transition hover:bg-indigo-400"
          >
            <span>View projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10"
          >
            <span>Contact me</span>
          </Link>
        </div>

        <h2 className="mt-16 text-2xl font-semibold">Featured project</h2>
        <div className="mt-4 max-w-md">
          <Card
            title="AI Interview Assistant"
            description="An AI-powered tool to practice interviews with feedback."
            tags={["Python", "Gemini API"]}
            link="https://github.com/devsuyash-Hq"
          />
        </div>
      </section>
    </main>
  );
}
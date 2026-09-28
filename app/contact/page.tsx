"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold">Get in touch</h1>
        <p className="mt-4 text-slate-400">
          Feel free to reach out for internships, collaborations, or just to say hi.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="mailto:you@example.com" className="flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 font-medium transition hover:bg-indigo-400">
            <Mail className="h-4 w-4" />
            <span>Email me</span>
          </Link>

          <Link href="https://github.com/devsuyash-Hq" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10">
            <span>GitHub</span>
          </Link>

          <Link href="https://linkedin.com/in/your-profile" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10">
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
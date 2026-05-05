"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-black pt-[120px] pb-24 sm:pt-[180px] sm:pb-32 lg:pb-40">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -z-10 h-[800px] w-[1000px] -translate-x-1/2 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-zinc-300 ring-1 ring-white/10 hover:ring-white/20 transition-all flex items-center gap-2 bg-white/5 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span>VidMax AI 2.0 is now live.</span>
              <Link href="#" className="font-semibold text-white ml-2 flex items-center gap-1">
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-8"
          >
            Create & Auto-Schedule{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Viral AI Videos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-zinc-400 max-w-2xl mx-auto mb-10"
          >
            Turn text into highly engaging short videos in seconds. Automatically schedule and publish across YouTube Shorts, Instagram Reels, TikTok, and Email campaigns.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/signup"
              className="w-full sm:w-auto rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all flex items-center justify-center gap-2 group"
            >
              Start Generating for Free
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#demo"
              className="w-full sm:w-auto rounded-full px-8 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 hover:ring-white/40 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle className="h-5 w-5" />
              Watch Demo
            </Link>
          </motion.div>
        </div>

        {/* Dashboard Mockup Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 sm:mt-24 relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10 backdrop-blur-sm lg:rounded-2xl">
            <div className="rounded-lg overflow-hidden relative aspect-video bg-zinc-900 flex items-center justify-center border border-white/10">
              {/* Fallback pattern for mockup */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
              
              <div className="z-10 flex flex-col items-center justify-center text-zinc-500">
                <PlayCircle className="h-16 w-16 mb-4 opacity-50" />
                <p className="font-medium">VidMax Dashboard Mockup</p>
                <p className="text-sm">App UI will be placed here</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

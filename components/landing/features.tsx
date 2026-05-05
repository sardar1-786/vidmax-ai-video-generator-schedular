"use client";

import { motion } from "framer-motion";
import { Video, CalendarClock, Share2, Mail, Sparkles, Zap } from "lucide-react";

const features = [
  {
    name: "AI Video Generation",
    description:
      "Turn simple text prompts into highly engaging, viral-ready short videos with lifelike AI voiceovers and dynamic captions.",
    icon: Video,
  },
  {
    name: "Smart Auto-Scheduling",
    description:
      "Set it and forget it. Our algorithm determines the best times to post for maximum engagement across all your platforms.",
    icon: CalendarClock,
  },
  {
    name: "Multi-Platform Sync",
    description:
      "Publish natively to YouTube Shorts, Instagram Reels, and TikTok simultaneously from a single dashboard.",
    icon: Share2,
  },
  {
    name: "Email Campaigns",
    description:
      "Embed generated videos directly into your email newsletters to boost click-through rates and engagement.",
    icon: Mail,
  },
  {
    name: "Auto-Captions & Hooks",
    description:
      "Automatically generate viral-style animated captions and strong hooks to stop the scroll.",
    icon: Sparkles,
  },
  {
    name: "Lightning Fast Render",
    description:
      "Generate high-quality 1080p and 4K vertical videos in under 60 seconds with our proprietary rendering engine.",
    icon: Zap,
  },
];

export function Features() {
  return (
    <div id="features" className="bg-black py-24 sm:py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-purple-400"
          >
            Create Faster, Grow Quicker
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Everything you need to scale your content engine
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-zinc-400"
          >
            Stop wasting hours editing and scheduling. VidMax automates the entire video creation and distribution pipeline.
          </motion.p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-purple-500/30">
                    <feature.icon className="h-5 w-5 text-purple-400" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

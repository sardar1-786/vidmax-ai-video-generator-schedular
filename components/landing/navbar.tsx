"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                <Play className="h-4 w-4 text-white fill-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                VidMax
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              How it Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              Pricing
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-white hover:text-zinc-300 transition-colors">
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10 px-6 py-4"
        >
          <div className="flex flex-col gap-4">
            <Link href="#features" className="text-base font-medium text-zinc-300 hover:text-white">
              Features
            </Link>
            <Link href="#how-it-works" className="text-base font-medium text-zinc-300 hover:text-white">
              How it Works
            </Link>
            <Link href="#pricing" className="text-base font-medium text-zinc-300 hover:text-white">
              Pricing
            </Link>
            <hr className="border-white/10" />
            <Link href="/login" className="text-base font-medium text-zinc-300 hover:text-white">
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex justify-center rounded-full bg-white px-4 py-2 text-base font-semibold text-black hover:bg-zinc-200"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

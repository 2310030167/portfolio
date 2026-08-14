"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalDetails } from "@/data/portfolio";
import { Github, Linkedin, FileText, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Author", href: "#author" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 sm:px-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl flex items-center justify-between px-5 sm:px-7 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#090b14]/90 backdrop-blur-md border border-[#FFA586]/15 shadow-xl shadow-black/50"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Left: Name */}
        <Link
          href="/"
          className="font-display font-bold text-xs sm:text-sm tracking-tight text-white hover:text-[#FFA586] transition-colors uppercase"
        >
          {personalDetails.name}
        </Link>



        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono text-zinc-400 hover:text-[#FFA586] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Resume & Social Links */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalDetails.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#161B2F]/60 hover:bg-[#242F49] border border-[#FFA586]/25 hover:border-[#FFA586]/50 text-xs font-mono text-zinc-200 hover:text-white transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-[#FFA586]" />
            <span>Resume</span>
          </a>

          <a
            href={personalDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-zinc-400 hover:text-[#FFA586] hover:bg-white/[0.05] transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
          </a>

          <a
            href={personalDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-zinc-400 hover:text-[#FFA586] hover:bg-white/[0.05] transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#FFA586]" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 bg-[#090b14] border border-[#FFA586]/20 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 md:hidden animate-fade-in z-50">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono text-zinc-300 hover:text-[#FFA586] py-2 border-b border-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <a
              href={personalDetails.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFA586] text-black font-semibold text-xs font-mono"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

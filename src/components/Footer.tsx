"use client";

import React from "react";
import { personalDetails } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-10 border-t border-[#FFA586]/15 bg-[#05060a]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 text-left">
        
        {/* Left: Signature & Subtitle */}
        <div className="space-y-2">
          <div className="font-display font-bold text-sm tracking-tight text-white uppercase">
            {personalDetails.name}
          </div>
          <div className="font-mono text-xs text-[#FFA586]/80 tracking-widest uppercase font-medium">
            {personalDetails.eyebrow}
          </div>
        </div>

        {/* Center/Right: Links & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 font-mono text-xs text-zinc-400">
          <a
            href={personalDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFA586] transition-colors"
          >
            GITHUB
          </a>

          <a
            href={personalDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFA586] transition-colors"
          >
            LINKEDIN
          </a>

          <a
            href="#author"
            className="hover:text-[#FFA586] text-zinc-200 font-semibold transition-colors"
          >
            ASHES OF RUSWELL
          </a>

          <span className="text-zinc-600">
            © 2026
          </span>
        </div>

      </div>
    </footer>
  );
};

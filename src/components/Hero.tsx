"use client";

import React from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, BookOpen } from "lucide-react";
import { personalDetails } from "@/data/portfolio";

export const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-10 overflow-hidden">
      {/* Premium ambient glows using #FFA586 (Warm Peach) & #161B2F (Midnight Slate) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-[#FFA586]/[0.06] via-[#242F49]/[0.15] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[350px] bg-gradient-to-tl from-[#161B2F]/40 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Typography & Intent */}
        <div className="lg:col-span-7 space-y-7 text-left">
          
          {/* Main Heading & Statement */}
          <div className="space-y-3">
            <h2 className="font-mono text-lg sm:text-xl text-zinc-400 tracking-tight">
              Hi, I&apos;m Eajaz.
            </h2>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05]">
              I build intelligent systems and digital products.
            </h1>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFA586] text-[#070708] font-bold text-xs tracking-wide uppercase hover:bg-white transition-all duration-300 shadow-lg shadow-[#FFA586]/10 active:scale-[0.98]"
            >
              <span>View Selected Work</span>
              <ArrowDownRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#161B2F]/50 hover:bg-[#242F49]/70 text-zinc-200 hover:text-white border border-[#384358]/60 hover:border-[#FFA586]/40 text-xs font-mono transition-all duration-300"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Right Column: Refined Circular Portrait Composition */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-[280px] sm:w-[330px] md:w-[360px] aspect-square flex items-center justify-center">
            
            {/* Single Subtle Outer Ring with Warm Accent Glow */}
            <div className="absolute inset-0 rounded-full border border-[#FFA586]/10" />
            
            {/* Subtle Inner Ring */}
            <div className="absolute inset-3 rounded-full border border-white/[0.04]" />

            {/* Circular Framing Container preserving high-contrast black & white avatar */}
            <div className="relative w-[250px] sm:w-[300px] md:w-[330px] aspect-square rounded-full p-2 bg-gradient-to-b from-[#FFA586]/20 via-[#242F49]/40 to-transparent border border-white/[0.12] shadow-2xl overflow-hidden group">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0a0a0f]">
                <Image
                  src="/avatar.png"
                  alt={personalDetails.name}
                  fill
                  sizes="(max-width: 768px) 260px, 330px"
                  priority
                  className="object-cover object-center grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/95 via-transparent to-transparent" />

                {/* Bottom Metadata */}
                <div className="absolute bottom-5 left-0 right-0 text-center px-4">
                  <span className="text-[10px] font-mono text-[#FFA586]/90 tracking-wider uppercase block font-medium">
                    KL University • B.Tech CSE (AI &amp; DS)
                  </span>
                  <span className="text-xs font-medium text-zinc-300">
                    Graduating May 2027
                  </span>
                </div>
              </div>
            </div>

            {/* Author Identity Small Tag */}
            <a
              href="#author"
              className="absolute -top-2 -left-2 sm:-left-4 bg-[#0e1017]/95 backdrop-blur-md border border-[#FFA586]/25 hover:border-[#FFA586]/60 rounded-2xl px-3.5 py-2 shadow-xl flex items-center gap-2.5 transition-all duration-300 group"
            >
              <div className="w-7 h-7 rounded-xl bg-[#FFA586]/10 border border-[#FFA586]/20 flex items-center justify-center text-[#FFA586]">
                <BookOpen className="w-3.5 h-3.5" />
              </div>
              <div className="text-left font-mono">
                <div className="text-[9px] text-[#FFA586]/80 uppercase tracking-widest font-semibold">Author</div>
                <div className="text-xs font-bold text-white group-hover:text-[#FFA586] transition-colors">Ashes of Ruswell</div>
              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

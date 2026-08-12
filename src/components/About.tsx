"use client";

import React from "react";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Section Index & Eyebrow */}
        <div className="space-y-2">
          <span className="font-mono text-xs text-[#FFA586] uppercase tracking-widest block font-medium">
            {"02 // ABOUT"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
            ABOUT
          </h2>
        </div>

        {/* Single Concise Editorial Paragraph */}
        <p className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light leading-snug tracking-tight">
          I&apos;m a Computer Science Engineering student specializing in Artificial Intelligence &amp; Data Science. I build intelligent systems, full-stack applications, and data-driven products, with a focus on turning complex ideas into useful software.
        </p>

        {/* Three Simple Clean Labels with #FFA586 accent */}
        <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA586] shadow-[0_0_6px_#FFA586]" />
            <span className="font-mono text-xs text-zinc-300 tracking-widest uppercase font-medium">
              AI / ML
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA586] shadow-[0_0_6px_#FFA586]" />
            <span className="font-mono text-xs text-zinc-300 tracking-widest uppercase font-medium">
              SOFTWARE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA586] shadow-[0_0_6px_#FFA586]" />
            <span className="font-mono text-xs text-zinc-300 tracking-widest uppercase font-medium">
              DATA
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

"use client";

import React from "react";
import { Feather, Compass, Sparkles, BookOpen } from "lucide-react";

export const Author = () => {
  return (
    <section id="author" className="py-28 md:py-36 px-6 md:px-10 border-t border-[#FFA586]/15 relative overflow-hidden bg-[#06070c]">
      {/* Subtle literary background aura using #FFA586 and #161B2F */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[380px] bg-gradient-to-l from-[#FFA586]/[0.05] via-[#161B2F]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#FFA586] uppercase tracking-widest font-semibold">
            <Feather className="w-3.5 h-3.5 text-[#FFA586]" />
            <span>07 // AUTHOR &amp; CREATIVE IDENTITY</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase leading-[0.95]">
            ASHES OF RUSWELL
          </h2>

          <p className="font-mono text-sm sm:text-base text-[#FFA586]/80 italic">
            Stories, characters, worlds, and words.
          </p>
        </div>

        {/* Literary Statement */}
        <div className="border-l-2 border-[#FFA586]/40 pl-6 sm:pl-8 py-2">
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
            Beyond engineering, I write and build fictional worlds, exploring characters, atmosphere, mystery, and human emotion.
          </p>
        </div>

        {/* Writer's Studio Archives / Themes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          
          <div className="p-6 rounded-2xl bg-[#0e1018]/80 hover:bg-[#161B2F]/70 border border-white/[0.06] hover:border-[#FFA586]/30 transition-all duration-300 space-y-3 group">
            <div className="w-8 h-8 rounded-xl bg-[#FFA586]/10 border border-[#FFA586]/20 flex items-center justify-center text-[#FFA586]">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="font-display text-base font-bold text-white group-hover:text-[#FFA586] transition-colors tracking-tight">
              World Building
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Constructing intricate settings, societal tensions, and lore rooted in atmospheric realism.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1018]/80 hover:bg-[#161B2F]/70 border border-white/[0.06] hover:border-[#FFA586]/30 transition-all duration-300 space-y-3 group">
            <div className="w-8 h-8 rounded-xl bg-[#FFA586]/10 border border-[#FFA586]/20 flex items-center justify-center text-[#FFA586]">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-display text-base font-bold text-white group-hover:text-[#FFA586] transition-colors tracking-tight">
              Character Psychology
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Delving into moral complexity, underlying motives, and the vulnerability of human connection.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1018]/80 hover:bg-[#161B2F]/70 border border-white/[0.06] hover:border-[#FFA586]/30 transition-all duration-300 space-y-3 group">
            <div className="w-8 h-8 rounded-xl bg-[#FFA586]/10 border border-[#FFA586]/20 flex items-center justify-center text-[#FFA586]">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="font-display text-base font-bold text-white group-hover:text-[#FFA586] transition-colors tracking-tight">
              Manuscripts &amp; Prose
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Writing short fiction, narrative arcs, and speculative explorations under the Ashes of Ruswell banner.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

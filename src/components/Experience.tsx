"use client";

import React from "react";
import { experiences } from "@/data/portfolio";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-10 border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="font-mono text-xs text-[#FFA586] uppercase tracking-widest block font-medium">
            {"04 // EXPERIENCE"}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            EXPERIENCE
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal">
            Selected industry advisory, engineering, and academic research roles.
          </p>
        </div>

        {/* Clean Minimal Vertical Timeline */}
        <div className="space-y-12 border-l border-white/[0.08] ml-2 pl-6 sm:pl-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative space-y-3 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#070708] border-2 border-zinc-600 group-hover:border-[#FFA586] group-hover:bg-[#FFA586] transition-all duration-300" />

              {/* Role Title & Time Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#FFA586] transition-colors tracking-tight">
                  {exp.role}
                </h3>
                <span className="font-mono text-xs text-zinc-500 shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Company & Location */}
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                <span className="text-zinc-200 font-semibold">{exp.company}</span>
                <span>•</span>
                <span className="text-zinc-500">{exp.location}</span>
              </div>

              {/* Concise 2-3 Bullet Points */}
              <ul className="space-y-2 text-zinc-400 text-sm leading-relaxed pt-1">
                {exp.highlights.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-zinc-600 mt-1 select-none">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tooling Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors"
                  >
                    #{skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

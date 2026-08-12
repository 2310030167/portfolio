"use client";

import React from "react";
import { leadership } from "@/data/portfolio";

export const Leadership = () => {
  return (
    <section id="leadership" className="py-28 md:py-36 px-6 md:px-10 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block font-medium">
              {"// 06 • Ecosystem & Impact"}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white uppercase">
              BEYOND THE CODE
            </h2>
          </div>
          <p className="text-zinc-400 text-sm md:text-base max-w-md font-normal">
            Building developer communities, mentoring emerging engineers, and championing innovation culture.
          </p>
        </div>

        {/* Typographic Leadership Matrix */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {leadership.map((item, idx) => (
            <div
              key={item.id}
              className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline group hover:bg-white/[0.01] transition-colors px-2 rounded-2xl"
            >
              {/* Metric & Number Indicator */}
              <div className="lg:col-span-3 flex items-baseline gap-4">
                <span className="font-mono text-xs text-zinc-600 group-hover:text-indigo-400 transition-colors">
                  0{idx + 1}
                </span>
                <span className="font-mono text-sm sm:text-base font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  {item.metric}
                </span>
              </div>

              {/* Role & Organization */}
              <div className="lg:col-span-4 space-y-1">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.role}
                </h3>
                <div className="font-mono text-xs text-zinc-400">
                  {item.organization}
                </div>
              </div>

              {/* Description & Highlights */}
              <div className="lg:col-span-5 space-y-3">
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-1.5 text-xs text-zinc-500">
                  {item.highlights.map((h, hidx) => (
                    <li key={hidx} className="flex items-start gap-2">
                      <span className="text-zinc-600 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

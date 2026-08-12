"use client";

import React from "react";
import { certifications } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 px-6 md:px-10 border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="font-mono text-xs text-[#FFA586] uppercase tracking-widest block font-medium">
            {"06 // CERTIFICATIONS"}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            CERTIFICATIONS
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal">
            Verified industry and foundation credentials.
          </p>
        </div>

        {/* 2-Column Clean Editorial List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.slice(0, 6).map((cert) => (
            <a
              key={cert.id}
              href={cert.verifyUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#090b14]/70 hover:bg-[#161B2F]/60 border border-white/[0.06] hover:border-[#FFA586]/40 transition-all duration-300 flex flex-col justify-between gap-3 group"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#FFA586] transition-colors" />
                </div>
                <h3 className="font-display text-base font-bold text-zinc-200 group-hover:text-white transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] font-mono text-[11px] text-zinc-500">
                <span>{cert.issuedDate}</span>
                <span className="text-[#FFA586] font-medium">Verified</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

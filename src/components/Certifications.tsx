"use client";

import React, { useState, useEffect } from "react";
import { certifications, Certification } from "@/data/portfolio";
import { ArrowUpRight, ShieldCheck, CheckCircle2, Copy, Check, X, ExternalLink, Award } from "lucide-react";

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [copiedId, setCopiedId] = useState(false);

  const categories = ["All", "Cloud", "AI & ML", "Enterprise", "Data & Automation"];

  const filteredCerts = activeCategory === "All"
    ? certifications
    : certifications.filter((c) => c.category === activeCategory);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  const handleCopyCredential = async (id: string) => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(id);
      }
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    } catch {
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <section id="certifications" className="py-24 md:py-32 px-6 md:px-10 border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#FFA586] uppercase tracking-widest block font-medium">
              {"06 // CERTIFICATIONS"}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              CERTIFICATIONS
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Industry-standard and foundation verified credentials. Click any credential to verify.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs w-fit">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>8/8 Verified Credentials</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#FFA586] text-[#070708] font-bold shadow-md shadow-[#FFA586]/10"
                  : "bg-[#161B2F]/40 hover:bg-[#161B2F]/80 text-zinc-400 hover:text-white border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="p-5 rounded-2xl bg-[#090b14]/70 hover:bg-[#161B2F]/60 border border-white/[0.06] hover:border-[#FFA586]/40 transition-all duration-300 flex flex-col justify-between gap-4 group cursor-pointer"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06] group-hover:border-[#FFA586]/30 group-hover:text-[#FFA586] transition-colors">
                    <span>{cert.category}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-zinc-200 group-hover:text-white transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>

              {cert.skills && (
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400 text-[10px] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.04] font-mono text-[11px] text-zinc-500">
                <span>{cert.issuedDate}</span>
                <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Verification Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="w-full max-w-lg bg-[#0c0d14] border border-[#FFA586]/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Badge */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>OFFICIALLY VERIFIED CREDENTIAL</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white tracking-tight leading-snug">
                {selectedCert.title}
              </h3>

              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                <Award className="w-3.5 h-3.5 text-[#FFA586]" />
                <span className="text-zinc-200 font-semibold">{selectedCert.issuer}</span>
                <span>•</span>
                <span className="text-[#FFA586]">{selectedCert.category}</span>
              </div>
            </div>

            {/* Metadata Card */}
            <div className="bg-[#12131d] border border-white/[0.08] rounded-2xl p-4 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                <span className="text-zinc-500">Status</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Active &amp; Verified
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                <span className="text-zinc-500">Issue Date</span>
                <span className="text-zinc-200">{selectedCert.issuedDate}</span>
              </div>

              {selectedCert.expiryDate && (
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                  <span className="text-zinc-500">Validity</span>
                  <span className="text-zinc-200">Valid through {selectedCert.expiryDate}</span>
                </div>
              )}

              {selectedCert.credentialId && (
                <div className="flex items-center justify-between pt-1">
                  <span className="text-zinc-500">Credential ID</span>
                  <button
                    onClick={() => handleCopyCredential(selectedCert.credentialId!)}
                    className="inline-flex items-center gap-1.5 text-[#FFA586] hover:text-white transition-colors group"
                  >
                    <span>{selectedCert.credentialId}</span>
                    {copiedId ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#FFA586]" />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Verified Skills */}
            {selectedCert.skills && (
              <div className="space-y-2">
                <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider block">
                  Demonstrated Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-[#161B2F]/60 border border-[#384358]/50 text-zinc-200 text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              {selectedCert.verifyUrl && (
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FFA586] text-[#070708] font-bold text-xs font-mono uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-[#FFA586]/15 active:scale-[0.98]"
                >
                  <span>Verify on Issuer Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={() => setSelectedCert(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white font-mono text-xs transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};


import React from "react";
import { projects, Project } from "@/data/portfolio";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  // Minimal Abstract Visual per project using #FFA586 & #161B2F
  const renderMinimalVisual = (project: Project) => {
    switch (project.visualType) {
      case "rca":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-center gap-3 font-mono text-[11px] text-zinc-400 bg-[#090b14]">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span className="text-zinc-500">VECTOR EMBEDDING</span>
              <span className="text-[#FFA586] font-medium">FAISS Index // 384-dim</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span className="text-zinc-500">SEMANTIC SIMILARITY</span>
              <span className="text-zinc-200">94.8% Match</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">INFERENCE ENGINE</span>
              <span className="text-[#FFA586]">Groq Llama 3.3 (0.32s)</span>
            </div>
          </div>
        );
      case "timeseries":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-center gap-3 font-mono text-[11px] text-zinc-400 bg-[#090b14]">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span className="text-zinc-500">MODELS BENCHMARKED</span>
              <span className="text-zinc-200">ARIMA · Prophet · LSTM · XGB</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span className="text-zinc-500">SELECTION METRIC</span>
              <span className="text-[#FFA586] font-medium">Lowest MAE (Dynamic)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">API LATENCY</span>
              <span className="text-zinc-200">FastAPI Async &lt; 24ms</span>
            </div>
          </div>
        );
      case "crm":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-center gap-3 font-mono text-[11px] text-zinc-400 bg-[#090b14]">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span className="text-zinc-500">ARCHITECTURE</span>
              <span className="text-zinc-200">Next.js + MySQL RLS</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span className="text-zinc-500">ISOLATION MODEL</span>
              <span className="text-[#FFA586] font-medium">Multi-Tenant Row Security</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">TELEMETRY</span>
              <span className="text-zinc-200">Event Triggers &amp; Audit Logs</span>
            </div>
          </div>
        );
      case "logistics":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-center gap-3 font-mono text-[11px] text-zinc-400 bg-[#090b14]">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span className="text-zinc-500">ETL PIPELINE</span>
              <span className="text-zinc-200">SQL Data Transformations</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span className="text-zinc-500">ANALYTICS</span>
              <span className="text-[#FFA586] font-medium">Inventory Turnover &amp; Transit Lead</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">BI INTERFACE</span>
              <span className="text-zinc-200">Executive KPI Telemetry</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full p-6 flex flex-col justify-center gap-3 font-mono text-[11px] text-zinc-400 bg-[#090b14]">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span className="text-zinc-500">CORPUS CLEANING</span>
              <span className="text-zinc-200">TF-IDF Vectorizer</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">CLASSIFIER</span>
              <span className="text-[#FFA586] font-medium">Multi-class Sentiment Polarity</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-10 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="font-mono text-xs text-[#FFA586] uppercase tracking-widest block font-medium">
            {"03 // SELECTED WORK"}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            SELECTED WORK
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal">
            A selection of systems and products I&apos;ve built.
          </p>
        </div>

        {/* Large Editorial Rows */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="py-10 sm:py-12 group transition-all duration-300 hover:bg-[#161B2F]/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Metadata & Narrative (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#FFA586] font-semibold tracking-wider">
                      {project.number}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#384358]" />
                    <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight group-hover:text-[#FFA586] transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-[#FFA586] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </h3>
                    <p className="text-zinc-400 text-sm sm:text-base font-normal leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Clean Stack Tokens */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#161B2F]/50 border border-[#384358]/50 text-zinc-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center gap-4 pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-[#FFA586] transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-[#FFA586] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Visual Architecture System (5 cols) */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl border border-white/[0.08] group-hover:border-[#FFA586]/30 overflow-hidden bg-[#090b14] shadow-lg transition-colors duration-300">
                    {renderMinimalVisual(project)}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

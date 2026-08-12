"use client";

import React from "react";
import { Activity, Database, Network, MessageSquareCode, ShieldCheck, Zap, GitBranch } from "lucide-react";

interface VisualProps {
  type: "rca" | "timeseries" | "crm" | "logistics" | "sentiment";
}

export const VisualRepresentation: React.FC<VisualProps> = ({ type }) => {
  switch (type) {
    case "rca":
      return (
        <div className="w-full h-full min-h-[300px] lg:min-h-[380px] bg-[#0c0c10] border border-white/[0.08] rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:bg-indigo-500/20 transition-all duration-700" />
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 z-10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="font-mono text-xs text-zinc-500 ml-2">sentinel-rca-agent v2.4</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                FAISS Vector Matched
              </span>
            </div>
          </div>

          {/* Architecture Pipeline Simulation */}
          <div className="py-4 space-y-3 font-mono text-xs z-10">
            <div className="bg-black/50 p-3 rounded-xl border border-white/[0.05] space-y-1.5">
              <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                <span className="text-zinc-500">{"// TELEMETRY INGESTION"}</span>
                <span className="text-emerald-400">LATENCY: 12ms</span>
              </div>
              <p className="text-zinc-300 truncate">
                <span className="text-rose-400">[ERR_503]</span> upstream connection timeout at auth-worker-node-04
              </p>
            </div>

            {/* Vector & LLM Reasoning Steps */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/[0.02] p-3 rounded-xl border border-white/[0.04] space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">FAISS SIMILARITY</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-white">99.4%</span>
                  <span className="text-[10px] text-zinc-400">INCIDENT #1842</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full w-[99.4%]" />
                </div>
              </div>

              <div className="bg-white/[0.02] p-3 rounded-xl border border-white/[0.04] space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">LLAMA 3.3 AGENT</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-emerald-400">P1-CRITICAL</span>
                </div>
                <div className="text-[10px] text-zinc-400 truncate">Connection pool exhaustion</div>
              </div>
            </div>
          </div>

          {/* Playbook Output */}
          <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-3 z-10">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold mb-1">
              <Zap className="w-3.5 h-3.5" />
              Automated Mitigation Playbook
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed font-mono">
              → Restart connection pooler pool-gw-02 & scale replicas +3 via Kubernetes operator.
            </p>
          </div>
        </div>
      );

    case "timeseries":
      return (
        <div className="w-full h-full min-h-[300px] lg:min-h-[380px] bg-[#0c0c10] border border-white/[0.08] rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:bg-emerald-500/20 transition-all duration-700" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 z-10">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs text-zinc-300">timeseries-engine.fastapi</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Model: XGBoost + LSTM Hybrid
            </span>
          </div>

          {/* SVG Forecasting Curve */}
          <div className="relative py-4 my-auto z-10">
            <svg viewBox="0 0 400 130" className="w-full h-32 stroke-current">
              <defs>
                <linearGradient id="forecastingGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Grid lines */}
              <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
              <line x1="0" y1="65" x2="400" y2="65" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
              <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
              <line x1="260" y1="0" x2="260" y2="130" stroke="rgba(16,185,129,0.3)" strokeDasharray="3 3" />
              
              {/* Historical curve */}
              <path
                d="M 10 90 Q 40 40, 70 75 T 130 50 T 190 85 T 260 45"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2.5"
              />
              {/* Forecast Area */}
              <path
                d="M 260 45 Q 295 20, 330 35 T 390 15 L 390 120 L 260 120 Z"
                fill="url(#forecastingGradient)"
              />
              {/* Forecast curve */}
              <path
                d="M 260 45 Q 295 20, 330 35 T 390 15"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeDasharray="6 3"
              />
              {/* Data points */}
              <circle cx="260" cy="45" r="4" fill="#10b981" />
              <circle cx="390" cy="15" r="4" fill="#34d399" />
            </svg>
            <div className="flex justify-between text-[10px] font-mono text-zinc-500 px-1 mt-1">
              <span>T-30d</span>
              <span>T-15d</span>
              <span className="text-emerald-400 font-semibold">T-0 (Now)</span>
              <span className="text-emerald-400 font-semibold">+14d Forecast</span>
            </div>
          </div>

          {/* Model Benchmarks Row */}
          <div className="grid grid-cols-4 gap-2 text-center font-mono text-xs z-10 pt-2 border-t border-white/[0.04]">
            <div className="bg-white/[0.02] p-2 rounded-lg border border-white/[0.03]">
              <span className="text-[9px] text-zinc-500 block">XGBoost</span>
              <span className="text-emerald-400 font-semibold text-xs">MAE 0.041</span>
            </div>
            <div className="bg-white/[0.02] p-2 rounded-lg border border-white/[0.03]">
              <span className="text-[9px] text-zinc-500 block">LSTM</span>
              <span className="text-zinc-300 font-semibold text-xs">MAE 0.048</span>
            </div>
            <div className="bg-white/[0.02] p-2 rounded-lg border border-white/[0.03]">
              <span className="text-[9px] text-zinc-500 block">Prophet</span>
              <span className="text-zinc-400 text-xs">MAE 0.062</span>
            </div>
            <div className="bg-white/[0.02] p-2 rounded-lg border border-white/[0.03]">
              <span className="text-[9px] text-zinc-500 block">ARIMA</span>
              <span className="text-zinc-400 text-xs">MAE 0.079</span>
            </div>
          </div>
        </div>
      );

    case "crm":
      return (
        <div className="w-full h-full min-h-[300px] lg:min-h-[380px] bg-[#0c0c10] border border-white/[0.08] rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:bg-cyan-500/20 transition-all duration-700" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 z-10">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-xs text-zinc-300">ioms.tenant-gateway</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              MySQL RLS Active
            </span>
          </div>

          {/* Tenant Pipeline Visualizer */}
          <div className="space-y-2.5 my-auto py-3 z-10">
            <div className="bg-white/[0.02] border border-white/[0.05] p-3 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 rounded-full bg-cyan-400" />
                <div>
                  <div className="text-xs font-semibold text-white">Enterprise Tier A</div>
                  <div className="text-[11px] font-mono text-zinc-400">Tenant: org_9281 • RLS Partitioned</div>
                </div>
              </div>
              <span className="text-xs font-mono px-2 py-1 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/30">
                100% Isolated
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              <div className="bg-black/40 p-2.5 rounded-xl border border-white/[0.04]">
                <span className="text-[10px] text-zinc-500 block">PIPELINE DEALS</span>
                <span className="text-base font-bold text-white">$2.4M</span>
                <span className="text-[9px] text-emerald-400 block mt-0.5">+18% MoM</span>
              </div>
              <div className="bg-black/40 p-2.5 rounded-xl border border-white/[0.04]">
                <span className="text-[10px] text-zinc-500 block">TELEMETRY QPS</span>
                <span className="text-base font-bold text-cyan-400">14.2k</span>
                <span className="text-[9px] text-zinc-400 block mt-0.5">p99 &lt; 4ms</span>
              </div>
              <div className="bg-black/40 p-2.5 rounded-xl border border-white/[0.04]">
                <span className="text-[10px] text-zinc-500 block">SECURITY</span>
                <span className="text-base font-bold text-emerald-400">Strict</span>
                <span className="text-[9px] text-zinc-400 block mt-0.5">RLS Enforced</span>
              </div>
            </div>
          </div>

          <div className="font-mono text-[11px] text-zinc-400 flex items-center justify-between pt-2 border-t border-white/[0.04] z-10">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
              Next.js 15 App Router + Tailwind
            </span>
            <span className="text-zinc-500">Telemetry Sync 200 OK</span>
          </div>
        </div>
      );

    case "logistics":
      return (
        <div className="w-full h-full min-h-[300px] lg:min-h-[380px] bg-[#0c0c10] border border-white/[0.08] rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:bg-amber-500/20 transition-all duration-700" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 z-10">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-amber-400" />
              <span className="font-mono text-xs text-zinc-300">defence-logistics-bi.sql</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Power BI & SQL Pipeline
            </span>
          </div>

          {/* Supply Chain Metric Nodes */}
          <div className="grid grid-cols-2 gap-2.5 my-auto py-2 z-10 font-mono">
            <div className="bg-white/[0.02] p-3 rounded-xl border border-white/[0.04] space-y-1">
              <div className="text-[10px] text-zinc-500 flex justify-between">
                <span>INVENTORY TURNOVER</span>
                <span className="text-amber-400">KPI 8.4x</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full w-[84%]" />
              </div>
              <span className="text-[10px] text-zinc-400 block pt-0.5">Warehouse Depot Alpha-3</span>
            </div>

            <div className="bg-white/[0.02] p-3 rounded-xl border border-white/[0.04] space-y-1">
              <div className="text-[10px] text-zinc-500 flex justify-between">
                <span>TRANSIT LEAD TIME</span>
                <span className="text-emerald-400">-28.4%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[72%]" />
              </div>
              <span className="text-[10px] text-zinc-400 block pt-0.5">Dynamic Route Optimization</span>
            </div>

            <div className="col-span-2 bg-black/40 p-3 rounded-xl border border-white/[0.04] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-zinc-500 block">SYNTHETIC ENTERPRISE TELEMETRY</span>
                <span className="text-xs text-zinc-300 font-semibold">1,000,000+ Multi-Modal Logistics Records</span>
              </div>
              <span className="text-xs font-mono text-amber-300 bg-amber-950/40 px-2 py-1 rounded border border-amber-500/20">
                SQL ETL Ready
              </span>
            </div>
          </div>

          <div className="font-mono text-[11px] text-zinc-400 flex items-center justify-between pt-2 border-t border-white/[0.04] z-10">
            <span className="text-zinc-400">Stack: Python • SQL • Power BI</span>
            <span className="text-zinc-500">Executive KPI Layer</span>
          </div>
        </div>
      );

    case "sentiment":
      return (
        <div className="w-full h-full min-h-[300px] lg:min-h-[380px] bg-[#0c0c10] border border-white/[0.08] rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:bg-pink-500/20 transition-all duration-700" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 z-10">
            <div className="flex items-center gap-2">
              <MessageSquareCode className="w-4 h-4 text-pink-400" />
              <span className="font-mono text-xs text-zinc-300">amazon-nlp-pipeline</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
              TF-IDF + Scikit-learn
            </span>
          </div>

          {/* NLP Cluster Telemetry */}
          <div className="space-y-3 my-auto py-2 z-10 font-mono text-xs">
            <div className="bg-black/50 p-3 rounded-xl border border-white/[0.05] space-y-2">
              <div className="text-[10px] text-zinc-500">{"// EXTRACTED POLARITY DISTRIBUTION"}</div>
              <div className="space-y-1.5">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-emerald-400">Positive Polarity</span>
                    <span className="text-zinc-300">76.4%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[76.4%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-rose-400">Critical Negative Feedback</span>
                    <span className="text-zinc-300">14.8%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="bg-rose-400 h-full w-[14.8%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {["lemmatized", "n-grams (1,3)", "F1-Score: 0.92", "Stopword filtered"].map((tag, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/[0.05]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="font-mono text-[11px] text-zinc-400 flex items-center justify-between pt-2 border-t border-white/[0.04] z-10">
            <span className="text-zinc-400">Text Mining & Feedback Extraction</span>
            <span className="text-emerald-400 font-semibold">92.3% Accuracy</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};

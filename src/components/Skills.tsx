"use client";

import React from "react";

export const Skills = () => {
  const toolgroups = [
    {
      category: "LANGUAGES",
      skills: ["Python", "Java", "SQL", "C", "JavaScript", "TypeScript"],
    },
    {
      category: "AI / ML",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "LLMs & Agents",
        "RAG Architecture",
        "Vector Search (FAISS)",
        "LangChain",
        "Time Series Forecasting",
      ],
    },
    {
      category: "FRAMEWORKS & APIS",
      skills: [
        "FastAPI",
        "Next.js",
        "React",
        "Streamlit",
        "Scikit-Learn",
        "PyTorch",
        "Tailwind CSS",
        "Node.js",
      ],
    },
    {
      category: "DATA & CLOUD",
      skills: [
        "AWS (Cloud Practitioner)",
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Docker",
        "Git",
        "Linux CLI",
        "Power BI",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-10 border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="font-mono text-xs text-[#FFA586] uppercase tracking-widest block font-medium">
            {"05 // TOOLKIT"}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            TOOLKIT
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal">
            Technologies, libraries, and systems I work with.
          </p>
        </div>

        {/* Grouped Typography Matrix */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {toolgroups.map((group) => (
            <div
              key={group.category}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
            >
              <div className="md:col-span-4">
                <span className="font-mono text-xs text-[#FFA586] font-semibold tracking-wider uppercase">
                  {group.category}
                </span>
              </div>
              <div className="md:col-span-8">
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                  {group.skills.join("  ·  ")}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

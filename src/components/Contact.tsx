"use client";

import React, { useState } from "react";
import { personalDetails } from "@/data/portfolio";
import { Mail, Github, Linkedin, Copy, Check, Send, AlertCircle, CheckCircle2, Loader2, ArrowUpRight } from "lucide-react";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // Honeypot
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(personalDetails.email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = personalDetails.email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.message || "Unable to send message. Please try again later.");
        return;
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Unable to send message. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36 px-6 md:px-10 border-t border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <span className="font-mono text-xs text-[#FFA586] uppercase tracking-widest block font-medium">
            {"08 // CONTACT"}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase leading-[0.95]">
            LET&apos;S TALK.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-normal max-w-xl">
            Have an idea, project, opportunity, or interesting problem? Let&apos;s connect.
          </p>
        </div>

        {/* Contact Methods & Direct Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFA586] text-[#070708] font-bold text-xs font-mono uppercase hover:bg-white transition-all active:scale-[0.98] shadow-md shadow-[#FFA586]/10"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-800 font-bold" />
                <span>Copied Email</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{personalDetails.email}</span>
              </>
            )}
          </button>

          <a
            href={personalDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#161B2F]/60 hover:bg-[#242F49] text-zinc-200 hover:text-white border border-[#FFA586]/20 hover:border-[#FFA586]/50 text-xs font-mono transition-all"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-[#FFA586]" />
          </a>

          <a
            href={personalDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#161B2F]/60 hover:bg-[#242F49] text-zinc-200 hover:text-white border border-[#FFA586]/20 hover:border-[#FFA586]/50 text-xs font-mono transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#FFA586]" />
          </a>
        </div>

        {/* Minimal Direct Message Form */}
        <div className="pt-8 border-t border-white/[0.06]">
          {status === "success" ? (
            <div className="py-10 text-center space-y-3 bg-[#090b14] border border-[#FFA586]/25 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-[#FFA586]/10 border border-[#FFA586]/30 text-[#FFA586] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-tight">
                MESSAGE SENT
              </h3>
              <p className="text-zinc-400 text-sm max-w-md mx-auto">
                Thank you for reaching out. Your message has been received and I&apos;ll get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 text-xs font-mono text-[#FFA586] hover:underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="font-mono text-xs text-[#FFA586]/90 tracking-wider uppercase pb-2 font-medium">
                Or send a message directly:
              </div>

              {/* Honeypot field (hidden from legitimate visitors) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="text-xs font-mono text-zinc-400">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={status === "sending"}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090b14] border border-white/[0.08] focus:border-[#FFA586]/50 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-email" className="text-xs font-mono text-zinc-400">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    maxLength={150}
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={status === "sending"}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090b14] border border-white/[0.08] focus:border-[#FFA586]/50 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label htmlFor="contact-subject" className="text-xs font-mono text-zinc-400">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  maxLength={200}
                  placeholder="Opportunity / Collaboration / Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  disabled={status === "sending"}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090b14] border border-white/[0.08] focus:border-[#FFA586]/50 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="contact-message" className="text-xs font-mono text-zinc-400">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  maxLength={5000}
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={status === "sending"}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090b14] border border-white/[0.08] focus:border-[#FFA586]/50 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors resize-none"
                />
              </div>

              {/* Error Message */}
              {status === "error" && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage || "Something went wrong. Please try again."}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#FFA586] text-[#070708] font-bold text-xs font-mono uppercase tracking-wider hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-[#FFA586]/10"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

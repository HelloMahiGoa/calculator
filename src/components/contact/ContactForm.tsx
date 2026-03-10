"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-stone-300">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-stone-700/80 bg-stone-900/80 px-4 py-2.5 text-stone-100 placeholder-stone-500 focus:border-amber-500/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          placeholder="Your name"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-stone-300">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-stone-700/80 bg-stone-900/80 px-4 py-2.5 text-stone-100 placeholder-stone-500 focus:border-amber-500/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          placeholder="you@example.com"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-stone-300">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-xl border border-stone-700/80 bg-stone-900/80 px-4 py-2.5 text-stone-100 placeholder-stone-500 focus:border-amber-500/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          placeholder="Your message..."
          disabled={status === "sending"}
        />
      </div>

      {status === "success" && (
        <p className="rounded-xl bg-emerald-500/10 px-4 py-2.5 text-sm text-emerald-300">
          Thanks! Your message has been sent. We’ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl bg-red-500/10 px-4 py-2.5 text-sm text-red-300">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-5 py-2.5 text-sm font-semibold text-amber-100 transition-colors hover:bg-amber-500/80 hover:text-stone-950 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

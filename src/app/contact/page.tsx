import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Calculators.digital – feedback, questions, and support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <div className="prose prose-invert prose-stone max-w-none">
        <h1 className="text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
          Contact
        </h1>
        <p className="mt-2 text-stone-400">
          Have a question, feedback, or suggestion? Send us a message and we’ll get back to you.
        </p>

        <section className="mt-8">
          <ContactForm />
        </section>

        <p className="mt-10">
          <Link href="/" className="text-stone-400 hover:text-stone-200 text-sm">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}

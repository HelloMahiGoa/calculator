import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions of use for Calculators.digital.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="prose prose-invert prose-stone max-w-none">
        <h1 className="text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-1 text-sm text-stone-500">Last updated: March 2025</p>

        <section className="mt-8 space-y-4 text-stone-300">
          <h2 className="text-lg font-medium text-stone-100">1. Acceptance of terms</h2>
          <p>
            By using Calculators.digital (“the site”), you agree to these terms and conditions. If you do not agree, please do not use the site.
          </p>

          <h2 className="text-lg font-medium text-stone-100">2. Use of the service</h2>
          <p>
            The calculators and tools on this site are provided for general informational and personal use. We do not guarantee the accuracy of results for any particular purpose. You are responsible for verifying important calculations.
          </p>

          <h2 className="text-lg font-medium text-stone-100">3. Intellectual property</h2>
          <p>
            The site design, branding, and original content are owned by Calculators.digital. You may not copy, modify, or redistribute our materials without permission.
          </p>

          <h2 className="text-lg font-medium text-stone-100">4. Limitation of liability</h2>
          <p>
            Calculators.digital is provided “as is.” We are not liable for any damages arising from your use of the site or reliance on calculator results.
          </p>

          <h2 className="text-lg font-medium text-stone-100">5. Changes</h2>
          <p>
            We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-lg font-medium text-stone-100">6. Contact</h2>
          <p>
            For questions about these terms, please see our <Link href="/contact" className="text-amber-400 hover:text-amber-300 underline">Contact</Link> page.
          </p>
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

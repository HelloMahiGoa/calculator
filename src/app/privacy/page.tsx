import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Calculators.digital – how we handle your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="prose prose-invert prose-stone max-w-none">
        <h1 className="text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
          Privacy Policy
        </h1>
        <p className="mt-1 text-sm text-stone-500">Last updated: March 2025</p>

        <section className="mt-8 space-y-4 text-stone-300">
          <h2 className="text-lg font-medium text-stone-100">1. Overview</h2>
          <p>
            Calculators.digital respects your privacy. This policy describes what data we collect, if any, and how we use it.
          </p>

          <h2 className="text-lg font-medium text-stone-100">2. Data we collect</h2>
          <p>
            Our calculators run in your browser. We do not require sign-up or account creation. We may collect anonymous usage data (e.g. via analytics) such as pages visited and device type to improve the site. We do not sell your personal data.
          </p>

          <h2 className="text-lg font-medium text-stone-100">3. Local storage</h2>
          <p>
            Some features may use your browser’s local storage (e.g. history or preferences). This data stays on your device and is not sent to our servers.
          </p>

          <h2 className="text-lg font-medium text-stone-100">4. Cookies</h2>
          <p>
            We may use essential or analytics cookies. You can control cookies through your browser settings.
          </p>

          <h2 className="text-lg font-medium text-stone-100">5. Third parties</h2>
          <p>
            If we use third-party services (e.g. analytics), their use of data is governed by their own privacy policies.
          </p>

          <h2 className="text-lg font-medium text-stone-100">6. Changes</h2>
          <p>
            We may update this privacy policy from time to time. The “Last updated” date at the top reflects the latest version.
          </p>

          <h2 className="text-lg font-medium text-stone-100">7. Contact</h2>
          <p>
            For privacy-related questions, please use our <Link href="/contact" className="text-amber-400 hover:text-amber-300 underline">Contact</Link> page.
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

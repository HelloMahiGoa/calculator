import Link from "next/link";
import { Fraunces, Source_Sans_3 } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-blog-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-blog-body",
  display: "swap",
});

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

type Props = {
  title: string;
  date: string;
  children: React.ReactNode;
};

export function BlogArticleLayout({ title, date, children }: Props) {
  return (
    <div
      className={`${fraunces.variable} ${sourceSans.variable} min-h-screen bg-[#f6f4f0] text-[#2c2925]`}
      style={{ fontFamily: "var(--font-blog-body), system-ui, sans-serif" }}
    >
      <div className="border-b border-[#e8e4de] bg-[#f6f4f0]">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-4">
          <Link
            href="/blog"
            className="text-[13px] font-medium uppercase tracking-widest text-[#6b6560] transition-colors hover:text-[#2c2925]"
          >
            ← Blog
          </Link>
          <span className="text-[11px] uppercase tracking-widest text-[#a39e98]">
            Article
          </span>
        </div>
      </div>

      <article className="mx-auto max-w-2xl px-5 pb-20 pt-12 sm:pt-16">
        <header className="mb-10">
          <time
            className="text-[11px] font-medium uppercase tracking-wider text-[#8b8580]"
            dateTime={date}
          >
            {formatDate(date)}
          </time>
          <h1
            className="mt-2 text-[2rem] font-semibold leading-tight tracking-tight text-[#1a1816] sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-blog-heading), Georgia, serif" }}
          >
            {title}
          </h1>
        </header>

        <div className="space-y-5 text-[16px] leading-[1.75] text-[#2c2925]">
          {children}
        </div>

        <footer className="mt-12 flex flex-wrap items-center gap-4 border-t border-[#e8e4de] pt-8">
          <Link
            href="/blog"
            className="text-[14px] font-medium text-[#0d9488] transition-colors hover:text-[#0f766e]"
          >
            ← All posts
          </Link>
          <Link
            href="/"
            className="text-[14px] font-medium text-[#6b6560] transition-colors hover:text-[#2c2925]"
          >
            Home
          </Link>
        </footer>
      </article>
    </div>
  );
}

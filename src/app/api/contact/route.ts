import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Calculators.digital <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL;
    if (!process.env.RESEND_API_KEY || !toEmail) {
      return NextResponse.json(
        { error: "Email is not configured" },
        { status: 503 }
      );
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [toEmail],
      replyTo: [String(email)],
      subject: `Contact form: ${String(name).slice(0, 50)}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(String(name))} &lt;${escapeHtml(String(email))}&gt;</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(String(message)).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Invalid request" },
      { status: 400 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

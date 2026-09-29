import { NextResponse } from "next/server";
import { postToSheet } from "@/lib/googleSheetWebhook";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getField(body: unknown, key: string): string {
  const raw =
    body && typeof body === "object" && key in body
      ? (body as Record<string, unknown>)[key]
      : undefined;
  return typeof raw === "string" ? raw.trim() : "";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = getField(body, "name");
  const email = getField(body, "email");
  const phone = getField(body, "phone");
  const message = getField(body, "message");

  if (!name) {
    return NextResponse.json({ error: "Enter your name." }, { status: 400 });
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  // Set this to a Google Apps Script Web App URL deployed from the target
  // sheet (see README.md for the one-time setup, shared with the Elefin
  // registration flow). A regular "share" link to the sheet cannot receive
  // writes, so this must be the Web App URL.
  const webhookUrl = process.env.CONTACT_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error(
      "[contact] CONTACT_SHEET_WEBHOOK_URL is not configured — enquiry was not recorded:",
      email,
    );
    return NextResponse.json(
      {
        error:
          "The contact form is temporarily unavailable. Please reach out on WhatsApp instead.",
      },
      { status: 503 },
    );
  }

  try {
    await postToSheet(webhookUrl, {
      name,
      email,
      phone,
      message,
      submittedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[contact] Failed to record enquiry:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong sending your message. Please try again, or reach out on WhatsApp.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

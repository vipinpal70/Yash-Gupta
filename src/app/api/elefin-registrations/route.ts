import { NextResponse } from "next/server";
import { postToSheet } from "@/lib/googleSheetWebhook";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Every campaign that posts to this shared endpoint must be listed here —
// the `offer` tag is what distinguishes rows in the sheet, so an unlisted
// value falls back to the default rather than writing an arbitrary string.
const KNOWN_OFFERS = ["elefin-fee-cashback", "elefin-birthday-cashback"] as const;
type OfferId = (typeof KNOWN_OFFERS)[number];

function isKnownOffer(value: unknown): value is OfferId {
  return typeof value === "string" && (KNOWN_OFFERS as readonly string[]).includes(value);
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

  const rawEmail =
    body && typeof body === "object" && "email" in body
      ? (body as { email: unknown }).email
      : undefined;
  const email = typeof rawEmail === "string" ? rawEmail.trim() : "";

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const rawOffer =
    body && typeof body === "object" && "offer" in body
      ? (body as { offer: unknown }).offer
      : undefined;
  const offer: OfferId = isKnownOffer(rawOffer) ? rawOffer : "elefin-fee-cashback";

  // Set this to a Google Apps Script Web App URL deployed from the target
  // sheet (see README.md for the one-time setup). A regular "share" link to
  // the sheet cannot receive writes, so this must be the Web App URL.
  const webhookUrl = process.env.ELEFIN_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error(
      "[elefin-registrations] ELEFIN_SHEET_WEBHOOK_URL is not configured — registration was not recorded:",
      email,
    );
    return NextResponse.json(
      {
        error:
          "Registration is temporarily unavailable. Please try again shortly.",
      },
      { status: 503 },
    );
  }

  try {
    await postToSheet(webhookUrl, {
      email,
      offer,
      submittedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[elefin-registrations] Failed to record registration:", error);
    return NextResponse.json(
      {
        error:
          "Registration is temporarily unavailable. Please try again shortly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

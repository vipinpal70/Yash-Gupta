# Yash — Trading With Clarity

A premium, editorial marketing site for a trading education brand, built with
Next.js (App Router), TypeScript, Tailwind CSS v4, and Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build + type check
npm run lint    # ESLint
```

## Editing content

Nearly all copy, links and configurable claims live in `src/data/` — no
component code needs to change to update them:

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Brand name, tagline, domain, email, experience years, mentorship/community URLs, social links |
| `src/data/navigation.ts` | Header and footer navigation |
| `src/data/expertise.ts` | The six expertise cards |
| `src/data/methodology.ts` | The four-step methodology timeline |
| `src/data/programs.ts` | Mentorship tiers (Online, 1-to-1 Inner Circle, Offline) |
| `src/data/resources.ts` | Free resource cards, the featured resource, and the Learning Library (strategy/indicators/recordings/doubt sessions) |
| `src/data/partners.ts` | Partner broker / prop firm cards + the compliance disclaimer |
| `src/data/rewards.ts` | Cashback "how it works" steps and the Competition state |
| `src/data/testimonials.ts` | Student testimonials (placeholders — replace with real, verified quotes) |
| `src/data/community.ts` | Community principles grid |

**Before launch:** `src/data/site.ts` has several placeholder values called
out in comments (domain, email, community/mentorship URLs, social links,
the "12+ years" experience figure). Replace or verify each one — nothing in
that file should be treated as an independently verified claim until you do.
`siteConfig.communityStats` stays `null` until real, verifiable community
numbers are supplied; wiring in a real value automatically renders the stats
row on the Community section.

`src/data/partners.ts` lists real, well-known brokers/prop firms as
**illustrative placeholders**, not confirmed partnerships — replace the list
and `href`s with real affiliate links once agreements are signed.

`src/data/rewards.ts` deliberately has no fabricated cashback amounts,
prize pools or leaderboard results. The Cashback section explains the
mechanic instead of showing a fake live balance. `competition.current` stays
`null` (showing a "register interest" state) until a real competition is
confirmed; populate `name` / `period` / `minimumCapital` / `ranking` /
`startDate` / `endDate` to switch the page to the "live" state, and add
`totalPrizePool`, `rewards` and `leaderboard` only once those figures and
results are real and verified — each renders conditionally and is safe to
leave out. The rules/disclosure section (`competition.rules` and
`.disclosures`) always renders, independent of whether a competition is
live.

`src/data/elefin-offer.ts` controls the copy and dates for the time-limited
Elefin fee-cashback campaign (`/elefin-offer`, plus the banner on `/rewards`
and the homepage hero). Update the window/copy there each time the offer runs.

`src/data/elefin-birthday-offer.ts` controls the separate Elefin "Birthday
Cashback" signup bonus (`/elefin-birthday-offer`) — new accounts that deposit
and trade can claim a flat cashback amount. Its `referralUrl` is a
placeholder; replace it with the real Elefin referral link before the offer
goes live. **This page isn't linked from the nav, footer or homepage yet** —
it's only reachable by direct URL until you decide where it should be
promoted.

### Automatic offer status (Coming Soon → Live → Ended)

The birthday offer's status pill is computed automatically from
`window.start` / `window.end` in its data file via `getOfferStatus()`
(`src/lib/utils.ts`) and a small `useNow()` hook (`src/lib/useNow.ts`) that
reads the visitor's real clock — nothing needs to be flipped manually on the
day. Before `start` it shows "Coming Soon" and hides the form; during the
window it shows "Live Now" and the referral link + email form; after `end`
it shows "Offer Ended" and swaps the form for a closed-offer notice. To reuse
this pattern for a future offer, give its data file a `window.start/end` and
drive the same three states off `getOfferStatus()`.

## Cashback proof carousel — privacy handling

`src/data/cashback-proof.ts` + `src/components/proof/CashbackProofCarousel.tsx`
show WhatsApp screenshots of past payouts (on `/rewards`, `/elefin-offer` and
`/elefin-birthday-offer`) for trust/transparency.

**The original screenshots (`public/cashback-*.jpeg`, without `-redacted`)
contain unredacted third-party personal data** — recipients' full names, UPI
IDs (which double as phone-linked payment identifiers), transaction IDs, and
in some cases their WhatsApp contact photo. Those recipients never consented
to having that published on a public website, so **only the `-redacted`
versions are referenced by the component** — never wire the originals in.
The redacted files black out: the recipient's name and UPI ID, the sender's
own name/UPI/transaction ID, and any contact name/photo in the chat header.

If you add more proof screenshots later, redact the same fields before
adding them to `cashbackProof.screenshots` — don't publish raw exports. The
`₹3,00,000+` total is self-reported by the business; update it if the real
figure changes.

## Structure

- `src/app/` — routes (`/`, `/about`, `/programs`, `/resources`, `/rewards`, `/elefin-offer`, `/elefin-birthday-offer`, `/community`, `/contact`), plus `api/elefin-registrations/route.ts` and `api/contact/route.ts`
- `src/components/proof/CashbackProofCarousel.tsx` — the redacted-screenshot trust carousel, see below
- `src/components/contact/ContactForm.tsx` — the homepage Contact section's enquiry form (see Google Sheet integrations below)
- `src/components/` — one folder per section/domain, plus `ui/` for shared primitives (`Button`, `Container`, `SectionHeading`, `Reveal`, `MagneticButton`, `Modal`, …)
- `src/data/` — editable content, described above
- `src/lib/utils.ts` — the `cn()` class-merging helper, `daysUntil()` and `getOfferStatus()` date helpers
- `src/lib/googleSheetWebhook.ts` — the shared `postToSheet()` helper used by both Google Sheet integrations
- `src/lib/useNow.ts` — hydration-safe "current time" hook used to drive automatic offer status

## Google Sheet integrations

Two independent forms write to Google Sheets, each via its own Apps Script
Web App URL, using the shared `postToSheet()` helper in
`src/lib/googleSheetWebhook.ts`:

- **Elefin registration** — both the `/elefin-offer` and
  `/elefin-birthday-offer` forms post to the same
  `src/app/api/elefin-registrations/route.ts`, tagging each submission with
  an `offer` id (`elefin-fee-cashback` or `elefin-birthday-cashback`) so rows
  can be told apart in the sheet — add new ids to the route's `KNOWN_OFFERS`
  list if you add another campaign. Configured via `ELEFIN_SHEET_WEBHOOK_URL`.
- **Homepage contact form** — the enquiry form in the Contact section
  (`src/components/contact/ContactForm.tsx`) posts name/email/phone/message
  to `src/app/api/contact/route.ts`. Configured via
  `CONTACT_SHEET_WEBHOOK_URL`.

Each route forwards its submission to a Google Apps Script Web App that
appends a row to your sheet. A regular Google Sheets **share link cannot
receive writes** — you need a Web App URL instead. One-time setup (repeat
per sheet — the Elefin sheet and the contact sheet are typically separate
Apps Script deployments):

1. Open your Google Sheet → **Extensions → Apps Script**.
2. Replace the contents with:

   ```js
   function doPost(e) {
     try {
       // Open by the spreadsheet's ID (from its URL), not getActiveSpreadsheet()
       // — that depends on ambient "active" state that doesn't reliably exist
       // in a web app's execution context.
       const spreadsheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID");

       // Auto-create the tab if it doesn't exist yet under this exact name —
       // note this is the *tab* at the bottom of the sheet, not the
       // spreadsheet file's name. Renaming the file does not rename its tabs.
       const sheetName = "Zero Fees";
       const sheet =
         spreadsheet.getSheetByName(sheetName) ||
         spreadsheet.insertSheet(sheetName);

       const data = JSON.parse(e.postData.contents);
       sheet.appendRow([new Date(), data.email, data.offer || ""]);

       return ContentService
         .createTextOutput(JSON.stringify({ ok: true }))
         .setMimeType(ContentService.MimeType.JSON);
     } catch (error) {
       return ContentService
         .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
         .setMimeType(ContentService.MimeType.JSON);
     }
   }

   // Run this once directly from the Apps Script editor (pick "checkSheet" in
   // the function dropdown at the top, click Run) to confirm the spreadsheet
   // and tab resolve correctly — no HTTP call, no redeploy needed. Check
   // View → Logs (or Executions) for the output.
   function checkSheet() {
     const spreadsheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID");
     Logger.log("Spreadsheet name: " + spreadsheet.getName());
     Logger.log(
       "Existing tabs: " +
         spreadsheet.getSheets().map((s) => s.getName()).join(", "),
     );
   }
   ```

   The contact-form sheet's `doPost` is identical except for which fields it
   appends — it receives `{ name, email, phone, message, submittedAt }`, not
   `{ email, offer }`:

   ```js
   function doPost(e) {
     try {
       const spreadsheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID");
       const sheetName = "YG-Form";
       const sheet =
         spreadsheet.getSheetByName(sheetName) ||
         spreadsheet.insertSheet(sheetName);

       const data = JSON.parse(e.postData.contents);
       sheet.appendRow([
         new Date(),
         data.name || "",
         data.email || "",
         data.phone || "",
         data.message || "",
       ]);

       return ContentService
         .createTextOutput(JSON.stringify({ ok: true }))
         .setMimeType(ContentService.MimeType.JSON);
     } catch (error) {
       return ContentService
         .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
         .setMimeType(ContentService.MimeType.JSON);
     }
   }

   function checkSheet() {
     const spreadsheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID");
     Logger.log("Spreadsheet name: " + spreadsheet.getName());
     Logger.log(
       "Existing tabs: " +
         spreadsheet.getSheets().map((s) => s.getName()).join(", "),
     );
   }
   ```

   The try/catch in `doPost` matters: Apps Script always responds HTTP 200,
   even when your code throws, so without it a broken script looks
   successful from the outside — our route checks the `{ ok: ... }` body,
   not just the HTTP status, precisely because of this.

3. **Deploy → New deployment → Web app.** Set "Execute as" to yourself and
   "Who has access" to **Anyone** (required for the server to call it
   without a Google login), then deploy and copy the `/exec` URL it gives
   you. **Whenever you edit the script after this**, you must go to
   **Deploy → Manage deployments → edit (pencil) → New version → Deploy** —
   saving the file alone does not update the live `/exec` URL.
4. Set that URL as `ELEFIN_SHEET_WEBHOOK_URL` (Elefin sheet) or
   `CONTACT_SHEET_WEBHOOK_URL` (contact-form sheet) in `.env.local` (see
   `.env.example`) — locally, and in your host's environment variables for
   production. Restart the dev server after adding it.

Until the relevant variable is set, submissions to that form are rejected
with a friendly "temporarily unavailable" error (logged server-side) rather
than silently disappearing — so a missing sheet is loud, not invisible.

**Known Google-side flakiness:** the redirect Apps Script issues internally
(`/exec` → a `script.googleusercontent.com/macros/echo` URL) intermittently
fails with a 405 for no discernible reason — confirmed directly against a
live deployment, not a guess. `postToSheet()` in the route retries once on
any failure (transport error, non-200, or a `{ ok: false }` body) before
giving up, which absorbs this in practice.

## Notes

- **Theme**: dark, near-black background (`--background`) with a vibrant
  green primary accent (`--emerald` / `--emerald-light` for text-on-dark
  contrast, `--emerald-dark` for hover/solid-fill states) and gold
  (`--gold`) kept as a rare secondary accent for special badges. Card
  surfaces use `bg-surface` / `bg-surface-strong` (subtle white tints) rather
  than solid light backgrounds. All defined once in `src/app/globals.css`
  via Tailwind's `@theme` block — change the token values there to re-theme
  the whole site, but a few components set hardcoded shadow colors (e.g.
  green glows) that would need updating separately for a different accent
  hue.
- Colors, fonts (Manrope + DM Serif Display) and other design tokens are
  defined once in `src/app/globals.css` via Tailwind's `@theme` block.
- Decorative chart/candlestick graphics are hand-built inline SVG
  (`src/components/hero/HeroChartBackdrop.tsx`,
  `src/components/about/CandlestickIllustration.tsx`) — no chart library or
  external image assets.
- Animations use [Motion](https://motion.dev) and respect
  `prefers-reduced-motion`.
- The favicon (`src/app/icon.tsx`) and Apple touch icon
  (`src/app/apple-icon.tsx`) are generated at build time via
  `next/og`'s `ImageResponse` — a "YG" wordmark on the brand blue
  (`#1E4FD8`). Edit the text/colors in those files directly; there's no
  static image asset to swap.
# Yash-Gupta

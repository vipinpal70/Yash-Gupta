import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book 1-to-1 mentorship, join the community, or reach out directly.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s talk about your{" "}
            <span className="font-serif italic text-emerald">
              trading process.
            </span>
          </>
        }
        description="Choose the path that fits — a mentorship call, the community, or a direct message."
      />
      <ContactSection />
    </>
  );
}

"use client";

import { useState } from "react";
import { contactContent, siteConfig, socialLinks } from "@/data/content";
import { Reveal } from "@/components/motion/Reveal";

export function Contact() {
  const [toast, setToast] = useState<string | null>(null);

  const copy = async (value: string, message: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setToast(message);
      window.setTimeout(() => setToast(null), 2000);
    } catch {
      setToast("Copy failed");
      window.setTimeout(() => setToast(null), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="section-pad border-t hairline"
      aria-labelledby="contact-heading"
    >
      <div className="shell grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="eyebrow mb-3">Contact</p>
          <h2 id="contact-heading" className="section-title max-w-xl">
            {contactContent.titleLine1}{" "}
            <span className="text-muted">{contactContent.titleLine2}</span>{" "}
            {contactContent.titleEmphasis.replace(".", "")}
          </h2>
          <p className="mt-5 max-w-lg body-copy">
            {contactContent.supporting}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={siteConfig.emailHref} className="btn-primary">
              Send Email
            </a>
            <a
              href={siteConfig.resumePath}
              download={siteConfig.resumeFileName}
              className="btn-secondary"
            >
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-ink">Information</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center justify-between gap-3 border-b hairline pb-3">
                  <a
                    href={siteConfig.emailHref}
                    className="text-sm text-muted hover:text-ink"
                  >
                    {siteConfig.email}
                  </a>
                  <button
                    type="button"
                    className="text-xs text-faint hover:text-ink"
                    onClick={() =>
                      copy(siteConfig.email, "Email copied!")
                    }
                  >
                    Copy
                  </button>
                </li>
                <li className="flex items-center justify-between gap-3 border-b hairline pb-3">
                  <a
                    href={siteConfig.phoneHref}
                    className="text-sm text-muted hover:text-ink"
                  >
                    {siteConfig.phone}
                  </a>
                  <button
                    type="button"
                    className="text-xs text-faint hover:text-ink"
                    onClick={() =>
                      copy("+917338773239", "Phone copied!")
                    }
                  >
                    Copy
                  </button>
                </li>
                {socialLinks
                  .filter((link) => link.label !== "Email")
                  .map((link) => (
                    <li key={link.label} className="border-b hairline pb-3">
                      <a
                        href={link.href}
                        className="text-sm text-muted hover:text-ink"
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-ink">
                Why reach out?
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex gap-3">
                  <span>→</span>
                  <span>Full-time Java full stack opportunities</span>
                </li>
                <li className="flex gap-3">
                  <span>→</span>
                  <span>Microservices and API engineering work</span>
                </li>
                <li className="flex gap-3">
                  <span>→</span>
                  <span>Impactful production systems</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      {toast ? (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 border hairline bg-elevated px-4 py-2 text-sm text-ink"
        >
          {toast}
        </div>
      ) : null}
    </section>
  );
}

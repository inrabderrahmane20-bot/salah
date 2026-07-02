"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./motion";
import { IconArrow, IconCheck } from "./icons";

type Status = "idle" | "sending" | "success";

function Field({
  id,
  label,
  type = "text",
  required,
  value,
  onChange,
  requiredLabel,
  autoComplete,
  inputMode,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  requiredLabel?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel";
}) {
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder=" "
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-required={required}
        className="peer h-14 w-full border-0 border-b border-line-strong bg-transparent px-0 pt-5 text-[1.02rem] text-ink placeholder-transparent transition-colors duration-300 focus:border-forest focus:outline-none"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute start-0 top-5 origin-[0] text-[1.02rem] text-ink-faint transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.72rem] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.72rem] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em]"
      >
        {label}
        {required ? <span className="text-gold"> · {requiredLabel}</span> : null}
      </label>
    </div>
  );
}

export function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState(false);
  const [subject, setSubject] = useState<"pro" | "private">("pro");
  const [f, setF] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const set = (k: keyof typeof f) => (v: string) => setF((s) => ({ ...s, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid =
      f.name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) && f.message.trim();
    if (!valid) {
      setError(true);
      return;
    }
    setError(false);
    setStatus("sending");
    // No backend yet — simulate a successful submission.
    setTimeout(() => setStatus("success"), 900);
  };

  return (
    <section className="border-t border-line bg-ivory py-20 sm:py-28 lg:py-32">
      <div className="content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <h3 className="text-[clamp(1.7rem,3vw,2.4rem)] leading-tight">
                {t.form.title}
              </h3>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-start gap-5 rounded-2xl border border-line bg-paper p-10"
                  role="status"
                  aria-live="polite"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-forest text-cream">
                    <IconCheck width={22} height={22} />
                  </span>
                  <p className="measure text-[1.15rem] leading-relaxed text-ink">
                    {t.form.success}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-8"
                >
                  {/* Segmented: pro / particulier */}
                  <fieldset>
                    <legend className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink-faint">
                      {t.form.subject}
                    </legend>
                    <div className="inline-flex rounded-full border border-line-strong p-1">
                      {(["pro", "private"] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSubject(opt)}
                          aria-pressed={subject === opt}
                          className={`rounded-full px-5 py-2 text-[0.86rem] font-medium transition-colors duration-300 ${
                            subject === opt
                              ? "bg-forest text-cream"
                              : "text-ink-soft hover:text-ink"
                          }`}
                        >
                          {opt === "pro" ? t.form.subjectPro : t.form.subjectPrivate}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                    <Field id="name" label={t.form.name} required value={f.name} onChange={set("name")} requiredLabel={t.form.required} autoComplete="name" />
                    <Field id="company" label={t.form.company} value={f.company} onChange={set("company")} autoComplete="organization" />
                    <Field id="email" label={t.form.email} type="email" inputMode="email" required value={f.email} onChange={set("email")} requiredLabel={t.form.required} autoComplete="email" />
                    <Field id="phone" label={t.form.phone} type="tel" inputMode="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder=" "
                      value={f.message}
                      onChange={(e) => set("message")(e.target.value)}
                      aria-required
                      className="peer w-full resize-none border-0 border-b border-line-strong bg-transparent px-0 pt-6 text-[1.02rem] text-ink placeholder-transparent transition-colors duration-300 focus:border-forest focus:outline-none"
                    />
                    <label
                      htmlFor="message"
                      className="pointer-events-none absolute start-0 top-6 text-[1.02rem] text-ink-faint transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.72rem] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.72rem] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em]"
                    >
                      {t.form.message}
                      <span className="text-gold"> · {t.form.required}</span>
                    </label>
                  </div>

                  {error && (
                    <p role="alert" className="text-[0.92rem] text-[#b3261e]">
                      {t.form.error}
                    </p>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn btn-primary w-full sm:w-auto disabled:opacity-60"
                    >
                      {status === "sending" ? t.form.sending : t.form.submit}
                      {status !== "sending" && <IconArrow className="rtl:rotate-180" />}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

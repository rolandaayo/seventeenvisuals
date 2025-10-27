"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

type FormState = {
  name: string;
  datetime: string; // ISO string from input
  minutes: number;
  outfits: number;
  notes?: string;
};

export default function BookPage() {
  const [step, setStep] = useState(0);
  const [stepLoading, setStepLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    datetime: "",
    minutes: 60,
    outfits: 1,
    notes: "",
  });

  // controlled step navigation with small "loading" animation the user likes
  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const handleNext = () => {
    if (stepLoading || submitting) return;
    setStepLoading(true);
    // simulate a small loading period for UX
    setTimeout(() => {
      setStep((s) => Math.min(3, s + 1));
      setStepLoading(false);
    }, 420);
  };

  const handlePrev = () => {
    if (stepLoading || submitting) return;
    setStepLoading(true);
    setTimeout(() => {
      setStep((s) => Math.max(0, s - 1));
      setStepLoading(false);
    }, 220);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setSubmitting(true);
    // Simulate an async submission (replace with real API call)
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navigation />
      {/* remove the large min-h-screen so footer sits closer to the form */}
      <main className="py-12 px-4 bg-white text-black">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-black/60 underline">
            ← Back home
          </Link>

          <h1 className="mt-6 text-3xl font-bold">Book a session</h1>
          <p className="mt-2 text-black/60">
            Follow the steps to book me — I’ll ask for the basics.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="mt-8 bg-black/5 p-6 rounded-lg"
            >
              {/* thin loading bar when moving between steps or submitting */}
              {(stepLoading || submitting) && (
                <div className="h-1 bg-accent rounded animate-page-loading mb-4" />
              )}
              <div className="mb-4 text-sm text-black/60">
                Step {step + 1} of 4
              </div>

              {step === 0 && (
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Your name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded bg-black/50 px-3 py-2 outline-none border border-white/10"
                    placeholder="Donald"
                  />
                </div>
              )}

              {step === 1 && (
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Date & time
                  </label>
                  <input
                    required
                    type="datetime-local"
                    value={form.datetime}
                    onChange={(e) =>
                      setForm({ ...form, datetime: e.target.value })
                    }
                    className="w-full rounded bg-black/50 px-3 py-2 outline-none border border-white/10"
                  />
                </div>
              )}

              {step === 2 && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Duration (minutes)
                    </label>
                    <input
                      required
                      type="number"
                      min={15}
                      step={5}
                      value={form.minutes}
                      onChange={(e) =>
                        setForm({ ...form, minutes: Number(e.target.value) })
                      }
                      className="w-full rounded bg-black/50 px-3 py-2 outline-none border border-white/10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Outfits
                    </label>
                    <input
                      required
                      type="number"
                      min={1}
                      value={form.outfits}
                      onChange={(e) =>
                        setForm({ ...form, outfits: Number(e.target.value) })
                      }
                      className="w-full rounded bg-black/50 px-3 py-2 outline-none border border-white/10"
                    />
                  </div>
                  <div className="col-span-2 mt-3">
                    <label className="block text-sm font-medium mb-1">
                      Notes (optional)
                    </label>
                    <textarea
                      value={form.notes}
                      onChange={(e) =>
                        setForm({ ...form, notes: e.target.value })
                      }
                      className="w-full rounded bg-black/50 px-3 py-2 outline-none border border-white/10 h-24"
                      placeholder="Anything you'd like to tell me? e.g., location, mood, references"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-lg font-semibold">Review</h3>
                  <dl className="mt-4 space-y-2 text-sm text-black/80">
                    <div>
                      <dt className="font-medium">Name</dt>
                      <dd>{form.name || "—"}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Date & time</dt>
                      <dd>
                        {form.datetime
                          ? new Date(form.datetime).toLocaleString()
                          : "—"}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium">Duration</dt>
                      <dd>{form.minutes} minutes</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Outfits</dt>
                      <dd>{form.outfits}</dd>
                    </div>
                    {form.notes && (
                      <div>
                        <dt className="font-medium">Notes</dt>
                        <dd>{form.notes}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}

              <div className="mt-6 flex items-center gap-3">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={stepLoading || submitting}
                    className="px-4 py-2 rounded bg-black/5 hover:bg-black/10 disabled:opacity-60"
                  >
                    {stepLoading ? (
                      <span className="animate-pulse font-bold">LOADING</span>
                    ) : (
                      "Back"
                    )}
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={stepLoading || submitting}
                    className="ml-auto px-4 py-2 rounded bg-accent text-black font-semibold disabled:opacity-60"
                  >
                    {stepLoading ? (
                      <span className="animate-pulse font-bold">LOADING</span>
                    ) : (
                      "Next"
                    )}
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting || stepLoading}
                    className="ml-auto px-4 py-2 rounded bg-accent text-black font-semibold disabled:opacity-60"
                  >
                    {submitting ? (
                      <span className="animate-pulse font-bold">LOADING</span>
                    ) : (
                      "Confirm booking"
                    )}
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className="mt-8 bg-black/5 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold">Thanks — request sent!</h2>
              <p className="mt-2 text-black/60">
                I’ll contact you to confirm the details.
              </p>
              <div className="mt-4">
                <Link href="/contact" className="underline text-black/80">
                  Reach out via Contact page
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

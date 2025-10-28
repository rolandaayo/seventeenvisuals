"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { Modal } from "../../components/ui/modal";
import { Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

type FormState = {
  name: string;
  datetime: string; // ISO string from input
  minutes: number;
  outfits: number;
  email?: string;
  phone?: string;
  notes?: string;
};

function apiBase() {
  if (typeof window === "undefined") return "";
  if (window.location.hostname === "localhost") return "http://localhost:4000";
  return ""; // assume same origin in production or proxy
}

function formatPrice(price: number): string {
  return price.toLocaleString();
}

export default function BookPage() {
  // initial loading removed per request — show UI immediately
  const [checking, setChecking] = useState(false);
  const [foundBooking, setFoundBooking] = useState<any | null>(null);
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [bookingIdInput, setBookingIdInput] = useState("");

  // existing multi-step form state
  const [showForm, setShowForm] = useState(false);
  const [bookingNowLoading, setBookingNowLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [stepLoading, setStepLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalClosing, setModalClosing] = useState(false);
  const [viewDetailsLoading, setViewDetailsLoading] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    datetime: "",
    minutes: 60,
    outfits: 1,
    email: "",
    phone: "",
    notes: "",
  });
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const priceMap: Record<string, number> = {
    commercials: 350000,
    music_videos: 450000,
    bts_documentary: 150000,
    corporate_videos: 250000,
  };

  const checkBooking = async () => {
    setBookingError(null);
    setFoundBooking(null);
    const id = bookingIdInput.trim();
    if (!id) return setBookingError("Please enter a booking ID — e.g. 001");
    setChecking(true);
    try {
      // allow users to paste SVN-001 — server will normalize
      const res = await fetch(
        `${apiBase()}/api/bookings/${encodeURIComponent(id)}`
      );
      if (res.status === 404) {
        setBookingError("Booking not found");
      } else if (!res.ok) {
        setBookingError("Server error");
      } else {
        const data = await res.json();
        setFoundBooking(data);
      }
    } catch (err) {
      setBookingError("Network error");
    } finally {
      setChecking(false);
    }
  };

  // existing handlers for multi-step form
  const handleNext = () => {
    if (stepLoading || submitting) return;
    setStepLoading(true);
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
    try {
      // create booking on server
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        date: form.datetime,
        minutes: form.minutes,
        outfits: form.outfits,
        notes: form.notes,
        category: selectedCategory,
      };
      const res = await fetch(`${apiBase()}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("create failed");
      const data = await res.json();
      // show success and the generated bookingId (open modal)
      setSubmitted(true);
      setFoundBooking(data);
      setShowSuccessModal(true);
      try {
        toast({
          title: "Booking received",
          description: `ID: ${data.bookingId}`,
        });
      } catch (e) {
        // swallow if toast system not available
      }
    } catch (err) {
      console.error(err);
      setBookingError("Failed to create booking — please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />

      <main className="min-h-[60vh] py-12 px-4 bg-white text-black">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-black/60 underline">
            ← Back home
          </Link>

          <h1 className="mt-6 text-3xl font-bold">Book a session</h1>
          <p className="mt-2 text-black/60">
            Check a booking or make a new one.
          </p>

          {!showForm && !foundBooking && (
            <div className="mt-8 bg-white border border-gray-100 shadow-sm p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Check your booking</h2>
              <p className="text-sm text-gray-600 mb-4">
                Enter your Booking ID (for example{" "}
                <span className="font-mono">SVN-12345</span>) to view the status
                and details. To make a new booking, click the button below.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  value={bookingIdInput}
                  onChange={(e) => setBookingIdInput(e.target.value)}
                  className="w-full rounded border px-3 py-2 outline-none bg-white"
                  placeholder="Booking ID:"
                  aria-label="Booking ID"
                />
                <div className="flex gap-3">
                  <button
                    onClick={checkBooking}
                    disabled={checking}
                    className="flex-1 px-4 py-2 rounded bg-accent text-black font-semibold disabled:opacity-60 transition-all duration-200"
                  >
                    {checking ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        Checking...
                      </span>
                    ) : (
                      "Check"
                    )}
                  </button>
                </div>

                <button
                  onClick={() => {
                    setBookingNowLoading(true);
                    setTimeout(() => {
                      setShowForm(true);
                      setBookingNowLoading(false);
                    }, 800);
                  }}
                  disabled={bookingNowLoading}
                  className="mt-2 w-full px-4 py-2 rounded bg-black/25 hover:bg-black/10 disabled:opacity-60 transition-all duration-200"
                >
                  {bookingNowLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      Loading form...
                    </span>
                  ) : (
                    "Book Now!"
                  )}
                </button>

                {bookingError && (
                  <div className="mt-3 text-sm text-red-600">
                    {bookingError}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* show booking details if found */}
          {foundBooking && (
            <div className="mt-8 bg-black/5 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">
                  Booking: {foundBooking.bookingId}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    foundBooking.status === "confirmed"
                      ? "bg-green-100 text-green-800"
                      : foundBooking.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {foundBooking.status || "Pending"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <dt className="text-xs font-medium text-black/60 uppercase tracking-wide">
                      Client Information
                    </dt>
                    <dd className="mt-1 text-sm font-medium">
                      {foundBooking.name}
                    </dd>
                    <dd className="text-sm text-black/70">
                      {foundBooking.email}
                    </dd>
                    {foundBooking.phone && (
                      <dd className="text-sm text-black/70">
                        {foundBooking.phone}
                      </dd>
                    )}
                  </div>

                  {foundBooking.category && (
                    <div>
                      <dt className="text-xs font-medium text-black/60 uppercase tracking-wide">
                        Category
                      </dt>
                      <dd className="mt-1 text-sm font-medium capitalize">
                        {foundBooking.category.replace("_", " ")}
                      </dd>
                      {priceMap[foundBooking.category] && (
                        <dd className="text-sm text-black/70">
                          Price: ₦{formatPrice(priceMap[foundBooking.category])}
                        </dd>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  {foundBooking.date && (
                    <div>
                      <dt className="text-xs font-medium text-black/60 uppercase tracking-wide">
                        Session Details
                      </dt>
                      <dd className="mt-1 text-sm font-medium">
                        {new Date(foundBooking.date).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </dd>
                      <dd className="text-sm text-black/70">
                        {new Date(foundBooking.date).toLocaleTimeString(
                          "en-US",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </dd>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    {foundBooking.minutes && (
                      <div>
                        <dt className="text-xs font-medium text-black/60 uppercase tracking-wide">
                          Duration
                        </dt>
                        <dd className="mt-1 text-sm font-medium">
                          {Math.floor(foundBooking.minutes / 60)}h{" "}
                          {foundBooking.minutes % 60}m
                        </dd>
                        <dd className="text-xs text-black/60">
                          ({foundBooking.minutes} minutes)
                        </dd>
                      </div>
                    )}

                    {foundBooking.outfits && (
                      <div>
                        <dt className="text-xs font-medium text-black/60 uppercase tracking-wide">
                          Outfits
                        </dt>
                        <dd className="mt-1 text-sm font-medium">
                          {foundBooking.outfits}
                        </dd>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {foundBooking.notes && (
                <div className="mt-4 pt-4 border-t border-black/10">
                  <dt className="text-xs font-medium text-black/60 uppercase tracking-wide">
                    Notes
                  </dt>
                  <dd className="mt-2 text-sm text-black/80 bg-white/50 p-3 rounded border">
                    {foundBooking.notes}
                  </dd>
                </div>
              )}

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => {
                    setFoundBooking(null);
                    setBookingIdInput("");
                  }}
                  className="px-4 py-2 rounded bg-black/10 hover:bg-black/20 text-sm font-medium transition-colors"
                >
                  Check Another Booking
                </button>
                <button
                  onClick={() => setShowForm(true)}
                  className="px-4 py-2 rounded bg-accent text-black text-sm font-medium"
                >
                  Book New Session
                </button>
              </div>
            </div>
          )}

          {/* multi-step booking form (revealed when user clicks Book now) */}
          {showForm && !submitted && (
            <form
              onSubmit={handleSubmit}
              className="mt-8 bg-black/5 p-6 rounded-lg"
            >
              {(stepLoading || submitting) && (
                <div className="h-1 bg-accent rounded animate-page-loading mb-4" />
              )}
              <div className="mb-4 text-sm text-black/60">
                Step {step + 1} of 4
              </div>

              {bookingError && (
                <div className="mb-4 text-sm text-red-600">{bookingError}</div>
              )}

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Category
                </label>
                <select
                  required
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full rounded border px-3 py-2 outline-none bg-white"
                >
                  <option value="">Choose a category</option>
                  <option value="commercials">Commercials</option>
                  <option value="music_videos">Music videos</option>
                  <option value="bts_documentary">BTS / Documentary</option>
                  <option value="corporate_videos">Corporate videos</option>
                </select>
                {selectedCategory && (
                  <div className="mt-2 text-sm text-gray-600">
                    Price: ₦{formatPrice(priceMap[selectedCategory])}
                  </div>
                )}
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
                    className="w-full rounded border px-3 py-2 outline-none bg-white"
                    placeholder="Full name"
                  />

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full rounded border px-3 py-2 outline-none bg-white"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full rounded border px-3 py-2 outline-none bg-white"
                        placeholder="Optional phone"
                      />
                    </div>
                  </div>
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
                    className="px-4 py-2 rounded bg-black/5 hover:bg-black/10 disabled:opacity-60 transition-all duration-200"
                  >
                    {stepLoading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        Loading...
                      </span>
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
                    className="ml-auto px-4 py-2 rounded bg-accent text-black font-semibold disabled:opacity-60 transition-all duration-200"
                  >
                    {stepLoading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        Loading...
                      </span>
                    ) : (
                      "Next"
                    )}
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting || stepLoading}
                    className="ml-auto px-4 py-2 rounded bg-accent text-black font-semibold disabled:opacity-60 transition-all duration-200"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        Submitting...
                      </span>
                    ) : (
                      "Confirm booking"
                    )}
                  </button>
                )}
              </div>
            </form>
          )}

          {submitted && (
            <div className="mt-8 bg-black/5 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold">Thanks — request sent!</h2>
              <p className="mt-2 text-black/60">
                Your booking ID:{" "}
                <span className="font-mono">
                  {foundBooking?.bookingId || "000"}
                </span>
              </p>
              <div className="mt-4">
                <Link href="/contact" className="underline text-black/80">
                  Reach out via Contact page
                </Link>
              </div>
            </div>
          )}

          {/* Success modal */}
          <Modal
            isOpen={showSuccessModal}
            onClose={() => setShowSuccessModal(false)}
            title="Booking confirmed"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
                <Check className="text-green-700" size={42} />
              </div>
              <h3 className="text-xl font-semibold text-green-800">
                Booking successful
              </h3>
              <p className="text-sm text-gray-700">
                Thanks — your booking request was received.
              </p>
              <div className="text-sm mt-2">
                <div className="text-gray-600">Booking ID</div>
                <div className="font-mono text-lg">
                  {foundBooking?.bookingId || "000"}
                </div>
              </div>
              <div className="w-full mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setModalClosing(true);
                    setTimeout(() => {
                      setShowSuccessModal(false);
                      setModalClosing(false);
                    }, 600);
                  }}
                  disabled={modalClosing}
                  className="flex-1 px-4 py-2 rounded bg-green-600 text-white font-semibold disabled:opacity-60 transition-all duration-200"
                >
                  {modalClosing ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Closing...
                    </span>
                  ) : (
                    "Close"
                  )}
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setViewDetailsLoading(true);
                    setTimeout(() => {
                      setViewDetailsLoading(false);
                      // Could navigate to details page here
                    }, 1200);
                  }}
                  disabled={viewDetailsLoading}
                  className="px-4 py-2 rounded bg-white border text-green-700 disabled:opacity-60 transition-all duration-200"
                >
                  {viewDetailsLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-green-700/30 border-t-green-700 rounded-full animate-spin"></div>
                      Loading...
                    </span>
                  ) : (
                    "View details"
                  )}
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </main>
      <Footer />
    </>
  );
}

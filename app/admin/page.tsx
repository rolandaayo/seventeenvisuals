"use client";

import React, { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import Link from "next/link";

type Booking = {
  _id: string;
  bookingId: string;
  name: string;
  email: string;
  phone?: string;
  date?: string;
  minutes?: number;
  outfits?: number;
  category?: string;
  price?: number;
  status?: string;
  notes?: string;
  createdAt?: string;
};

function apiBase() {
  if (typeof window === "undefined") return "";
  if (window.location.hostname === "localhost") return "http://localhost:4000";
  return "";
}

export default function AdminPage() {
  const [token, setToken] = useState<string>(
    typeof window !== "undefined"
      ? localStorage.getItem("sv_admin_token") || ""
      : ""
  );
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [createLoading, setCreateLoading] = useState(false);
  const [newBooking, setNewBooking] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    minutes: 60,
    outfits: 1,
    notes: "",
    category: "commercials",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("sv_admin_token");
      if (stored) setToken(stored);
    }
  }, []);

  const saveToken = (t: string) => {
    setToken(t);
    if (typeof window !== "undefined")
      localStorage.setItem("sv_admin_token", t);
  };

  const fetchBookings = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${apiBase()}/api/bookings`, {
        headers: { "x-admin-token": token || "" },
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Status ${res.status}`);
      }
      const data = await res.json();
      setBookings(data);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Failed to fetch bookings");
    } finally {
      setLoading(false);
    }
  };

  const createBooking = async () => {
    setCreateLoading(true);
    setError(null);
    try {
      const res = await fetch(`${apiBase()}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBooking),
      });
      if (!res.ok) throw new Error("create failed");
      await res.json();
      toast({ title: "Booking created", description: "New booking saved" });
      setNewBooking({
        name: "",
        email: "",
        phone: "",
        date: "",
        minutes: 60,
        outfits: 1,
        notes: "",
        category: "commercials",
      });
      await fetchBookings();
    } catch (err) {
      console.error(err);
      setError("Failed to create booking");
    } finally {
      setCreateLoading(false);
    }
  };

  const approve = async (bookingId: string) => {
    if (!confirm(`Approve booking ${bookingId}?`)) return;
    setActionLoading(bookingId);
    try {
      const res = await fetch(
        `${apiBase()}/api/bookings/${encodeURIComponent(bookingId)}/approve`,
        {
          method: "PATCH",
          headers: { "x-admin-token": token || "" },
        }
      );
      if (!res.ok) throw new Error("approve failed");
      toast({ title: "Booking approved", description: `ID: ${bookingId}` });
      await fetchBookings();
    } catch (err) {
      console.error(err);
      setError("Failed to approve booking");
    } finally {
      setActionLoading(null);
    }
  };

  const remove = async (bookingId: string) => {
    if (!confirm(`Delete booking ${bookingId}? This cannot be undone.`)) return;
    setActionLoading(bookingId);
    try {
      const res = await fetch(
        `${apiBase()}/api/bookings/${encodeURIComponent(bookingId)}`,
        {
          method: "DELETE",
          headers: { "x-admin-token": token || "" },
        }
      );
      if (!res.ok) throw new Error("delete failed");
      toast({ title: "Booking deleted", description: `ID: ${bookingId}` });
      await fetchBookings();
    } catch (err) {
      console.error(err);
      setError("Failed to delete booking");
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-[60vh] py-12 px-4 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="text-sm text-black/60 underline">
            ← Back home
          </Link>
          <div className="mt-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Admin — Bookings</h1>
            <div className="text-sm text-gray-600">Manage user bookings</div>
          </div>

          <div className="mt-6 bg-white border p-4 rounded-lg shadow-sm">
            <label className="block text-sm font-medium mb-2">
              Admin token
            </label>
            <div className="flex gap-2">
              <input
                value={token}
                onChange={(e) => saveToken(e.target.value)}
                className="flex-1 rounded border px-3 py-2 outline-none"
                placeholder="Paste admin token here"
              />
              <button
                onClick={fetchBookings}
                className="px-3 py-2 rounded bg-accent text-black font-semibold"
                disabled={!token || loading}
              >
                {loading ? "Loading…" : "Load bookings"}
              </button>
            </div>
            {error && <div className="mt-2 text-sm text-red-600">{error}</div>}
          </div>

          {/* Quick-create booking form for admin */}
          <div className="mt-6 bg-white border p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Create booking</h2>
            <div className="grid grid-cols-2 gap-2">
              <input
                placeholder="Full name"
                value={newBooking.name}
                onChange={(e) =>
                  setNewBooking({ ...newBooking, name: e.target.value })
                }
                className="col-span-2 rounded border px-3 py-2"
              />
              <input
                placeholder="Email"
                value={newBooking.email}
                onChange={(e) =>
                  setNewBooking({ ...newBooking, email: e.target.value })
                }
                className="rounded border px-3 py-2"
              />
              <input
                placeholder="Phone"
                value={newBooking.phone}
                onChange={(e) =>
                  setNewBooking({ ...newBooking, phone: e.target.value })
                }
                className="rounded border px-3 py-2"
              />
              <input
                type="datetime-local"
                value={newBooking.date}
                onChange={(e) =>
                  setNewBooking({ ...newBooking, date: e.target.value })
                }
                className="rounded border px-3 py-2"
              />
              <select
                value={newBooking.category}
                onChange={(e) =>
                  setNewBooking({ ...newBooking, category: e.target.value })
                }
                className="rounded border px-3 py-2"
              >
                <option value="commercials">Commercials</option>
                <option value="music_videos">Music videos</option>
                <option value="bts_documentary">BTS / Documentary</option>
                <option value="corporate_videos">Corporate videos</option>
              </select>
              <input
                type="number"
                min={15}
                value={Number(newBooking.minutes)}
                onChange={(e) =>
                  setNewBooking({
                    ...newBooking,
                    minutes: Number(e.target.value),
                  })
                }
                className="rounded border px-3 py-2"
              />
              <input
                type="number"
                min={1}
                value={Number(newBooking.outfits)}
                onChange={(e) =>
                  setNewBooking({
                    ...newBooking,
                    outfits: Number(e.target.value),
                  })
                }
                className="rounded border px-3 py-2"
              />
              <input
                placeholder="Notes"
                value={newBooking.notes}
                onChange={(e) =>
                  setNewBooking({ ...newBooking, notes: e.target.value })
                }
                className="col-span-2 rounded border px-3 py-2"
              />
            </div>
            <div className="mt-3">
              <button
                onClick={createBooking}
                disabled={createLoading}
                className="px-4 py-2 rounded bg-accent text-black font-semibold"
              >
                {createLoading ? "Creating…" : "Create booking"}
              </button>
            </div>
          </div>

          <div className="mt-6">
            {bookings.length === 0 ? (
              <div className="text-sm text-gray-600">
                No bookings loaded. Click "Load bookings".
              </div>
            ) : (
              <div className="grid gap-3">
                {bookings.map((b) => (
                  <div key={b._id} className="border rounded p-4 bg-white">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm text-gray-600">ID</div>
                        <div className="font-mono text-lg">{b.bookingId}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">
                          {b.name}{" "}
                          <span className="text-sm text-gray-500">
                            ({b.email})
                          </span>
                        </h3>
                        <div className="text-sm text-gray-600 mt-1">
                          {b.category} — ${b.price}
                        </div>
                        {b.date && (
                          <div className="text-sm mt-1">
                            Date: {new Date(b.date).toLocaleString()}
                          </div>
                        )}
                        {b.notes && (
                          <div className="mt-2 text-sm text-gray-700">
                            Notes: {b.notes}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="text-sm text-gray-600">Status</div>
                        <div
                          className={`px-3 py-1 rounded ${
                            b.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {b.status}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={() => approve(b.bookingId)}
                        disabled={actionLoading === b.bookingId}
                        className="px-3 py-2 rounded bg-green-100 text-green-800 text-sm"
                      >
                        {actionLoading === b.bookingId ? "Working…" : "Approve"}
                      </button>
                      <button
                        onClick={() => remove(b.bookingId)}
                        disabled={actionLoading === b.bookingId}
                        className="px-3 py-2 rounded bg-red-100 text-red-800 text-sm"
                      >
                        {actionLoading === b.bookingId ? "Working…" : "Delete"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

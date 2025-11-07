"use client";

import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { useState } from "react";
import { toast } from "sonner";
import { usePaystack } from "@/hooks/usePaystack";

export function PurchaseForm({
  presetName,
  price,
  onSuccess,
}: {
  presetName: string;
  price: number;
  onSuccess?: () => void;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { loading, error, initializePayment } = usePaystack();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !name) {
      toast.error("Please fill in all fields");
      return;
    }

    await initializePayment(
      "initialize-preset",
      {
        email,
        presetName,
        price,
      },
      (reference) => {
        toast.success(
          "Payment successful! Check your email for download instructions."
        );
        onSuccess?.();
      },
      () => {
        if (error) {
          toast.error(error);
        }
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pt-2">
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Processing payment..." : `Pay ₦${price.toLocaleString()}`}
        </Button>
      </div>
    </form>
  );
}

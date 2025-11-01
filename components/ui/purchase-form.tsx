"use client";

import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { useState } from "react";
import { toast } from "sonner";

export function PurchaseForm({
  presetName,
  price,
}: {
  presetName: string;
  price: number;
}) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      presetName,
      price,
    };

    try {
      // TODO: Implement actual purchase logic
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call
      toast.success(
        "Purchase successful! Check your email for download instructions."
      );
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Enter your name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="pt-2">
        <Button type="submit" className="w-full" disabled={loading}>
          {loading
            ? "Processing..."
            : `Purchase for ₦${price.toLocaleString()}`}
        </Button>
      </div>
    </form>
  );
}

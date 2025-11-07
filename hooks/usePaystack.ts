import { useState } from "react";

interface PaystackConfig {
  email: string;
  amount: number;
  metadata?: Record<string, any>;
  onSuccess?: (reference: string) => void;
  onClose?: () => void;
}

export function usePaystack() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initializePayment = async (
    endpoint: string,
    data: any,
    onSuccess?: (reference: string) => void,
    onClose?: () => void
  ) => {
    setLoading(true);
    setError(null);

    try {
      const apiBase =
        typeof window !== "undefined" && window.location.hostname === "localhost"
          ? "http://localhost:4000"
          : "https://svntn-api.vercel.app";

      const response = await fetch(`${apiBase}/api/payments/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Payment initialization failed");
      }

      const result = await response.json();

      // Open Paystack popup
      if (result.authorization_url) {
        const popup = window.open(
          result.authorization_url,
          "Paystack Payment",
          "width=600,height=700"
        );

        // Poll for popup close
        const pollTimer = setInterval(() => {
          if (popup?.closed) {
            clearInterval(pollTimer);
            setLoading(false);
            
            // Verify payment
            verifyPayment(result.reference, onSuccess, onClose);
          }
        }, 1000);
      }
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
      onClose?.();
    }
  };

  const verifyPayment = async (
    reference: string,
    onSuccess?: (reference: string) => void,
    onClose?: () => void
  ) => {
    try {
      const apiBase =
        typeof window !== "undefined" && window.location.hostname === "localhost"
          ? "http://localhost:4000"
          : "https://svntn-api.vercel.app";

      const response = await fetch(
        `${apiBase}/api/payments/verify/${reference}`
      );

      if (!response.ok) {
        throw new Error("Payment verification failed");
      }

      const result = await response.json();

      if (result.success) {
        onSuccess?.(reference);
      } else {
        onClose?.();
      }
    } catch (err: any) {
      setError(err.message);
      onClose?.();
    }
  };

  return {
    loading,
    error,
    initializePayment,
  };
}

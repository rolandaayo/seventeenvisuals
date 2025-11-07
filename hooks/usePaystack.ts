import { useState } from "react";

// Declare Paystack on window
declare global {
  interface Window {
    PaystackPop?: any;
  }
}

export function usePaystack() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPaystackScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (window.PaystackPop) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src = "https://js.paystack.co/v1/inline.js";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Paystack"));
      document.body.appendChild(script);
    });
  };

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

      // Get public key from server
      const configResponse = await fetch(`${apiBase}/api/payments/config`);
      const config = await configResponse.json();
      const publicKey = config.publicKey;

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

      // Load Paystack script
      await loadPaystackScript();

      // Open Paystack inline popup
      const handler = window.PaystackPop.setup({
        key: publicKey,
        email: data.email,
        amount: data.amount ? data.amount * 100 : data.price * 100, // Convert to kobo
        ref: result.reference,
        metadata: {
          custom_fields: [
            {
              display_name: "Payment Type",
              variable_name: "payment_type",
              value: endpoint.includes("preset")
                ? "Preset Purchase"
                : "Booking",
            },
          ],
        },
        callback: function (response: any) {
          // Payment successful - verify it (use non-async function)
          const apiBase =
            typeof window !== "undefined" && window.location.hostname === "localhost"
              ? "http://localhost:4000"
              : "https://svntn-api.vercel.app";
          fetch(`${apiBase}/api/payments/verify/${response.reference}`)
            .then((verifyRes) => verifyRes.json())
            .then((verifyData) => {
              if (verifyData.success) {
                setLoading(false);
                onSuccess?.(response.reference);
              } else {
                setLoading(false);
                onClose?.();
              }
            })
            .catch((err) => {
              console.error("Verification error:", err);
              setError(err.message);
              setLoading(false);
              onClose?.();
            });
        },
        onClose: function () {
          setLoading(false);
          onClose?.();
        },
      });

      handler.openIframe();
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
      const apiBase = "http://localhost:4000"; // Testing locally

      const response = await fetch(
        `${apiBase}/api/payments/verify/${reference}`
      );

      if (!response.ok) {
        throw new Error("Payment verification failed");
      }

      const result = await response.json();

      if (result.success) {
        setLoading(false);
        onSuccess?.(reference);
      } else {
        setLoading(false);
        onClose?.();
      }
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
      onClose?.();
    }
  };

  return {
    loading,
    error,
    initializePayment,
  };
}

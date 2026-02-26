import { useState } from "react";
import { getBalance } from "../utils/solana";
import { validateAddress } from "../utils/validation";

export function useBalance() {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkBalance = async (address, network) => {
    const validationError = validateAddress(address);
    if (validationError) {
      setError(validationError);
      setBalance(null);
      return;
    }

    setLoading(true);
    setError(null);
    setBalance(null);

    try {
      const lamports = await getBalance(address, network);
      setBalance(lamports);
    } catch (err) {
      if (err.message?.includes("Invalid public key")) {
        setError("Invalid public key format. Please check the address.");
      } else if (err.message?.includes("fetch")) {
        setError("Network error. Check your connection and try again.");
      } else {
        setError(err.message || "Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setBalance(null);
    setError(null);
  };

  return { balance, loading, error, checkBalance, reset };
}
/**
 * Validate a Solana wallet address.
 * @param {string} address
 * @returns {string|null} error message or null if valid
 */
export function validateAddress(address) {
  if (!address || address.trim() === "") {
    return "Please enter a wallet address.";
  }
  const trimmed = address.trim();
  if (trimmed.length < 32 || trimmed.length > 44) {
    return "Invalid Solana address. Must be 32–44 characters.";
  }
  // Base58 character check
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]+$/;
  if (!base58Regex.test(trimmed)) {
    return "Invalid characters in address. Solana addresses use Base58 encoding.";
  }
  return null;
}
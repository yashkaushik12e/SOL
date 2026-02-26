import React from "react";
import "./AddressInput.css";

function AddressInput({ value, onChange, onSubmit, loading }) {
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      onChange(text.trim());
    } catch {
      alert("Clipboard access denied. Please paste manually.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
    <div className="address-input">
      <label className="address-input__label">Wallet Address</label>
      <div className="address-input__row">
        <input
          type="text"
          className="address-input__field"
          placeholder="Enter Solana wallet address..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="address-input__paste" onClick={handlePaste} title="Paste from clipboard">
          📋
        </button>
      </div>
      <button
        className="address-input__btn"
        onClick={onSubmit}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="address-input__spinner" />
            Fetching...
          </>
        ) : (
          "Check Balance"
        )}
      </button>
    </div>
  );
}

export default AddressInput;
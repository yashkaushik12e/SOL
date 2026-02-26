import React from "react";
import { lamportsToSol } from "../utils/solana";
import "./BalanceResult.css";

function BalanceResult({ balance, error, address, network }) {
  if (error) {
    return (
      <div className="balance-result balance-result--error">
        <span className="balance-result__error-text">✗ {error}</span>
      </div>
    );
  }

  const sol = lamportsToSol(balance);

  return (
    <div className="balance-result balance-result--success">
      <div className="balance-result__row">
        <span className="balance-result__label">Wallet Address</span>
        <span className="balance-result__address">{address}</span>
      </div>

      <div className="balance-result__divider" />

      <div className="balance-result__row">
        <span className="balance-result__label">SOL Balance</span>
        <div className="balance-result__amount-wrap">
          <span className="balance-result__amount">
            {parseFloat(sol).toLocaleString("en-US", { maximumFractionDigits: 4 })}
          </span>
          <span className="balance-result__unit">SOL</span>
        </div>
        <span className="balance-result__lamports">
          {balance.toLocaleString()} lamports
        </span>
      </div>

      <div className="balance-result__badge">◉ {network}</div>
    </div>
  );
}

export default BalanceResult;
import React from "react";
import { EXAMPLE_WALLETS } from "../utils/constants";
import "./ExampleWallets.css";

function ExampleWallets({ onSelect }) {
  return (
    <div className="example-wallets">
      <p className="example-wallets__label">Try an example</p>
      <div className="example-wallets__chips">
        {EXAMPLE_WALLETS.map((wallet) => (
          <button
            key={wallet.address}
            className="example-wallets__chip"
            onClick={() => onSelect(wallet.address)}
            title={wallet.address}
          >
            {wallet.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ExampleWallets;
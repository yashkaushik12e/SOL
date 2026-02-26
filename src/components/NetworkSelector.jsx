import React from "react";
import "./NetworkSelector.css";

const NETWORKS = ["devnet", "mainnet", "testnet"];

function NetworkSelector({ network, onChange }) {
  return (
    <div className="network-selector">
      {NETWORKS.map((net) => (
        <button
          key={net}
          className={`network-selector__btn ${network === net ? "network-selector__btn--active" : ""}`}
          onClick={() => onChange(net)}
        >
          {net}
        </button>
      ))}
    </div>
  );
}

export default NetworkSelector;
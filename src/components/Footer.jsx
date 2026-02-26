import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      Built with{" "}
      <a
        href="https://solana-labs.github.io/solana-web3.js/"
        target="_blank"
        rel="noreferrer"
      >
        @solana/web3.js
      </a>{" "}
      · Data from Solana RPC
    </footer>
  );
}

export default Footer;
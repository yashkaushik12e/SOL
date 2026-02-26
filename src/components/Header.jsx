import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo-icon">◎</div>
        <span className="header__logo-text">Solana Tools</span>
      </div>
      <h1 className="header__title">Balance Checker</h1>
      <p className="header__subtitle">// check any wallet on-chain</p>
    </header>
  );
}

export default Header;
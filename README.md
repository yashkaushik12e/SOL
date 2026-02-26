# ◎ SOL Balance Checker

A Solana wallet balance checker built with **React** and **@solana/web3.js**. Check the SOL balance of any wallet address across Devnet, Mainnet, and Testnet in real time.

## Preview

> Enter any Solana wallet address, select a network, and instantly see the SOL balance.

## Features

- Check SOL balance of any Solana wallet
- Switch between **Devnet**, **Mainnet**, and **Testnet**
- Shows balance in both **SOL** and **lamports**
- Paste from clipboard
- Quick example wallet buttons
- Clean dark UI

## Tech Stack

- React 18
- @solana/web3.js
- CSS Modules

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/yashkaushik12e/SOL-BalanceChecker.git
cd SOL-BalanceChecker

# Install dependencies
npm install

# Start the app
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

src/
├── components/
│   ├── Header.js
│   ├── NetworkSelector.js
│   ├── AddressInput.js
│   ├── BalanceResult.js
│   ├── ExampleWallets.js
│   └── Footer.js
├── hooks/
│   └── useBalance.js
├── utils/
│   ├── solana.js
│   ├── validation.js
│   └── constants.js
├── styles/
│   ├── global.css
│   └── App.css
├── App.js
└── index.js


## Note

The public Solana RPC endpoint may return 403 errors on Mainnet due to rate limiting. Use a free RPC provider like [Helius](https://helius.dev) for reliable mainnet access.

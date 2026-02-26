import React, { useState } from "react";
import Header from "./components/Header";
import NetworkSelector from "./components/NetworkSelector";
import AddressInput from "./components/AddressInput";
import BalanceResult from "./components/BalanceResult";
import ExampleWallets from "./components/ExampleWallets";
import Footer from "./components/Footer";
import { useBalance } from "./hooks/useBalance";
import "./App.css"
function App() {
  const [address, setAddress] = useState("");
  const [network, setNetwork] = useState("devnet");
  const { balance, loading, error, checkBalance, reset } = useBalance();

  const handleCheck = () => {
    checkBalance(address, network);
  };

  const handleNetworkChange = (net) => {
    setNetwork(net);
    reset();
  };

  const handleExampleSelect = (addr) => {
    setAddress(addr);
    reset();
  };

  return (
    <div className="app">
      <div className="bg-grid" />
      <div className="bg-orb bg-orb--purple" />
      <div className="bg-orb bg-orb--green" />

      <div className="container">
        <Header />

        <div className="card">
          <NetworkSelector network={network} onChange={handleNetworkChange} />

          <AddressInput
            value={address}
            onChange={setAddress}
            onSubmit={handleCheck}
            loading={loading}
          />

          {(balance !== null || error) && (
            <BalanceResult
              balance={balance}
              error={error}
              address={address}
              network={network}
            />
          )}

          <ExampleWallets onSelect={handleExampleSelect} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
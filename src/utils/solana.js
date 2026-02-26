import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { RPC_URLS } from "./constants";

/**
 * Fetch SOL balance (in lamports) for a given address and network.
 * @param {string} address - Solana wallet public key
 * @param {string} network - 'devnet' | 'mainnet' | 'testnet'
 * @returns {Promise<number>} balance in lamports
 */
export async function getBalance(address, network) {
  const rpcUrl = RPC_URLS[network];
  const connection = new Connection(rpcUrl, "confirmed");
  const pubkey = new PublicKey(address);
  const lamports = await connection.getBalance(pubkey);
  return lamports;
}

/**
 * Convert lamports to SOL string with 6 decimal places.
 * @param {number} lamports
 * @returns {string}
 */
export function lamportsToSol(lamports) {
  return (lamports / LAMPORTS_PER_SOL).toFixed(6);
}
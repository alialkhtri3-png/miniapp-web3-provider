# miniapp-web3-provider

Lightweight Web3 provider toolkit for connecting wallets with Mini Apps and decentralized applications.

## ✨ Features

- EIP-1193 compatible provider
- Secure wallet interactions
- Clean and simple API
- Mobile-friendly Web3 integration

## 🚀 Use Cases

- Web3 dApps
- Mini Apps
- Wallet connections
- Blockchain mobile applications

## 🧩 Example

```ts
import { MiniAppWeb3Provider } from "miniapp-web3-provider";

const web3 = new MiniAppWeb3Provider();
const address = await web3.connect();

console.log("Connected wallet:", address);

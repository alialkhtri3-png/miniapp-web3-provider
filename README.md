# miniapp-web3-provider

Lightweight Web3 provider toolkit for Mini Apps and mobile dApps.

أداة Web3 مفتوحة المصدر لتسهيل ربط المحافظ الرقمية بتطبيقات Web3 وتطبيقات Mini Apps، مع التركيز على بيئات الهاتف المحمول.

---

## ✨ Features | الميزات

- EIP-1193 compatible
- Secure wallet interactions
- Clean and simple API
- Mobile & Mini App friendly

---

## 🚀 Use Cases | حالات الاستخدام

- Web3 dApps
- Mini Apps
- Wallet integrations
- Mobile-first blockchain apps

---

## 🧩 Example

```ts
import { MiniAppWeb3Provider } from "miniapp-web3-provider";

const web3 = new MiniAppWeb3Provider();
const address = await web3.connect();

console.log("Connected wallet:", address

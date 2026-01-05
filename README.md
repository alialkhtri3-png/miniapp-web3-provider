# miniapp-web3-provider

مجموعة أدوات Web3 خفيفة الوزن لتسهيل ربط المحافظ الرقمية بتطبيقات Mini Apps والتطبيقات اللامركزية للهواتف المحمولة.

---

## ✨ المميزات

- متوافق مع معيار EIP-1193
- تفاعلات آمنة مع المحفظة
- واجهة برمجة تطبيقات نظيفة وبسيطة
- متوافق مع تطبيقات الجوال والتطبيقات المصغرة

---

## 🚀 حالات الاستخدام

- تطبيقات Web3 اللامركزية
- Mini Apps
- تكامل المحافظ الرقمية
- تطبيقات بلوك تشين موجهة للأجهزة المحمولة

---

## 🧩 مثال

```ts
import { MiniAppWeb3Provider } from "miniapp-web3-provider";

const web3 = new MiniAppWeb3Provider();
const address = await web3.connect();

console.log("Connected wallet:", address);

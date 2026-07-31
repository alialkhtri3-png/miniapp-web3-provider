export class MiniAppWeb3Provider {
  provider: any;

  constructor() {
    if (typeof window === "undefined" || !(window as any).ethereum) {
      throw new Error("No Web3 wallet detected");
    }

    this.provider = (window as any).ethereum;
  }

  async connect() {
    const accounts = await this.provider.request({
      method: "eth_requestAccounts",
    });

    return accounts[0];
  }
}

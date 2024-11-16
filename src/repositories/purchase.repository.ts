const basket = {
  Electronics: [
    { name: "Laptop", price: 1500 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 100 },
    { name: "HDMI cable", price: 10 },
  ],
  Textile: [
    { name: "Bag", price: 50 },
    { name: "Mouse pad", price: 5 },
  ],
};

export class PurchaseRepository {
  async getAll() {
    return new Map(Object.entries(basket));
  }
}

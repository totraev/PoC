import { getTotal } from "@/domain/useCases/purchase";
import { PurchaseRepository } from "@/repositories/purchase.repository";

export class PurchaseService {
  constructor(private purchaseRepository: PurchaseRepository) {}

  async getTotal() {
    const basket = await this.purchaseRepository.getAll();

    return getTotal(basket);
  }
}

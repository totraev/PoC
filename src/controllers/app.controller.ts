import { controller, execute, lock } from "@/core";
import { State } from "@/state";

import { PurchaseService } from "@/services/purchase.service";

@controller
export class ApplicationController {
  constructor(private state: State, private purchases: PurchaseService) {}

  @execute("INIT_APP")
  async init(message: string) {
    this.state.updateMessage(message);
  }

  @execute("CALC_TOTAL")
  @lock("state")
  async calcTotal() {
    const total = await this.purchases.getTotal();

    this.state.updateTotal(total);
  }
}

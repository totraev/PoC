import { Purchase } from "@/domain/purchase";

const MAX_PURCHASE = 2000;

export function getGroupTotal(
  groups: Map<string, Purchase[]>,
  groupName: string
) {
  const group = groups.get(groupName) || [];

  const sum = group.reduce((sum, item) => {
    if (item.price < 0) {
      throw Error("Negative price");
    }

    return sum + item.price;
  }, 0);

  if (sum > MAX_PURCHASE) {
    throw Error(`${name} total is above the limit`);
  }

  return sum;
}

export function getTotal(groups: Map<string, Purchase[]>) {
  let total = 0;

  for (const name of groups.keys()) {
    total += getGroupTotal(groups, name);
  }

  return total;
}

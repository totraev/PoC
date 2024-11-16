import { injectable } from "inversify";

import { container } from "@/core/container";

export function service<T extends { new (...args: unknown[]): object }>(
  constructor: T
) {
  const target = injectable()(constructor);
  container.bind(target).toSelf();

  return target;
}

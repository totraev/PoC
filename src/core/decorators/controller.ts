/* eslint-disable @typescript-eslint/no-explicit-any */

import { injectable } from "inversify";

import { container } from "@/core/container";
import { Types } from "@/core/constants";

export type ControllerType = {
  new (...args: any[]): object;
};

export function controller<T extends ControllerType>(constructor: T) {
  const target = injectable()(constructor);
  container.bind(Types.CONTROLLER).to(target);

  return target;
}

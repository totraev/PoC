/* eslint-disable @typescript-eslint/no-explicit-any */

import { Types } from "@/core/constants";

export type Schema = Record<
  string | symbol,
  (...args: any) => void | Promise<void>
>;

export function execute(eventName: string) {
  return function (target: any, propertyKey: string) {
    target[Types.CONTROLLER_META] = {
      ...target[Types.CONTROLLER_META],
      [eventName]: target[propertyKey].bind(target),
    };
  };
}

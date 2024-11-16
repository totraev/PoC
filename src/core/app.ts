/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Container } from "inversify";

import { Types } from "@/core/constants";

export interface Event<P = any> {
  type: string | symbol;
  payload: P;
}

export class Application {
  private handlers = new Map<
    string | symbol,
    (...args: any[]) => void | Promise<void>
  >();

  constructor(container: Container) {
    const controllers = container.getAll<any[]>(Types.CONTROLLER) || [];

    for (const controller of controllers) {
      // @ts-expect-error - ignore explicit any
      controller[Types.CONTROLLER_META]?.forEach(
        (
          handler: (...args: any[]) => void | Promise<void>,
          eventName: string | symbol
        ) => {
          this.handlers.set(eventName, handler);
        }
      );
    }
  }

  async execute(event: Event) {
    const handler = this.handlers.get(event.type);

    if (!handler) return;

    try {
      const payload = Array.isArray(event.payload)
        ? event.payload
        : [event.payload];

      await handler(...payload);
    } catch (e) {
      console.log(e);
    }
  }

  static create(container: Container) {
    return new Application(container);
  }
}

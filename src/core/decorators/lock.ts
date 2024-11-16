export function lock(eventName: string) {
  return function (target: any, propertyKey: string) {
    throw new Error("Not implemented");
  };
}

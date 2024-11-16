import { action, observable, makeAutoObservable } from "mobx";

import { state } from "@/core";

@state
export class State {
  @observable
  message: string = "";

  @observable
  total: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  updateMessage(message: string) {
    this.message = message;
  }

  @action
  updateTotal(value: number) {
    this.total = value;
  }
}

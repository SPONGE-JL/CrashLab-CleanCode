import { CommonBus, CommonBusSpec } from "./Bus";

export interface DockingTrailerBusSpec extends CommonBusSpec {
  dock: string;
}

export interface DockingTrailerBusData {
  dock: {
    type: string
  }
}

export class DockingTrailerBus extends CommonBus {
  private dock: string;

  constructor(spec: DockingTrailerBusSpec) {
    super(spec);
    this.dock = spec.dock;
  }

  getSpec():DockingTrailerBusData {
    return {
      dock: {
        type: this.dock
      }
    }
  }
}
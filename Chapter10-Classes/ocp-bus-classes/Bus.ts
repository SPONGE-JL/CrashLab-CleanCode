export interface CommonBusSpec {
  name: string;
  capacity: number;
}

export interface CommonBusData {
  name: string;
  capa: number;
}

export abstract class CommonBus {
  private name;
  private capacity;

  constructor(spec: CommonBusSpec) {
    this.name = spec.name;
    this.capacity = spec.capacity;
  }

  private get basicData(): CommonBusData {
    return {
      name: this.name,
      capa: this.capacity
    }
  }

  getData(): any {
    return {
      ...this.basicData,
      spec: this.getSpec()
    }
  }; 

  protected abstract getSpec();
}

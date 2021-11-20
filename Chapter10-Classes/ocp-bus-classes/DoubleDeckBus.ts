import { CommonBusSpec, CommonBus } from './Bus';

export interface DoubleDeckBusSpec extends CommonBusSpec {
  maxDeck: number;
}

export interface DoubleDeckBusData {
  deck: {
    count: number
  }
}


export class DoubleDeckBus extends CommonBus {
  private maxDeck: number;

  constructor(spec: DoubleDeckBusSpec) {
    super(spec);
    this.maxDeck = spec.maxDeck;
  }

  getSpec(): DoubleDeckBusData {
    return {
      deck: {
        count: this.maxDeck
      }
    }
  }
}

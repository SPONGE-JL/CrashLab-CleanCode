import { DockingTrailerBus } from "./DockingTrailerBus";
import { DoubleDeckBus } from "./DoubleDeckBus";

const doubleDeckBus = new DoubleDeckBus({
  name: "이층버스",
  capacity: 60,
  maxDeck: 2
})

console.log(doubleDeckBus.getData());

const dockingTrailerBus = new DockingTrailerBus({
  name: "트레일러 버스",
  capacity: 100,
  dock: "클로이 후크형"
})

console.log(dockingTrailerBus.getData());
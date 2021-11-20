class HeavyBus {
  #name;
  #capacity;
  #maxDeck;
  #dock;
  #isAmphibious;
  #isLowFloor;

  constructor({
    name,
    capacity,
    maxDeck,
    dock,
    isAmphibious,
    isLowFloor,
  }) {
    this.#name = name;
    this.#capacity = capacity;
    this.#maxDeck = maxDeck;
    this.#dock = dock;
    this.#isAmphibious = isAmphibious;
    this.#maxDeck = maxDeck;
    this.#isLowFloor = isLowFloor;
  }

  get #spec() {
    return {
      name: this.#name,
      capa: this.#capacity
    }
  }

  // 이층버스
  get doubleDeckSpec() {
    return {
      ...this.#spec,
      hasDoubleDeck: this.#hasDoubleDeck()
    }
  }

  #hasDoubleDeck() {
    return this.maxDeck > 1;
  }

  // 도킹 트레일러형 버스
  // FIX-ME! 트레일러형 버스 스펙 정보를 제공하는 메서드가 지원되지 않음!
  hasDocking() {
    return !!this.#dock;
  }

  // 수륙양용 여부
  // FIX-ME! 수륙양용 버스 스펙 정보를 제공하는 메서드가 지원되지 않음!
  isAmphibious() {
    return this.#isAmphibious;
  }

  // 저상버스 여부
  // FIX-ME! 저상버스 스펙 정보를 제공하는 메서드가 지원되지 않음!
  isLowFloor() {
    return this.#isLowFloor;
  }
}
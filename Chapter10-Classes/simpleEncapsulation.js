class Bus {
  #wheel;
  #isSingleFloor;
  #driver;
  #seatCount;
  constructor(props) {
    const { wheel, isSingleFloor, driver, seatCount } = props;
    // 바퀴는 몇 개인가?
    this.#wheel = wheel;
    // 버스는 단층인가? 2층인가?
    this.#isSingleFloor = isSingleFloor;
    // 운전자
    this.#driver = driver;
    // 좌석 개수
    this.#seatCount = seatCount;
  }

  get capacity() {
    return this.#seatCount
  }

  get deck() {
    return this.#isSingleFloor ? 1 : 2;
  }
}

// 사람이 60명이 탈 수 있는 바퀴 6개 달린 2층 버스
// 운전자가 있어야 한다.
const myBusInfo = {
  wheel: 6,
  isSingleFloor: false,
  driver: {
    name: '김운전',
    alias: 'driver-kim'
  },
  seatCount: 60
}
console.log(myBusInfo);

const myBus = new Bus(myBusInfo)
console.log(myBus);
console.log(myBus.capacity);
console.log(myBus.deck);

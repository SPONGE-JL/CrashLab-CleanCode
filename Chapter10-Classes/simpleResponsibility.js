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

  generateStatusData() {
    return {
      bus: {
        name: this.#getBusName(),
        owner: this.#getBusOwner(),
        spec: this.#busSpec
      }
    }
  }

  #getBusName() {
    return `'${this.#driver.alias}'의 신규 버스`;
  }

  #getBusOwner() {
    return {
      driverName: this.#driver.name,
      company: "Chloe-BusBus"
    }
  }

  get #busSpec() {
    return {
      wheel: this.#wheel,
      deck: this.#deck,
      seatCount: this.#capacity,
    }
  }

  get #deck() {
    return this.#isSingleFloor ? 1 : 2;
  }

  get #capacity() {
    return this.#seatCount
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

const myBusStatus = myBus.generateStatusData();
console.log(myBusStatus);
/*
{
  bus: {
    name: "'driver-kim'의 신규 버스",
    owner: {
      driverName: "김운전",
      company: "Chloe-BusBus"
    },
    spec: {
      wheel: 6,
      deck: 2,
      seatCount: 60,
    }
  }
}
*/
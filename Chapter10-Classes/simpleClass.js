class Bus {
  constructor(props) {
    const { wheel, isSingleFloor, driver, passenger } = props;
    // 바퀴는 몇 개인가?
    this.wheel = wheel;
    // 버스는 단층인가? 2층인가?
    this.isSingleFloor = isSingleFloor;
    // 운전자
    this.driver = driver;
    // 좌석 개수
    this.passenger = passenger;
  }

  get info() {
    // ex. 사람이 60명이 탈 수 있는 바퀴 6개 달린 2층 버스
    return `사람이 ${this.passenger}명이 탈 수 있는 바퀴 ${this.wheel}개가 달린 ${this.isSingleFloor? 1 : 2}층 버스`;
  }
}

// 사람이 60명이 탈 수 있는 바퀴 6개 달린 2층 버스
// 운전자가 있어야 한다.
const myBus = new Bus({
  wheel: 6,
  isSingleFloor: false,
  driver: {
    name: '김운전',
    alias: 'driver-kim'
  },
  passenger: 60
})

console.log(myBus.info);

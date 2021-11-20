[Read in Wiki](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-10.-Classes)

---

2021.11.27 (SAT) 10:20-12:00 (100mins)  
🚀 **Lead by. '[Sunghyun Kim](https://github.com/dev-chloe)'**

# Chapter 10. Classes

## 클래스 체계

- [표준 자바에 관례 따른 클래스의 정의](https://gist.github.com/dev-chloe/470a4adfedf49a640a1bc8aa23a63a02)

  ```plaintext
  1. 가장 먼저 변수 목록
    - 정적 공개 상수 (공개 변수가 필요한 경우는 거의 없다.)
    - 정적 비공개 변수
    - 비공개 인스턴스 변수
  2. 공개 함수
  3. 비공개 함수
    - 자신을 호출 하는 공개 함수 직후에 넣는다.
    - 추상화 단계가 순차적으로 내려간다.
  ```

  > 위의 **표준에 따라 클래스를 만들면 프로그램은 신문 기사처럼 읽힌다.**

- 표준 자바스크립트에서의 클래스의 정의 ([MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes#class_%EC%A0%95%EC%9D%98)): [simpleClass.js](./simpleClass.js#L1-L18)

  ```javascript
  // simpleClass.js
  // 클래스 선언을 이용한 클래스 정의 예제
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
      return `사람이 ${this.passenger}명이 탈 수 있는 바퀴 ${this.wheel}개가 달린 ${this.isSingleFloor ? 1 : 2}층 버스`;
    }
  }
  ```

  - 호출 및 실행 결과

  ```javascript
  // simpleClass.js
  const myBus = new Bus({
    wheel: 6,
    isSingleFloor: false,
    driver: {
      name: "김운전",
      alias: "driver-kim",
    },
    passenger: 60,
  });

  console.log(myBus.info);
  ```

  ```bash
  # 실행
  node simpleClass.js
  ```

  ```plaintext
  사람이 60명이 탈 수 있는 바퀴 6개가 달린 2층 버스
  ```

### 캡슐화

- 변수와 유틸리티 함수는 가능한 공개하지 않는 편이 낫지만 반드시 숨겨야 하는 법칙도 없다.

```yaml
# 같은 패키지 안에서 테스크 코드가 함수를 호출하거나 변수를 사용해야 될 때
테스트 코드가 함수를 호출하거나 변수를 사용해야 된다면:
  - 그 함수나 변수를 protected로 선언
  - 패키지 전체를 공개
```

<u>BUT</u>, 그 전에 비공개 상태를 유지할 온갖 방법을 강구해야 한다.  
🙏🙏🙏**<u>캡슐화를 풀어주는 결정은 언제나 최후의 수단이다</u>**🙏🙏🙏

- 표준 자바스크립트에서의 캡슐화 예제: [simpleEncapsulation.js](./simpleEncapsulation.js#L1-L25)

  ```javascript
  // simpleEncapsulation.js
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
      return this.#seatCount;
    }

    get deck() {
      return this.#isSingleFloor ? 1 : 2;
    }
  }
  ```

  - 호출 및 실행 결과

    ```javascript
    // simpleEncapsulation.js
    const myBusInfo = {
      wheel: 6,
      isSingleFloor: false,
      driver: {
        name: "김운전",
        alias: "driver-kim",
      },
      seatCount: 60,
    };
    console.log(myBusInfo);

    const myBus = new Bus(myBusInfo);
    console.log(myBus);
    console.log(myBus.capacity);
    console.log(myBus.deck);
    ```

    ```bash
    # 실행
    node simpleEncapsulation.js
    ```

    ```plaintext
    {
      wheel: 6,
      isSingleFloor: false,
      driver: { name: '김운전', alias: 'driver-kim' },
      seatCount: 60
    }
    Bus {}
    60
    2
    ```

## 클래스는 작아야 한다!

> **작게! 작게! 더 작게!** 🙆🙆

클래스를 만들 때 **'작게'** 가 기본 규칙이란 의미이다.

🙋‍♀️:
"선생님, 질문있어요. 그럼 얼마나 작아야하죠?"

👨‍🏫:

```yaml
함수: 물리적인 행 수로 크기를 측정했다.
클래스: 클래스가 맡은 책임을 센다.
```

🙋‍♀️:  
"그렇다면 어떻게요?"

👨‍🏫:

```yaml
클래스 이름:
  - 작명은 클래스 크기를 줄이는 첫번째 관문이다.
  - 클래스의 책임을 기술해야 한다.
  - 간결한 이름이 떠오르지 않는 것은 클래스가 크고 책임이 너무 많아서이다.
  - if, and, or, but을 사용하지 않고 25단어 내외로 가능해야 한다.
```

### 이렇게 상상해보자

> _**만능 버스 클래스를 상상해보자**_
>
> - 2층 버스
> - 여러 대를 연결한 트래일러 버스
> - 전기 버스
> - 문이 2개 달린 버스
> - 수륙 양용형 버스
> - 운전석이 오른쪽에 있는 버스
> - 자판기가 있는 버스
> - 저상 버스
> - ...
>
> 이게 하나의 클래스 안에 다 들어 있다면? 😱

> _**만능 버스 클래스를 쪼개보자**_
>
> - 버스
>   - 수륙 양용형 버스
>   - 일반 버스
>   - 2층 버스
>   - 전기 버스
>   - 자판기가 있는 버스
>
> 각각의 클래스에 책임을 나눌 수 있다.

### 단일 책임의 원칙(Single Responsibility Principle, SRP)

> 단일 책임 원칙은 클래스나 모듈을 **변경할 이유** 가 하나, 단 하나 뿐이어야 한다는 원칙이다.

```yaml
변경을 하면 좋은 점:
  - 변경을 하려는 이유를 파악하면 코드를 추상화 하기도 쉬워진다.
  - 재사용하기 쉬운 구조가 된다.
```

🤦‍♂️ "그런데 우리는 왜 만능 클래스를 꾸준히 접할까?" 🤦‍♀️

```yaml
책임 넘치는 클래스가 많은 이유:
- '깨끗하고 체계적인 소프트웨어'보다 '돌아가는 소프트웨어'에 초점을 맞추기 때문이다.
- 대다수가 프로그램이 돌아가면 일이 끝났다고 여긴다.
- 만능 클래스를 단일 클래스 여럿으로 분리하는 대신 다음 문제로 넘어 가기 때문이다.
- 단일 클래스가 많아지면 큰 그림을 이해하기 어려워진다고 우려한다.
```

🤷‍♂️ "정말 단일 클래스가 많아지면 큰 그림을 이해하기 어려워질까?" 🤷‍♀️

```yaml
아니다:
  - 작은 클래스가 많은 시스템이든 큰 클래스가 몇 개 뿐인 시스템이든 돌아가는 부품은 그 수가 비슷하다.
  - 규모가 어느 수준에 이른 시스템은 논리가 많고 복잡하다.
```

> 복잡한 시스템은 <u>체계적인 정리가 필수</u>다.  
> 그래야 개발자가 무엇이 어디에 있는지 쉽게 찾는다.  
> 변경할 때 적접 영향을 미치는 컴포넌트만 이해하도 충분하다.  
> **다목적 클래스 몇개로 이루어진 시스템은 변경할 때 당장 알 필요가 없는 사실까지 알도록 괴롭힌다.**

### 응집도

```yaml
응집도가 높다:
  - 일반적으로 변수를 더 많이 사용할수록 메서드와 클래스는 응집도가 높다.
  - 클래스에 속한 메서드와 변수가 서로 의존하며 논리적인 단위로 묶인다.
```

Q. 💁 응집도가 높으면 무조건 좋은 것인가요?  
A. 🙅‍♀️ 아니요! 응집도가 가낭 높은 클래스는 가능하지도 바람직하지도 않습니다!

```yaml
응집도가 높다:
  그런데 인스턴스 변수가 아주 많아진다:
    그렇다면?: "새로운 클래스로 쪼개야 한다"
    어떻게?: "응집도가 높아지도록 변수와 메서드를 적절히 분리해서!"
```

### 응집도를 유지하면 작은 클래스 여럿이 나온다

Q. 몇몇 함수가 몇몇 변수만 사용한다면 독자적인 클래스로 분리해도 되지 않나요?  
A. 🙆‍♂️ 당연하지! 클래스가 응집력을 잃는다면 쪼개라!

> 큰함수를 작은 함수 여럿으로 쪼개다 보면 종종 작은 클래스 여럿으로 쪼갤 기회가 생긴다.  
> 그러면서 **프로그램이 점점 체계가 잡히고 구조가 투명해진다.**

TODO 큰 함수 쪼개서 작은 함수/클래스 여럿으로 쪼개는 예제

### 💡 응집도와 결합도

- 응집도: 관련된 것들끼리 가까이 모인 정도
- 결합도: 의존된 것들끼리 분리할 수 없는 정도

> `a()는 응집도가 높다:`  
> _a함수의 수행에 관련된 것들이 가까이 모여 있다._
>
> `b()는 결합도가 높다:`  
> _b함수의 수행에 필요한 것들에 의존한 것들이 많다._

## 변경하기 쉬운 클래스

> "우리가 이번에 개발한 a 기능을 좀 더 개선해서 b 기능으로 만들어야 해요"  
> "c 기능은 이제 더 이상 필요가 없어요"  
> ..등

🤦‍♂️ 대다수 시스템은 지속적인 변경이 가해진다. 그리고 변경할 때마다 시스템이 의도대로 동작하지 않는 위험이 따른다.

> Q.  
> 어떤 변경이든 손을 대면 잠정적인 위험이 존재하게 되는데...  
> 위험을 낮추기 위해서는 어떻게 하죠?
>
> A.  
> 깨끗한 시스템이 답입니다!  
> 깨끗한 시스템은 <u>클래스를 체계적으로 정리해 변경에 수반하는 위험을 낮춰줍니다.</u>
> 새로운 기능을 수정하거나 기존 기능을 변경할 때 건드릴 코드가 최소인 시스템 구조가 바람직합니다.

### OCP(Open-Closed Principle)

> 클래스를 잘 개선하게 되면 객체 지향 설계에서의 핵심원칙 **OCP(Open-Closed Principle)도 지원한다.**  
> 확장에 개방적이고 수정에 폐쇄적이어야 한다는 원칙이다.

### 변경으로부터 격리

TODO 예제와 함께 재정리

구체적인 클래스는 상세한 구현(코드)를 포함하며 추상 클래스는 개념만 포함한다고 배웠다.
상세한 구현에 의존하는 클라이언트 클래스는 구현이 바뀌면 위험에 빠진다.
따라서 인터페이스와 추상클래스를 사용해 구현이 미치는 영향을 격리한다.

시스템의 결합도를 낮추면 유연성과 재사용성도 높아진다.
결함도가 낮다는 것은 각 시스템 요소가 다른 요소로부터, 변경으로 부터 잘 격리되어 있다는 것이다.
시스템 요소가 잘 격리 되어 있으면 각 요소를 이해하기도 쉬워진다.
결함도를 최소로 줄이면 자연스럽게 또 다른 클래스 설계 원칙인 DIP(Dependency Inversion Principle)를 따른 클래스가 나온다.
DIP 클래스가 상세한 구현이 아니라 추상화에 의존해야 한다는 원칙이다.

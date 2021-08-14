[Go to index](./#-chapter-06-objects-and-data-structures) / [Read in Wiki](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-06.-Objects-and-Data-Structures-Part.1)

---

2021.08.21 (SAT) 10:20-12:00 (100mins)  
🚀 **Lead by. '[Jeongyeol](https://github.com/SPONGE-JL)'**

# Chapter 06. Objects and Data Structures - <u>Part.1</u>

### 의문문으로 시작하기

> 왜 변수는 비공개(`private`)로 정의할까?  
> -> **변수에 의존하지 않게 만들고 싶어서**

> 왜 조회(`get`) 함수와 설정(`set`) 함수를   
> <u>**당연하게** 공개(`public`)로 비공개 변수(`private variable`)를 외부에 노출할까?</u>

---

# 자료 추상화

## 1. 자료 구조에 저장된 정보만으로 <u>사용방법을 알 수 없다.</u> 🤔

⬇️ `Block 6-1`: **구체적인 User 클래스**
  
```java
// in Java
public class User {
  public long id;
  public String name;
}
```

```typescript
// in Typescript
class User {
  id: number;
  name: string;
}

export default User;
```

> 위 클래스는 사용자 정보를 명확히 표현하고 있다.

⬇️ `Block 6-2`: **추상적인 User 클래스**
  
```java
// in Java
public interface User {
  long getId();
  String getName();
  void setUserInfo(long id, String name);
  
  String getTenuer();
  String getJoinDate();
  void setJoinDate(int yyyy, int mm, int dd);
}
```

```typescript
// in Typescript
interface User {
  getId(): number;
  getName(): string;
  setUserInfo(id: number, y: string): void;
  
  getTenuer(): string;
  getJoinDate(): string;
  setJoinDate(yyyy: number, mm: number, dd: number): void;
}

export default User;
```

> 인터페이스는 자료 구조를 표현하는 것 **이상으로** 자료 구조를 접근하는 정책까지 강제한다.

- **생각의 오류 짚고 넘어가기**: `좌항`이 만족된다고 `우항`을 만족하진 않는다.
  - `클래스와 변수 사이에 함수라는 계층을 넣는다` /= `구현이 감춰진다`
  - `Getter/Setter로 변수를 다룬다` /= `자료구조를 표현하는 클래스`

- **진정한 의미의 클래스(Class)**
  - **추상 인터페이스를 제공**
  - 사용자가 실제 구현 내용을 몰라도, 자료의 핵심을 조작할 수 있다

## 2. 추상화되어 제공된 기능이 <u>정보의 출처를 드러내지 않는다.</u> 🤔

⬇️ `Block 6-3`: **구체적인 Salary 클래스**

```java
// in Java
public interface Salary {
  long getTotalPayments();
  double getInsentives();
}
```

```typescript
// in Typescript
interface Salary {
  getTotalPayments(): number; 
  getInsentives(): number;
}

export default Salary;
```

> 두 함수가 변수값을 읽어 반환할 뿐이라는 사실이 거의 확실하다
> - `getTotalPayments()`: 전체 지급액이라는 구체적인 숫자를 제공하도록 명시
> - `getInsentives()`: 인센티브 비율이라는 구체적인 숫자 제공하도록 명시


⬇️ `Block 6-4`: **추상적인 Salary 클래스**

```java
// in Java
public interface Salary {
  long getRatioOfInsentives();
}
```

```typescript
// in Typescript
interface Salary {
  getRatioOfInsentives(): number; 
}

export default Salary;
```

> 해당 정보가 어디서 오는지 전혀 드러나지 않도록 추상화 되어있다.

### 🌟 개발자는!!!

- 객체가 <u>포함하는 **자료를 표현**할 가장 좋은 방법</u>을 🔥<u>**심각하게 고민해야 한다.**</u>🔥

- 아무 생각 없이 Getter/Setter를 추가하는 방법이 가장 나쁘다.

---

# 자료/객체 비대칭

> **객체**는 추상화 뒤로 **자료를 숨긴 채**, 자료를 다루는 함수만 공개한다.  
> 자료구조는 자료 그대로를 공개하며, 별다른 함수를 제공하지 않는다.
> > _위 2가지 의도는 본질적으로 상반된다. (사실 정 반대의 의미를 가진다.)_

⬇️ `Block 6-5`: **절차적인 도형 클래스**  
(참고) Javascript는 부동소수점을 포함하는 숫자 계산이 취약하므로 예제로 구성하지 않음

```java
// in Java
public class Point {
  public double x;
  public double y;
}

public class Square {
  public Point topLeft;
  public double side;
}

public class Rectangle {
  public Point topLeft;
  public double height;
  public double width;
}

public class Circle {
  public Point center;
  public double radius;
}

public class Geometry {
  public final double PI = 3.141592653589793;
  
  public double area(Object shape) throws NoSuchShapeException
  {
    if (shape instanceof Square) {
      Square s = (Square)shape;
      return s.side * s.side;
    }
    else if (shape instanceof Square) {
      Rectangle r = (Rectangle)shape;
      return r.height * r.width;
    }
    else if (shape instanceof Circle) {
      Circle c = (Circle) shape;
      return PI * c.radius * c.radius;
    }
    throw new NoSuchShapeException();
  }
}
```

- 클래스를 통해 정보를 담은 인스턴스를 `area(Object shape)` 함수에 집어넣어서 호출하면 면적이 구해진다.  
  _객체 지향 프로그래머가 위 코드를 본다면 코웃음 칠지도 모르지만, 절차적이라서 비판한다면 맞는 말이다._
- 도형의 둘레를 구하는 `perimeter(Object shape)` 함수를 추가로 구현한다면?  
  **놀랍게도** `Geometry` 클래스에 의존하는 다른 도형 클래스들의 변화 없이 추가할 수 있다.
- 반대로 새로운 도형을 추한한다면? 예를 들어 `Pentagon`(정오각형)을 추가한다면?  
  **당연하게도** `Geometry` 클래스에 속한 모든 함수를 고쳐야한다.

<br>

⬇️ `Block 6-6`: **다형적인 도형 클래스**  
(참고) Javascript는 부동소수점을 포함하는 숫자 계산이 취약하므로 예제로 구성하지 않음

```java
// in Java
public interface Shape {
  double area();
}

public class Square implements Shape {
  private Point topLeft;
  public double side;
  
  public double area() {
    return side * side;
  }
}

public class Rectangle implements Shape {
  public Point topLeft;
  public double height;
  public double width;
  
  public double area() {
    return height * width;
  }
}

public class Circle implements Shape {
  public final double PI = 3.141592653589793;
  public Point center;
  public double radius;
  
  public double area() {
    return PI * radius * radius;
  }
}
```

_이쯤에서 다시 한번 읽어보자._  

> <u>**객체**는 추상화 뒤로 **자료를 숨긴 채**, 자료를 다루는 **함수만 공개**한다.</u>  
> - [SOLID 원칙 중 인터페이스 분리 원칙(Interface Segregation Principle)](https://blog.siner.io/2020/06/18/solid-principles/), ([원문](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898))

> <u>자료구조는 자료 그대로를 공개하며, **다른 함수를 제공하지 않는다.**</u>
> - [Encapsulation(캡슐화, 은닉성)](https://www.tutorialspoint.com/java/java_encapsulation.htm)

_어떠한가? 두 조건은 완전히 반대된다는 사실을 이해할 수 있겠는가?_

## 정리하자면

1. `Block 6-5`의 절차적인 방법과 `Block 6-6`의 다형적인 방법은 상호 보완적인 특징이 있다. (사실 반대다!!)

2. 객체와 자료구조는 근본적으로 양분된다. (아래 명제는 참이다)

    1. **자료 구조를 사용하는 <u>절차적인 코드</u>**  
        - 기존 자료 구조를 변경하지 않으면서 **새 함수를 추가하기 쉽다.** ➡️ 기능 구현에 의한 확장
        - 새로운 자료 구조를 추가하기 어렵다. ➡️ 새로운 자료구조에 대한 추가 기능 구현

    2. **<u>객체 지향 코드</u>**  
        - 기존 함수를 변경하지 않으면서 **새 클래스를 추가하기 쉽다.** ➡️ 다형성을 통한 확장
        - 새로운 함수를 추가하기 어렵다. ➡️ 다형성에 대한 강제화로 모든 클래스에 대한 수정

> 노련한 프로그래머들은  
> <u>객체 지향 프로그램에서 반드시 "모든 것이 객체다"라는 말은  `미신`</u>이라는 것을 잘 안다.

---

[Go to Part 2](./README-part-2.md) / [Read in Wiki](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-06.-Objects-and-Data-Structures-Part.2)

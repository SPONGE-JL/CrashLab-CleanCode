[Read in Wiki](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-06.-Objects-and-Data-Structures)
---

2021.08.21 (SAT) 10:20-12:00 (100mins)  
🚀 **Lead by. '[Jeongyeol](https://github.com/SPONGE-JL)'**

# Chapter 06. Objects and Data Structures

## 의문문으로 시작하기

> 왜 변수는 비공개(`private`)로 정의할까?  
> -> **변수에 의존하지 않게 만들고 싶어서**

> 왜 조회(`get`) 함수와 설정(`set`) 함수를   
> <u>**당연하게** 공개(`public`)로 비공개 변수(`private variable`)를 외부에 노출할까?</u>

---

## 자료 추상화

### 1. 자료 구조에 저장된 정보만으로 <u>사용방법을 알 수 없다.</u> 🤔

⬇️ `Block 6-1`: **구체적인 User 클래스**
  
```java
// in Java
public class User {
  public long id;
  public String name;
}

export Point
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

### 2. 추상화되어 제공된 기능이 <u>정보의 출처를 드러내지 않는다.</u> 🤔

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

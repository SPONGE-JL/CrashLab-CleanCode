[Go to index](./#-chapter-06-objects-and-data-structures) / [Read in Wiki](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-06.-Objects-and-Data-Structures-Part-1)
---

2021.08.28 (SAT) 10:20-12:00 (100mins)  
🚀 **Lead by. '[Jeongyeol](https://github.com/SPONGE-JL)'**

# Chapter 06. Objects and Data Structures - <u>Part.2</u>

## 디미터 법칙 (Seg.1) - 이해하기

앞에서 보았듯, 객체는 자료를 숨기고 함수를 공개한다.  
**즉, 조회 함수로 내부 구조를 공개하면 안 된다는 의미이다.**  
(숨기지 않고 내부 구조를 노출하는 셈이 되기 때문)

```yaml
디미터_법칙: 모듈은 자신이 조작하는 객체의 속사정을 몰라야 한다는 주장
```

`디미터 법칙`을 좀더 자세히 이야기하면,  
_"클래스 C의 메서드 f는 다음과 같은 객체의 메서드만 호출해야한다"_는 주장이다.

- **클래스 `C`**
  - 클래스 `C`의 다른 메서드 호출 가능
- **클래스 `C`의 메서드 `f`가 생성(해서 반환)한 객체 `O`**
  - 함수 내부에서 `O`의 메서드 호출 가능
- **클래스 `C`의 메서드 `f`로 넘어온 객체 인자 `A`**
  - 함수 내부에서 `A`의 메서드 호출 가능
- **클래스 `C`의 인스턴스 변수에 저장된 객체 `M`**
  - 인스턴스를 통해서 멤버변수 `M`의 메서드 호출 가능

### 디미터 법칙을 어기는 예시

클래스 C의 메서드 f를 외부에서 호출하는 경우

```javascript
class Origin {
  innerValue = "my inner value";
  concatStr = (here) => `${this.innerValue} concat with '${here}'!!`;
}

const org = new Origin();
console.log(org.innerValue); // my inner value
console.log(org.concatStr("origin"));
// my inner value concat with 'origin'!!

const extract = org.concatStr;
console.log(extract); // [Function: concatStr]
console.log(extract("extract"));
// my inner value concat with 'extract'!!
```

- class 내부 arrow function이 아닌 method로 선언해서, 외부 호출 제한

  ```javascript
  class Origin {
    innerValue = "my inner value";
    concatStr(here) {
      return `${this.innerValue} concat with '${here}'!!`;
    }
  }

  const org = new Origin();
  console.log(org.innerValue); // my inner value
  console.log(org.concatStr("origin"));
  // my inner value concat with 'origin'!!

  const extract = org.concatStr;
  console.log(extract); // [Function: concatStr]
  console.log(extract("extract"));
  // TypeError: Cannot read property 'innerValue' of undefined
  ```

- 참고 : 변수로 할당한 함수를 Object에 담는 경우, 함수는 동작..

  ```javascript
  const anonymous = { innerValue: "mutated value", extract };
  console.log(anonymous); // { extract: [Function: concatStr] }
  console.log(anonymous.innerValue); // mutated value
  console.log(anonymous.extract("anonymous"));
  // mutated value concat with 'anonymous'!!
  ```

---

## 디미터 법칙 (Seg.2) - 흔한 실수와 개선

### 기차 충돌 (Train Wreck)

TODO

### 잡종 구조

TODO

### 구조체 감추기

TODO

---

## 디미터 법칙 (Seg.3) - 사례 확인

### 자료 전달 객체 (DTO)

TODO

### 활성 레코드 (DAO)

TODO

---

### 그 외 디미터 법칙을 이용한 좋은 사례

- Javascript - [메서드 체인 예시](./#basic-method-chain-example)
  
    ```javascript
    class SimpleCalculator {
      constructor(value) {
        this.value = value;
        this.sum = 0;
      }

      divide(value) {
        this.value = this.value / value;
        return this;
      }

      add(value1, value2) {
        this.sum = value1 + value2;
        return this;
      }

      multiply() {
        this.value = this.value * this.sum;
        return this;
      }

      done() {
        return this.value;
      }
    }

    const spCalc = new SimpleCalculator(8);
    const result = spCalc.divide(2).add(2, 2).multiply().done();
    console.log(`Output => ${result}`); // Output => 16
    ```

- [Promise 기반 비동기 통신 Axios 체인 예시](https://axios-http.com/docs/example)

- [Java - Builder Pattern](https://github.com/dev-chloe/Simple-CRUD/blob/back/app/src/test/java/com/toyproject/simplecrudapp/domains/entity/UserTest.java#L23-L28)


---

## 결론

TODO
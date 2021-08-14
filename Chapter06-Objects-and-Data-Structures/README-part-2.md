[Go to index](./#-chapter-06-objects-and-data-structures) / [Read in Wiki](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-06.-Objects-and-Data-Structures-Part.2)
---

2021.08.28 (SAT) 10:20-12:00 (100mins)  
🚀 **Lead by. '[Jeongyeol](https://github.com/SPONGE-JL)'**

## Chapter 06. Objects and Data Structures - <u>Part.2</u>

# 디미터 법칙 (Seg.1) - 이해하기

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

## 디미터 법칙을 어기는 예시

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

# 디미터 법칙 (Seg.2) - 흔한 실수와 개선

```java
String outputDir = ctxt.getOptions().getScratchDir().getAbsolutePath();
```

```java
Option opts = cttx.getOptions();
File scratchDir = opts.getScratchDir();
String outputDir = scratchDir.getAbsolutePath();
```
> `ctxt` 객체의 `getOptions()` 함수를 호출하면 반환되는 객체.  
>  반환된 객체의 `getScratchDir()` 함수를 호출하면 반환되는 객체.  
> 다시 반환된 객체의 `getAbsolutePath()` 함수를 호출하면 반환되는 객체.  
> 그 객체를 `outputDir`에 할당.
> 
> **나누었으면 해결될 문제인가?**

과연 위 코드는 디미터의 법칙을 위반할까?

## 기차 충돌 (Train Wreck)

1. 코드를 통해 우리는 아래를 알 수 있다.
    - `ctxt`는 `options`을 포함하고 있다. (`getOptions()`)
    - `Option`은 `scratchDir`을 포함하고 있다. (`getScratchDir()`)
    - `ScratchDir`은 `outputDir`을 포함하고 있다. (`getAbsolutePath()`)

2. 만약 `ctxt`, `Options`, `ScratchDir`이..
    - **자료구조**라면, 내부 자료구조를 드러내므로 디미터 법칙을 적용받지 않는다.
    - **객체**라면, <u>**내부 자료구조를 숨기지 못했기 때문에, 확실하게** 디미터 법칙을 위반한다.</u>

3. 왜 이런 혼란이 생겼을까? => 조회 함수(`getter`)를 사용하는데서 기인한다.
    - **자료구조가 무조건 함수 없이 공개 변수만 포함한다면, 오해는 없어질 수 있다.**
      ```typescript
      // 
      const outputDir: string = ctxt.options.scratchDir.absolutePath;
      ```

4. 한편, 프레임워크와 표준(ex. 빈 bean) 차원에서,  
   단순한 자료 구조에도 <u>조회 함수와 설정 함수를 정의하라고 요구</u>하는 경우도 존재한다.

    - Spring Framework에서 옵저버 패턴을 적용할 때,  
      이벤트 프로그래밍 필요한 인터페이스 구현체 부분만을 가져온 부분

      ```java
      @Getter
      @AllArgsConstructor
      public class AppEvent {

          private int data;
          private Object source;
      }
      ```

      ```java
      @Component
      public class AppRunner implements ApplicationRunner {

          @Autowired
          private ApplicationEventPublisher publisher;

          @Override
          public void run(ApplicationArguments args) throws Exception {
              publisher.publishEvent(new AppEvent(100, this));
          }
      }
      ```

      ```java
      @Component
      public class AppEventHandler {

          @EventListener
          @Async
          public void handle(AppEvent appEvent){
              System.out.println(Thread.currentThread().toString());
              System.out.println("AppEventHandler = " + appEvent.getData());
          }
      }
      ```

## 잡종 구조

이런 혼란으로 말미암아 때때로 **절반은 객체, 절반은 자료구조인 <u>잡종 구조</u>**가 나온다.

- 중요한 기능을 수행하는 함수도 가지고 있고, 공개 변수나 공개 조회/설정 함수도 있다.
- 공개 조회/설정 함수는 비공개 변수를 그대로 노출한다.

이런 잡종 구조 덕택에 **다른 함수가 절차적인 프로그래밍의 자료구조 접근방식처럼**  
**<u>비공개 변수를 공개</u>하고 싶은 유혹**에 빠지기 십상이다. (`기능 욕심(Feature Envy)`)

- 새로운 함수의 추가나 새로운 자료구조 추가를 어렵게 만든다.

프로그래머가 함수나 타입을 포호할지 공개할지 확신하지 못해서  
(혹은 무지해서) 어중간하게 내놓은 설계에 불과하다.

> 그래서 구체적으로 어떻게 하라는 걸까...?

## 구조체 감추기

만약 앞서 본 `ctxt`, `options`, `scratchDir`이 진짜 객체라면?  
**첫번째 코드블럭처럼 줄줄이 소세지로 엮어서는 안된다.**  
객체라면, 내부 자료구조를 감추고 기능을 외부에 공개해야 하니까..

> 그렇다면, 디렉토리 경로 정보를 어떻게 얻어야 좋을까?

1. `ctxt`가 Context(맥락)을 포함하는 객체라면 **"뭔가를 하라"**고 말해야한다.
   속에 들어있는 자료 구조를 드러내서는 안된다.

2. 코드는 절대경로를 구하려고 하고 있는데, 저 경로 정보가 왜 필요할까?  
   
    리팩토링을 결심하고 열심히 코드를 읽어 내려간 끝에,  
    **클래스 파일을 읽어서 임시 디렉터리에 저장하는 코드가 있다는 사실을 발견했다.**  
   
    ```java
    String outFile = outputDir + "/" + className.replace('.', '/') + ".class";
    FileOutputStream fout = new FileOutputStream(outFile);
    BufferedOutputStream bos = new BufferedOutputStream(fout);
    ```

    `추상화 수준이 마구 뒤섞여 있는 이 상태를 개선해야 한다.` (G34, G6 참조)
   
    - [ ] [G34]: **함수 내 모든 문장은 추상화 수준이 동일**해야 하고,  
      **함수 이름이 의미하는 작업보다 한 단계만 낮아야한다.**
    - [ ] [G6]: **추상화는 저차원 상세 개념에서 고차원 일반 개념을 분리하는 것을 말한다.**  
      모든 저차원 개념은 파생 클래스에 넣고, 모든 고차원 개념은 기초 클래스에 넣는다.  

3. 임시 디렉터리의 절대 경로를 추출은 임시 파일 생성이 목적임을 확인했다.

    > `ctxt` 객체에 대상 클래스의 이름으로 임시파일을 생성할 수 있도록 하면 어떨까? 
    > <br>
    > ➡️ `ctxt` 객체가 `createScratchFileStream` 이름의 메서드를 공개하면 어떨까?

4. 비교

    ```java
    // Before
    // String outputDir = ctxt.getOptions().getScratchDir().getAbsolutePath();
    
    // Fail: Detach method chaning
    String outFile = outputDir + "/" + className.replace('.', '/') + ".class";
    FileOutputStream fout = new FileOutputStream(outFile);
    BufferedOutputStream bos = new BufferedOutputStream(fout);
    // ...
    String outFile = outputDir + "/" + className.replace('.', '/') + ".class";
    FileOutputStream fout = new FileOutputStream(outFile);
    BufferedOutputStream bos = new BufferedOutputStream(fout);
    ```
    
    ```java
    // Success: After Refactor
    BufferedOutputStream bos = ctxt.createScratchFileStream(className);
    ```
    
    - `ctxt` <u>객체에게 맡기기 적당한 임무가 부여</u>되었다.
    - `ctxt` 객체는 내부 구조를 드러내지 않는다.
    - `ctxt` 객체를 다루는 모듈에서 자신이 몰라도 되는 여러 객체를 탐색할 필요가 없다.

5. **따라서 개선된 코드는 디미터 법칙을 위반하지 않는다**.

---

# 디미터 법칙 (Seg.3) - 사례 확인

## 자료 전달 객체 (DTO)

TODO

## 활성 레코드

TODO

---

## 그 외 디미터 법칙을 이용한 좋은 사례

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

# 결론

TODO
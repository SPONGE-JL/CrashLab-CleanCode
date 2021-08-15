# Intro

```yaml
밥 아저씨의 바램:
  - 코드가 깔끔하고, 일관적이며, 꼼꼼하고, 질서 정연했으면 좋겠다.
  - 그렇게 짰다면 전문가가 짰다는 인상을 심어줄 수 있다.
  - 반대로, 코드가 어수선해 보인다면 프로젝트를 전반적으로 무성의한 태도로 작성했다고 생각할 것이다.
  - 규칙을 정하고 그 규칙을 따라야 한다.
  - 규칙을 자동으로 적용시키는 도구를 활용해도 좋다.
```

## 형식을 맞추는 목적

- 코드 형식은 중요하다! 매우 중요하다! ⭐️ 
- '돌아가는 코드'에 만족하면 안된다.
- 오늘 구현한 기능은 다음 버전에서 바뀔 수 있다.
- 처음 잡아놓은 구현 스타일과 가독성 수준은 유지보수와 확장성에 계속 영향을 미친다.

`코드는 사라질지라도 개발자의 스타일과 규율은 사라지지 않는다!`

## 적절한 행 길이를 유지하라
> 파일의 세로 길이는 짧으면 짧을수록 좋다.
> 일반적으로 큰 파일보다 작은 파일이 이해하기 쉽다.

### 신문 기사처럼 작성하라
- 코드는 위에서 아래로 읽힌다는 사실을 기억하자
- 이름은 간단하면서도 설명이 가능하게 짓는다.
- 최상단에는 의도를 드러내고 하단에는 구체적인 내용을 배치한다.

### 개념은 빈 행으로 분리하라
- 생각 사이에는 빈 행을 넣어 분리하자
- import 문, 각 함수 사이, 패키지 선언부에 빈 행을 넣는다.
- 이는 새로운 개념을 시작한다는 시각적 단서다.
  
```javascript
import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent />
};

export default App;
```

### 세로 밀집도
- 줄바꿈이 개념을 분리한다면 세로 밀집도는 연관성을 의미한다.
- 서로 밀접한 코드는 가까이 배치한다.
- 의미 없는 주석은 자제한다.

```java
// BAD
// 의미없는 주석으로 변수를 떨어뜨려서 한눈에 파악이 잘 안된다.

public class ReporterConfig {
  /**
   * 리포터 리스너의 클래스 이름
   */
  private String m_className;

  /**
   * 리포터 리스너의 속성
   */
  private List<Property> m_properties = new ArrayList<Property>();
  public void addProperty(Property property) {
      m_properties.add(property);
  }
}
```

```java
// GOOD
// 의미 없는 주석을 제거함으로써 코드가 한눈에 들어온다.
// 변수 2개에 메소드가 1개인 클래스라는 사실이 드러난다.

public class ReporterConfig {
  private String m_className;
  private List<Property> m_properties = new ArrayList<Property>();

  public void addProperty(Property property) {
    m_properties.add(property);
  }
}
```

### 수직 거리
> 이 함수에서 호출하는 다른 함수를 찾기 위해 미로같은 코드를 뒤진 경험이 있는가? 🤦  
> 이 조각, 저 조각이 어디에 있는지 찾고 기억하는 데에 시간과 노력이 너무 많이 든다.

- 서로 밀접한 개념은 세로로 가까이에 두며, 한 파일에 위치해야 한다.
- 변수는 사용하는 함수와 최대한 가까이 선언한다.

#### 1. 변수선언
- 변수는 사용하는 위치에 최대한 가까이 선언한다.

  ```javascript
  const confirmName = () => {
    const name = getName();

    if (name === 'test') {
      return false;
    }
    return name;
  }
  ```

- 지역변수는 함수 맨 처음, 블록 상단, 루프 직전에 선언한다.
- 루프를 제어하는 변수는 루프문 내부에 흔히 선언한다.

  ```javascript
  const list = [1, 2, 4, 3, 5];
  let sum = 0;
  
  for (let num of list) {
    sum += num;
  }
  ```

  ```javascript
  const hashIt = (data) => {
    let hash = 0;
    const length = data.length; // 지역 변수 선언

    for (let i = 0; i < length; i++) {
      const char = data.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash &= hash;
    }
  }
  ```

#### 2. 인스턴스 변수
- 인스턴스 변수를 선언하는 위치는 논쟁이 분분하다.
- 자바는 클래스 맨 처음에 선언하지만 C++은 마지막에 선언(가위 규칙)한다.
- 어느 쪽이든 상관 없으나 잘 알려진 위치에 인스턴스 변수를 모아야 한다.

#### 3. 종속 함수
```yaml
A 함수와 B 함수가 있다고 하자:
  A 함수가 B 함수를 호출한다면:
    - A 함수를 먼저 배치한다.
    - A, B 함수는 서로 가까운 위치에 선언해야 한다.

---
결과: 호출되는 함수를 찾기 쉬워지며, 가독성도 높아진다.

---
최근 동향: 함수는 정의되는 시점이 아니라 호출되는 시점에 동작하며 호이스팅이 지원되기 때문에
         A함수를 먼저 쓰냐 B 함수를 먼저 쓰냐는 차이가 없습니다.  
         호출시점과 정의 시점이 분리되서 순서는 상관 없으니 자연스럽게 읽어 내려가는 방향으로 기재한다.
```

```javascript
let todos = [];

const deleteTodo = (e) => {
  const deleteButton = e.target;
  const item = deleteButton.parentNode;
  const cleanTodo = todos.filter((todo) => todo.id !== item.id);
  saveTodos();
}

const saveTodos = () => {
  localStorage.setItem(todoItem, JSON.stringify(todos));
}

const loadTodos = () => {
  const loadedTodos = localStorage.getItem(todoItem);
}

const init = () => {
  loadTodos();
  todoForm.addEventListener('submit', handleSubmit);
}

init();
```

#### 4. 개념적 유사성
>개념적인 친화도가 높을수록 코드를 가까이 배치한다.
```yaml
친화도가 높은 요인:
  - 직접적인 종속성 (한 함수가 다른 함수를 호출)
  - 변수와 그 변수를 사용하는 함수
  - 비슷한 동작을 수행하는 함수
```

```javascript
class BankAccount {
  alias;
  numberCode;
  balance;

  constructor({ alias = "별칭없음", numberCode, balance }) {
    this.alias = alias;
    this.numberCode = numberCode;
    this.balance = balance;
  }

  get basicInfo() {
    return `${this.alias}: ${this.numberCode} / 현재 잔액: ${this.balance.toLocaleString("ko-KR")} 원`;
  }
}

const dataFromAPI = {
  alias: "ㅌㅅ 계좌",
  numberCode: "5353-825-82825",
  balance: 5126500
};

const myBankAccount = new BankAccount(dataFromAPI);
console.log(`[INFO] myBankAccount.alias > ${myBankAccount.alias}`);
console.log(`[INFO] myBankAccount.numberCode > ${myBankAccount.numberCode}`);
console.log(`[INFO] myBankAccount.balance > ${myBankAccount.balance}`);
// [INFO] myBankAccount.alias > ㅌㅅ 계좌
// [INFO] myBankAccount.numberCode > 5353-825-82825
// [INFO] myBankAccount.balance > 5126500
console.log(`[INFO] myBankAccount.basicInfo > ${myBankAccount.basicInfo}`);
// [INFO] myBankAccount.basicInfo > ㅌㅅ 계좌: 5353-825-82825 / 현재 잔액: 5,126,500 원
```

#### 5. 세로 순서
- 함수 호출 종속성은 아래방향을 유지한다.
- 호출되는 함수를 호출하는 함수보다 뒤에 배치한다.
  - 소스코드는 자연스럽게 고차원 -> 저차원으로 내려간다.
  - 중요 개념은 가장 먼저, 세세한 사항은 마지막에!

### 가로 형식 맞추기
Q. 한 행은 가로로 얼마나 길어야 적당할까?    

A. 대다수의 프로그래머들은 명백히 짧은 행을 선호하므로 짧은 행이 바람직하다.  
   일반적인 프로그램에서 평균적인 가로행의 길이는 대략 20-60자 사이  
   더 길어도 상관없다 요즘 젊은 프로그래머들은 모니터도 크고 눈도 좋아서 200자도 가능  
   <u>필자 개인적으로는 120자 정도로 길이를 제한한다.</u>

#### 가로 공백과 밀집도
>가로로는 공백을 사용해 밀접한 개념과 느슨한 개념을 표현한다.

```javascript
// 할당 연산자 좌우로 공백을 줌 => 왼쪽, 오른쪽 요소가 확실하게 구분됨  
const totalQuantity = items
  // 함수 이름과 괄호 사이에는 공백을 넣지 않음 => 함수와 인수의 밀접함을 보여줌
  .filter((item) => item.limitQuantity === null)
  // 괄호 안의 인수끼리는 쉼표 뒤의 공백을 통해 인수가 별개라는 사실을 보여줌
  .reduce((acc, val) => acc + val.quantity, 0);
```
- 연산자 우선순위를 강조하기 위해서도 공백을 사용한다. `return b*b - 4*a*c;`
- 하지만.. Code Formatter등의 도구가 연산자 우선순위까지 고려하지 못하므로  
  **공백을 임의로 넣어주더라도 사라지는 경우가 대부분.**  

  Q. 그렇다면 괄호로 묶어주는 것이 더 바람직하지 않을까? 🤔

#### 가로 정렬
- 이런 정렬은 코드가 엉뚱한 부분을 강조해 의도가 가려질 수 있다. 
- 예를 들어, 변수 유형을 무시하고 변수이름부터 읽을 수 있다.
- 게다가 Code Formatter 대부분들은 이렇게 해놔봤자 무시하고 원래대로 돌려놓는다.
- 그러므로 선언문과 할당문을 별도로 정렬할 필요가 없다.

```java
// BAD
public class FitNessExpenditer implements ResponseSender {
  private Socket          socket;
  private InputStream     input;
  private FitNesseContext context;

  public FitNEsseExpenditer(Socket s, FitNesseContext context) throws Exception {
    this.context = context;
    socket       = s;
    input        = s.getInputStream();
  }
}
```
```java
// GOOD
public class FitNessExpenditer implements ResponseSender {
  private Socket socket;
  private InputStream input;
  private FitNesseContext context;

  public FitNEsseExpenditer(Socket s, FitNesseContext context) throws Exception {
    this.context = context;
    socket = s;
    input = s.getInputStream();
  }
}
```

### 들여쓰기
- 들여쓰기한 파일은 구조가 한눈에 들어온다. 
- 하지만 들여쓰기를 하지 않은 일명 스파게티 코드는 열심히 분석하지 않는 한 이해하기가 힘들다.

```java
// BAD
public class CommentWidget extends TextWidget {
  public static final String REGEXP = "^#[^\r\n]*(?:(?:\r\n)|\n|\r)?";

  public CommentWidget(ParentWidget parent, String text){super(parent, text);}
  public String render() throws Exception {return ""; }
}
```

```java
// GOOD
// 가독성을 위해 한줄이라도 정성스럽게 들여쓰기로 감싸주자.

public class CommentWidget extends TextWidget {
  public static final String REGEXP = "^#[^\r\n]*(?:(?:\r\n)|\n|\r)?";

  public CommentWidget(ParentWidget parent, String text){
    super(parent, text);
  }

  public String render() throws Exception {
    return "";
  }
}
```
  
#### 가짜 범위
빈 while문이나 for문을 접할 때가 있다.  
가능한한 피해야 되지만, 피하지 못 할 경우엔 빈 블록을 올바로 들여쓰고 괄호로 감싼다.  
그렇지 않으면 찾을 수 없는 버그가 발생할지도..

빈 블록의 반복문의 경우 잘 보이지 않으므로, ;(세미콜론)의 경우에는 새행에 적어서 눈에 띄게 해주자!

```javascript
while(dis.read(buf, 0, readBufferSize) != -1)
;
```

### 팀 규칙
> 팀에 속해있다면,
> **팀 규칙을 가장 우선시 하고 선호해야 한다.**
>
> 처음 팀이 이루어 졌다면,  
> 코딩을 시작하기 전, 코딩 스타일을 의논(괄호를 어디에 넣을지, 네이밍은 어떻게 할지 등)하여  
> **IDE Fomatter로 지정하여 구현하는 것이 옳은 방식이다.**
>
> 좋은 소프트웨어 시스템은 읽기 쉬운 문서로 이루어진다.  
> 스타일은 일관적이고 매끄러워야 한다.  
> 온갖 스타일을 섞어 코드를 필요 이상으로 복잡하게 만들지 말자.

[Read in Wiki](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-01.-Clean-Code)
---

2021.07.31 (SAT) 10:20-12:00 (100mins)  
🚀 **Lead by. '[YongSik](https://github.com/youngsikwon)'**

> ## 3. 함수
----
### 작게 만들어라!!

함수를 만드는 첫째 규칙은 '작게!'다. 함수를 만드는 둘째 규칙은 '더 작게'다.

"함수가 작을수록 더 좋다는 증거나 자료를 제시하기도 어렵다. 하지만 나는 지난 40여년 동안 온갖 크기로 함수를 구현해 봤다." p42

100줄에서 300줄에 달하는 함수도 많이 짰으며, 지금까지 경험을 바탕으로 그리고 오랜 시행착오를 바탕으로 나는 작은 함수가 좋다고 확신했다!

그 이유!
"켄트가 코드를 보여줬을 때 나는 함수가 작아 놀랐다!"

[kent](./image/kent.png)
K.Beck
- 소프트웨어 방법론
  - 익스트림 프로그래밍
  - 애자일 소프트웨어 개발
  - 애자일 선언문
  - TDD 창시자(?)
  
켄트백이 만든 자바/스윙 프로그램 중 놀랍게도 모든 함수가 2줄, 3줄, 4줄 정도 였다.p43

## 블록과 들여쓰기

```javascript
if문 / else문 / while문 등에 들어가는 블록은 한줄이어야 하며, 대게 거기서 함수를 호출한다. 
그러면 바깥을 감싸는 함수가 작아질 뿐 아니라 블록 안에서 호출하는 함수 이름을 적절히 짓는다면, 코드를 이해하고 쉬워진다.

fact_1 : 중첩 구조가 생길만큼 함수가 커져서는 안된다.

fact_2 : 함수에서 들여쓰기 수준은 1단이나 2단을 넘어서면 안된다.

<h3>들여쓰기 예제</h3>

//1. 일반적인 표기법

if(true){
  consloe.log("hi");
}else{
  console.log("bye");
}

// 2. 중괄호를 생략한 표기법 (들여쓰기 x)
if(true) console.log("hi");
else console.log("bye");

//3. 중괄호를 표기법 (들여쓰기 o)
if(true)
        console.log("hi");
else
        console.log("bye");


//삼항연산자 표가법
(true) ? console.log("hi") : console.log("bye");

```
### 한 가지만 해라!
>"함수는 한 가지를 해야 한다. 그 한 가지를 잘 해야 한다. 그 한 가지를 해야 한다."

__소프트웨어 엔지니어링에서 가장 중요한 규칙!..__ 

함수가 1개 이상의 행동을 한다면 작성하는 것도, 테스트하는 것도, 이해 하는 것도 어려워진다.

내 자신이 하나의 함수에 하나의 행동을 정의하는 것이 가능해진다면 함수는 좀 더 고치기 쉬워지고 코드들은 읽기 쉬워질 것이다. 많은 원칙들 중 이것만 알아간다 하더라도 당신은 많은 개발자들을 앞설 수 있습니다.(CleanCode JS.Version)

```javascript
//bad
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client); //client --> DB찾고
    if (clientRecord.isActive()) { // User가 active한 유저라면 이메일 보냄
      email(client);
    }
  });
  //한 가지의 함수에서 DB, 유저도 찾고, 메일도 보냄...
  // 이렇게 본다면 위 이야기 하는 함수는 하나의 행동만 해야 한다 라는 원칙하는 것을 알 수 있다.
}
```
```javascript
//Good
function emailClients(clients) {
  clients
    .filter(isClientActive)
    .forEach(email); //유저
}

function isClientActive(client){
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```

### 함수당 추상화 수준은 하나로


```Javascript
함수 내에 추상화 수준이 섞이면 특정 표현이 근본 개념인지 세부사항인지 구분하기 어렵다.

//내려가기 규칙
위에서 아래로 이야기처럼 읽혀야 좋다.
함수 추상화 수준이 한 번에 한 단계식 낮아진다.
```
## Switch 문

```javascript
//BAD
const calculatepay = (employeeType) => {
  switch (employeeType) {
    case 'PART_TIME':
      return calculatePartTimePay();
    case 'FULL_TIME':
      return calculateFullTimePay();
    case 'COMMISSIONED':
      return calculateContracorPay();
    default:
        return 0;
  틴
}
```
- 함수가 길다.
- <em>한 가지</em>, 작업만 수행 하지 않는다.
- SRP(Single Responsibility Principle : 단일 책임 원칙 // 한 클래스는 하나의 책임만 가져야 한다. __(로버트 마틴)__ `코드를 변경할 이유가 여럿이기 떄문`)
- OCP(Open Closed Principle : 개방-폐쇄 원칙 // "소프트웨어 요소는 확장에는 열려 있으나 변경에는 닫혀 있어야 한다." )를 위반한다.(`새 직원 유형을 추가할 때마다 코드를 변경해야 함.`)

```javascript
const getEmployeeObjectByType = (employeeType) => {
  switch (employeeType) {
    case PART_TIME:
      return new PartTimeEmployee();
    case FULL_TIME:
      return new FullTimeEmployee();
    case CONTRACTOR:
      return new ComissionedEmployee();
    default:
      return undefined;
  }
}
```
- 이 함수를 호출하여 올바른 유형의 직원을 얻은 다음 원하는 작업을 수행할 수 있다.
- 서로 다른 작업을 수행하는 동일한 switch문 케이스로 여러 기능을 사용하는 것보다 훨씬 빠름.


## 서술적인 이름을 사용하라!

```
"코드를 읽으면서 짐작했던 기능을 각 루틴이 그대로 수행한다면 꺠끗한 코드라 불러도 되겠다" (p.49)
-  함수가 작고 단순 해야 하고, 사용 하고자 하는 함수 이름을 잘 표현 해야 한다. 마치`getEmployeeObjectByType` 이 이름처럼...? 
```

## 함수 인수

```
함수 인수는 적을수록 좋다!🔥
인수가 많을 수록 개념을 이해하기 어렵게 만든다는 이유이다. 
더불어 인수가 적을수록 `테스트`하기 쉬워진다.
👍 Why! 인수가 3개 넘어가면 인수마다 유효한 값으로 모든 조합을 구성해 테스트 하기가 상당히 부담스러워진다.
```


## 플래그 인수

```
😆
::플래그 인수는 함수에 boolean 등 함께 넘겨서 로직을 분기하는 방법::
- 플래그 인수를 사용하면, 호출할 수 있는 함수들이 무엇이고 어떻게 호출 해야 하는지를 이해하기 어려워진다.
- 함수들의 기능 차이가 잘 드러나지 않는다.
```


## 이항 함수

```
인수가 2개인 함수는 단항 함수보다 이해 하기 어렵다. 
- 이항 함수가 무조건 나쁘다는 것은 아니다. 불가피한 경우도 생기기 때문이다. 하지만, 이항 함수가 내포하는 잠재적 위험을 인식하고 되도록이면 단항 함수로 바꿔 쓸 수 있어야 한다.
```

## 삼항 인수

```
삼항 한수는 더 이해하기 어려우며, 😕{당황} ->  😔{주춤} -> 😱{무시}로 야기 되는 문제가 2배 이상 늘어나기에 삼항 함수를 만들땐 신중히 고려하는게 좋다.
```


## 동사와 키워드

```javascript
함수와 의도나 인수의 순서와 의도를 제대로 표현하기 위해서는 좋은 함수이름이 필수이다.

showMessage(..)     // 메시지를 보여줌
getAge(..)          // 나이를 나타내는 값을 얻고 그 값을 반환함
calcSum(..)         // 합계를 계산하고 그 결과를 반환함
createForm(..)      // form을 생성하고 만들어진 form을 반환함
checkPermission(..) // 승인 여부를 확인하고 true나 false를 반환함
```

## 부수 효과(side Effects)를 일으키지 마라!

함수의 결과값을 반환하는 것 이외에 다른 일을 할 때 그 함수는 부수 효과를 가진다고 말함.
ex)
```javascript
let externalVariable = 1;

function func() {
  externalVariable = 2;
}
```

## 출력 인수

```
인수를 전달할 때는 보통 입력으로 간주한다. 입력의 상태를 변경하는 것을 출력인수라 하고, 이는 최대한 피해야 한다. 
```

## 명령과 조회를 분리하라
함수는 무언가를 수행하거나 답하거나 둘 중 하나만 해야 한다. 이 문제를 한꺼번에 혼란을 초래 한다.


```java

public boolean set(String attribute, String value);
// 이름이 attribute인 속성을 찾아 값을 value로 설정 한 후 boolean 값으로 반환
//bad
if(set('username', 'youngsik')) {}

//Good
if(attributeExists('username')){
  setAttribute('username', 'youngsik');
}
```

## 오류코드 보다는 예외를 사용하라.

```
오류코드를 반환하는 방식은 명령/조회 분리 규칙을 미묘하게 위반하게 된다.
if문에서 명령을 표현식으로 사용하기 쉬운탓이다. 
오류 코드 대신에 예외 처리 코드를 사용하면 오류의 처리코드가 원래 코드에서 분리되서 코드가 깔끔해진다.
```

```javascript
// 첫 번째
const myError = new Error(‘please improve your code’)
console.log(myError.message) // please improve your code
```
> 단순히 에러만을 확인 하지 말 것. 
> 
> 그 에러가 해결되거나 대응 할 수 있게 되는 것은 아니다.
> `console.log` 를 통해 콘솔에 로그를 기록 하는 것은 에러 로그를 잃어 버리기 쉽기 떄문.
> 
> `try/catch`로 어떤 코드를 감쌌다면 그건 당신이 그 코드에 어떤 에러가 날 지도 모르기 떄문에
> 감싼 것이므로 그의 대한 생각을 가지고 있어야 한다.


```javascript
//BAD
try{
  functionThatMightThrow();
}catch (error){
  console.log(error);
}

//GOOD
try {
  functionThatMightThrow();
} catch (error) {
  // 첫번째 방법은 console.error를 이용하는 것입니다. 이건 console.log보다 조금 더 알아채기 쉽습니다.
  console.error(error);
  // 다른 방법은 유저에게 알리는 방법입니다.
  notifyUserOfError(error);
  // 또 다른 방법은 서비스 자체에 에러를 기록하는 방법입니다.
  reportErrorToService(error);
  // 혹은 그 어떤 방법이 될 수 있습니다.
}
```

## 🌠 반복 하지 마라

> "어쩌면 중복은 소프트웨어에서 모든 악의 근원이다." (p.60)

```
- 코드 길이가 늘어난다.
- 알고리즘이 변하면 중복된 코드 모두 수정 해야 한다.
- 오류가 발생할 확률도 몇 배로 높다.
```
## ✅ 구조적 프로그래밍

```
- 모든 함수와 함수 내 모든 블록에 입구와 출구가 하나만 존재해야 한다.
- 함수가 클 수록 구조적  프로그래밍의 목표와 규울이 효과적이다.
```

## ✅  함수는 어떻게 짜죠?
```
 :: 소프트웨어를 짜는 행위는 여느 글짓기와 비슷하다.
  1) 처음에 함수를 짤때의 유형
    (1) 길고 복잡함.
    (2) 들여쓰기 쓰기 단계에도 많은 중복된 루프가 많다
    (3) 인수 목록도 아주 많다
    (4) 이름은 즉흥적이고 코드는 중복된다.

 하지만!! 서투른 코드를 빠짐 없이 테스트하는 단위 테스트 케이스를 만든다!
 그런 다음 -> 코드를 다듬고 -> 함수를 만듬 -> 이름 바꾸고 -> 중복을 제거한다.
 메서드를 줄이고 순서를 바꾼다. 때로는 전체 메서드를 쪼개기도 한다. 이와 도중에도 코드는 항상 단위 테스트를 통과한다.

최종 : 이 장에서 규칙을 따르는 함수를 얻게 된다. 처음부터 짜내지 않는다. 그게 가능한 사람은 없으리라..(p.62)
```

## 🙏 결론


모든 시스템은 특징 응용 분야 시스템을 기술할 목적으로 프로그래머가 설계한 도메인 특화 언어로 만들어진다.
함수는 그 언어에서 `동사`이며, 클래스는 `명사`다.

프로그래머는 시스템을 프로그램이 아닌 이야기로 여긴다.
프로그래밍 언어라는 수단을 사용해 좀 더 풍부하고 좀 더 표현력이 강한 언어를 만들어 이야기를 풀어나간다.
시스템에 발생하는 모든 동작을 설명하는 함수 계층이 바로 그 언어에 속한다.
재귀라는 기교로 각 동작은 바로 그 도메인에 특화된 언어를 사용해 자신만의 이야기를 풀어나간다.

여기에서는 함수를 잘 만드는 기교를 소개했다.
여기서 설명한 규칙을 따른다면 길이가 짧고, 이름이 좋고, 체계가 잡힌 함수가 나올 수 있다.
하지만 `진짜 목표`는 함수를 잘 짜는 것이 아니라 `시스템을 풀어나가는 데 있다는 사실을 명심하기 바란다.`
우리가 작성한 함수가 분명하고 정확한 언어로 깔끔하게 같이 맞아 떨어져야 이야기를 풀어가기 쉽다는 것을 명심하면 좋겠다.









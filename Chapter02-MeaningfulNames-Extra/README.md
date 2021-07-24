[Read in Wiki](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-02.-Meaningful-Names-Extra)
---

2021.07.24 (SAT) 10:20-12:00 (100mins)  
🚀 **Lead by. '[Jeongyeol](https://github.com/SPONGE-JL)'**

# Static Factory Method Pattern | 정적 팩토리 메서드 패턴

> **Sample Gist**  
> [SPONGE-JL/ExampleToUseToyFactory.java](https://gist.github.com/SPONGE-JL/e0035d7790afe00bdbb757479f0db392#file-exampletousetoyfactory-java-L11-L14)

객체지향 프로그래밍(OOP, object-oriented programming)에서 객체(object)는   
기능(functions or methods)과 정보(data in member variables)를 클래스(class)라는 규격으로  
생성자(constructor)를 통해서 생성되어 메모리(memory) 어딘가에 생성됩니다.

몇몇 언어들은 이 생성자를 다양한 형태로 [오버로딩(Overloading)](#caption1-overlading)해서 사용할 수 있는데,  
대표적으로 Java가 이에 해당됩니다.

```yaml
# 여러_생성자가_존재한다
overloaded-constructors:
  - "객체를 생성할때 필요한 정보를 다르게 받을 수 있다는 의미이고,"
  - "이는 곧 객체를 생성하는 방법이 어려가지라는 것을 의미합니다."
```

## When we need it? | 언제 필요할까?

**가령, 어떤 서비스에서 회원정보를 다루는 서비스를 개발했다고 생각해봅시다.**  
우리의 서비스에서 직접 가입하는 사람만을 위해 기능을 개발한 상태입니다.  
회원정보를 쉽게 `user`라는 이름으로 **JavaScript Object로 만들어서 관리**하고 있습니다.

```javascript
// From Request Body..
const { id, pw, email } = req.param;
// req.param = {
//   id: "this-is-user-ID",
//   pw: "this-is-user-P@SSW04D",
//   email: "this.is.user@email.com",
// };

// Current Sign Up
const reqUser = {
  userId: id,
  userPw: pw,
  userEmail: email,
};
const newUser = UsersAPI.signUp(reqUser);

// FIXME Need immutable properties
// newUser.id = "Hacked-Name";
```

### 시간이 흘러서

시간이 흘러서 우리 서비스는 시장점유율이 올라가고, 제휴업체도 갈수록 늘어나고 있습니다.  
이때 이러한 요구사항이 들어온다고 가정해 봅시다. 

> _제휴사의 로그인 시스템의 인증 정보를 기반으로_  
> _우리 서비스를 이용할 수 있는 <u>SSO로그인(Single Sign-On Login)</u> 기능 구현 요망_

여러분이 이 상황에 놓였다면 어떻게 하시겠습니까?

```plaintext
"user" 구조를 좀 개선해서 확장해서 파싱하도록 짜면 될 해결되지 않나?
```

손쉽게 이렇게 말씀하실지도 모르겠습니다.

### 이에 더해서...

그러나 안타깝게도 이런 요구사항이 딸려옵니다.

> _기초 보안을 위해 기존 데이터 정보의 **무결성**과 **불변성**을 확보할 것_

`JSON` 데이터 형태로만 객체의 정보를 구성하면 생성된 이후 무결성을 보장할 수 없습니다.  
`user.userName = "Hacked-Name"`과 같이 위변조 당할 것은 불보듯 뻔하니까요.

우리는 **사용자 정보를 가지는 객체에 <u>`불변성`</u>을 확보해서 생성**해야 하며,  
**앞으로 추가될 다양한 제휴업체에 대한 <u>`확장성`</u>도 보장**해야 하고,  
아무리 다양해도 **생성된 객체는 <u>기존 로직과는 무관하게 `무결성`</u>을 보장**해야하는  
복잡한 제약 사항을 가지고 있습니다.

이럴 때, 우리는 Factory Method,  
**그 중에서도 Static Factory Method를 고민해 볼 수 있습니다.**

## Intention of this Pattern | 패턴의 의도

**정적 팩토리 메서드(Static Factory Method)는** 이런 상황의 해법 중 하나로 선택될 수 있습니다.

- `정적(Static)`: 프로그램이 기동될 때, 메모리 상에 메서드(혹은 함수)의 위치를 고정시킵니다.
  - 즉, 프로그램 내 어디서든 접근할 수 있습니다.
- `팩토리 메서드(Factory Method)`: 마치 컨베이어 벨트를 타고 조립되어 제품이 생산되는 공장(factory)처럼 인스턴스를 생성을 포함한 전/후 처리에 필요한 로직을 구현한 메서드를 의미합니다.
  - 외부에서는 `new` 키워드를 사용해서 객체를 생성할 수 없습니다.
  - 팩토리 메서드에서만 생성자(constructor)에 접근할 수 있고 `new` 키워드를 사용할 수 있습니다.
  - 즉, 프로그램에서 대상 객체를 인스턴스로 생성하는 방법은 팩토리 메서드만을 이용하도록 합니다.

### 구현한 예제 확인해 볼까요?

```bash
cd Chapter02-MeaningfulNames-Extra
npm install
npm run extra
```

---

#### Caption1-Overlading

- **오버로딩(Overloading)**: 두 개의 함수가 서로 같은 이름을 가지고 있을 때,  
  인자의 수, 자료형, 순서가 서로 다르게 정의한 경우

    ```java
    // Overloading Example
    public double computeArea(Circle c) { ... }
    public double computeArea(Circle c1, Circle C2) { ... }
    public double computeArea(Square s) { ... }
    public double computeArea(Triangle t) { ... }
    ```

- **오버라이딩(Overriding)**: 이미 정의된 상위 함수와 동일한 입출력을 가지도록  
  동일한 이름과 인자, 반환을 유지한 채, 함수의 내용(in body block scope)을 재정의하는 경우
  
  ```java
  // in Upper Class
  public double computeArea(Circle c) {
    // define
    // ++++++
  }
  
  // in Child Class
  @Override
  public double computeArea(Circle c) {
    // re-define
    // $$$$$$$$$
  }
  ```

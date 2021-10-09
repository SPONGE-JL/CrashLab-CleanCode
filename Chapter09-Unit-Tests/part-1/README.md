[Go to index](../#readme) / [Read in Wiki](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-09.-Unit-Tests-Part.1)

---

2021.09.31 (SAT) 10:20-12:00 (100mins)  
🚀 **Lead by. '[Jeongyeol](https://github.com/SPONGE-JL)'**

##### [Chapter 09. Unit Tests](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-09.-Unit-Tests)

# [Part.1](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-09.-Unit-Tests-Part.1) - Basic

실제 테스트 라이브러리나 그 기능을 일부 언급하지만 구현 기술이 중심이 아니니 걱정하지 말자 :)

<br>

## Section-A. 테스트 코드(test code)란 무엇인가?

사전에서 `test`는 '[질문이나 실험활동으로 알고 있거나 가능하거나 추측한 것을 확인하는 행위 또는 수단](https://dictionary.cambridge.org/ko/%EC%82%AC%EC%A0%84/%EC%98%81%EC%96%B4/test)'으로 정의한다.  

누구나 한번쯤은 "**작성된 코드를 테스트 해 봐야해**"라는 말을 들어 본 적 있을 것이다.  
이 말은 **개발된 코드로 수행되는 프로그램의 동작이 의도와 같은지 확인하라**는 것과 같다.

<h3>
  <img alt="warining-sign" width="15" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/304/warning_26a0-fe0f.png"/>
  왜 테스트 코드가 필요하다고 말하는 걸까?
</h3>
<details>
<summary><b>(당장 기능 개발할 시간도 없는데, 정말 필요한 걸까?)</b></summary><br>

> _1997년만 해도 TDD(Test Driven Development)라는 개념을 아무도 몰랐다._  
> _우리들 대다수에게 단위 테스트란, 자기 프로그램이 **돌아간다는 사실만 확인하는 일회성 코드**에 불과했다._  
> _클래스와 메서드를 공들여 구현한 후 임시 코드를 급조해 테스트를 수행했는데,_  
> _대개는 간단한 드라이버 프로그램을 구현해 자신이 짠 프로그램을 수동으로 실행했다._
>
> _(중략.. 실행된 테스트 코드가 종료되기까지의 과정 설명)_
>
> _그것이 내가 한 테스트였다!_  
> _돌아간다는 사실을 확인하고 동료들에게도 보여줬다._  
> _그러고 나서는 테스트 코드를 버렸다._

_<p align="right">CleanCode \<Robert C. Marti\> 9장. 단위 테스트 (도입부)</p>_

### A-1) 테스트 코드를 버렸다

**`버렸다`는 사실은 우리가 생각하는 것보다 영향을 주는 범위가 크다.**  
이런 경우(<del>타협하자는 속삭임</del>)를 예시로 들 수 있지 않을까?

1. `UI 테스트 시간이 촉박한 나머지, 데이터만 임시로 저장해두고 직접 입력해서 확인했다.`  
   **그리고 사용한 테스트 파일이 지금은 어디에 있는지 모르겠다.**

   ???: <del>배포해서 문제 없었고 지금도 잘 돌아가잖아. 뭐가 문젠데?</del>

2. `구현하는 동안 요건(Spec)이 계속 변경되어서 회의하면서 만들면서 여러번 고치고 로직을 확인했다.`  
   **그래서 테스트 코드 실행은 커녕 정의도 없이 개발이 완료되었다.**

   ???: <del>버그는 나오면 고치면 되는데 뭐 ㅋㅋㅋ 완벽한 코드 짜려하지마 시간 아까워~</del>

3. `테스트가 필요한 부분의 개발이 끝났고, 자꾸 변경이 일어나고 있어서`  
   **더이상 그 테스트 코드를 고민하지 않게 되었다.**

   ???: <del>경로, 이름 자꾸 바꾸게 기획 뒤집어엎는 저 XX 진짜 하..</del>

<br>

### A-2) Give & Take?

(자의든 타의든) 누구나 테스트 코드를 버린 경험은 누구나 있을 것이다. 기억을 떠올리며, 스스로에게 아래 질문을 던져보자.

<details>
<summary><b>❓ 코드 리뷰를 포함해 열심히 만든 비지니스 로직은 서비스 이용자의 만족도를 보장하는가?</b></summary>

#### 🙅 No! 그럴수 없다

UX를 고려한 프로그램이 코드 리뷰가 반드시 포함되어야하는 필요조건은 아니다.

`Code Review`란?  
본래는 작성된 코드의 상태를 타인이 추가로 보는 cross-check를 위하 시작되었다.
현재는 주로 주니어 개발자(Jr.Dev) 비중이 높은 팀에서 시니어 개발자(Sr.Dev)들이 중심이 되어 수행한다.  
개발 코드를 확인하고 팀의 전략과 지침을 공유해서 품질을 높이기 위한 의사 소통 수단 중 하나이고,
올바르지 못한 코드를 포함한 커밋을 합쳐져서 더 큰 문제를 야기하지 않도록 PR에서 특히 많이 활용된다.

따라서 비지니스 로직의 코드 품질은 프로그램이 UX와 안정성을 만족하도록 점차 쌓아가면서 완성하는 것이므로  
**코드 리뷰가 UX와 같은 서비스의 품질을 보장하지 못한다.**

> (참고) 프로그램 구현 외주 계약과 같은 갑을관계에서의 코드 검수와는 맥락이 다르다.  
> 을사에서 작성한 코드를 갑사가 제출받고 직접 검수(review)하거나 제3자가 수행하는 경우를 의미하는 것은 아니다.

<br>

</details>

<details>
<summary><b>❓ 테스트 코드 작성과 실행 확인에 시간을 소비하지 않았으므로, 개발 시간을 아낄 수 있었나?</b></summary>

#### 🤔  **Maybe..?**

> 개발팀은 약속된 마감일을 지켰고, 업무를 마치고 복귀했으니 시간을 아꼈다.

만약 방금 **그렇지 않나? 라는 생각이 들었다면,**한정된 기간에 대한 책임만을 생각했기 때문이리라.**  

모든 프로그램은 반복되는 동작에 장애나 버그 없이 계속된 사용이 가능할 때 생명을 가진다.  
즉, 프로젝트 기간이 끝나서 개발팀은 철수하더라도, 프로그램은 비지니스를 지탱해야한다.  

#### 🙅 No! 다시 답하자면

완벽한 프로그램이란 존재할 수 없다. 모든 코드는 잠재적으로 버그가 될 수 있다.

실험을 정교하고 다양하게 할수록 더 좋은 제품이 나온다는 것은 자명한 사실이다.  
(한가한 시간에 놀면서 만드는 창작활동이 아닌) 기업의 이윤 추구를 실행할 서비스를 개발하는 활동은  
**시간, 자원, 노력 등 비용**과 **제품의 품질** 사이에서 비지니스와 고객 신뢰를 성사시켜야 한다.

아래는 예시를 살표보자.  
많은 비용이 투자된 서비스가 레거시 코드(legacy)에서 악몽(nightmare)로 가는 과정을 축약했다.

> - **[구축 단계]** 🤭  
>   개발사가 착수하고 서비스 개시(launching)을 준비하고 있다.  
>
> - **[오픈 직전]** 🤔  
>   운영사가 함께 그간 개발된 내용을 인계 받고, Play book & Run book 등을 보고 운영 전략을 준비한다.  
>
> - **[오픈 직후]** 😩  
>   오픈 초창기 개발사가 관여하며 조속히 버그를 수정하고 배포해 안정화를 거친다.  
>
> - **[운영 단계]** 🤐  
>   안정화된 서비스의 코드를 보는 일은 적어지며 민원이 없으면 서버 로그만 보고 문서를 작성한다.  
>
> - **[보수 단계]** 😱  
>    어느 시점에 서비스의 변경이나 대응이 필요한 시점에 추적이 어렵고, 작은 변경으로 대규모 장애가 발생한다.

<br>

</details>

<details>
<summary><b>❓ 테스트 코드를 버린 결과는? (Give & Take)</b></summary><br>

😩 **이득 착각 뭉치**

- 개발 시간 절약 혹은 단축 **(했다고 착각)** : 보수가 어렵거나 장애 원인을 파악하기 어렵다면?
- 코드 품질을 높이기 위해 더 많은 시간으로 품질 확보 **(되었다고 착각)** : 어떻게 품질을 보증?

🤐 **혹시?**

`'내가 더 빨리 개발 하려면 테스트 코드를 버리는 선택이 합리적이다'` 라고 생각하는 사람이라면,  
수백, 수천개의 QA Check list를 만난 경험도 없을 것이다. 그렇기에 테스트 코드 생산은 여전히 낭비라고 생각한다.  
<del>어쩌면, 확인하지 못한 리스크는 그냥 안고 가는 도박사..?</del> (농담)

<br>

### A-3) 테스트 코드를 버렸다 = 코드의 품질과 추적을 포기한다

애자일이나 TDD, CI/CD의 목표는 우리 IT 분야의 눈부신 성장을 위한 방향에 찾은 방법들이다.  
이 방법들을 적용해서 **더 높은 수준의 개발 능력(developer's performance)을 갖추는 것은**  
**`자동화할 수 있는 테스트 코드를 만들고 동작 시킬 수 있는가`라는 지점에서 시작될 수 있다.**

_(안타깝지만)_ 테스트 통과는 '테스트 당시 커밋(commit)'에서 통과되었다는 사실에 불과하기 때문에,  
_(당연하게도)_ 변경된 다음 커밋(commit)에서는 이를 보장할 수 없다.  
그래서 우리는 테스트 코드를 작성하고 검수해서 자동으로 확인해주길 바라는 자동화를 꿈꾼다.  

> ???:  
> _"확인도 안해보고 배포했어? 도대체 뭘 개발하고 있는거냐?"_ <del>(인성..)</del>  

누구나 이런 말을 듣기 싫다.

_(다행히도)_ 이번 9장 단위테스트 챕터를 통해 TDD와 실습을 경험한다면,  
_**저런 사후 지적들은 '팀이 무능한 협업 시스템을 가졌다'는 반증**_ 이라는 사실을 이해하고  
아래와 같이 테스트 코드가 형상 관리에 포함되어야 한다는 점까지 이해하게 될 것이다.

> 테스트 케이스를 모두 구현하고 통과한 후 내 코드를 사용할 사람들에게도 공개할 때,  
> 태스트 코드와 내 코드를 같은 소스 패키지로 확실히 묶어서 체크인(checkin)해야한다.

**이어지는 섹션B에서 어떻게 테스트 기반 개발(TDD)로 구성하는지 사고 원리를 살펴보자.**

</details>

</details>
<br>

## Section-B. TDD Cycle

### B-1) TDD의 3가지 법칙

사실 TDD가 실제 코드를 작성하기 전에 단위 테스트 코그를 짜라고 요구한다.  
그것은 아래의 법칙에 따라 개발을 진행하도록 유도된 규칙이다.

- **첫째 법칙**  
  실패하는 단위 테스트를 작성할 때 까지, _실제 코드를 작성하지 않는다._

- **둘째 법칙**  
  컴파일은 통과하면서, 테스트 실행 결과가 실패하는 수준의 단위 테스트를 작성한다.

- **셋째 법칙**  
  현재 실패하는 테스트를 _통과할 정도로만_ 실제 코드를 작성한다.

(이쯤 되면 이런 의문을 가지는 사람도 있으리라.)  
_**테스트 코드까지 코드 작업을 더 많이 해야하는 데, 어떻게 생산성이 향상되는가?**_

**위 세 가지 규칙을 준수할 때, 개발과 테스트는 대략 30초 주기로 묶인다.**  
테스트 코드가 실제 코드보다 불과 몇초 전에 나와서, 주기의 끝에 테스트 코드와 실제 코드가 함께 나온다.

<br>

### B-2) 이런 생각도 해보자

<details>
<summary><b>Q. 처음 환경을 준비걸로 벅차서 30초는 넘던데..?</b></summary><br>

물론 프로젝트를 구축한 초창기나 단위 테스트를 처음 도입하는 시점에는  
테스트에 필요한 다양한 라이브러리를 구축하고 예제를 작성하는 일은 더 걸릴 수 있다.  
그러니 각 언어와 프레임워크 진영의 표준 테스트 라이브러리를 사용하고 공식 도큐먼트를 활용하자!

<br>

</details>

<details>
<summary><b>Q. 테스트 코드가 함께 나온다는 것이 왜 장점이 될까?</b></summary><br>

반대로 개발이 끝난 뒤에 테스트 코드를 작성하는 경우를 생각해보자.  
우리는 새로운 프로그램을 서비스로서 출시할 때, 이상이 없는지 확인을 한다.

- 우리가 개발한 프로그램을 검사할 때, 혹은 별도의 테스트 요원이 있는 경우까지 포함하더라도  
   _테스트 대상은 인지하고 있는 기능을 대상으로 한다._ (`know known things`)

   > **`know known`: 이해 가능한 범위에서 해결해야 한다는 사실을 인지한 영역**

- 안타깝게도, 시간이나 자원, 비용 등의 이유로 진행되지 못하는 현실적인 경우도 있다.  
   _인지했지만 확인되지 못했다는 사실을 이해하고, 장애위험 감수하는 것이다._

   > **`know unknown`: 확인하지 못했고 추후 해결해야 한다는 사실을 인지한 영역**

- 한편, 개발 기간동안 기획이나 설계, 팀원, 조직 등 변경도 많았고,  
   새로운 비지니스인 경우 대응 요구사항도 다양해질 뿐더러 점점더 복잡해져간다면,  
   우리 팀이 개발한 기능이 어떤 동작을 수행해야하는지 정확히 파악하지 못하는 상태에 이른다.  
   심지어 외부 협력업체와 연계된 API 혹은 모듈, 라이브러리까지, 이 모두는 _**블랙박스(Black-box)**_가 된다.  

   _보통의 경우 개발 담당자가 기능 구현에 대한 책임을 다했을 것이라 예상하므로,_  
   이 영역들은 인지 영역 밖에 위치하고, _문제가 발생하면 알 수 있는 영역이 된다._  

   > **`unknown known`: 이해했다고 판단하기에, 문제 발생 위험을 모르는 미지의 영역**

- 시간이 지나 새 버전으로 개선(upgrade)하거나 양립하기 어려운 새 구조로 변경(migration)하면  
   전혀 새로운 유형의 문제들이 발생하거나, 원인이나 이력을 알 수 없는 변경 지점들도 발생한다.  
   _끔찍하게도 이해하는 범위를 넘어서서 존재하는지도 몰랐던 잠재적인 버그들이다._: `unknown unknown` (모른다는 사실도 모르는 영역)

   > **`know unknown`: 우리가 모른다는 사실 조차도 모르는 미지의 영역**

```plaintext
물론, 저 영역들은 모두 애플리케이션 개발(application development)만 고려된 것은 아니다.
구축하는 패키지 내부의 문제일수도, 모듈이나 통신의 문제일수고 있고, 인프라스트럭처(Infrastructure)일 수도 있다.
비지니스 로직을 수행하는 서비스를 구성하는 영역 전반에 걸쳐서 잠재적 버그에 대한 고찰이라는 점을 이해하길 바란다.
```

#### 이쯤되면 분명 이런 생각이 들 것이다

> 아..
> 개발에 직접 관여한 당사자 외에 다른 사람이 개발한 내용까지 챙기고  
> 안전한 프로그램을 개발하고 운영하는 건 쉽지 않겠는데..?

이제 테스트 코드가 같이 나온다는 것이 정말 왜 장점이 되는지 이해하기 위해 `B-3`으로 넘어가자.

</details>

<br>

### B-3) 개발과 테스트, 그리고 코드(code)

[CleanCode 1장의 `코드는 요구사항을 표현하는 언어라는 사실을 이해하라`](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-01.-Clean-Code#%EC%BD%94%EB%93%9C%EB%8A%94-%EA%B3%84%EC%86%8D-%EC%A1%B4%EC%9E%AC%ED%95%98%EB%A6%AC%EB%9D%BC)
를 기억하는가?  
깨끗한 코드의 코드르 자체를 설명하는 제일 처음의 도입부에서 언급되는 이 책의 가장 중요한 내용 중 하나이다.

```yaml
테스트 코드도 마찬가지로 코드(code)라는 사실: 테스트 코드가 정의한 요구사항을 실제 코드가 기능으로서 보장해야만 한다는 의미이다.
```

#### 🔍 거시적으로 테스트 코드는

_장애가 나서 다시 코드를 복기하는 사후 처리를 제외하면_  
_**<u>코드를 작성하는 그 순간 만큼 해당 기능에 대해 이해도가 높은 순간은 없다.</u>**_  

결국, 이해도가 가장 높은 순간에 작성된 개발 코드와 테스트 코드는 함께 나온다는 것은  
**기능과 테스트의 명세가 함께 작성**되므로 **개발과 검증을 유기적으로 수행할 수 있게 된다.**

#### 🔍 추가적으로 테스트 코드는

**개발된 실제 코드를 전부 읽지 않고, <u>테스트 결과와 테스트 코드만 읽더라도</u>**  
팀원에게 해당 API를 사용하는 가장 올바른 방법을 소개하는 방법이 되기도 한다.  

이는 여러 개발자가 동시에 협업할 때 의사소통의 효율성을 높여주는 방법 중 하나가 되고,  
과거의 누군가의 사용방법을 현재의 독자가 보고 이해하는 소통이다.

<br>

## Section-C. Keep test code clean

> _일회용 테스트 코드를 짜오다가 새삼스레 **자동화된 단위 테스트 슈트를 짠다는 것은 쉽지 않다.**_  
> _둘 사이는 간극이 아주 크다._

_<p align="right">CleanCode \<Robert C. Marti\> 9장. 단위 테스트 (깨끗한 테스트 코드 유지하기)</p>_

<br>

### C-1) 테스트 코드를 깨끗하게

앞서 말한 테스트 코드 슈트 작성에 대한 난이도를 가장 빠르게 해결(_`되었다고 착각`_)하는 방법은  
테스트 코드와 실제 코드의 품질 기준을 다르게 적용하는 것이다.  
이른바 _'지저분해도 빨리'_ 동작을 확인만 하는 테스트 코드를 만드는 것이다.

변수 이름은 신경 쓸 필요 없어질테고, 테스트를 간결하게 서술적으로 작성할 필요도 없으며,  
테스트 코드를 설계하고 분리할 필요조차 없이 자유롭고 느슨한 테스트 코드와 함께 기능이 출시된다.  

<details>
<summary>❓ 정말 이렇게 적용해도 되는 걸까? 문제가 없을까?</summary>

#### 그럴리가

<details>
<summary>🤔 문제가 보이기 시작하다</summary>

#### 더러운 대상

_**'테스트를 안하느니 지저분한 코드라도 있는 편이 좋아서'**_ 만들었던 테스트 코드가  
과연 실제 코드의 변경을 따라가면서 유지보수를 함께 할 수 있을까?

(테스트 코드도 실제 코드와 마찬가지로) 복잡해질수록 변경이 어려운 것은 당연하다.  
테스트 코드가 지저분하면 실제 코드를 짜는 시간보다 기존 테스트 코드를 파악하고 고치고  
새로운 케이스를 추가하는 시간은 훨씬 더 걸리게 된다.  
_**결국, 지저분한 테스트 코드로 인해서 테스트 케이스를 통과시키는 것은 점점 더 어렵게 된다.**_

<br>

</details>

<details>
<summary>🤐 문제가 커지기 시작하다</summary>

#### 불만의 대상

_**점차 테스트 케이스는 개발자들 사이에서는 가장 큰 불만이 된다.**_  
관리자는 통과된 테스트 케이스의 설정값들이 왜 이렇게 크고 의미 없는지 지적하면,  
개발자는 테스트 케이스를 비난하게 된다. 모두가 테스트 케이스를 등지고 포기하게 된다.

테스트 슈트가 없어져서 일이 줄어든 것처럼 느껴진다. <de>(누군가는 안 맞는 신발을 벗은 느낌이라고도..)</del>
이제 개발자는 자신이 수정한 코드가 제대로 도는지 확인할 방법이 없으니 수정이 더이상 안전하다는 사실을 검증하지 못한다.  
_**결함율이 높아지기 시작한다.**_

<br>

</details>

<details>
<summary>😱 문제가 낳은 것들</summary>

#### 공포의 대상

의도하지 않은 결함수가 늘어자자 개발자는 변경을 주저한다.  
변경하면 개선으로 얻는 것보다 장애와 버그로 잃는 것이 더 많다고 생각하게 된다.  
_**더이상 코드를 고치지 않는다.**_

> **결국 비지니스에는 테스트 슈트도 없고 얼기설기 뒤섞인 코드와 좌절한 고객만 남는다._**
> <u>테스트에 쏟아 부은 노력이 허사였다는 실망감이 개발자에게 남는다.</u>_

#### 테스트 케이스가 있었다면

- 변경에 발생하는 문제를 미리 파악할 수 있다.
- 아키텍처가 부실하거나 설계가 모호하고 엉망이더라도 별다른 우려 없이 버그의 원인을 찾을 수 있다.
- 테스트 커버리지(Test coverage)가 높을 수록 공포는 점점 줄어든다.
  오히려 안심하고 아키텍처와 설계를 개선할 수 있다.

<br>

</details>

<details>
<summary>😩 문제의 원인은..?</summary>

#### 사라진 대상

테스트 코드를 깨끗하게 유지하지 않아서 포기하게 되었다.  
테스트 케이스가 없어서 실제 코드를 유연하게 만드는 버팀목을 잃었다.

_**테스트 케이스 없이 이루어지는 모든 변경은 잠정적인 버그이다.**_

#### 비약일까?

지저분한 코드를 경험해본 사람은 알 것이다. _보통은 한 곳만 지저분하지 않다._
재사용성과 역할, 경계, 자원, 효율성 모든 면이 부족하다.

(당연하게도) 테스트 코드가 지저분하면 실제 코드도 지저분해진다.  
결국 테스트코드도 잃어버리고 실제 코드도 망가진다.

<br>

</details>

<details>
<summary>🚀 결론적으로</summary>

#### 꿈이 된 대상

우리는 이 문제를 통시적으로 볼 일이 없었을지 모른다. 그러나 우리는 알 수 있다.  
[CleanCode 1장 깨끗한 코드 - '나쁜 코드로 치르는 대가'](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-01.-Clean-Code#%EB%82%98%EC%81%9C-%EC%BD%94%EB%93%9C%EB%A1%9C-%EC%B9%98%EB%A5%B4%EB%8A%94-%EB%8C%80%EA%B0%80)가 불러 일으킨 것이다.

놓아버린 테스트 코드에 ['원대한 재설계의 꿈'](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-01.-Clean-Code#%EC%9B%90%EB%8C%80%ED%95%9C-%EC%9E%AC%EC%84%A4%EA%B3%84%EC%9D%98-%EA%BF%88)을 또다시 꿀텐가?

#### 코드를 망가뜨리지고 싶지 않다면

_**<u>코드의 유연성, 유지보수성, 재사용성을 제공하는 버팀목인 테스트 케이스</u>를 깨끗하게 유지해야한다.**_

</details>

</details>

<br>

### C-2) 깨끗한 테스트 코드

<details>
<summary>✔️ 깨끗한 테스트 코드를 만드려면 다음 3가지가 필요하다</summary>

- _**가독성**_
- _**가독성**_
- _**가독성**_

오타가 아니다. 어쩌면 가독성은 실제 코드나 테스트 코드보다 훨씬 더 중요하다.  
이렇게 중요한 가독성은 어떻게 해야 높일 수 있을까?

여느 코드(code)와 같다. _**명료성, 단순성, 풍부한 표현력이 필요하다.**_

#### `CleanCode` 예제 참조

158 페이지의 `목록 9-1`에서 160 페이지의 `목록 9-2`로 과정은 아래와 같이 요약할 수 있다.

- 각 코드 라인을 메서드로 묶어서 테스트 코드를 **단순하게** 만들었다.
- 메서드의 이름을 이해하기 쉬운 이름을 붙여 **명료하게** 만들었다.
- 메서드가 **다양한 인자를 받아서** 재사용성을 높였고,  
  어떤 정보를 받아서 수행되는지를 **표현하도록** 개선했다.

기존에 있던 기능을 유지한 채 코드를 개선하는 것을 **`리팩터링(Refactoring)`**이라고 한다.  
이렇게 기존의 코드를 리팩터링하는 과정에 시간을 투자해서 **가독성**을 높였다.

</details>

<details>
<summary>❓ 그렇다면 깨끗한 테스트 코드로 무엇을 얻었을까?</summary><br>

**테스트 코드의 잡다하고 세세한 코드를 거의 없앴다는 사실에 주목하라.**

1. 테스트의 본질을 바로 표현하도록, 진짜 필요한 자료 유형과 함수만 사용한다.

1. 코드를 읽는 사람이 바로 읽을 수 있도록 쉽게 기술하고, 코드가 수행하는 기능을 재빨리 이해한다.

1. 세세한 코드가 없기 때문에 테스트 코드를 보는데 주눅들지 않기 때문에,  
   테스트 케이스를 보는 모두가 적극적으로 개입할 수 있도록 배려한다.

</details>

<br>

### C-3) [도메인 특화된 테스트 언어](https://www.jetbrains.com/ko-kr/mps/concepts/domain-specific-languages/#how-dsls-fit) 사용하기

앞서 봤던 `목록 9-2`와 같이, 누구나 읽을 수 있다는 것은 '도메인(domain)에 대한 이해'를 전제로 한다.  
여기서 말하는 도메인은 '테스트에 관련된 기능을 수행하는데 필요한 지식 영역'에 대한 부분을 의미한다.

> `도메인(domain)`이란, 영역이나 분야 전반을 지칭하는 단어로, IT에서는 DNS 시스템의 인터넷 주소를 의미하기도 한다.  
> 특히, MSA와 같은 영역에서는 비지니스를 지탱하는 중요개념을 '비지니스 도메인(business domain)'이라 지칭한다.

보통 시스템은 내부에 조작하는 세부 API를 조합하여 상위 API를 구성하고 함수와 유틸리티를 통해 동작하도록 설계한다.  
이런 설계로 구현된 상위 API의 함수나 유틸리티를 테스트 코드에서 대상이 되는 특수한 API가 된다.  
즉, 테스트를 구현하는 당사자와 테스트 코드를 보는 독자를 도와주는 것이 **도메인에 집중하는 테스트 언이**이다.

처음부터 특수 API를 설계해서 시작하지 않는다. <del>(하기도 힘들다.)</del>  
계속되는 리팩터링을 통해 개선하고 풍부하게 표현하도록 발전시키는 것이다.

> 인텔리제이(IntelliJ)와 코틀린(Kotlin)으로 유명한 JetBrain 사의 MPS는 이 DSL을 위하 고안된 IDE이다.  
> (상용툴이니 아래 소개를 통해 존재여부 정도는 알아두자.)
>
> ![jetbrain-mps-intro](https://img.youtube.com/vi/9JipsZTclsw/maxresdefault.jpg)(<https://www.youtube.com/watch?v=9JipsZTclsw>)

<br>

### C-4) 이중 표준

앞서 테스트를 포기하게된 팀은 어떤면에서는 올바른 판단을 내린 점도 존재한다.  
테스트 API에 적용하는 표준은 실제 코드에 적용하는 표준과 확실히 다르다.  
**단순하고, 간결하고, 표현력이 풍부해야 하지만, 실제 코드만큼 효율적일 필요는 없다.**  

> 물론 테스트 종류가 많고 다양해지면, 테스트 성능도 효율성을 찾아야 한다.
> 그러나 이 문장의 의도는 `그래도 실제 코드보다는 효율성을 추구하진 않는다` 라는 뉘앙스이다.

162 페이지의 `목록 9-3`에서 `목록 9-4`, `목록 9-5`로 리펙터링된 변화를 보자.

- 기존 테스트 코드는 효율성을 의식한 나머지 하나의 테스트 케이스에 모든 내용이 담겨져 있다.  
  안타깝지만 테스트가 하는 일이 한 눈에 들어오지 않는다.

- 리팩터링된 **테스트 케이스를 분리해서 실행한 탓에 효율성은 떨어졌을지라도, 덕분에 테스트 내용이 명료해졌다.**  
  (오히려 테스트 코드를 읽는 과정이 사뭇 재밌기도 하다.)  
  테스트 케이스가 **이해하기 너무나 쉽다는** 사실이 분명히 드러나기 때문이다.

- 구동되는 프로그램은 일반적으로 한정된 자원을 공급 받아서 동작한다.  
  그러나 테스트 환경은 검증을 위해서라도 자원에 대한 제약이 없거나 상대적으로 약할 가능성이 높다.

- CPU 효율성과 메모리 관리 등은 실제 환경에서는 절대로 발생해선 안되지만,  
  테스트 환경에서만큼은 전혀 문제 없는 방식이다.  
  (오히려 테스트 자원을 더 투여해서 빠른 결과로 결정을 하는 경우도 존재한다.)

즉, **코드의 깨끗함과 이중 표준은 서로 <u>철저히</u> 무관하다**  
실제 코드와 테스트 코드의 품질이 다르더라도, 코드의 깨끗한 품질이 저해하는 이유가 될 수 없다.

<br>

## Section-D. Concentration-point on each test case

<br>

### D-1) 테스트 케이스에 '단 하나만' 있어야 하는 것?

테스트 코드 작성시 [테스트 케이스에 assert 문을 단 하나만 사용해야 한다고 주장하는 학파](https://www.artima.com/weblogs/viewpost.jsp?thread=35578)가 있다.  
가혹한 규칙이지만, 확실한 장점이 있다.  
하나의 함수에 하나의 assert 문이 하나의 결론으로 정의한 덕분에 코드를 이해하기 쉽고 빠르게 동작한다.  
그러나 불행하게도, 테스트를 분리하면 중복되는 코드가 많아져서 테스트 슈트가 비대해진다.

물론, Template Method Pattern을 사용하면 중복은 제거할 수 있고,  
`@Before`와 같이 모든 `@Test` 전에 동작하도록 중복을 선언할 수도 있지만 여전히 슈트는 비대하다

따라서, 테스트 케이스는 하나의 assert 문으로 정의된 하나의 결론에 집중하기 보다  
**하나의 개념에 집중**해서 **최대한 assert 문을 줄이고 간결하게 정의**하는 것이 바람직하다.

<br>

### D-2) F.I.R.S.T

깨끗한 테스트는 다음 다섯 가지 규칙을 따르게 되는데, 이니셜을 모으면 FIRST가 된다.

- _**`F`** (fast)_  
  빨라야한다. 빨라야 자주 확인한다.  
  느리면 마음껏 정리하지 못하므로 코드 품질이 떨어지기 시작한다.

- _**`I`** (independent)_  
  테스트는 서로 의존해선 안된다. 하나의 테스트가 다음 테스트 실행 환경을 준비해서도 관여해서도 안된다.  
  테스트가 의존하면 하나의 실패가 연쇄되므로 원인 진단이 어려워 지고 결함이 숨어든다.

- _**`R`** (repeatable)_  
  어떤 환경에서든 반복적으로 동작할 수 있도록 구성해야 한다.  
  테스트가 돌아가지 않는 환경이라서 테스트를 실패했다는 변명이 생긴다.  
  환경이 지원되지 않는 경우 테스트를 수행할 수 없고 검증 결과를 확인할 수 없다.

- _**`S`** (self-validating)_  
  테스트 결과는 반드시 Boolean 값으로 반환해야만 한다.  
  통과 여부를 알리려고 로그 파일을 읽게 만들어서도 안된다. 파일을 읽어 결과를 비교하도록 해서도 안된다.  
  통과/실패 2가지로만 가늠하지 않고 주관이 개입되면 수작업 평가로 이어진다. _<del>(벌써부터 지루하다)</del>_

- _**`T`**_ (timeply)  
  테스트는 적시에 작성하고 동작해야 한다.  
  단위 테스트는 테스트 하려는 실제 코드를 구현하기 직전에 구현해야 하고,  
  실패하는 코드를 성공으로 만들기 위한 개발을 수행 반복되도록 적절한 시점에 반복해야 한다.

<br>

## Section-E. Conclusion

사실 본질적인 TDD는 다루지 않았다. 테스트 코드가 필요한 이유를 이해하고 테스트를 겉핥기로 훑었다.  
실제로 깨끗한 테스트는 별도의 책으로 다뤄도 될 만큼 심도있는 주제이다.  
실제 코드만큼 테스트 코드도 중요하고, 반복적으로 프로젝트 건강에도 영향을 미친다.

> 분명 처음 테스트 코드를 짜고, DSL에 특화된 테스트 API를 고민하고 구축하는 것은 대단히 힘들다.  
> 그러나 간결하게 정리하고 반복될 때 마다 그만큼 테스트 코드를 작성하기 쉬워진다.
>
> 반면, TDD를 도입하는 장점에서 이러한 시간과 노력을 감수하지 못하면  
>어설픈 테스트 코드와 함께 방치하게 되고 결국 프로젝트의 실제 코드는 망가지게 된다.

**테스트 코드도 깨끗하게 유지하자.**

<br>

### TDD, 고려해야하는 것들, (어쩌면 단점)

1. **러닝 커브 (Learning curve)**  
   각 언어와 프레임워크에서는 효율적인 테스트를 위해 TDD를 위한 표준 테스트 도구를 권장한다.  
   개발자 각자는 테스트 도구 혹은 언어적인 여건에 따라서, 설정과 사용법을 익히기 위한 학습 과정이 수반된다.

1. **램프업 (Ramp-up)**  
   언뜻 보기에는 러닝 커브와 유사해보이지만, TDD를 위한 램프업은 팀 차원에서 아래 2가지를 모두 포함한다.

   - 비지니스 도메인 및 서비스 로직 이해 후, 테스트 코드 작성할 수 있는 수준으로의 램프업
   - 협업을 위해

1. **전반적인 개발자 숙련도 (Developer's Performance)**  
   테스트를 통해서 코드 품질이 올라가는 만큼, 개발자의 숙련도가 올라가야 한다는 의미이다.

   - (투자자 입장에서 요구사항 개발에 진척이 없어보이니) 가성비를 고려한 테스트 도구의 선택과 그 범위, 깊이 선택
   - 테스트와 자체에 집중하기 위해 `setting-less`를 위한 리드 개발자들의 노력, 내부 공유, 그리고 관리

1. **테스트 자동화가 불가능한 영역도 있다.**  
   도메인 혹은 언어, 환경이나 여건에 따라서 모든 상황을 상정하고 테스트할 수 없기도 하다.  

   가령, 멀티 스레드 환경에서 동시성에 연관되어 간헐적으로 발생하는 메모리 누수나 치명적인 버그에 관련된 테스트는  
   왠만한 노력과 시간, 그리고 경험치를 가진 사람이 모여서 집중할 수 있는 투자력을 가진 팀이 아니라면  
   현실적으로 재현 자체가 어렵거나 자동화된 루틴을 만들도록 선택하기 어려운 부분도 있다.

---

[Go to Part 2](../part-2#readme) / [Read in Wiki](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-09.-Unit-Tests-Part.2)
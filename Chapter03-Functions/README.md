[Read in Wiki](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-01.-Clean-Code)

---

2021.07.31 (SAT) 10:20-12:00 (100mins)  
๐ **Lead by. '[YongSik](https://github.com/youngsikwon)'**

> ## 3. ํจ์
----
### ์๊ฒ ๋ง๋ค์ด๋ผ!!

ํจ์๋ฅผ ๋ง๋๋ ์ฒซ์งธ ๊ท์น์ '์๊ฒ!'๋ค. ํจ์๋ฅผ ๋ง๋๋ ๋์งธ ๊ท์น์ '๋ ์๊ฒ'๋ค.

"ํจ์๊ฐ ์์์๋ก ๋ ์ข๋ค๋ ์ฆ๊ฑฐ๋ ์๋ฃ๋ฅผ ์ ์ํ๊ธฐ๋ ์ด๋ ต๋ค. ํ์ง๋ง ๋๋ ์ง๋ 40์ฌ๋ ๋์ ์จ๊ฐ ํฌ๊ธฐ๋ก ํจ์๋ฅผ ๊ตฌํํด ๋ดค๋ค." p42

100์ค์์ 300์ค์ ๋ฌํ๋ ํจ์๋ ๋ง์ด ์งฐ์ผ๋ฉฐ, ์ง๊ธ๊น์ง ๊ฒฝํ์ ๋ฐํ์ผ๋ก ๊ทธ๋ฆฌ๊ณ  ์ค๋ ์ํ์ฐฉ์ค๋ฅผ ๋ฐํ์ผ๋ก ๋๋ ์์ ํจ์๊ฐ ์ข๋ค๊ณ  ํ์ ํ๋ค!

๊ทธ ์ด์ !
"์ผํธ๊ฐ ์ฝ๋๋ฅผ ๋ณด์ฌ์คฌ์ ๋ ๋๋ ํจ์๊ฐ ์์ ๋๋๋ค!"

[kent](./image/kent.png)
K.Beck
- ์ํํธ์จ์ด ๋ฐฉ๋ฒ๋ก 
  - ์ต์คํธ๋ฆผ ํ๋ก๊ทธ๋๋ฐ
  - ์ ์์ผ ์ํํธ์จ์ด ๊ฐ๋ฐ
  - ์ ์์ผ ์ ์ธ๋ฌธ
  - TDD ์ฐฝ์์(?)
  
์ผํธ๋ฐฑ์ด ๋ง๋  ์๋ฐ/์ค์ ํ๋ก๊ทธ๋จ ์ค ๋๋๊ฒ๋ ๋ชจ๋  ํจ์๊ฐ 2์ค, 3์ค, 4์ค ์ ๋ ์๋ค.p43

## ๋ธ๋ก๊ณผ ๋ค์ฌ์ฐ๊ธฐ

```javascript
if๋ฌธ / else๋ฌธ / while๋ฌธ ๋ฑ์ ๋ค์ด๊ฐ๋ ๋ธ๋ก์ ํ์ค์ด์ด์ผ ํ๋ฉฐ, ๋๊ฒ ๊ฑฐ๊ธฐ์ ํจ์๋ฅผ ํธ์ถํ๋ค. 
๊ทธ๋ฌ๋ฉด ๋ฐ๊นฅ์ ๊ฐ์ธ๋ ํจ์๊ฐ ์์์ง ๋ฟ ์๋๋ผ ๋ธ๋ก ์์์ ํธ์ถํ๋ ํจ์ ์ด๋ฆ์ ์ ์ ํ ์ง๋๋ค๋ฉด, ์ฝ๋๋ฅผ ์ดํดํ๊ณ  ์ฌ์์ง๋ค.

fact_1 : ์ค์ฒฉ ๊ตฌ์กฐ๊ฐ ์๊ธธ๋งํผ ํจ์๊ฐ ์ปค์ ธ์๋ ์๋๋ค.

fact_2 : ํจ์์์ ๋ค์ฌ์ฐ๊ธฐ ์์ค์ 1๋จ์ด๋ 2๋จ์ ๋์ด์๋ฉด ์๋๋ค.

<h3>๋ค์ฌ์ฐ๊ธฐ ์์ </h3>

//1. ์ผ๋ฐ์ ์ธ ํ๊ธฐ๋ฒ

if(true){
  consloe.log("hi");
}else{
  console.log("bye");
}

// 2. ์ค๊ดํธ๋ฅผ ์๋ตํ ํ๊ธฐ๋ฒ (๋ค์ฌ์ฐ๊ธฐ x)
if(true) console.log("hi");
else console.log("bye");

//3. ์ค๊ดํธ๋ฅผ ํ๊ธฐ๋ฒ (๋ค์ฌ์ฐ๊ธฐ o)
if(true)
        console.log("hi");
else
        console.log("bye");


//์ผํญ์ฐ์ฐ์ ํ๊ฐ๋ฒ
(true) ? console.log("hi") : console.log("bye");

```
### ํ ๊ฐ์ง๋ง ํด๋ผ!
>"ํจ์๋ ํ ๊ฐ์ง๋ฅผ ํด์ผ ํ๋ค. ๊ทธ ํ ๊ฐ์ง๋ฅผ ์ ํด์ผ ํ๋ค. ๊ทธ ํ ๊ฐ์ง๋ฅผ ํด์ผ ํ๋ค."

__์ํํธ์จ์ด ์์ง๋์ด๋ง์์ ๊ฐ์ฅ ์ค์ํ ๊ท์น!..__ 

ํจ์๊ฐ 1๊ฐ ์ด์์ ํ๋์ ํ๋ค๋ฉด ์์ฑํ๋ ๊ฒ๋, ํ์คํธํ๋ ๊ฒ๋, ์ดํด ํ๋ ๊ฒ๋ ์ด๋ ค์์ง๋ค.

๋ด ์์ ์ด ํ๋์ ํจ์์ ํ๋์ ํ๋์ ์ ์ํ๋ ๊ฒ์ด ๊ฐ๋ฅํด์ง๋ค๋ฉด ํจ์๋ ์ข ๋ ๊ณ ์น๊ธฐ ์ฌ์์ง๊ณ  ์ฝ๋๋ค์ ์ฝ๊ธฐ ์ฌ์์ง ๊ฒ์ด๋ค. ๋ง์ ์์น๋ค ์ค ์ด๊ฒ๋ง ์์๊ฐ๋ค ํ๋๋ผ๋ ๋น์ ์ ๋ง์ ๊ฐ๋ฐ์๋ค์ ์์ค ์ ์์ต๋๋ค.(CleanCode JS.Version)

```javascript
//bad
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client); //client --> DB์ฐพ๊ณ 
    if (clientRecord.isActive()) { // User๊ฐ activeํ ์ ์ ๋ผ๋ฉด ์ด๋ฉ์ผ ๋ณด๋
      email(client);
    }
  });
  //ํ ๊ฐ์ง์ ํจ์์์ DB, ์ ์ ๋ ์ฐพ๊ณ , ๋ฉ์ผ๋ ๋ณด๋...
  // ์ด๋ ๊ฒ ๋ณธ๋ค๋ฉด ์ ์ด์ผ๊ธฐ ํ๋ ํจ์๋ ํ๋์ ํ๋๋ง ํด์ผ ํ๋ค ๋ผ๋ ์์นํ๋ ๊ฒ์ ์ ์ ์๋ค.
}
```
```javascript
//Good
function emailClients(clients) {
  clients
    .filter(isClientActive)
    .forEach(email); //์ ์ 
}

function isClientActive(client){
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```

### ํจ์๋น ์ถ์ํ ์์ค์ ํ๋๋ก


```Javascript
ํจ์ ๋ด์ ์ถ์ํ ์์ค์ด ์์ด๋ฉด ํน์  ํํ์ด ๊ทผ๋ณธ ๊ฐ๋์ธ์ง ์ธ๋ถ์ฌํญ์ธ์ง ๊ตฌ๋ถํ๊ธฐ ์ด๋ ต๋ค.

//๋ด๋ ค๊ฐ๊ธฐ ๊ท์น
์์์ ์๋๋ก ์ด์ผ๊ธฐ์ฒ๋ผ ์ฝํ์ผ ์ข๋ค.
ํจ์ ์ถ์ํ ์์ค์ด ํ ๋ฒ์ ํ ๋จ๊ณ์ ๋ฎ์์ง๋ค.
```
## Switch ๋ฌธ

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
  ํด
}
```
- ํจ์๊ฐ ๊ธธ๋ค.
- <em>ํ ๊ฐ์ง</em>, ์์๋ง ์ํ ํ์ง ์๋๋ค.
- SRP(Single Responsibility Principle : ๋จ์ผ ์ฑ์ ์์น // ํ ํด๋์ค๋ ํ๋์ ์ฑ์๋ง ๊ฐ์ ธ์ผ ํ๋ค. __(๋ก๋ฒํธ ๋งํด)__ `์ฝ๋๋ฅผ ๋ณ๊ฒฝํ  ์ด์ ๊ฐ ์ฌ๋ฟ์ด๊ธฐ ๋๋ฌธ`)
- OCP(Open Closed Principle : ๊ฐ๋ฐฉ-ํ์ ์์น // "์ํํธ์จ์ด ์์๋ ํ์ฅ์๋ ์ด๋ ค ์์ผ๋ ๋ณ๊ฒฝ์๋ ๋ซํ ์์ด์ผ ํ๋ค." )๋ฅผ ์๋ฐํ๋ค.(`์ ์ง์ ์ ํ์ ์ถ๊ฐํ  ๋๋ง๋ค ์ฝ๋๋ฅผ ๋ณ๊ฒฝํด์ผ ํจ.`)

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
- ์ด ํจ์๋ฅผ ํธ์ถํ์ฌ ์ฌ๋ฐ๋ฅธ ์ ํ์ ์ง์์ ์ป์ ๋ค์ ์ํ๋ ์์์ ์ํํ  ์ ์๋ค.
- ์๋ก ๋ค๋ฅธ ์์์ ์ํํ๋ ๋์ผํ switch๋ฌธ ์ผ์ด์ค๋ก ์ฌ๋ฌ ๊ธฐ๋ฅ์ ์ฌ์ฉํ๋ ๊ฒ๋ณด๋ค ํจ์ฌ ๋น ๋ฆ.


## ์์ ์ ์ธ ์ด๋ฆ์ ์ฌ์ฉํ๋ผ!

```
"์ฝ๋๋ฅผ ์ฝ์ผ๋ฉด์ ์ง์ํ๋ ๊ธฐ๋ฅ์ ๊ฐ ๋ฃจํด์ด ๊ทธ๋๋ก ์ํํ๋ค๋ฉด ๊บ ๋ํ ์ฝ๋๋ผ ๋ถ๋ฌ๋ ๋๊ฒ ๋ค" (p.49)
-  ํจ์๊ฐ ์๊ณ  ๋จ์ ํด์ผ ํ๊ณ , ์ฌ์ฉ ํ๊ณ ์ ํ๋ ํจ์ ์ด๋ฆ์ ์ ํํ ํด์ผ ํ๋ค. ๋ง์น`getEmployeeObjectByType` ์ด ์ด๋ฆ์ฒ๋ผ...? 
```

## ํจ์ ์ธ์

```
ํจ์ ์ธ์๋ ์ ์์๋ก ์ข๋ค!๐ฅ
์ธ์๊ฐ ๋ง์ ์๋ก ๊ฐ๋์ ์ดํดํ๊ธฐ ์ด๋ ต๊ฒ ๋ง๋ ๋ค๋ ์ด์ ์ด๋ค. 
๋๋ถ์ด ์ธ์๊ฐ ์ ์์๋ก `ํ์คํธ`ํ๊ธฐ ์ฌ์์ง๋ค.
๐ Why! ์ธ์๊ฐ 3๊ฐ ๋์ด๊ฐ๋ฉด ์ธ์๋ง๋ค ์ ํจํ ๊ฐ์ผ๋ก ๋ชจ๋  ์กฐํฉ์ ๊ตฌ์ฑํด ํ์คํธ ํ๊ธฐ๊ฐ ์๋นํ ๋ถ๋ด์ค๋ฌ์์ง๋ค.
```


## ํ๋๊ทธ ์ธ์

```
๐
::ํ๋๊ทธ ์ธ์๋ ํจ์์ boolean ๋ฑ ํจ๊ป ๋๊ฒจ์ ๋ก์ง์ ๋ถ๊ธฐํ๋ ๋ฐฉ๋ฒ::
- ํ๋๊ทธ ์ธ์๋ฅผ ์ฌ์ฉํ๋ฉด, ํธ์ถํ  ์ ์๋ ํจ์๋ค์ด ๋ฌด์์ด๊ณ  ์ด๋ป๊ฒ ํธ์ถ ํด์ผ ํ๋์ง๋ฅผ ์ดํดํ๊ธฐ ์ด๋ ค์์ง๋ค.
- ํจ์๋ค์ ๊ธฐ๋ฅ ์ฐจ์ด๊ฐ ์ ๋๋ฌ๋์ง ์๋๋ค.
```


## ์ดํญ ํจ์

```
์ธ์๊ฐ 2๊ฐ์ธ ํจ์๋ ๋จํญ ํจ์๋ณด๋ค ์ดํด ํ๊ธฐ ์ด๋ ต๋ค. 
- ์ดํญ ํจ์๊ฐ ๋ฌด์กฐ๊ฑด ๋์๋ค๋ ๊ฒ์ ์๋๋ค. ๋ถ๊ฐํผํ ๊ฒฝ์ฐ๋ ์๊ธฐ๊ธฐ ๋๋ฌธ์ด๋ค. ํ์ง๋ง, ์ดํญ ํจ์๊ฐ ๋ดํฌํ๋ ์ ์ฌ์  ์ํ์ ์ธ์ํ๊ณ  ๋๋๋ก์ด๋ฉด ๋จํญ ํจ์๋ก ๋ฐ๊ฟ ์ธ ์ ์์ด์ผ ํ๋ค.
```

## ์ผํญ ์ธ์

```
์ผํญ ํ์๋ ๋ ์ดํดํ๊ธฐ ์ด๋ ค์ฐ๋ฉฐ, ๐{๋นํฉ} ->  ๐{์ฃผ์ถค} -> ๐ฑ{๋ฌด์}๋ก ์ผ๊ธฐ ๋๋ ๋ฌธ์ ๊ฐ 2๋ฐฐ ์ด์ ๋์ด๋๊ธฐ์ ์ผํญ ํจ์๋ฅผ ๋ง๋ค๋ ์ ์คํ ๊ณ ๋ คํ๋๊ฒ ์ข๋ค.
```


## ๋์ฌ์ ํค์๋

```javascript
ํจ์์ ์๋๋ ์ธ์์ ์์์ ์๋๋ฅผ ์ ๋๋ก ํํํ๊ธฐ ์ํด์๋ ์ข์ ํจ์์ด๋ฆ์ด ํ์์ด๋ค.

showMessage(..)     // ๋ฉ์์ง๋ฅผ ๋ณด์ฌ์ค
getAge(..)          // ๋์ด๋ฅผ ๋ํ๋ด๋ ๊ฐ์ ์ป๊ณ  ๊ทธ ๊ฐ์ ๋ฐํํจ
calcSum(..)         // ํฉ๊ณ๋ฅผ ๊ณ์ฐํ๊ณ  ๊ทธ ๊ฒฐ๊ณผ๋ฅผ ๋ฐํํจ
createForm(..)      // form์ ์์ฑํ๊ณ  ๋ง๋ค์ด์ง form์ ๋ฐํํจ
checkPermission(..) // ์น์ธ ์ฌ๋ถ๋ฅผ ํ์ธํ๊ณ  true๋ false๋ฅผ ๋ฐํํจ
```

## ๋ถ์ ํจ๊ณผ(side Effects)๋ฅผ ์ผ์ผํค์ง ๋ง๋ผ!

ํจ์์ ๊ฒฐ๊ณผ๊ฐ์ ๋ฐํํ๋ ๊ฒ ์ด์ธ์ ๋ค๋ฅธ ์ผ์ ํ  ๋ ๊ทธ ํจ์๋ ๋ถ์ ํจ๊ณผ๋ฅผ ๊ฐ์ง๋ค๊ณ  ๋งํจ.
ex)
```javascript
let externalVariable = 1;

function func() {
  externalVariable = 2;
}
```

## ์ถ๋ ฅ ์ธ์

```
์ธ์๋ฅผ ์ ๋ฌํ  ๋๋ ๋ณดํต ์๋ ฅ์ผ๋ก ๊ฐ์ฃผํ๋ค. ์๋ ฅ์ ์ํ๋ฅผ ๋ณ๊ฒฝํ๋ ๊ฒ์ ์ถ๋ ฅ์ธ์๋ผ ํ๊ณ , ์ด๋ ์ต๋ํ ํผํด์ผ ํ๋ค. 
```

## ๋ช๋ น๊ณผ ์กฐํ๋ฅผ ๋ถ๋ฆฌํ๋ผ
ํจ์๋ ๋ฌด์ธ๊ฐ๋ฅผ ์ํํ๊ฑฐ๋ ๋ตํ๊ฑฐ๋ ๋ ์ค ํ๋๋ง ํด์ผ ํ๋ค. ์ด ๋ฌธ์ ๋ฅผ ํ๊บผ๋ฒ์ ํผ๋์ ์ด๋ ํ๋ค.


```java

public boolean set(String attribute, String value);
// ์ด๋ฆ์ด attribute์ธ ์์ฑ์ ์ฐพ์ ๊ฐ์ value๋ก ์ค์  ํ ํ boolean ๊ฐ์ผ๋ก ๋ฐํ
//bad
if(set('username', 'youngsik')) {}

//Good
if(attributeExists('username')){
  setAttribute('username', 'youngsik');
}
```

## ์ค๋ฅ์ฝ๋ ๋ณด๋ค๋ ์์ธ๋ฅผ ์ฌ์ฉํ๋ผ.

```
์ค๋ฅ์ฝ๋๋ฅผ ๋ฐํํ๋ ๋ฐฉ์์ ๋ช๋ น/์กฐํ ๋ถ๋ฆฌ ๊ท์น์ ๋ฏธ๋ฌํ๊ฒ ์๋ฐํ๊ฒ ๋๋ค.
if๋ฌธ์์ ๋ช๋ น์ ํํ์์ผ๋ก ์ฌ์ฉํ๊ธฐ ์ฌ์ดํ์ด๋ค. 
์ค๋ฅ ์ฝ๋ ๋์ ์ ์์ธ ์ฒ๋ฆฌ ์ฝ๋๋ฅผ ์ฌ์ฉํ๋ฉด ์ค๋ฅ์ ์ฒ๋ฆฌ์ฝ๋๊ฐ ์๋ ์ฝ๋์์ ๋ถ๋ฆฌ๋์ ์ฝ๋๊ฐ ๊น๋ํด์ง๋ค.
```

```javascript
// ์ฒซ ๋ฒ์งธ
const myError = new Error(โplease improve your codeโ)
console.log(myError.message) // please improve your code
```
> ๋จ์ํ ์๋ฌ๋ง์ ํ์ธ ํ์ง ๋ง ๊ฒ. 
> 
> ๊ทธ ์๋ฌ๊ฐ ํด๊ฒฐ๋๊ฑฐ๋ ๋์ ํ  ์ ์๊ฒ ๋๋ ๊ฒ์ ์๋๋ค.
> `console.log` ๋ฅผ ํตํด ์ฝ์์ ๋ก๊ทธ๋ฅผ ๊ธฐ๋ก ํ๋ ๊ฒ์ ์๋ฌ ๋ก๊ทธ๋ฅผ ์์ด ๋ฒ๋ฆฌ๊ธฐ ์ฝ๊ธฐ ๋๋ฌธ.
> 
> `try/catch`๋ก ์ด๋ค ์ฝ๋๋ฅผ ๊ฐ์๋ค๋ฉด ๊ทธ๊ฑด ๋น์ ์ด ๊ทธ ์ฝ๋์ ์ด๋ค ์๋ฌ๊ฐ ๋  ์ง๋ ๋ชจ๋ฅด๊ธฐ ๋๋ฌธ์
> ๊ฐ์ผ ๊ฒ์ด๋ฏ๋ก ๊ทธ์ ๋ํ ์๊ฐ์ ๊ฐ์ง๊ณ  ์์ด์ผ ํ๋ค.


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
  // ์ฒซ๋ฒ์งธ ๋ฐฉ๋ฒ์ console.error๋ฅผ ์ด์ฉํ๋ ๊ฒ์๋๋ค. ์ด๊ฑด console.log๋ณด๋ค ์กฐ๊ธ ๋ ์์์ฑ๊ธฐ ์ฝ์ต๋๋ค.
  console.error(error);
  // ๋ค๋ฅธ ๋ฐฉ๋ฒ์ ์ ์ ์๊ฒ ์๋ฆฌ๋ ๋ฐฉ๋ฒ์๋๋ค.
  notifyUserOfError(error);
  // ๋ ๋ค๋ฅธ ๋ฐฉ๋ฒ์ ์๋น์ค ์์ฒด์ ์๋ฌ๋ฅผ ๊ธฐ๋กํ๋ ๋ฐฉ๋ฒ์๋๋ค.
  reportErrorToService(error);
  // ํน์ ๊ทธ ์ด๋ค ๋ฐฉ๋ฒ์ด ๋  ์ ์์ต๋๋ค.
}
```

## ๐  ๋ฐ๋ณต ํ์ง ๋ง๋ผ

> "์ด์ฉ๋ฉด ์ค๋ณต์ ์ํํธ์จ์ด์์ ๋ชจ๋  ์์ ๊ทผ์์ด๋ค." (p.60)

```
- ์ฝ๋ ๊ธธ์ด๊ฐ ๋์ด๋๋ค.
- ์๊ณ ๋ฆฌ์ฆ์ด ๋ณํ๋ฉด ์ค๋ณต๋ ์ฝ๋ ๋ชจ๋ ์์  ํด์ผ ํ๋ค.
- ์ค๋ฅ๊ฐ ๋ฐ์ํ  ํ๋ฅ ๋ ๋ช ๋ฐฐ๋ก ๋๋ค.
```
## โ ๊ตฌ์กฐ์  ํ๋ก๊ทธ๋๋ฐ

```
- ๋ชจ๋  ํจ์์ ํจ์ ๋ด ๋ชจ๋  ๋ธ๋ก์ ์๊ตฌ์ ์ถ๊ตฌ๊ฐ ํ๋๋ง ์กด์ฌํด์ผ ํ๋ค.
- ํจ์๊ฐ ํด ์๋ก ๊ตฌ์กฐ์   ํ๋ก๊ทธ๋๋ฐ์ ๋ชฉํ์ ๊ท์ธ์ด ํจ๊ณผ์ ์ด๋ค.
```

## โ  ํจ์๋ ์ด๋ป๊ฒ ์ง์ฃ ?
```
 :: ์ํํธ์จ์ด๋ฅผ ์ง๋ ํ์๋ ์ฌ๋ ๊ธ์ง๊ธฐ์ ๋น์ทํ๋ค.
  1) ์ฒ์์ ํจ์๋ฅผ ์งค๋์ ์ ํ
    (1) ๊ธธ๊ณ  ๋ณต์กํจ.
    (2) ๋ค์ฌ์ฐ๊ธฐ ์ฐ๊ธฐ ๋จ๊ณ์๋ ๋ง์ ์ค๋ณต๋ ๋ฃจํ๊ฐ ๋ง๋ค
    (3) ์ธ์ ๋ชฉ๋ก๋ ์์ฃผ ๋ง๋ค
    (4) ์ด๋ฆ์ ์ฆํฅ์ ์ด๊ณ  ์ฝ๋๋ ์ค๋ณต๋๋ค.

 ํ์ง๋ง!! ์ํฌ๋ฅธ ์ฝ๋๋ฅผ ๋น ์ง ์์ด ํ์คํธํ๋ ๋จ์ ํ์คํธ ์ผ์ด์ค๋ฅผ ๋ง๋ ๋ค!
 ๊ทธ๋ฐ ๋ค์ -> ์ฝ๋๋ฅผ ๋ค๋ฌ๊ณ  -> ํจ์๋ฅผ ๋ง๋ฌ -> ์ด๋ฆ ๋ฐ๊พธ๊ณ  -> ์ค๋ณต์ ์ ๊ฑฐํ๋ค.
 ๋ฉ์๋๋ฅผ ์ค์ด๊ณ  ์์๋ฅผ ๋ฐ๊พผ๋ค. ๋๋ก๋ ์ ์ฒด ๋ฉ์๋๋ฅผ ์ชผ๊ฐ๊ธฐ๋ ํ๋ค. ์ด์ ๋์ค์๋ ์ฝ๋๋ ํญ์ ๋จ์ ํ์คํธ๋ฅผ ํต๊ณผํ๋ค.

์ต์ข : ์ด ์ฅ์์ ๊ท์น์ ๋ฐ๋ฅด๋ ํจ์๋ฅผ ์ป๊ฒ ๋๋ค. ์ฒ์๋ถํฐ ์ง๋ด์ง ์๋๋ค. ๊ทธ๊ฒ ๊ฐ๋ฅํ ์ฌ๋์ ์์ผ๋ฆฌ๋ผ..(p.62)
```

## ๐ ๊ฒฐ๋ก 


๋ชจ๋  ์์คํ์ ํน์ง ์์ฉ ๋ถ์ผ ์์คํ์ ๊ธฐ์ ํ  ๋ชฉ์ ์ผ๋ก ํ๋ก๊ทธ๋๋จธ๊ฐ ์ค๊ณํ ๋๋ฉ์ธ ํนํ ์ธ์ด๋ก ๋ง๋ค์ด์ง๋ค.
ํจ์๋ ๊ทธ ์ธ์ด์์ `๋์ฌ`์ด๋ฉฐ, ํด๋์ค๋ `๋ช์ฌ`๋ค.

ํ๋ก๊ทธ๋๋จธ๋ ์์คํ์ ํ๋ก๊ทธ๋จ์ด ์๋ ์ด์ผ๊ธฐ๋ก ์ฌ๊ธด๋ค.
ํ๋ก๊ทธ๋๋ฐ ์ธ์ด๋ผ๋ ์๋จ์ ์ฌ์ฉํด ์ข ๋ ํ๋ถํ๊ณ  ์ข ๋ ํํ๋ ฅ์ด ๊ฐํ ์ธ์ด๋ฅผ ๋ง๋ค์ด ์ด์ผ๊ธฐ๋ฅผ ํ์ด๋๊ฐ๋ค.
์์คํ์ ๋ฐ์ํ๋ ๋ชจ๋  ๋์์ ์ค๋ชํ๋ ํจ์ ๊ณ์ธต์ด ๋ฐ๋ก ๊ทธ ์ธ์ด์ ์ํ๋ค.
์ฌ๊ท๋ผ๋ ๊ธฐ๊ต๋ก ๊ฐ ๋์์ ๋ฐ๋ก ๊ทธ ๋๋ฉ์ธ์ ํนํ๋ ์ธ์ด๋ฅผ ์ฌ์ฉํด ์์ ๋ง์ ์ด์ผ๊ธฐ๋ฅผ ํ์ด๋๊ฐ๋ค.

์ฌ๊ธฐ์์๋ ํจ์๋ฅผ ์ ๋ง๋๋ ๊ธฐ๊ต๋ฅผ ์๊ฐํ๋ค.
์ฌ๊ธฐ์ ์ค๋ชํ ๊ท์น์ ๋ฐ๋ฅธ๋ค๋ฉด ๊ธธ์ด๊ฐ ์งง๊ณ , ์ด๋ฆ์ด ์ข๊ณ , ์ฒด๊ณ๊ฐ ์กํ ํจ์๊ฐ ๋์ฌ ์ ์๋ค.
ํ์ง๋ง `์ง์ง ๋ชฉํ`๋ ํจ์๋ฅผ ์ ์ง๋ ๊ฒ์ด ์๋๋ผ `์์คํ์ ํ์ด๋๊ฐ๋ ๋ฐ ์๋ค๋ ์ฌ์ค์ ๋ช์ฌํ๊ธฐ ๋ฐ๋๋ค.`
์ฐ๋ฆฌ๊ฐ ์์ฑํ ํจ์๊ฐ ๋ถ๋ชํ๊ณ  ์ ํํ ์ธ์ด๋ก ๊น๋ํ๊ฒ ๊ฐ์ด ๋ง์ ๋จ์ด์ ธ์ผ ์ด์ผ๊ธฐ๋ฅผ ํ์ด๊ฐ๊ธฐ ์ฝ๋ค๋ ๊ฒ์ ๋ช์ฌํ๋ฉด ์ข๊ฒ ๋ค.









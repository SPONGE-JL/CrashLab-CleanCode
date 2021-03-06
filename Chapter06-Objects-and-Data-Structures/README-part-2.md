[Go to index](./#-chapter-06-objects-and-data-structures) / [Read in Wiki](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-06.-Objects-and-Data-Structures-Part.2)
---

2021.08.28 (SAT) 10:20-12:00 (100mins)  
๐ **Lead by. '[Jeongyeol](https://github.com/SPONGE-JL)'**

## Chapter 06. Objects and Data Structures - <u>Part.2</u>

# ๋๋ฏธํฐ ๋ฒ์น (Seg.1) - ์ดํดํ๊ธฐ

์์์ ๋ณด์๋ฏ, ๊ฐ์ฒด๋ ์๋ฃ๋ฅผ ์จ๊ธฐ๊ณ  ํจ์๋ฅผ ๊ณต๊ฐํ๋ค.  
**์ฆ, ์กฐํ ํจ์๋ก ๋ด๋ถ ๊ตฌ์กฐ๋ฅผ ๊ณต๊ฐํ๋ฉด ์ ๋๋ค๋ ์๋ฏธ์ด๋ค.**  
(์จ๊ธฐ์ง ์๊ณ  ๋ด๋ถ ๊ตฌ์กฐ๋ฅผ ๋ธ์ถํ๋ ์์ด ๋๊ธฐ ๋๋ฌธ)

```yaml
๋๋ฏธํฐ_๋ฒ์น: ๋ชจ๋์ ์์ ์ด ์กฐ์ํ๋ ๊ฐ์ฒด์ ์์ฌ์ ์ ๋ชฐ๋ผ์ผ ํ๋ค๋ ์ฃผ์ฅ
```

`๋๋ฏธํฐ ๋ฒ์น`์ ์ข๋ ์์ธํ ์ด์ผ๊ธฐํ๋ฉด,  
_"ํด๋์ค `C`์ ๋ฉ์๋ `f`๋ ๋ค์๊ณผ ๊ฐ์ ๊ฐ์ฒด์ ๋ฉ์๋๋ง ํธ์ถํด์ผํ๋ค"_๋ ์ฃผ์ฅ์ด๋ค.

- **ํด๋์ค `C`**
  - ํด๋์ค `C`์ ๋ค๋ฅธ ๋ฉ์๋ ํธ์ถ ๊ฐ๋ฅ
- **ํด๋์ค `C`์ ๋ฉ์๋ `f`๊ฐ ์์ฑ(ํด์ ๋ฐํ)ํ ๊ฐ์ฒด `O`**
  - ํจ์ ๋ด๋ถ์์ `O`์ ๋ฉ์๋ ํธ์ถ ๊ฐ๋ฅ
- **ํด๋์ค `C`์ ๋ฉ์๋ `f`๋ก ๋์ด์จ ๊ฐ์ฒด ์ธ์ `A`**
  - ํจ์ ๋ด๋ถ์์ `A`์ ๋ฉ์๋ ํธ์ถ ๊ฐ๋ฅ
- **ํด๋์ค `C`์ ์ธ์คํด์ค ๋ณ์์ ์ ์ฅ๋ ๊ฐ์ฒด `M`**
  - ์ธ์คํด์ค๋ฅผ ํตํด์ ๋ฉค๋ฒ๋ณ์ `M`์ ๋ฉ์๋ ํธ์ถ ๊ฐ๋ฅ

## ๋๋ฏธํฐ ๋ฒ์น์ ์ด๊ธฐ๋ ์์

### ํด๋์ค `C`์ ๋ฉ์๋ `f`๋ฅผ ์ธ๋ถ์์ ํธ์ถํ๋ ๊ฒฝ์ฐ

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

### class ๋ด๋ถ arrow function์ด ์๋ method๋ก ์ ์ธํด์, ์ธ๋ถ ํธ์ถ ์ ํ

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

### ์ฐธ๊ณ  : ๋ณ์๋ก ํ ๋นํ ํจ์๋ฅผ Object์ ๋ด๋ ๊ฒฝ์ฐ, ํจ์๋ ๋์..

  ```javascript
  const anonymous = { innerValue: "mutated value", extract };
  console.log(anonymous); // { extract: [Function: concatStr] }
  console.log(anonymous.innerValue); // mutated value
  console.log(anonymous.extract("anonymous"));
  // mutated value concat with 'anonymous'!!
  ```

---

# ๋๋ฏธํฐ ๋ฒ์น (Seg.2) - ํํ ์ค์์ ๊ฐ์ 

```java
String outputDir = ctxt.getOptions().getScratchDir().getAbsolutePath();
```

```java
Option opts = ctxt.getOptions();
File scratchDir = opts.getScratchDir();
String outputDir = scratchDir.getAbsolutePath();
```
> `ctxt` ๊ฐ์ฒด์ `getOptions()` ํจ์๋ฅผ ํธ์ถํ๋ฉด ๋ฐํ๋๋ ๊ฐ์ฒด.  
>  ๋ฐํ๋ ๊ฐ์ฒด์ `getScratchDir()` ํจ์๋ฅผ ํธ์ถํ๋ฉด ๋ฐํ๋๋ ๊ฐ์ฒด.  
> ๋ค์ ๋ฐํ๋ ๊ฐ์ฒด์ `getAbsolutePath()` ํจ์๋ฅผ ํธ์ถํ๋ฉด ๋ฐํ๋๋ ๊ฐ์ฒด.  
> ๊ทธ ๊ฐ์ฒด๋ฅผ `outputDir`์ ํ ๋น.
> 
> **๋๋์์ผ๋ฉด ํด๊ฒฐ๋  ๋ฌธ์ ์ธ๊ฐ?**

๊ณผ์ฐ ์ ์ฝ๋๋ ๋๋ฏธํฐ์ ๋ฒ์น์ ์๋ฐํ ๊น?

## ๊ธฐ์ฐจ ์ถฉ๋ (Train Wreck)

1. ์ฝ๋๋ฅผ ํตํด ์ฐ๋ฆฌ๋ ์๋๋ฅผ ์ ์ ์๋ค.
    - `ctxt`๋ `options`์ ํฌํจํ๊ณ  ์๋ค. (`getOptions()`)
    - `Option`์ `scratchDir`์ ํฌํจํ๊ณ  ์๋ค. (`getScratchDir()`)
    - `ScratchDir`์ `outputDir`์ ํฌํจํ๊ณ  ์๋ค. (`getAbsolutePath()`)

2. ๋ง์ฝ `ctxt`, `Options`, `ScratchDir`์ด..
    - **์๋ฃ๊ตฌ์กฐ**๋ผ๋ฉด, ๋ด๋ถ ์๋ฃ๊ตฌ์กฐ๋ฅผ ๋๋ฌ๋ด๋ฏ๋ก ๋๋ฏธํฐ ๋ฒ์น์ ์ ์ฉ๋ฐ์ง ์๋๋ค.
    - **๊ฐ์ฒด**๋ผ๋ฉด, <u>**๋ด๋ถ ์๋ฃ๊ตฌ์กฐ๋ฅผ ์จ๊ธฐ์ง ๋ชปํ๊ธฐ ๋๋ฌธ์, ํ์คํ๊ฒ** ๋๋ฏธํฐ ๋ฒ์น์ ์๋ฐํ๋ค.</u>

3. ์ ์ด๋ฐ ํผ๋์ด ์๊ฒผ์๊น? => <u>์กฐํ ํจ์(`getter`)๋ฅผ ์ฌ์ฉํ๋๋ฐ์ ๊ธฐ์ธํ๋ค.</u>
    - **์๋ฃ๊ตฌ์กฐ๊ฐ ๋ฌด์กฐ๊ฑด ํจ์ ์์ด ๊ณต๊ฐ ๋ณ์๋ง ํฌํจํ๋ค๋ฉด, ์คํด๋ ์์ด์ง ์ ์๋ค.**
      ```typescript
      const outputDir: string = ctxt.options.scratchDir.absolutePath;
      /*
        // ctxt ์๋ฃ๊ตฌ์กฐ
        {
          options: {
            scratchDir: {
              absolutePath: "outputDir"
            }
          }
        }
        
        // ๊ทธ๋ฌ๋, ๊ณผ์ฐ ์ด๊ฒ ์๋์ผ๊น?
       */
      ```

4. ํํธ, ํ๋ ์์ํฌ์ ํ์ค(ex. ๋น bean) ์ฐจ์์์,  
   ๋จ์ํ ์๋ฃ ๊ตฌ์กฐ์๋ <u>์กฐํ ํจ์์ ์ค์  ํจ์๋ฅผ ์ ์ํ๋ผ๊ณ  ์๊ตฌ</u>ํ๋ ๊ฒฝ์ฐ๋ ์กด์ฌํ๋ค.

    - Spring Framework์์ ์ต์ ๋ฒ ํจํด์ ์ ์ฉํ  ๋,  
      ์ด๋ฒคํธ ํ๋ก๊ทธ๋๋ฐ ํ์ํ ์ธํฐํ์ด์ค ๊ตฌํ์ฒด ๋ถ๋ถ๋ง์ ๊ฐ์ ธ์จ ๋ถ๋ถ

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

## ์ก์ข ๊ตฌ์กฐ

์ด๋ฐ ํผ๋์ผ๋ก ๋ง๋ฏธ์์ ๋๋๋ก **์ ๋ฐ์ ๊ฐ์ฒด, ์ ๋ฐ์ ์๋ฃ๊ตฌ์กฐ์ธ <u>์ก์ข ๊ตฌ์กฐ</u>** ๊ฐ ๋์จ๋ค.

- ์ค์ํ ๊ธฐ๋ฅ์ ์ํํ๋ ํจ์๋ ๊ฐ์ง๊ณ  ์๊ณ , ๊ณต๊ฐ ๋ณ์๋ ๊ณต๊ฐ ์กฐํ/์ค์  ํจ์๋ ์๋ค.
- ๊ณต๊ฐ ์กฐํ/์ค์  ํจ์๋ ๋น๊ณต๊ฐ ๋ณ์๋ฅผ ๊ทธ๋๋ก ๋ธ์ถํ๋ค.

์ด๋ฐ ์ก์ข ๊ตฌ์กฐ ๋ํ์ **๋ค๋ฅธ ํจ์๊ฐ ์ ์ฐจ์ ์ธ ํ๋ก๊ทธ๋๋ฐ์ ์๋ฃ๊ตฌ์กฐ ์ ๊ทผ๋ฐฉ์์ฒ๋ผ**  
**<u>๋น๊ณต๊ฐ ๋ณ์๋ฅผ ๊ณต๊ฐ</u>ํ๊ณ  ์ถ์ ์ ํน**์ ๋น ์ง๊ธฐ ์ญ์์ด๋ค. (`๊ธฐ๋ฅ ์์ฌ(Feature Envy)`)

- ์๋ก์ด ํจ์์ ์ถ๊ฐ๋ ์๋ก์ด ์๋ฃ๊ตฌ์กฐ ์ถ๊ฐ๋ฅผ ์ด๋ ต๊ฒ ๋ง๋ ๋ค.

ํ๋ก๊ทธ๋๋จธ๊ฐ ํจ์๋ ํ์์ ๋ณดํธํ ์ง ๊ณต๊ฐํ ์ง ํ์ ํ์ง ๋ชปํด์  
(ํน์ ๋ฌด์งํด์) ์ด์ค๊ฐํ๊ฒ ๋ด๋์ ์ค๊ณ์ ๋ถ๊ณผํ๋ค.

---

# ๊ทธ๋ ๋ค๋ฉด ์ด๋ฐ ์ฝ๋๋ฅผ ๊ตฌ์ฒด์ ์ผ๋ก ์ด๋ป๊ฒ ๊ณ ์ณ์ผ ํ ๊น?

## ๊ตฌ์กฐ์ฒด ๊ฐ์ถ๊ธฐ

๋ง์ฝ ์์ ๋ณธ `ctxt`, `options`, `scratchDir`์ด ์ง์ง ๊ฐ์ฒด๋ผ๋ฉด?  
**์ฒซ๋ฒ์งธ ์ฝ๋๋ธ๋ญ์ฒ๋ผ ์ค์ค์ด ์์ธ์ง๋ก ์ฎ์ด์๋ ์๋๋ค.**  
๊ฐ์ฒด๋ผ๋ฉด, ๋ด๋ถ ์๋ฃ๊ตฌ์กฐ๋ฅผ ๊ฐ์ถ๊ณ  ๊ธฐ๋ฅ์ ์ธ๋ถ์ ๊ณต๊ฐํด์ผ ํ๋๊น..

> ๊ทธ๋ ๋ค๋ฉด, ๋๋ ํ ๋ฆฌ ๊ฒฝ๋ก ์ ๋ณด๋ฅผ ์ด๋ป๊ฒ ์ป์ด์ผ ์ข์๊น?

1. `ctxt`๊ฐ Context(๋งฅ๋ฝ)์ ํฌํจํ๋ ๊ฐ์ฒด๋ผ๋ฉด **"๋ญ๊ฐ๋ฅผ ํ๋ผ"** ๊ณ  ๋งํด์ผํ๋ค.  
   ์์ ๋ค์ด์๋ ์๋ฃ ๊ตฌ์กฐ๋ฅผ ๋๋ฌ๋ด์๋ ์๋๋ค.

2. ์ฝ๋๋ ์ ๋๊ฒฝ๋ก๋ฅผ ๊ตฌํ๋ ค๊ณ  ํ๊ณ  ์๋๋ฐ, ์  ๊ฒฝ๋ก ์ ๋ณด๊ฐ ์ ํ์ํ ๊น?  
   
    ๋ฆฌํฉํ ๋ง์ ๊ฒฐ์ฌํ๊ณ  ์ด์ฌํ ์ฝ๋๋ฅผ ์ฝ์ด ๋ด๋ ค๊ฐ ๋์,  
    **ํด๋์ค ํ์ผ์ ์ฝ์ด์ ์์ ๋๋ ํฐ๋ฆฌ์ ์ ์ฅํ๋ ์ฝ๋๊ฐ ์๋ค๋ ์ฌ์ค์ ๋ฐ๊ฒฌํ๋ค.**  
   
    ```java
    String outFile = outputDir + "/" + className.replace('.', '/') + ".class";
    FileOutputStream fout = new FileOutputStream(outFile);
    BufferedOutputStream bos = new BufferedOutputStream(fout);
    ```

    `์ถ์ํ ์์ค์ด ๋ง๊ตฌ ๋ค์์ฌ ์๋ ์ด ์ํ๋ฅผ ๊ฐ์ ํด์ผ ํ๋ค.` (G34, G6 ์ฐธ์กฐ)
   
    - [ ] [G34]: **ํจ์ ๋ด ๋ชจ๋  ๋ฌธ์ฅ์ ์ถ์ํ ์์ค์ด ๋์ผ**ํด์ผ ํ๊ณ ,  
      **ํจ์ ์ด๋ฆ์ด ์๋ฏธํ๋ ์์๋ณด๋ค ํ ๋จ๊ณ๋ง ๋ฎ์์ผํ๋ค.**
    - [ ] [G6]: **์ถ์ํ๋ ์ ์ฐจ์ ์์ธ ๊ฐ๋์์ ๊ณ ์ฐจ์ ์ผ๋ฐ ๊ฐ๋์ ๋ถ๋ฆฌํ๋ ๊ฒ์ ๋งํ๋ค.**  
      ๋ชจ๋  ์ ์ฐจ์ ๊ฐ๋์ ํ์ ํด๋์ค์ ๋ฃ๊ณ , ๋ชจ๋  ๊ณ ์ฐจ์ ๊ฐ๋์ ๊ธฐ์ด ํด๋์ค์ ๋ฃ๋๋ค.  

3. ์์ ๋๋ ํฐ๋ฆฌ์ ์ ๋ ๊ฒฝ๋ก๋ฅผ ์ถ์ถ์ ์์ ํ์ผ ์์ฑ์ด ๋ชฉ์ ์์ ํ์ธํ๋ค.

    > `ctxt` ๊ฐ์ฒด์ ๋์ ํด๋์ค์ ์ด๋ฆ์ผ๋ก ์์ํ์ผ์ ์์ฑํ  ์ ์๋๋ก ํ๋ฉด ์ด๋จ๊น? 
    > <br>
    > โก๏ธ `ctxt` ๊ฐ์ฒด๊ฐ `createScratchFileStream` ์ด๋ฆ์ ๋ฉ์๋๋ฅผ ๊ณต๊ฐํ๋ฉด ์ด๋จ๊น?

4. ๋น๊ต

    ```java
    // ๊ธฐ์กด
    String outputDir = ctxt.getOptions().getScratchDir().getAbsolutePath();
    ```
    
    ```java
    // ์คํจ: ๋ฉ์๋ ์ฒด์ธ์ ๋ถ๋ฆฌํ์ง๋ง ์ฌ์ ํ ์๋ฃ๊ตฌ์กฐ์ ๊ฐ์์ ๊ตฌ๋ถ์ด ๋ชจํธํ ์ก์ข๊ตฌ์กฐ ์ํ
    String outFile = outputDir + "/" + className.replace('.', '/') + ".class";
    FileOutputStream fout = new FileOutputStream(outFile);
    BufferedOutputStream bos = new BufferedOutputStream(fout);
    // ...
    String outFile = outputDir + "/" + className.replace('.', '/') + ".class";
    FileOutputStream fout = new FileOutputStream(outFile);
    BufferedOutputStream bos = new BufferedOutputStream(fout);
    ```
    
    ```java
    // ์ฑ๊ณต: ๊ตฌํ์ ๊ฐ์ถ ์ปจํ์คํธ ๊ฐ์ฒด๋ก
    BufferedOutputStream bos = ctxt.createScratchFileStream(className);
    ```
    
    - `ctxt` <u>๊ฐ์ฒด์๊ฒ ๋งก๊ธฐ๊ธฐ ์ ๋นํ ์๋ฌด๊ฐ ๋ถ์ฌ</u>๋์๋ค.
    - `ctxt` ๊ฐ์ฒด๋ ๋ด๋ถ ๊ตฌ์กฐ๋ฅผ ๋๋ฌ๋ด์ง ์๋๋ค.
    - `ctxt` ๊ฐ์ฒด๋ฅผ ๋ค๋ฃจ๋ ๋ชจ๋์์ ์์ ์ด ๋ชฐ๋ผ๋ ๋๋ ์ฌ๋ฌ ๊ฐ์ฒด๋ฅผ ํ์ํ  ํ์๊ฐ ์๋ค.

5. **๋ฐ๋ผ์ ๊ฐ์ ๋ ์ฝ๋๋ ๋๋ฏธํฐ ๋ฒ์น์ ์๋ฐํ์ง ์๋๋ค.**

## ๊ทธ ์ธ ๋๋ฏธํฐ ๋ฒ์น์ ์ด์ฉํ ์์ 

- Javascript - [๋ฉ์๋ ์ฒด์ธ ์์](./#basic-method-chain-example)
  
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

- [Promise ๊ธฐ๋ฐ ๋น๋๊ธฐ ํต์  Axios ์ฒด์ธ ์์](https://axios-http.com/docs/example)

- [Java - Builder Pattern](https://github.com/dev-chloe/Simple-CRUD/blob/back/app/src/test/java/com/toyproject/simplecrudapp/domains/entity/UserTest.java#L23-L28)

---

# ๋๋ฏธํฐ ๋ฒ์น (Seg.3) - ์ฌ๋ก ํ์ธ

## ์๋ฃ ์ ๋ฌ ๊ฐ์ฒด (DTO)

> ์๋ฃ ๊ตฌ์กฐ์ฒด์ ์ ํ์ ์ธ ํํ๋ก, ๊ณต๊ฐ ๋ณ์๋ง ์๊ณ  ํจ์๊ฐ ์๋ ํด๋์ค๋ฅผ ์๋ฏธํ๋ค.  
> ์ด๋ฐ ์๋ฃ ๊ตฌ์กฐ์ฒด๋ฅผ ๋๋ก๋ **DTO(Data Transfer Object)** ๋ก๋ ๋ถ๋ฅด๋๋ฐ, ๊ต์ฅํ ์ ์ํ๋ค.  
> ์ผ๋ฐ์ ์ผ๋ก ๋ฐ์ดํฐ๋ฒ ์ด์ค์ ํต์ ํ๊ฑฐ๋ ์์ผ์์ ๋ฐ์ ๋ฉ์์ง ๊ตฌ๋ฌธ์ ๋ถ์ํ๋ ๋ฑ์์ ์ ํจํ๋ค.

์ผ๋ฐ์ ์ธ ์์ ๋ Java์ ๋น(Bean) ๊ตฌ์กฐ์ด๋ค. ๋น๊ณต๊ฐ(private) ๋ฉค๋ฒ ๋ณ์๋ฅผ ์กฐํ/์ค์  ํจ์๋ก ์กฐ์ํ๋ค.  
**์ผ์ข์ ์ฌ์ด๋น ์บก์ํ๋ก, ์ผ๋ถ ๊ฐ์ฒด ์งํฅํ ์์์ฃผ์์์ ๊ธฐ์ค์ ๋ง์กฑ์ํฌ ๋ฟ, ํน๋ณํ ์ด์ต์ ์ ๊ณตํ์ง ์๋๋ค.**

- [DTO Java Bean ์์ ](https://github.com/dev-chloe/Simple-CRUD/blob/main/app/src/main/java/com/toyproject/simplecrudapp/domains/req/UserReqDto.java) + [์ ์ฉ](https://github.com/dev-chloe/Simple-CRUD/blob/main/app/src/main/java/com/toyproject/simplecrudapp/interfaces/UserController.java)

- [DTO Javascript ์์ ](./dto-js-sample/Account.mjs) + [์คํ](./dto-js-sample/index.js)

## ํ์ฑ ๋ ์ฝ๋

> ํ์ฑ ๋ ์ฝ๋๋ DTO์ ํน์ํ ํํ๋ก, ๊ณต๊ฐ ๋ณ์๊ฐ ์๊ฑฐ๋  
> ๋น๊ณต๊ฐ ๋ณ์์ ์กฐํ/์ค์  ํจ์๊ฐ ์๋ ์๋ฃ๊ตฌ์กฐ์ง๋ง,  
> ๋๊ฐ save๋ find์ ๊ฐ์ ํ์ ํจ์๋ ์ ๊ณตํ๋ค.

<u>์ฆ, ํ์ฑ ๋ ์ฝ๋๋ ๋ฐ์ดํฐ๋ฒ ์ด์ค ํ์ด๋ธ์ด๋ **๋ค๋ฅธ ์์ค์์** ์๋ฃ๋ฅผ ์ง์  ๋ณํํ ๊ฒฐ๊ณผ์ด๋ค.</u>

**๋ถํํ๋** ํ์ฑ ๋ ์ฝ๋์ ๋น์ง๋์ค ๊ท์น ๋ฉ์๋๋ฅผ ์ถ๊ฐํด์  
์ด๋ฐ ์๋ฃ ๊ตฌ์กฐ๋ฅผ ๊ฐ์ฒด๋ก๋ก ์ทจ๊ธํ๋ ๊ฐ๋ฐ์๊ฐ ํํ๋ค. **ํ์ง๋ง ์ด๋ ๋ฐ๋์งํ์ง ์๋ค.**  
๊ทธ๋ฌ๋ฉด ์๋ฃ ๊ตฌ์กฐ๋ ์๋๊ณ , ๊ฐ์ฒด๋ ์๋, **์ก์ข๊ตฌ์กฐ๊ฐ ๋์ค๊ธฐ ๋๋ฌธ์ด๋ค.**

### ์ด๋ป๊ฒ ํด๊ฒฐํ ๊น?

๊ฐ๋จํ๋ค. **ํ์ฑ ๋ ์ฝ๋๋ ์๋ฃ ๊ตฌ์กฐ๋ก ์ทจ๊ธํ๋ค.**  
๋น์ง๋์ค ๊ท์น์ ๋ด์ผ๋ฉด์ ๋ด๋ถ ์๋ฃ๋ฅผ ์จ๊ธฐ๋ ๊ฐ์ฒด๋ ๋ฐ๋ก ์์ฑํ๋ค.  
(์ฌ๊ธฐ์ ๋ด๋ถ ์๋ฃ๋ ํ์ฑ ๋ ์ฝ๋์ ์ธ์คํด์ค์ผ ๊ฐ๋ฅ์ฑ์ด ๋๋ค.)

- [ํ์ฑ ๋ ์ฝ๋๋ก์์ ๋ฐ์ดํฐ๋ฒ ์ด์ค ํ์ด๋ธ์ ํํํ Entity ์์ ](https://github.com/dev-chloe/Simple-CRUD/blob/main/app/src/main/java/com/toyproject/simplecrudapp/domains/User.java)
- [๋ฐ์ดํฐ๋ฒ ์ด์ค์ ์ ๊ทผํ๋ ํ์/๋ณ๊ฒฝ ํจ์๊ฐ ์ ์ฉ๋ Repository ์์ ](https://github.com/dev-chloe/Simple-CRUD/blob/main/app/src/main/java/com/toyproject/simplecrudapp/domains/UserRepository.java)

---

# ๊ฒฐ๋ก 

1. ๊ฐ์ฒด๋ ๋์(API)๋ฅผ ๊ณต๊ฐ(public)ํ๊ณ  ์๋ฃ๋ฅผ ์จ๊ธด๋ค(private).
    - ๊ธฐ์กด ๋์์ ๋ณ๊ฒฝํ์ง ์์ผ๋ฉด์ ์ ๊ฐ์ฒด ํ์์ ์ถ๊ฐํ๊ธฐ ์ฝ๋ค.
    - ๊ธฐ์กด ๊ฐ์ฒด์ ์ ๋์์ ์ถ๊ฐํ๊ธฐ๋ ์ด๋ ต๋ค.

2. ์๋ฃ ๊ตฌ์กฐ๋ ๋ณ๋ค๋ฅธ ๋์ ์์ด ์๋ฃ๋ฅผ ๋ธ์ถํ๋ค.
    - ๊ธฐ์กด ์๋ฃ ๊ตฌ์กฐ์ ์ ๋์์ ์ถ๊ฐํ๊ธฐ ์ฝ๋ค.
    - ๊ธฐ์กด ํจ์์ ์๋ก์ด ๊ตฌ์กฐ๋ฅผ ์ถ๊ฐํ๊ธฐ๋ ์ด๋ ต๋ค.

3. ์์คํ์ ๊ตฌํํ  ๋,
    - ์๋ก์ด ์๋ฃ ํ์์ ์ถ๊ฐํ๋ ์ ์ฐ์ฑ์ด ํ์ํ๋ค๋ฉด, **๊ฐ์ฒด** ๊ฐ ์ ํฉํ๋ค.
    - ์๋ก์ด ๋์์ ์ถ๊ฐํ๋ ์ ์ฐ์ฑ์ด ํ์ํ๋ฉด, **์๋ฃ ๊ตฌ์กฐ์ ์ ์ฐจ์ ์ธ ์ฝ๋** ๊ฐ ์ ํฉํ๋ค.

4. ์ฐ์ํ ์ํํธ์จ์ด ๊ฐ๋ฐ์๋ ํธ๊ฒฌ์์ด ์ด ์ฌ์ค์ ์ดํดํ๊ณ ,  
    **์ง๋ฉดํ ๋ฌธ์ ์ ์ต์ ์ธ ํด๊ฒฐ์ฑ์ ์ ํ**ํ๋ค.

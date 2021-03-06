[Go to index](./#-chapter-06-objects-and-data-structures) / [Read in Wiki](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-06.-Objects-and-Data-Structures-Part.1)

---

2021.08.21 (SAT) 10:20-12:00 (100mins)  
๐ **Lead by. '[Jeongyeol](https://github.com/SPONGE-JL)'**

# Chapter 06. Objects and Data Structures - <u>Part.1</u>

### ์๋ฌธ๋ฌธ์ผ๋ก ์์ํ๊ธฐ

> ์ ๋ณ์๋ ๋น๊ณต๊ฐ(`private`)๋ก ์ ์ํ ๊น?  
> -> **๋ณ์์ ์์กดํ์ง ์๊ฒ ๋ง๋ค๊ณ  ์ถ์ด์**

> ์ ์กฐํ(`get`) ํจ์์ ์ค์ (`set`) ํจ์๋ฅผ   
> <u>**๋น์ฐํ๊ฒ** ๊ณต๊ฐ(`public`)๋ก ๋น๊ณต๊ฐ ๋ณ์(`private variable`)๋ฅผ ์ธ๋ถ์ ๋ธ์ถํ ๊น?</u>

---

# ์๋ฃ ์ถ์ํ

## 1. ์๋ฃ ๊ตฌ์กฐ์ ์ ์ฅ๋ ์ ๋ณด๋ง์ผ๋ก <u>์ฌ์ฉ๋ฐฉ๋ฒ์ ์ ์ ์๋ค.</u> ๐ค

โฌ๏ธ `Block 6-1`: **๊ตฌ์ฒด์ ์ธ User ํด๋์ค**
  
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

> ์ ํด๋์ค๋ ์ฌ์ฉ์ ์ ๋ณด๋ฅผ ๋ชํํ ํํํ๊ณ  ์๋ค.

โฌ๏ธ `Block 6-2`: **์ถ์์ ์ธ User ํด๋์ค**
  
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

> ์ธํฐํ์ด์ค๋ ์๋ฃ ๊ตฌ์กฐ๋ฅผ ํํํ๋ ๊ฒ **์ด์์ผ๋ก** ์๋ฃ ๊ตฌ์กฐ๋ฅผ ์ ๊ทผํ๋ ์ ์ฑ๊น์ง ๊ฐ์ ํ๋ค.

- **์๊ฐ์ ์ค๋ฅ ์ง๊ณ  ๋์ด๊ฐ๊ธฐ**: `์ขํญ`์ด ๋ง์กฑ๋๋ค๊ณ  `์ฐํญ`์ ๋ง์กฑํ์ง ์๋๋ค.
  - `ํด๋์ค์ ๋ณ์ ์ฌ์ด์ ํจ์๋ผ๋ ๊ณ์ธต์ ๋ฃ๋๋ค` /= `๊ตฌํ์ด ๊ฐ์ถฐ์ง๋ค`
  -  `Getter/Setter๋ก ๋ณ์๋ฅผ ๋ค๋ฃฌ๋ค` /= `์๋ฃ๊ตฌ์กฐ๋ฅผ ํํํ๋ ํด๋์ค`
    
      ```javascript
      // User ํด๋์ค๋ก ์์ฑ๋ ์ธ์คํด์ค์ public id ๋ณ์๋ฅผ ๋ฐ๋ก ์ ๊ทผ
      const idFromUserAsDataStructrue = user.id;
      // User ํด๋์ค๋ก ์์ฑ๋ ์ธ์คํด์ค์ public getId() ํจ์๋ฅผ ํตํด ๋ณ์๋ฅผ ์ ๊ทผ
      const idFromUserAsObject = user.getId();
      // return id; => ๋ด๋ถ ์๋ฃ๋ฅผ ๊ทธ๋๋ก ๋ธ์ถํ๋ ๊ฒฝ์ฐ, ๊ตฌํ์ด ๊ฐ์ถฐ์ ธ ์๋ค๊ณ  ๋ณด๊ธฐ ์ด๋ ต๋ค.
      ```
      
      ```typescript
      // in Typescript
      class Execution {
        private a: number;
        private b: number;

        constructor(a: number, b: number) {
          this.a = a;
          this.b = b;
        }

        public plus() {
          return this.a + this.b;
        }
      }

      const exec = new Execution(1, 2);
      // exec.a; // error TS2341: Property 'a' is private
      const result = exec.plus();
      console.log(result); // 3
      ```

- **์ง์ ํ ์๋ฏธ์ ํด๋์ค(Class)**
  - **์ถ์ ์ธํฐํ์ด์ค๋ฅผ ์ ๊ณต**
  - ์ฌ์ฉ์๊ฐ ์ค์  ๊ตฌํ ๋ด์ฉ์ ๋ชฐ๋ผ๋, ์๋ฃ์ ํต์ฌ์ ์กฐ์ํ  ์ ์๋ค

## 2. ์ถ์ํ๋์ด ์ ๊ณต๋ ๊ธฐ๋ฅ์ด <u>์ ๋ณด์ ์ถ์ฒ๋ฅผ ๋๋ฌ๋ด์ง ์๋๋ค.</u> ๐ค

โฌ๏ธ `Block 6-3`: **๊ตฌ์ฒด์ ์ธ Salary ํด๋์ค**

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

> ๋ ํจ์๊ฐ ๋ณ์๊ฐ์ ์ฝ์ด ๋ฐํํ  ๋ฟ์ด๋ผ๋ ์ฌ์ค์ด ๊ฑฐ์ ํ์คํ๋ค
> - `getTotalPayments()`: ์ ์ฒด ์ง๊ธ์ก์ด๋ผ๋ ๊ตฌ์ฒด์ ์ธ ์ซ์๋ฅผ ์ ๊ณตํ๋๋ก ๋ช์
> - `getInsentives()`: ์ธ์ผํฐ๋ธ ๋น์จ์ด๋ผ๋ ๊ตฌ์ฒด์ ์ธ ์ซ์ ์ ๊ณตํ๋๋ก ๋ช์


โฌ๏ธ `Block 6-4`: **์ถ์์ ์ธ Salary ํด๋์ค**

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

> ํด๋น ์ ๋ณด๊ฐ ์ด๋์ ์ค๋์ง ์ ํ ๋๋ฌ๋์ง ์๋๋ก ์ถ์ํ ๋์ด์๋ค.

### ๐ ๊ฐ๋ฐ์๋!!!

- ๊ฐ์ฒด๊ฐ <u>ํฌํจํ๋ **์๋ฃ๋ฅผ ํํ**ํ  ๊ฐ์ฅ ์ข์ ๋ฐฉ๋ฒ</u>์ ๐ฅ<u>**์ฌ๊ฐํ๊ฒ ๊ณ ๋ฏผํด์ผ ํ๋ค.**</u>๐ฅ

- ์๋ฌด ์๊ฐ ์์ด Getter/Setter๋ฅผ ์ถ๊ฐํ๋ ๋ฐฉ๋ฒ์ด ๊ฐ์ฅ ๋์๋ค.

---

# ์๋ฃ/๊ฐ์ฒด ๋น๋์นญ

> **๊ฐ์ฒด**๋ ์ถ์ํ ๋ค๋ก **์๋ฃ๋ฅผ ์จ๊ธด ์ฑ**, ์๋ฃ๋ฅผ ๋ค๋ฃจ๋ ํจ์๋ง ๊ณต๊ฐํ๋ค.  
> ์๋ฃ๊ตฌ์กฐ๋ ์๋ฃ ๊ทธ๋๋ก๋ฅผ ๊ณต๊ฐํ๋ฉฐ, ๋ณ๋ค๋ฅธ ํจ์๋ฅผ ์ ๊ณตํ์ง ์๋๋ค.
> > _์ 2๊ฐ์ง ์๋๋ ๋ณธ์ง์ ์ผ๋ก ์๋ฐ๋๋ค. (์ฌ์ค ์  ๋ฐ๋์ ์๋ฏธ๋ฅผ ๊ฐ์ง๋ค.)_

โฌ๏ธ `Block 6-5`: **์ ์ฐจ์ ์ธ ๋ํ ํด๋์ค**  
(์ฐธ๊ณ ) Javascript๋ ๋ถ๋์์์ ์ ํฌํจํ๋ ์ซ์ ๊ณ์ฐ์ด ์ทจ์ฝํ๋ฏ๋ก ์์ ๋ก ๊ตฌ์ฑํ์ง ์์

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

- ํด๋์ค๋ฅผ ํตํด ์ ๋ณด๋ฅผ ๋ด์ ์ธ์คํด์ค๋ฅผ `area(Object shape)` ํจ์์ ์ง์ด๋ฃ์ด์ ํธ์ถํ๋ฉด ๋ฉด์ ์ด ๊ตฌํด์ง๋ค.  
  _๊ฐ์ฒด ์งํฅ ํ๋ก๊ทธ๋๋จธ๊ฐ ์ ์ฝ๋๋ฅผ ๋ณธ๋ค๋ฉด ์ฝ์์ ์น ์ง๋ ๋ชจ๋ฅด์ง๋ง, ์ ์ฐจ์ ์ด๋ผ์ ๋นํํ๋ค๋ฉด ๋ง๋ ๋ง์ด๋ค._
- ๋ํ์ ๋๋ ๋ฅผ ๊ตฌํ๋ `perimeter(Object shape)` ํจ์๋ฅผ ์ถ๊ฐ๋ก ๊ตฌํํ๋ค๋ฉด?  
  **๋๋๊ฒ๋** `Geometry` ํด๋์ค์ ์์กดํ๋ ๋ค๋ฅธ ๋ํ ํด๋์ค๋ค์ ๋ณํ ์์ด ์ถ๊ฐํ  ์ ์๋ค.
- ๋ฐ๋๋ก ์๋ก์ด ๋ํ์ ์ถ๊ฐํ๋ค๋ฉด? ์๋ฅผ ๋ค์ด `Pentagon`(์ ์ค๊ฐํ)์ ์ถ๊ฐํ๋ค๋ฉด?  
  **๋น์ฐํ๊ฒ๋** `Geometry` ํด๋์ค์ ์ํ ๋ชจ๋  ํจ์๋ฅผ ๊ณ ์ณ์ผํ๋ค.

<br>

โฌ๏ธ `Block 6-6`: **๋คํ์ ์ธ ๋ํ ํด๋์ค**  
(์ฐธ๊ณ ) Javascript๋ ๋ถ๋์์์ ์ ํฌํจํ๋ ์ซ์ ๊ณ์ฐ์ด ์ทจ์ฝํ๋ฏ๋ก ์์ ๋ก ๊ตฌ์ฑํ์ง ์์

```java
// in Java
public interface Shape {
  double area();
}

public class Square implements Shape {
  private Point topLeft;
  private double side;
  
  public double area() {
    return side * side;
  }
}

public class Rectangle implements Shape {
  private Point topLeft;
  private double height;
  private double width;
  
  public double area() {
    return height * width;
  }
}

public class Circle implements Shape {
  private final double PI = 3.141592653589793;
  private Point center;
  private double radius;
  
  public double area() {
    return PI * radius * radius;
  }
}
```

_์ด์ฏค์์ ๋ค์ ํ๋ฒ ์ฝ์ด๋ณด์._  

> <u>**๊ฐ์ฒด**๋ ์ถ์ํ ๋ค๋ก **์๋ฃ๋ฅผ ์จ๊ธด ์ฑ**, ์๋ฃ๋ฅผ ๋ค๋ฃจ๋ **ํจ์๋ง ๊ณต๊ฐ**ํ๋ค.</u>  
> - [SOLID ์์น ์ค ์ธํฐํ์ด์ค ๋ถ๋ฆฌ ์์น(Interface Segregation Principle)](https://blog.siner.io/2020/06/18/solid-principles/), ([์๋ฌธ](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898))
> - [Encapsulation(์บก์ํ, ์๋์ฑ)](https://www.tutorialspoint.com/java/java_encapsulation.htm)

> <u>์๋ฃ๊ตฌ์กฐ๋ ์๋ฃ ๊ทธ๋๋ก๋ฅผ ๊ณต๊ฐํ๋ฉฐ, **๋ค๋ฅธ ํจ์๋ฅผ ์ ๊ณตํ์ง ์๋๋ค.**</u>

_์ด๋ ํ๊ฐ? ๋ ์กฐ๊ฑด์ ์์ ํ ๋ฐ๋๋๋ค๋ ์ฌ์ค์ ์ดํดํ  ์ ์๊ฒ ๋๊ฐ?_

## ์ ๋ฆฌํ์๋ฉด

1. `Block 6-5`์ ์ ์ฐจ์ ์ธ ๋ฐฉ๋ฒ๊ณผ   
   `Block 6-6`์ ๋คํ์ ์ธ ๋ฐฉ๋ฒ์  
   ์ํธ๋ณด์์ ์ธ ํน์ง์ด ์๋ค. (์ฌ์ค ๋ฐ๋๋ค!!)

2. ๊ฐ์ฒด์ ์๋ฃ๊ตฌ์กฐ๋ ๊ทผ๋ณธ์ ์ผ๋ก ์๋ถ๋๋ค. (์๋ ๋ช์ ๋ ์ฐธ์ด๋ค)

    1. **์๋ฃ ๊ตฌ์กฐ๋ฅผ ์ฌ์ฉํ๋ <u>์ ์ฐจ์ ์ธ ์ฝ๋</u>**  
        - ๊ธฐ์กด ์๋ฃ ๊ตฌ์กฐ๋ฅผ ๋ณ๊ฒฝํ์ง ์์ผ๋ฉด์ **์ ํจ์๋ฅผ ์ถ๊ฐํ๊ธฐ ์ฝ๋ค.**  
          โก๏ธ ๊ธฐ๋ฅ ๊ตฌํ์ ์ํ ํ์ฅ
        - ์๋ก์ด ์๋ฃ ๊ตฌ์กฐ๋ฅผ ์ถ๊ฐํ๊ธฐ ์ด๋ ต๋ค.  
          โก๏ธ ์๋ก์ด ์๋ฃ๊ตฌ์กฐ์ ๋ํ ์ถ๊ฐ ๊ธฐ๋ฅ ๊ตฌํ์ด ํ์

    2. **<u>๊ฐ์ฒด ์งํฅ ์ฝ๋</u>**  
        - ๊ธฐ์กด ํจ์๋ฅผ ๋ณ๊ฒฝํ์ง ์์ผ๋ฉด์ **์ ํด๋์ค๋ฅผ ์ถ๊ฐํ๊ธฐ ์ฝ๋ค.**  
          โก๏ธ ๋คํ์ฑ์ ํตํ ํ์ฅ
        - ์๋ก์ด ํจ์๋ฅผ ์ถ๊ฐํ๊ธฐ ์ด๋ ต๋ค.  
          โก๏ธ ๋คํ์ฑ์ ๋ํ ๊ฐ์ ํ๋ก ๋ชจ๋  ํด๋์ค์ ๋ํ ์์ ์ด ํ์

> ๋ธ๋ จํ ํ๋ก๊ทธ๋๋จธ๋ค์  
> <u>๊ฐ์ฒด ์งํฅ ํ๋ก๊ทธ๋จ์์ ๋ฐ๋์ "๋ชจ๋  ๊ฒ์ด ๊ฐ์ฒด๋ค"๋ผ๋ ๋ง์  `๋ฏธ์ `</u>์ด๋ผ๋ ๊ฒ์ ์ ์๋ค.

---

[Go to Part 2](./README-part-2.md) / [Read in Wiki](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-06.-Objects-and-Data-Structures-Part.2)

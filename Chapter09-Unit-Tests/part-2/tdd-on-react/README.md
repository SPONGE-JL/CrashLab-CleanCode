# [TTD on Front-end (React.js)](https://github.com/SPONGE-JL/CrashLab-CleanCode/wiki/Chapter-09.-Unit-Tests-Part.2-TDD-on-Front-end-(React.js))

## Purpose

2021년 말 현재, 세계적으로 Front-end 영역에서 가장 많이 사용되는 언어는 단연코 자바스크립트이며,
**SPA**(Single Page Architecture) 혹은 **SSR**(Server Side Rendering)에서 채택 가능한 렌더링 엔진으로
**`React.js`** 가 가장 많이 사용되고 있습니다.

React.js는 기본적으로 Node.js 환경에서 동작하는 엔진 라이브러리이기 때문에, Node.js에서 널리 사용되는 테스트 도구를 사용하면 보다 쉽게 TDD를 적용할 수 있습니다.
다양한 테스트 도구들 중에서도 **`Jest.js`** 를 이용해서 React환경에서의 TDD 실습을 진행합니다.
(Jest.js는 Next.js, Nuxt.js, Angular 등의 대표 프레임워크에서 널리 적용된 표준 테스트 라이브러리입니다.)

<p align="center">
  <a target="_blank" href="https://reactjs.org/">
    <img alt="React Icon" height="200" src="https://reactjs.org/logo-og.png">
  </a>
  &nbsp;
  <a target="_blank" href="https://jestjs.io/">
    <img alt="Jest Icon" height="200" src="https://jestjs.io/img/opengraph.png">
  </a>
</p>

## Project Dependencies

### Typescript Complier: `tsconfig.json`

- To use absolute pakage path in import sytanx, [set 'baseUrl'.](./tsconfig.json#L3)

#### Prettier Hooking

```bash
yarn add --dev husky lint-staged prettier
```

- `.prettierrc.js`: [basic prettier policy](./.prettierrc.js)
- `package.json`: [add husky hook for uing prettier](./package.json#L5-#L14)

#### CSS & Test

```bash
yarn add styled-components
yarn add --dev @types/styled-components jest-styled-components
```

## TDD on React.js

### React 소스코드에 대한 테스트 대상

1. React DOM

2. React Components
   1. Tag Tree (Container)
   2. Style (CSS)
   3. Props & State

3. Other Functions
   1. Inner-Service Logic: Function Call
   2. Outer-Service Logic: API Call

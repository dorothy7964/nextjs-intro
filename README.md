This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<br/><br/>

<hr>

## Pages 특징

`파일명 = URL`

- next.js가 파일의 이름을 가져다가 url의 이름으로 사용한다.

  - 컴포넌트명은 중요하지 않다.
  - 컴포넌트를 `export default function` 을 해주어야 한다.
    ```jsx
    // pages/about.tsx -> URL의 이름은 파일명이 된다.

    const Potato: React.FC = () => {
      // 컴포넌트명은 파일명과 달라도 된다.
      return (
        <div>
          <h1>About</h1>
          <p>This is an awesome food store.</p>
        </div>
      );
    };

    export default Potato; // export default를 꼭 해줘야 한다.
    ```
  - `pages/index` 는 예외이다.
    ```jsx
    // pages/index.tsx

    export default function Home() {
      return "hi";
    }
    ```
    - http://localhost:3000/index.tsx → 페이지가 나오지 않는다.
    - http://localhost:3000/ → 기본

- 라우터를 별도 설정해주지 않아도 된다.

  - router를 만들고 routes를 설계하고 component를 import하지 않아도 된다.
  - router를 render하는 모든 것을 프레임크인 next.js가 처리한다.

- 404를 만들어 준다.
  - React에서는 직접 만들어줘야 한다.

<br/><br/>

## NextJS 기능

- **Pre Rendering**

  - 앱에 있는 페이지들이 미리 렌더링 된다.

- **hydration**
  ```jsx
  // pages/index.tsx

  import { useState } from "react";

  export default function Home() {
    const [counter, setCounter] = useState(0);

    return (
      <div>
        <h1>Hello {counter}</h1>
        <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      </div>
    );
  }
  ```
  - next.js는 초기 상태로 pre-rendering을 한다.
  - counter 초기값 0이 HTML에 나온다.
  - react.js가 (클라이언트로)전송됐을 때 react.js 앱이 된다.
  - react.js를 프론트엔드 안에서 실행하는 걸 hydration이라고 부른다.
  **동작**
  - next.js는 react.js를 백엔드에서 동작시켜서 컴포넌트를 render시키고
  - 렌더링이 끝났을 때 HTML이 되고 next.js는 그 HTML을 페이지의 소스코드에 넣어준다.
  - 그리고 react.js가 로딩 되었을 때, 기본적으로 이미 존재하 것들과 연결되어 상호작용한다.
    - 유저는 자바스크립트와 react.js가 로딩되지 않더라도 콘텐츠를 볼 수 있다.
    - 유저가 웹사이트에 가면 초기 상태의 컴포넌트로 된 미리 생성된 HTML페이지를 보게 되고 상호작용이 일어나면 react.js는 그걸 받아서 작동하게 된다.
    - SEO에 좋음, 구글 검색 엔진에게도 유저에게 좋음.

<br/><br/>

## Routing

**NextJS에서 anchor 태그를 네비게이팅하는 데에 사용하면 안 되는 이유**

- 앱 내에서 페이지를 네비게이트할 때 사용해야만 하는 특정 컴포넌트가 존재하기 때문
- ReactJS에서 React Router Link를 사용해야만 할 때와 이유가 같다.
- [[Next 문서] Invalid <Link> with <a> child](https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor)
- a 태그를 클릭하게 되면 전 어플리케이션이 새로고침된다.
  - 클라이언트 사이드 네비게이션이 없다는 의미 = 브라우저가 다른 페이지로 보내기 위해 전체 페이지를 새로고침한다는 의미이다.
- Link(링크)를 사용하자.
  - 페이지 간 클라이언트 측 경로 전환을 활성화하고 single-page app 경험을 제공하려면 Link컴포넌트가 필요하다.
  - NextJS 어플리케이션의 클라이언트 사이드 네이게이션을 제공해준다.
  - 새로고침 없이 실행된다.

**Link 태그 안에 a태그 없이 그냥 텍스트만 넣어도 잘 작동하는 이유**

- 버전 13 부터 변경 됨 [[문서 보러 가기](https://nextjs.org/docs/pages/building-your-application/upgrading/version-13)]

<br/><br/>

## CSS Modules

- `className=”nav”` → 모듈이기 때문에 동작하지 않음
- 자바스크립트 오브젝트에서의 프로퍼티 형식으로 적어야 한다.

- NavBar_nav\_\_무작위 텍스트
  - 충돌을 만들지 않는다.
  - 이 모듈 내에 다른 클래스 이름이 존재하더라도 충돌이 나지 않는다.

```css
// components/NavBar.module.css

.link {
  text-decoration: none;
}
.active {
  color: tomato;
}
```

```jsx
// components/NavBar.tsx

import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={`${styles.link} ${
          router.pathname === "/" ? styles.active : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={[
          styles.link,
          router.pathname === "/about" ? styles.active : ""
        ].join(" ")}
      >
        About
      </Link>
    </nav>
  );
}
```

<br/><br/>

## Styles JSX

- styled jsx는 NextJS 고유의 방법
- style태그 (HTML 태그) 사용
- 컴포넌트마다 독릭접적으로 사용 가능
- 컴포넌트 내부 한정 범위이다.

<br/><br/>

## App Component

`pages/_app.tsx`

```jsx
import NavBar from "@/components/NavBar";
import { AppProps } from "next/app";
import "@/app/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />

      <style jsx global>{`
        a {
          text-decoration: none;
          color: white;
        }
      `}</style>
    </>
  );
}
```

- 모든 페이지를 렌더링할 수 있게 한다.
- 기본 프레임워크 내에 포함되어 있다.
- 커스터마이즈할 때 공통 컴포넌트를 사용할 때 사용한다.
- 파일명은 \_app 이어야 한다.

**동작**

- NextJS는 About이 렌더링 되기 전에 먼저 App을 본다.
- NextJS가 index를 렌더링하기 전에 \_app를 먼저 확인하고 index의 내용물을 렌더링한다.

`app/globals.css`

- NextJS로 앱을 만들 때 global css파일을 import 할 수 없다.
- 페이지나 컴포넌트 내에 css를 import 하고 싶다면, module 이어야 한다.
- \_app 에서는 Global Styles를 import 할 수 있다.

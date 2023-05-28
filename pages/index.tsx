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

/**
 * hydration
 *  : pre-render된 페이지에 react의 반응성을 입히는 것
 *
 *  next.js는 react.js를 백엔드에서 동작시켜서 컴포넌트를 render시키고
 *  렌더링이 끝났을 때 HTML이 되고 next.js는 그 HTML을 페이지의 소스코드에 넣어준다.
 *  그리고 react.js가 로딩 되었을 때, 기본적으로 이미 존재하는 것들과 연결되어 상호작용한다.
 *
 *  유저는 자바스크립트와 react.js가 로딩되지 않더라도 콘텐츠를 볼 수 있다.
 *  유저가 웹사이트에 가면 초기 상태의 컴포넌트로 된 미리 생성된 HTML페이지를 보게 되고 상호작용이 일어나면 react.js는 그걸 받아서 작동하게 된다.
 *
 *  SEO에 좋음, 구글 검색 엔진에게도 유저에게 좋음.
 */

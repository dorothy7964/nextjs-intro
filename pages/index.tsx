/**
 * URL의 이름은 파일명이 된다.
 * index 는 예외이다.
 *  - http://localhost:3000/ - 기본
 *  - http://localhost:3000/index.tsx - X
 *
 * - 컴포넌트명은 중요하지 않다.
 * - 컴포넌트를 `export default function` 을 해주어야 한다.
 *
 * 라우터를 별도 설정해주지 않아도 된다.
 * - router를 만들고 routes를 설계하고 component를 import하지 않아도 된다.
 * - router를 render하는 모든 것을 프레임크인 next.js가 처리한다.
 *
 * 404 페이지를 자동으로 만들어 준다.
 *  - React에서는 직접 만들어줘야 한다.
 * */
export default function Home() {
  return "hi";
}

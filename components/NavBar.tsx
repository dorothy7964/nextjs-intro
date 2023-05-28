import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link
        href="/"
        style={{ color: router.pathname === "/" ? "orange" : "gray" }}
      >
        Home
      </Link>
      <Link
        href="/about"
        style={{ color: router.pathname === "/about" ? "orange" : "gray" }}
      >
        About
      </Link>
    </nav>
  );
}
/*
  NextJS에서 anchor 태그를 네비게이팅하는 데에 사용하면 안 되는 이유
    - 앱 내에서 페이지를 네비게이트할 때 사용해야만 하는 특정 컴포넌트가 존재하기 때문
    - ReactJS에서 React Router Link를 사용해야만 할 때와 이유가 같다.
    - [[Next 문서] Invalid <Link> with <a> child](https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor)
    - a 태그를 클릭하게 되면 전체 어플리케이션이 새로고침된다.
      - 클라이언트 사이드 네비게이션이 없다는 의미 = 브라우저가 다른 페이지로 보내기 위해 전체 페이지를 새로고침한다는 의미이다.
    - Link(링크)를 사용하자.
      - 페이지 간 클라이언트 측 경로 전환을 활성화하고 single-page app 경험을 제공하려면 Link컴포넌트가 필요하다.
      - NextJS 어플리케이션의 클라이언트 사이드 네이게이션을 제공해준다.
      - 새로고침 없이 실행된다.


  Link 태그 안에 a태그 없이 그냥 텍스트만 넣어도 잘 작동하는 이유
    - 버전 13 부터 변경 됨 
    - https://nextjs.org/docs/pages/building-your-application/upgrading/version-13
*/

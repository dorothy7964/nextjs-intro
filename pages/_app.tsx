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

/* 
  _app
    : 모든 페이지를 렌더링할 수 있게 한다.
    : 기본 프레임워크 내에 포함되어 있다.
    : 커스터마이즈할 때 공통 컴포넌트를 사용할 때 사용한다.
    : 파일명은 _app 이어야 한다.

  [동작]
    - NextJS는 About이 렌더링 되기 전에 먼저 App을 본다.
    - NextJS가 index를 렌더링하기 전에 _app를 먼저 확인하고 index의 내용물을 렌더링한다.
*/

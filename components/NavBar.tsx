import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <span className={router.pathname === "/" ? "active" : ""}>Home</span>
      </Link>
      <Link href="/about">
        <span className={router.pathname === "/about" ? "active" : ""}>
          About
        </span>
      </Link>

      <style jsx>{`
        nav {
          background-color: tomato;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}

/* 
  - styled jsx는 NextJS 고유의 방법
  - <style>태그 (HTML 태그) 사용
  - 컴포넌트마다 독릭접적으로 사용 가능
  - 컴포넌트 내부 한정 범위이다.
*/

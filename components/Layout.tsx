import { useRouter } from "next/router";
import NavBar from "./NavBar";
import Seo from "./Seo";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Seo />
      <NavBar />
      <div>{children}</div>
      <footer>하단</footer>
    </>
  );
}

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

import "@/app/globals.css";
import Layout from "@/components/Layout";
import RoutePath from "@/components/RoutePath";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

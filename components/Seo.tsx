import Head from "next/head";
import RoutePath from "./RoutePath";

export default function Seo() {
  return (
    <Head>
      <title>{RoutePath()} | Next Movies</title>
    </Head>
  );
}

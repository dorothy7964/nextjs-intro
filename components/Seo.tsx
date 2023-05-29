import Head from "next/head";
import RoutePath from "./RoutePath";

export default function Seo() {
  const fullTitle = `${RoutePath()} | Next Movies`;

  return (
    <Head>
      <title>{fullTitle}</title>
    </Head>
  );
}

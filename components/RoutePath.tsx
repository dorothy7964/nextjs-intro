import { useRouter } from "next/router";

type RoutePathPros = {
  [key: string]: string;
};

const page: RoutePathPros = {
  "/": "Home",
  "/about": "About"
};

export default function RoutePath() {
  const router = useRouter();
  const selectRoute = page[router.pathname];

  return selectRoute;
}

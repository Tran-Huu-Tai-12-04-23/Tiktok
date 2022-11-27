import { HeaderOnly } from "~/components";
import { Home, Following, Search, Profile } from "~/pages";
const publicRoutes = [
  { path: "/", page: Home },
  { path: "/following", page: Following },
  { path: "/Search", page: Search, layout: null },
  { path: "/profile", page: Profile, layout: HeaderOnly },
];
//private
export default publicRoutes;

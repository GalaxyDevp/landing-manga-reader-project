import { createBrowserRouter } from "react-router";
import Home from "../page/home";
import SignIn from "../page/auth/signIn";
import Register from "../page/auth/register";
import Layout from "../components/layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/sign-in",
        Component: SignIn,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;

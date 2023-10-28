import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Details } from "./pages/Details/Details";
import { NavBar } from "./components/Navbar/Navbar";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "details/:id",
      element: <>
      <NavBar/>
      <Details/>
      </>
   },
  ]);